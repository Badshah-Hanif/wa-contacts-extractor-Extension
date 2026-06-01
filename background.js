// Listen for messages from popup or content script
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === 'downloadCSV') {
    const csvContent = message.data;
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    
    chrome.downloads.download({
      url: url,
      filename: message.filename || 'whatsapp_contacts.csv',
      saveAs: true
    });
    
    sendResponse({ success: true });
  }
  
  if (message.action === 'downloadExcel') {
    // Downloads using data URI directly generated from content script structure
    chrome.downloads.download({
      url: message.data,
      filename: message.filename || 'whatsapp_contacts.xls',
      saveAs: true
    });
    sendResponse({ success: true });
  }
  
  return true;
});