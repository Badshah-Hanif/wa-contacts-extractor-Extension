// State
let whatsappConnected = false;
let extractionInProgress = false;

// DOM refs
const waStatusEl = document.getElementById('waStatus');
const btnExtract = document.getElementById('btnExtract');
const btnRefresh = document.getElementById('btnRefresh');
const logContainer = document.getElementById('logContainer');
const formatSelect = document.getElementById('formatSelect');
const chkAllGroups = document.getElementById('chkAllGroups');
const chkCurrentGroup = document.getElementById('chkCurrentGroup');
const chkLabels = document.getElementById('chkLabels');
const chkBusinessInfo = document.getElementById('chkBusinessInfo');

// Logging
function addLog(message, type = 'info') {
  const entry = document.createElement('div');
  entry.className = `log-entry ${type}`;
  const ts = new Date().toLocaleTimeString();
  entry.textContent = `[${ts}] ${message}`;
  logContainer.appendChild(entry);
  logContainer.scrollTop = logContainer.scrollHeight;
}

function clearLogs() {
  logContainer.innerHTML = '';
}

// Check if we're on WhatsApp Web
async function checkWhatsAppStatus() {
  try {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    if (!tab || !tab.url) {
      whatsappConnected = false;
      waStatusEl.textContent = '● No active tab detected';
      waStatusEl.className = 'value disconnected';
      btnExtract.disabled = true;
      return;
    }

    if (tab.url.includes('web.whatsapp.com')) {
      whatsappConnected = true;
      waStatusEl.textContent = '● WhatsApp Web Connected';
      waStatusEl.className = 'value connected';
      btnExtract.disabled = false;
    } else {
      whatsappConnected = false;
      waStatusEl.textContent = '● Disconnected — open web.whatsapp.com';
      waStatusEl.className = 'value disconnected';
      btnExtract.disabled = true;
    }
  } catch (e) {
    console.error(e);
  }
}

async function injectContentScript(tabId) {
  try {
    await chrome.scripting.executeScript({
      target: { tabId: tabId },
      files: ['content.js']
    });
    return true;
  } catch (err) {
    console.error('Script injection failed: ', err);
    return false;
  }
}

async function startExtraction() {
  if (extractionInProgress) return;
  
  clearLogs();
  extractionInProgress = true;
  btnExtract.disabled = true;
  btnExtract.textContent = '⏳ Processing...';
  
  addLog('🔍 Initializing extraction engine...', 'info');
  
  try {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    if (!tab) {
      throw new Error('No active window tab found.');
    }

    await injectContentScript(tab.id);
    
    const options = {
      format: formatSelect.value,
      allGroups: chkAllGroups ? chkAllGroups.checked : true,
      currentGroup: chkCurrentGroup ? chkCurrentGroup.checked : true,
      includeLabels: chkLabels ? chkLabels.checked : true,
      includeBusiness: chkBusinessInfo ? chkBusinessInfo.checked : true
    };

    chrome.tabs.sendMessage(tab.id, { action: 'extract', options: options }, (response) => {
      extractionInProgress = false;
      btnExtract.disabled = false;
      btnExtract.textContent = '🔍 Extract';
      
      if (chrome.runtime.lastError) {
        addLog(`❌ Communication error: ${chrome.runtime.lastError.message}`, 'error');
        return;
      }
      
      if (response && response.success) {
        addLog(`✅ Parsed ${response.count} contacts successfully!`, 'success');
        
        // Dispatch to background for file delivery
        const actionType = response.format === 'excel' ? 'downloadExcel' : 'downloadCSV';
        
        chrome.runtime.sendMessage({
          action: actionType,
          data: response.data,
          filename: response.filename
        }, (bgResponse) => {
          if (bgResponse && bgResponse.success) {
            addLog(`💾 Saved: ${response.filename}`, 'success');
          } else {
            addLog('❌ Failed downloading file content', 'error');
          }
        });

      } else if (response && response.error) {
        addLog(`❌ Error: ${response.error}`, 'error');
      } else {
        addLog('❌ Unknown logic failure occurred', 'error');
      }
    });
    
  } catch (e) {
    extractionInProgress = false;
    btnExtract.disabled = false;
    btnExtract.textContent = '🔍 Extract';
    addLog(`❌ Run error: ${e.message}`, 'error');
  }
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
  checkWhatsAppStatus();
  btnExtract.addEventListener('click', startExtraction);
  btnRefresh.addEventListener('click', async () => {
    clearLogs();
    addLog('🔄 Refreshing tab alignment...', 'info');
    await checkWhatsAppStatus();
  });
});