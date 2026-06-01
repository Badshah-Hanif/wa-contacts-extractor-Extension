(function() {
  'use strict';
  
  if (window.__waContactsExtractorInjected) return;
  window.__waContactsExtractorInjected = true;
  
  // ============================================================
  // COUNTRY DATA
  // ============================================================
  const COUNTRY_MAP = [
    { prefix: '1242', code: 'BS', name: 'Bahamas' },
    { prefix: '1246', code: 'BB', name: 'Barbados' },
    { prefix: '1264', code: 'AI', name: 'Anguilla' },
    { prefix: '1268', code: 'AG', name: 'Antigua and Barbuda' },
    { prefix: '1284', code: 'VG', name: 'British Virgin Islands' },
    { prefix: '1340', code: 'VI', name: 'U.S. Virgin Islands' },
    { prefix: '1345', code: 'KY', name: 'Cayman Islands' },
    { prefix: '1441', code: 'BM', name: 'Bermuda' },
    { prefix: '1473', code: 'GD', name: 'Grenada' },
    { prefix: '1649', code: 'TC', name: 'Turks and Caicos Islands' },
    { prefix: '1664', code: 'MS', name: 'Montserrat' },
    { prefix: '1670', code: 'MP', name: 'Northern Mariana Islands' },
    { prefix: '1671', code: 'GU', name: 'Guam' },
    { prefix: '1684', code: 'AS', name: 'American Samoa' },
    { prefix: '1758', code: 'LC', name: 'Saint Lucia' },
    { prefix: '1767', code: 'DM', name: 'Dominica' },
    { prefix: '1784', code: 'VC', name: 'Saint Vincent and the Grenadines' },
    { prefix: '1787', code: 'PR', name: 'Puerto Rico' },
    { prefix: '1809', code: 'DO', name: 'Dominican Republic' },
    { prefix: '1829', code: 'DO', name: 'Dominican Republic' },
    { prefix: '1849', code: 'DO', name: 'Dominican Republic' },
    { prefix: '1868', code: 'TT', name: 'Trinidad and Tobago' },
    { prefix: '1869', code: 'KN', name: 'Saint Kitts and Nevis' },
    { prefix: '1876', code: 'JM', name: 'Jamaica' },
    { prefix: '1939', code: 'PR', name: 'Puerto Rico' },
    { prefix: '1', code: 'US', name: 'United States/Canada' },
    { prefix: '20', code: 'EG', name: 'Egypt' },
    { prefix: '211', code: 'SS', name: 'South Sudan' },
    { prefix: '212', code: 'MA', name: 'Morocco' },
    { prefix: '213', code: 'DZ', name: 'Algeria' },
    { prefix: '216', code: 'TN', name: 'Tunisia' },
    { prefix: '218', code: 'LY', name: 'Libya' },
    { prefix: '220', code: 'GM', name: 'Gambia' },
    { prefix: '221', code: 'SN', name: 'Senegal' },
    { prefix: '222', code: 'MR', name: 'Mauritania' },
    { prefix: '223', code: 'ML', name: 'Mali' },
    { prefix: '224', code: 'GN', name: 'Guinea' },
    { prefix: '225', code: 'CI', name: "Côte d'Ivoire" },
    { prefix: '226', code: 'BF', name: 'Burkina Faso' },
    { prefix: '227', code: 'NE', name: 'Niger' },
    { prefix: '228', code: 'TG', name: 'Togo' },
    { prefix: '229', code: 'BJ', name: 'Benin' },
    { prefix: '230', code: 'MU', name: 'Mauritius' },
    { prefix: '231', code: 'LR', name: 'Liberia' },
    { prefix: '232', code: 'SL', name: 'Sierra Leone' },
    { prefix: '233', code: 'GH', name: 'Ghana' },
    { prefix: '234', code: 'NG', name: 'Nigeria' },
    { prefix: '235', code: 'TD', name: 'Chad' },
    { prefix: '236', code: 'CF', name: 'Central African Republic' },
    { prefix: '237', code: 'CM', name: 'Cameroon' },
    { prefix: '238', code: 'CV', name: 'Cape Verde' },
    { prefix: '239', code: 'ST', name: 'São Tomé and Príncipe' },
    { prefix: '240', code: 'GQ', name: 'Equatorial Guinea' },
    { prefix: '241', code: 'GA', name: 'Gabon' },
    { prefix: '242', code: 'CG', name: 'Republic of the Congo' },
    { prefix: '243', code: 'CD', name: 'Democratic Republic of the Congo' },
    { prefix: '244', code: 'AO', name: 'Angola' },
    { prefix: '245', code: 'GW', name: 'Guinea-Bissau' },
    { prefix: '246', code: 'IO', name: 'British Indian Ocean Territory' },
    { prefix: '248', code: 'SC', name: 'Seychelles' },
    { prefix: '249', code: 'SD', name: 'Sudan' },
    { prefix: '250', code: 'RW', name: 'Rwanda' },
    { prefix: '251', code: 'ET', name: 'Ethiopia' },
    { prefix: '252', code: 'SO', name: 'Somalia' },
    { prefix: '253', code: 'DJ', name: 'Djibouti' },
    { prefix: '254', code: 'KE', name: 'Kenya' },
    { prefix: '255', code: 'TZ', name: 'Tanzania' },
    { prefix: '256', code: 'UG', name: 'Uganda' },
    { prefix: '257', code: 'BI', name: 'Burundi' },
    { prefix: '258', code: 'MZ', name: 'Mozambique' },
    { prefix: '260', code: 'ZM', name: 'Zambia' },
    { prefix: '261', code: 'MG', name: 'Madagascar' },
    { prefix: '262', code: 'RE', name: 'Réunion' },
    { prefix: '263', code: 'ZW', name: 'Zimbabwe' },
    { prefix: '264', code: 'NA', name: 'Namibia' },
    { prefix: '265', code: 'MW', name: 'Malawi' },
    { prefix: '266', code: 'LS', name: 'Lesotho' },
    { prefix: '267', code: 'BW', name: 'Botswana' },
    { prefix: '268', code: 'SZ', name: 'Eswatini' },
    { prefix: '269', code: 'KM', name: 'Comoros' },
    { prefix: '27', code: 'ZA', name: 'South Africa' },
    { prefix: '290', code: 'SH', name: 'Saint Helena' },
    { prefix: '291', code: 'ER', name: 'Eritrea' },
    { prefix: '297', code: 'AW', name: 'Aruba' },
    { prefix: '298', code: 'FO', name: 'Faroe Islands' },
    { prefix: '299', code: 'GL', name: 'Greenland' },
    { prefix: '30', code: 'GR', name: 'Greece' },
    { prefix: '31', code: 'NL', name: 'Netherlands' },
    { prefix: '32', code: 'BE', name: 'Belgium' },
    { prefix: '33', code: 'FR', name: 'France' },
    { prefix: '34', code: 'ES', name: 'Spain' },
    { prefix: '350', code: 'GI', name: 'Gibraltar' },
    { prefix: '351', code: 'PT', name: 'Portugal' },
    { prefix: '352', code: 'LU', name: 'Luxembourg' },
    { prefix: '353', code: 'IE', name: 'Ireland' },
    { prefix: '354', code: 'IS', name: 'Iceland' },
    { prefix: '355', code: 'AL', name: 'Albania' },
    { prefix: '356', code: 'MT', name: 'Malta' },
    { prefix: '357', code: 'CY', name: 'Cyprus' },
    { prefix: '358', code: 'FI', name: 'Finland' },
    { prefix: '359', code: 'BG', name: 'Bulgaria' },
    { prefix: '36', code: 'HU', name: 'Hungary' },
    { prefix: '370', code: 'LT', name: 'Lithuania' },
    { prefix: '371', code: 'LV', name: 'Latvia' },
    { prefix: '372', code: 'EE', name: 'Estonia' },
    { prefix: '373', code: 'MD', name: 'Moldova' },
    { prefix: '374', code: 'AM', name: 'Armenia' },
    { prefix: '375', code: 'BY', name: 'Belarus' },
    { prefix: '376', code: 'AD', name: 'Andorra' },
    { prefix: '377', code: 'MC', name: 'Monaco' },
    { prefix: '378', code: 'SM', name: 'San Marino' },
    { prefix: '379', code: 'VA', name: 'Vatican City' },
    { prefix: '380', code: 'UA', name: 'Ukraine' },
    { prefix: '381', code: 'RS', name: 'Serbia' },
    { prefix: '382', code: 'ME', name: 'Montenegro' },
    { prefix: '385', code: 'HR', name: 'Croatia' },
    { prefix: '386', code: 'SI', name: 'Slovenia' },
    { prefix: '387', code: 'BA', name: 'Bosnia and Herzegovina' },
    { prefix: '389', code: 'MK', name: 'North Macedonia' },
    { prefix: '39', code: 'IT', name: 'Italy' },
    { prefix: '40', code: 'RO', name: 'Romania' },
    { prefix: '41', code: 'CH', name: 'Switzerland' },
    { prefix: '420', code: 'CZ', name: 'Czech Republic' },
    { prefix: '421', code: 'SK', name: 'Slovakia' },
    { prefix: '423', code: 'LI', name: 'Liechtenstein' },
    { prefix: '43', code: 'AT', name: 'Austria' },
    { prefix: '44', code: 'GB', name: 'United Kingdom' },
    { prefix: '45', code: 'DK', name: 'Denmark' },
    { prefix: '46', code: 'SE', name: 'Sweden' },
    { prefix: '47', code: 'NO', name: 'Norway' },
    { prefix: '48', code: 'PL', name: 'Poland' },
    { prefix: '49', code: 'DE', name: 'Germany' },
    { prefix: '500', code: 'FK', name: 'Falkland Islands' },
    { prefix: '501', code: 'BZ', name: 'Belize' },
    { prefix: '502', code: 'GT', name: 'Guatemala' },
    { prefix: '503', code: 'SV', name: 'El Salvador' },
    { prefix: '504', code: 'HN', name: 'Honduras' },
    { prefix: '505', code: 'NI', name: 'Nicaragua' },
    { prefix: '506', code: 'CR', name: 'Costa Rica' },
    { prefix: '507', code: 'PA', name: 'Panama' },
    { prefix: '508', code: 'PM', name: 'Saint Pierre and Miquelon' },
    { prefix: '509', code: 'HT', name: 'Haiti' },
    { prefix: '51', code: 'PE', name: 'Peru' },
    { prefix: '52', code: 'MX', name: 'Mexico' },
    { prefix: '53', code: 'CU', name: 'Cuba' },
    { prefix: '54', code: 'AR', name: 'Argentina' },
    { prefix: '55', code: 'BR', name: 'Brazil' },
    { prefix: '56', code: 'CL', name: 'Chile' },
    { prefix: '57', code: 'CO', name: 'Colombia' },
    { prefix: '58', code: 'VE', name: 'Venezuela' },
    { prefix: '590', code: 'GP', name: 'Guadeloupe' },
    { prefix: '591', code: 'BO', name: 'Bolivia' },
    { prefix: '592', code: 'GY', name: 'Guyana' },
    { prefix: '593', code: 'EC', name: 'Ecuador' },
    { prefix: '595', code: 'PY', name: 'Paraguay' },
    { prefix: '596', code: 'MQ', name: 'Martinique' },
    { prefix: '597', code: 'SR', name: 'Suriname' },
    { prefix: '598', code: 'UY', name: 'Uruguay' },
    { prefix: '599', code: 'BQ', name: 'Caribbean Netherlands' },
    { prefix: '60', code: 'MY', name: 'Malaysia' },
    { prefix: '61', code: 'AU', name: 'Australia' },
    { prefix: '62', code: 'ID', name: 'Indonesia' },
    { prefix: '63', code: 'PH', name: 'Philippines' },
    { prefix: '64', code: 'NZ', name: 'New Zealand' },
    { prefix: '65', code: 'SG', name: 'Singapore' },
    { prefix: '66', code: 'TH', name: 'Thailand' },
    { prefix: '670', code: 'TL', name: 'Timor-Leste' },
    { prefix: '672', code: 'NF', name: 'Norfolk Island' },
    { prefix: '673', code: 'BN', name: 'Brunei' },
    { prefix: '674', code: 'NR', name: 'Nauru' },
    { prefix: '675', code: 'PG', name: 'Papua New Guinea' },
    { prefix: '676', code: 'TO', name: 'Tonga' },
    { prefix: '677', code: 'SB', name: 'Solomon Islands' },
    { prefix: '678', code: 'VU', name: 'Vanuatu' },
    { prefix: '679', code: 'FJ', name: 'Fiji' },
    { prefix: '680', code: 'PW', name: 'Palau' },
    { prefix: '681', code: 'WF', name: 'Wallis and Futuna' },
    { prefix: '682', code: 'CK', name: 'Cook Islands' },
    { prefix: '683', code: 'NU', name: 'Niue' },
    { prefix: '685', code: 'WS', name: 'Samoa' },
    { prefix: '686', code: 'KI', name: 'Kiribati' },
    { prefix: '687', code: 'NC', name: 'New Caledonia' },
    { prefix: '688', code: 'TV', name: 'Tuvalu' },
    { prefix: '689', code: 'PF', name: 'French Polynesia' },
    { prefix: '690', code: 'TK', name: 'Tokelau' },
    { prefix: '691', code: 'FM', name: 'Micronesia' },
    { prefix: '692', code: 'MH', name: 'Marshall Islands' },
    { prefix: '7', code: 'RU', name: 'Russia/Kazakhstan' },
    { prefix: '81', code: 'JP', name: 'Japan' },
    { prefix: '82', code: 'KR', name: 'South Korea' },
    { prefix: '84', code: 'VN', name: 'Vietnam' },
    { prefix: '86', code: 'CN', name: 'China' },
    { prefix: '880', code: 'BD', name: 'Bangladesh' },
    { prefix: '886', code: 'TW', name: 'Taiwan' },
    { prefix: '90', code: 'TR', name: 'Turkey' },
    { prefix: '91', code: 'IN', name: 'India' },
    { prefix: '92', code: 'PK', name: 'Pakistan' },
    { prefix: '93', code: 'AF', name: 'Afghanistan' },
    { prefix: '94', code: 'LK', name: 'Sri Lanka' },
    { prefix: '95', code: 'MM', name: 'Myanmar' },
    { prefix: '960', code: 'MV', name: 'Maldives' },
    { prefix: '961', code: 'LB', name: 'Lebanon' },
    { prefix: '962', code: 'JO', name: 'Jordan' },
    { prefix: '963', code: 'SY', name: 'Syria' },
    { prefix: '964', code: 'IQ', name: 'Iraq' },
    { prefix: '965', code: 'KW', name: 'Kuwait' },
    { prefix: '966', code: 'SA', name: 'Saudi Arabia' },
    { prefix: '967', code: 'YE', name: 'Yemen' },
    { prefix: '968', code: 'OM', name: 'Oman' },
    { prefix: '970', code: 'PS', name: 'Palestine' },
    { prefix: '971', code: 'AE', name: 'United Arab Emirates' },
    { prefix: '972', code: 'IL', name: 'Israel' },
    { prefix: '973', code: 'BH', name: 'Bahrain' },
    { prefix: '974', code: 'QA', name: 'Qatar' },
    { prefix: '975', code: 'BT', name: 'Bhutan' },
    { prefix: '976', code: 'MN', name: 'Mongolia' },
    { prefix: '977', code: 'NP', name: 'Nepal' },
    { prefix: '98', code: 'IR', name: 'Iran' },
    { prefix: '992', code: 'TJ', name: 'Tajikistan' },
    { prefix: '993', code: 'TM', name: 'Turkmenistan' },
    { prefix: '994', code: 'AZ', name: 'Azerbaijan' },
    { prefix: '995', code: 'GE', name: 'Georgia' },
    { prefix: '996', code: 'KG', name: 'Kyrgyzstan' },
    { prefix: '998', code: 'UZ', name: 'Uzbekistan' }
  ].sort((a, b) => b.prefix.length - a.prefix.length);

  function getCountryInfo(phoneNumber) {
    if (!phoneNumber) return { code: '', name: '' };
    const cleaned = phoneNumber.replace(/[^0-9]/g, '');
    if (cleaned.length === 0) return { code: '', name: '' };
    for (const entry of COUNTRY_MAP) {
      if (cleaned.startsWith(entry.prefix)) {
        return { code: entry.code, name: entry.name };
      }
    }
    return { code: '', name: '' };
  }

  function getCountryCodeDigit(phone) {
    if (!phone) return '';
    const cleaned = phone.replace(/[^0-9]/g, '');
    for (const entry of COUNTRY_MAP) {
      if (cleaned.startsWith(entry.prefix)) {
        return '+' + entry.prefix;
      }
    }
    return '';
  }

  function formatPhoneNumber(phone) {
    if (!phone) return '';
    const cleaned = phone.replace(/[^0-9]/g, '');
    if (cleaned.length === 0) return '';
    return '+' + cleaned;
  }

  // ============================================================
  // INDEXEDDB EXTRACTION (FIXED)
  // ============================================================
  async function extractFromIndexedDB(options) {
    console.log('[WA Extractor] Attempting IndexedDB extraction...');
    
    try {
      const dbs = await indexedDB.databases();
      const targetDB = dbs.find(db => db.name && (
        db.name === 'model-storage' || 
        db.name.startsWith('whatsapp') ||
        db.name.includes('WA') ||
        db.name.includes('wa')
      ));
      
      if (!targetDB) {
        console.log('[WA Extractor] No WhatsApp IndexedDB found');
        return null;
      }
      
      const dbName = targetDB.name;
      const db = await new Promise((resolve, reject) => {
        const request = indexedDB.open(dbName);
        request.onsuccess = () => resolve(request.result);
        request.onerror = () => reject(request.error);
        request.onupgradeneeded = () => resolve(request.result);
      });
      
      const storeNames = Array.from(db.objectStoreNames);
      console.log('[WA Extractor] Available stores:', storeNames);
      
      const contactStoreName = storeNames.find(s => {
        const lower = s.toLowerCase();
        return (lower.includes('contact') || lower === 'contact') && !lower.includes('group');
      });
      const groupMetadataStoreName = storeNames.find(s => {
        const lower = s.toLowerCase();
        return lower.includes('group') && (lower.includes('metadata') || lower === 'group-metadata' || lower === 'groupmetadata');
      });
      const participantStoreName = storeNames.find(s => {
        const lower = s.toLowerCase();
        return lower === 'participant' || lower === 'participants' || lower.includes('participant');
      });
      const chatStoreName = storeNames.find(s => {
        const lower = s.toLowerCase();
        return (lower === 'chat' || lower.includes('chat')) && !lower.includes('group');
      });
      const labelStoreName = storeNames.find(s => {
        const lower = s.toLowerCase();
        return lower === 'label' || lower === 'labels' || lower.includes('label');
      });
      
      async function getAllFromStore(storeName) {
        if (!storeName) return [];
        return new Promise((resolve, reject) => {
          try {
            const tx = db.transaction(storeName, 'readonly');
            const store = tx.objectStore(storeName);
            const request = store.getAll();
            request.onsuccess = () => resolve(request.result || []);
            request.onerror = () => resolve([]);
          } catch(e) { resolve([]); }
        });
      }
      
      const groupMetadataRecords = await getAllFromStore(groupMetadataStoreName);
      const participantRecords = await getAllFromStore(participantStoreName);
      const allContacts = await getAllFromStore(contactStoreName);
      const allChats = await getAllFromStore(chatStoreName);
      const allLabels = await getAllFromStore(labelStoreName);
      
      console.log(`[WA Extractor] Loaded: ${groupMetadataRecords.length} groups, ${participantRecords.length} participants, ${allContacts.length} contacts, ${allChats.length} chats`);
      
      // Build contact lookup by phone
      const contactByPhone = new Map();
      for (const c of allContacts) {
        const id = c.id || c.__x_id || '';
        if (!id) continue;
        const phone = id.split('@')[0].replace(/[^0-9]/g, '');
        if (phone) contactByPhone.set(phone, c);
      }
      
      // Build label map
      const labelNameById = new Map();
      for (const lbl of allLabels) {
        const id = lbl.id || lbl.__x_id || '';
        const name = lbl.name || lbl.__x_name || lbl.labelName || '';
        if (id) labelNameById.set(id, name);
      }
      
      // Build group name map (groupId -> groupName)
      const groupNameById = new Map();
      
      for (const g of groupMetadataRecords) {
        const gid = g.id || g.__x_id || g.groupId || g.__x_groupId || '';
        const name = g.name || g.subject || g.__x_name || g.__x_subject || '';
        if (gid && name) {
          groupNameById.set(gid, name);
          const gidNum = gid.split('@')[0];
          if (gidNum) groupNameById.set(gidNum, name);
        }
      }
      
      for (const g of allChats) {
        if (!(g.isGroup || g.__x_isGroup || (g.id && g.id.includes('@g.us')))) continue;
        const gid = g.id || g.__x_id || '';
        const name = g.name || g.subject || g.__x_name || g.__x_subject || '';
        if (gid && name) {
          groupNameById.set(gid, name);
          const gidNum = gid.split('@')[0];
          if (gidNum) groupNameById.set(gidNum, name);
        }
      }
      
      console.log(`[WA Extractor] Loaded ${groupNameById.size} group names`);
      console.log('[WA Extractor] Group names:', Array.from(groupNameById.values()));
      
      // Build phone -> { groupNames, isAdmin }
      const phoneData = new Map();
      
      function ensurePhoneEntry(phone) {
        if (!phone) return null;
        if (!phoneData.has(phone)) {
          phoneData.set(phone, { groupNames: new Set(), isAdmin: false });
        }
        return phoneData.get(phone);
      }
      
      function extractPhoneFromId(idVal) {
        if (!idVal) return '';
        if (typeof idVal === 'string') {
          return idVal.split('@')[0].replace(/[^0-9]/g, '');
        }
        return '';
      }
      
      // Process group metadata records (PRIMARY source)
      for (const group of groupMetadataRecords) {
        const gid = group.id || group.__x_id || group.groupId || group.__x_groupId || '';
        const groupName = groupNameById.get(gid) || group.name || group.subject || group.__x_name || group.__x_subject || 'Unknown Group';
        
        if (!groupName || groupName === 'Unknown Group') continue;
        
        let participants = [];
        if (Array.isArray(group.participants)) participants = group.participants;
        else if (Array.isArray(group.__x_participants)) participants = group.__x_participants;
        else if (group.groupMetadata && Array.isArray(group.groupMetadata.participants)) participants = group.groupMetadata.participants;
        else if (group.groupMetadata && Array.isArray(group.groupMetadata.__x_participants)) participants = group.groupMetadata.__x_participants;
        
        console.log(`[WA Extractor] Group "${groupName}" has ${participants.length} members`);
        
        for (const p of participants) {
          let phone = '';
          let isAdmin = false;
          
          if (typeof p === 'string') {
            phone = extractPhoneFromId(p);
          } else if (typeof p === 'object' && p !== null) {
            const pid = p.id || p.__x_id || p.jid || p.__x_jid || p.userId || p.__x_userId || p.user || p.__x_user || '';
            phone = extractPhoneFromId(pid);
            isAdmin = !!(p.isAdmin || p.__x_isAdmin || p.type === 'admin' || p.__x_type === 'admin');
          }
          
          if (!phone) {
            const pStr = JSON.stringify(p);
            const match = pStr.match(/(\d{7,15})@c\.us/);
            if (match) phone = match[1];
          }
          
          if (phone) {
            const entry = ensurePhoneEntry(phone);
            if (entry) {
              entry.groupNames.add(groupName);
              if (isAdmin) entry.isAdmin = true;
            }
          }
        }
      }
      
      // Process chat store groups (backup)
      for (const chat of allChats) {
        if (!(chat.isGroup || chat.__x_isGroup || (chat.id && chat.id.includes('@g.us')))) continue;
        
        const gid = chat.id || chat.__x_id || '';
        const groupName = groupNameById.get(gid) || chat.name || chat.__x_name || chat.subject || chat.__x_subject || '';
        if (!groupName) continue;
        
        let participants = chat.participants || chat.__x_participants || [];
        if (chat.groupMetadata) {
          participants = chat.groupMetadata.participants || chat.groupMetadata.__x_participants || participants;
        }
        
        for (const p of participants) {
          let phone = '';
          let isAdmin = false;
          
          if (typeof p === 'string') {
            phone = extractPhoneFromId(p);
          } else if (typeof p === 'object' && p !== null) {
            const pid = p.id || p.__x_id || p.jid || p.__x_jid || p.userId || '';
            phone = extractPhoneFromId(pid);
            isAdmin = !!(p.isAdmin || p.__x_isAdmin || p.type === 'admin' || p.__x_type === 'admin');
          }
          
          if (phone) {
            const entry = ensurePhoneEntry(phone);
            if (entry) {
              entry.groupNames.add(groupName);
              if (isAdmin) entry.isAdmin = true;
            }
          }
        }
      }
      
      console.log(`[WA Extractor] Found ${phoneData.size} unique phone numbers in groups`);
      
      // Build final contacts
      const contacts = [];
      const seen = new Set();
      
      for (const [phone, data] of phoneData) {
        if (seen.has(phone)) continue;
        seen.add(phone);
        
        const groupNamesArray = Array.from(data.groupNames).filter(Boolean);
        const groupName = groupNamesArray.length > 0 ? groupNamesArray.join('; ') : 'WhatsApp Group';
        const isAdmin = data.isAdmin;
        
        const contactData = contactByPhone.get(phone);
        
        let saveName = '';
        let publicName = '';
        let isMyContact = false;
        let isBusiness = false;
        let isBlocked = false;
        let labels = '';
        
        if (contactData) {
          saveName = contactData.name || contactData.__x_name || '';
          publicName = contactData.pushname || contactData.__x_pushname || 
                       contactData.shortName || contactData.__x_shortName || 
                       contactData.notifyName || contactData.__x_notifyName || saveName;
          isMyContact = !!(contactData.isMyContact || contactData.__x_isMyContact);
          isBusiness = !!(contactData.isBusiness || contactData.__x_isBusiness || 
                         contactData.businessProfile || contactData.__x_businessProfile);
          isBlocked = !!(contactData.isBlocked || contactData.__x_isBlocked);
          
          const rawLabels = contactData.labels || contactData.__x_labels || [];
          if (Array.isArray(rawLabels)) {
            labels = rawLabels.map(l => {
              const lid = l.id || l.__x_id || (typeof l === 'string' ? l : '');
              return lid ? (labelNameById.get(lid) || lid) : '';
            }).filter(Boolean).join('; ');
          }
        }
        
        const countryInfo = getCountryInfo(phone);
        const countryCodeDigit = getCountryCodeDigit(phone);
        const formattedPhone = formatPhoneNumber(phone);
        
        contacts.push({
          groupName: groupName,
          countryCodeDigit: countryCodeDigit,
          countryCode: countryInfo.code,
          countryName: countryInfo.name,
          formattedPhone: formattedPhone,
          phone: phone,
          saveName: saveName,
          publicName: publicName,
          isMyContact: isMyContact,
          hasUnread: false,
          isBusiness: isBusiness,
          isAdmin: isAdmin,
          isBlocked: isBlocked,
          labels: labels
        });
      }
      
      // Fallback: all contacts if no groups found
      if (contacts.length === 0 && options.allGroups) {
        console.log('[WA Extractor] No group members found, falling back to all contacts');
        for (const [phone, c] of contactByPhone) {
          if (seen.has(phone)) continue;
          seen.add(phone);
          
          const countryInfo = getCountryInfo(phone);
          const countryCodeDigit = getCountryCodeDigit(phone);
          
          contacts.push({
            groupName: 'All Contacts',
            countryCodeDigit: countryCodeDigit,
            countryCode: countryInfo.code,
            countryName: countryInfo.name,
            formattedPhone: formatPhoneNumber(phone),
            phone: phone,
            saveName: c.name || c.__x_name || '',
            publicName: c.pushname || c.__x_pushname || '',
            isMyContact: !!(c.isMyContact || c.__x_isMyContact),
            hasUnread: false,
            isBusiness: !!(c.isBusiness || c.__x_isBusiness),
            isAdmin: false,
            isBlocked: !!(c.isBlocked || c.__x_isBlocked),
            labels: ''
          });
        }
      }
      
      db.close();
      console.log(`[WA Extractor] IndexedDB extraction complete: ${contacts.length} contacts`);
      if (contacts.length > 0) {
        console.log('[WA Extractor] Sample:', JSON.stringify(contacts[0]));
      }
      return contacts;
      
    } catch (e) {
      console.error('[WA Extractor] IndexedDB failed:', e);
      return null;
    }
  }

  // ============================================================
  // STORE API EXTRACTION
  // ============================================================
  function getStore() {
    if (window.Store && window.Store.Contact) return window.Store;
    try {
      if (window.webpackChunkwhatsapp_web_client) {
        const webpackRequire = window.webpackChunkwhatsapp_web_client.push([[Symbol()], {}, (e) => e]);
        const modules = webpackRequire.c;
        if (modules) {
          const store = { Contact: null, Chat: null, GroupMetadata: null };
          Object.values(modules).forEach(mod => {
            if (!mod || !mod.exports) return;
            const e = mod.exports;
            if (e.Contact && typeof e.Contact.get === 'function') store.Contact = e.Contact;
            if (e.Chat && typeof e.Chat.get === 'function') store.Chat = e.Chat;
            if (e.GroupMetadata && typeof e.GroupMetadata.get === 'function') store.GroupMetadata = e.GroupMetadata;
            if (e.default && e.default.Contact) store.Contact = e.default.Contact;
          });
          window.Store = store;
          return store;
        }
      }
    } catch(e) {}
    return null;
  }

  async function extractViaStore(options) {
    const store = getStore();
    if (!store || !store.Contact) return null;
    
    const contacts = [];
    const seen = new Set();
    
    try {
      let groups = [];
      if (store.Chat && store.Chat.models) {
        groups = store.Chat.models.filter(chat => chat.__x_isGroup || chat.isGroup);
      } else if (store.Chat && typeof store.Chat.getModelsArray === 'function') {
        groups = store.Chat.getModelsArray().filter(c => c.__x_isGroup || c.isGroup);
      }
      if (groups.length === 0 && store.GroupMetadata && store.GroupMetadata.models) {
        groups = store.GroupMetadata.models;
      }
      
      for (const group of groups) {
        const groupName = group.__x_name || group.__x_subject || group.name || group.subject || 'Unknown Group';
        let participants = [];
        if (group.__x_groupMetadata) participants = group.__x_groupMetadata.__x_participants || group.__x_groupMetadata.participants || [];
        else if (group.groupMetadata) participants = group.groupMetadata.__x_participants || group.groupMetadata.participants || [];
        else if (group.__x_participants) participants = group.__x_participants;
        if (participants.length === 0 && store.GroupMetadata) {
          const meta = store.GroupMetadata.get(group.__x_id || group.id);
          if (meta) participants = meta.__x_participants || meta.participants || [];
        }
        
        for (const participant of participants) {
          const userId = participant.__x_id || participant.id || participant;
          const idStr = typeof userId === 'string' ? userId : (userId.__x_user || userId.user || '');
          let phone = idStr.split('@')[0].replace(/[^0-9]/g, '');
          if (!phone || seen.has(phone)) continue;
          seen.add(phone);
          
          let contactData = null;
          try { contactData = store.Contact.get(idStr); } catch(e) {}
          
          const isAdmin = !!(participant.__x_isAdmin || participant.isAdmin || participant.__x_type === 'admin' || participant.type === 'admin');
          
          let saveName = '', publicName = '', labels = '';
          let isMyContact = false, isBusiness = false, isBlocked = false;
          
          if (contactData) {
            const c = contactData;
            saveName = c.__x_name || c.name || '';
            publicName = c.__x_pushname || c.pushname || c.__x_shortName || c.shortName || saveName;
            isMyContact = !!(c.__x_isMyContact || c.isMyContact);
            isBusiness = !!(c.__x_isBusiness || c.isBusiness);
            isBlocked = !!(c.__x_isBlocked || c.isBlocked);
            const rawLabels = c.__x_labels || c.labels || [];
            if (Array.isArray(rawLabels)) labels = rawLabels.map(l => l.__x_name || l.name || l).filter(Boolean).join('; ');
          }
          
          const countryInfo = getCountryInfo(phone);
          contacts.push({
            groupName: groupName,
            countryCodeDigit: getCountryCodeDigit(phone),
            countryCode: countryInfo.code,
            countryName: countryInfo.name,
            formattedPhone: formatPhoneNumber(phone),
            phone: phone,
            saveName: saveName,
            publicName: publicName,
            isMyContact: isMyContact,
            hasUnread: false,
            isBusiness: isBusiness,
            isAdmin: isAdmin,
            isBlocked: isBlocked,
            labels: labels
          });
        }
      }
      return contacts;
    } catch(e) {
      console.error('[WA Extractor] Store extraction error:', e);
      return null;
    }
  }

  // ============================================================
  // DOM SCRAPING
  // ============================================================
  async function extractViaDOM(options) {
    const contacts = [];
    const seen = new Set();
    
    function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }
    function getCurrentGroupName() {
      const el = document.querySelector('header div[role="button"] span[dir="auto"]');
      return el ? el.textContent.trim() : 'Current Group';
    }
    
    async function openGroupInfo() {
      const btns = document.querySelectorAll('header div[role="button"]');
      for (const btn of btns) {
        const span = btn.querySelector('span[dir="auto"]');
        if (span && span.textContent.trim().length > 0) { btn.click(); await sleep(1500); return true; }
      }
      const infoBtn = document.querySelector('[data-testid="conversation-info"]') || document.querySelector('[data-icon="menu"]');
      if (infoBtn) { infoBtn.click(); await sleep(1500); return true; }
      return false;
    }
    
    function closeGroupInfo() {
      const btn = document.querySelector('[data-testid="x"], [data-icon="x"]');
      if (btn) btn.click();
    }
    
    async function openMembersModal() {
      const btn = document.querySelector('[data-testid="view-all"]') || Array.from(document.querySelectorAll('span')).find(s => s.textContent.trim() === 'View all');
      if (btn) { btn.click(); await sleep(1000); return true; }
      return false;
    }
    
    async function scrollMembersModal() {
      const container = document.querySelector('[data-animate-modal-body="true"]') || document.querySelector('div[role="dialog"] [data-animate-modal-popup="true"]');
      if (!container) return false;
      let lastCount = 0, same = 0;
      for (let i = 0; i < 30; i++) {
        container.scrollTop = container.scrollHeight;
        await sleep(800);
        container.scrollTop = 0; await sleep(400);
        container.scrollTop = container.scrollHeight; await sleep(800);
        const count = container.querySelectorAll('[role="listitem"]').length;
        if (count === lastCount) { same++; if (same >= 3) break; } else same = 0;
        lastCount = count;
      }
      return true;
    }
    
    function scrapeModalMembers(groupName) {
      const modalBody = document.querySelector('[data-animate-modal-body="true"]');
      if (!modalBody) return [];
      const items = modalBody.querySelectorAll('[role="listitem"]');
      const results = [];
      
      items.forEach(item => {
        const titleSpan = item.querySelector('[data-testid="cell-frame-title"] span[title]');
        const secondarySpan = item.querySelector('[role="gridcell"][aria-colindex="1"] span[dir="auto"]');
        let name = '', phoneNumber = '';
        
        if (titleSpan) {
          const title = titleSpan.getAttribute('title') || '';
          if (title.startsWith('~')) {
            phoneNumber = title.replace(/^~\s*/, '').replace(/[^0-9]/g, '');
            name = secondarySpan ? secondarySpan.textContent.trim() : '';
          } else {
            name = title;
            if (secondarySpan && secondarySpan.textContent) phoneNumber = secondarySpan.textContent.trim().replace(/[^0-9]/g, '');
          }
        }
        
        if (!phoneNumber && name) {
          const allSpans = item.querySelectorAll('span');
          for (const span of allSpans) {
            const digits = span.textContent.trim().replace(/[^0-9]/g, '');
            if (digits.length >= 7 && digits.length <= 15) { phoneNumber = digits; break; }
          }
        }
        
        const isAdmin = !!item.querySelector('[data-testid="admin"], [aria-label*="admin"], [data-icon="admin"]');
        const isBusiness = !!item.querySelector('[data-testid="business"], [data-icon="business"]');
        
        if (phoneNumber && !seen.has(phoneNumber)) {
          seen.add(phoneNumber);
          const phone = phoneNumber.replace(/[^0-9]/g, '');
          results.push({
            groupName: groupName,
            countryCodeDigit: getCountryCodeDigit(phone),
            countryCode: getCountryInfo(phone).code,
            countryName: getCountryInfo(phone).name,
            formattedPhone: formatPhoneNumber(phone),
            phone: phone,
            saveName: name,
            publicName: titleSpan ? titleSpan.getAttribute('title') || name : name,
            isMyContact: false, hasUnread: false,
            isBusiness: isBusiness, isAdmin: isAdmin, isBlocked: false, labels: ''
          });
        }
      });
      return results;
    }
    
    try {
      // Sidebar chat list
      document.querySelectorAll('div[role="row"]').forEach(chat => {
        const titleEl = chat.querySelector('[data-testid="cell-frame-title"] span[title]');
        if (!titleEl) return;
        const title = titleEl.getAttribute('title') || '';
        let phone = '';
        if (title.startsWith('~') || /^\+?\d[\d\s\-\(\)]{6,}$/.test(title)) {
          phone = title.replace(/^~\s*/, '').replace(/[^0-9]/g, '');
        }
        if (phone && !seen.has(phone)) {
          seen.add(phone);
          const secondaryEl = chat.querySelector('[data-testid="cell-frame-secondary"] span');
          const name = secondaryEl ? secondaryEl.textContent.trim() : title.replace(/^~\s*/, '');
          contacts.push({
            groupName: 'From Chat List',
            countryCodeDigit: getCountryCodeDigit(phone),
            countryCode: getCountryInfo(phone).code,
            countryName: getCountryInfo(phone).name,
            formattedPhone: formatPhoneNumber(phone),
            phone: phone, saveName: name,
            publicName: title.replace(/^~\s*/, ''),
            isMyContact: false, hasUnread: false, isBusiness: false, isAdmin: false, isBlocked: false, labels: ''
          });
        }
      });
      
      // Group info modal
      const groupName = getCurrentGroupName();
      const infoOpened = await openGroupInfo();
      if (infoOpened) {
        await sleep(500);
        if (await openMembersModal()) {
          await sleep(500);
          await scrollMembersModal();
          contacts.push(...scrapeModalMembers(groupName));
          const closeBtn = document.querySelector('[data-testid="x"], [data-icon="x"]');
          if (closeBtn) closeBtn.click();
          await sleep(300);
        }
        closeGroupInfo();
      }
      return contacts;
    } catch(e) {
      console.error('[WA Extractor] DOM error:', e);
      return contacts;
    }
  }

  // ============================================================
  // CSV / EXCEL GENERATION
  // ============================================================
  
  const CSV_HEADERS = [
    'Group Name',
    'Country Code Digit',
    'Country Code',
    'Country Name',
    'Formatted Phone',
    'Phone',
    'Save Name',
    'Public Name',
    'Is My Contact',
    'Has Unread',
    'Is Business',
    'Is Admin',
    'Is Blocked',
    'Labels'
  ];

  function escapeCSV(value) {
    if (value === null || value === undefined) return '';
    const str = String(value);
    if (str.includes(',') || str.includes('"') || str.includes('\n') || str.includes('\r')) {
      return '"' + str.replace(/"/g, '""') + '"';
    }
    return str;
  }

  function generateCSV(contacts) {
    const rows = [CSV_HEADERS.join(',')];
    for (const c of contacts) {
      rows.push([
        escapeCSV(c.groupName),
        escapeCSV(c.countryCodeDigit),
        escapeCSV(c.countryCode),
        escapeCSV(c.countryName),
        escapeCSV(c.formattedPhone),
        `="${escapeCSV(c.phone)}"`,
        escapeCSV(c.saveName),
        escapeCSV(c.publicName),
        escapeCSV(c.isMyContact ? 'Yes' : 'No'),
        escapeCSV(c.hasUnread ? 'Yes' : 'No'),
        escapeCSV(c.isBusiness ? 'Yes' : 'No'),
        escapeCSV(c.isAdmin ? 'Yes' : 'No'),
        escapeCSV(c.isBlocked ? 'Yes' : 'No'),
        escapeCSV(c.labels)
      ].join(','));
    }
    return rows.join('\n');
  }

  function escapeXML(str) {
    if (str === null || str === undefined) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&apos;')
      .replace(/[\n\r]+/g, ' '); // Line-breaks break structural tables in Excel XML
  }

  function generateExcelXML(contacts) {
    const rowsXML = contacts.map(c => {
      return '<Row>' +
        `<Cell><Data ss:Type="String">${escapeXML(c.groupName)}</Data></Cell>` +
        `<Cell><Data ss:Type="String">${escapeXML(c.countryCodeDigit)}</Data></Cell>` +
        `<Cell><Data ss:Type="String">${escapeXML(c.countryCode)}</Data></Cell>` +
        `<Cell><Data ss:Type="String">${escapeXML(c.countryName)}</Data></Cell>` +
        `<Cell><Data ss:Type="String">${escapeXML(c.formattedPhone)}</Data></Cell>` +
        `<Cell ss:StyleID="sText"><Data ss:Type="String">${escapeXML(c.phone)}</Data></Cell>` +
        `<Cell><Data ss:Type="String">${escapeXML(c.saveName)}</Data></Cell>` +
        `<Cell><Data ss:Type="String">${escapeXML(c.publicName)}</Data></Cell>` +
        `<Cell><Data ss:Type="String">${c.isMyContact ? 'Yes' : 'No'}</Data></Cell>` +
        `<Cell><Data ss:Type="String">${c.hasUnread ? 'Yes' : 'No'}</Data></Cell>` +
        `<Cell><Data ss:Type="String">${c.isBusiness ? 'Yes' : 'No'}</Data></Cell>` +
        `<Cell><Data ss:Type="String">${c.isAdmin ? 'Yes' : 'No'}</Data></Cell>` +
        `<Cell><Data ss:Type="String">${c.isBlocked ? 'Yes' : 'No'}</Data></Cell>` +
        `<Cell><Data ss:Type="String">${escapeXML(c.labels)}</Data></Cell>` +
      '</Row>';
    }).join('\n');

    return `<?xml version="1.0" encoding="UTF-8"?>
<?mso-application progid="Excel.Sheet"?>
<Workbook xmlns="urn:schemas-microsoft-com:office:spreadsheet"
 xmlns:o="urn:schemas-microsoft-com:office:office"
 xmlns:x="urn:schemas-microsoft-com:office:excel"
 xmlns:ss="urn:schemas-microsoft-com:office:spreadsheet"
 xmlns:html="http://www.w3.org/TR/REC-html40">
 <Styles>
  <Style ss:ID="Default" ss:Name="Normal"><Font ss:FontName="Calibri" ss:Size="11"/></Style>
  <Style ss:ID="sText"><NumberFormat ss:Format="@"/></Style>
  <Style ss:ID="sHeader"><Font ss:Bold="1" ss:Size="11"/><Interior ss:Color="#25D366" ss:Pattern="Solid"/><Alignment ss:Horizontal="Center"/></Style>
 </Styles>
 <Worksheet ss:Name="WhatsApp Contacts">
  <Table>
   <Column ss:Width="200"/><Column ss:Width="80"/><Column ss:Width="60"/><Column ss:Width="120"/><Column ss:Width="150"/><Column ss:Width="120" ss:StyleID="sText"/><Column ss:Width="150"/><Column ss:Width="150"/><Column ss:Width="70"/><Column ss:Width="60"/><Column ss:Width="70"/><Column ss:Width="60"/><Column ss:Width="60"/><Column ss:Width="150"/>
   <Row ss:StyleID="sHeader">
    ${CSV_HEADERS.map(h => `<Cell><Data ss:Type="String">${escapeXML(h)}</Data></Cell>`).join('')}
   </Row>
   ${rowsXML}
  </Table>
 </Worksheet>
</Workbook>`;
  }

  function downloadFile(content, filename, mimeType) {
    const blob = new Blob([content], { type: mimeType + ';charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url; a.download = filename;
    document.body.appendChild(a); a.click();
    document.body.removeChild(a);
    setTimeout(() => URL.revokeObjectURL(url), 5000);
  }

  // ============================================================
  // MAIN EXTRACTION
  // ============================================================
  async function runExtraction(options) {
    const results = { success: false, count: 0, filename: '', error: null };
    
    try {
      let contacts = await extractFromIndexedDB(options);
      let method = 'IndexedDB';
      
      if (!contacts || contacts.length === 0) {
        console.log('[WA Extractor] Trying Store API...');
        contacts = await extractViaStore(options);
        method = 'Store API';
      }
      if (!contacts || contacts.length === 0) {
        console.log('[WA Extractor] Trying DOM scraping...');
        contacts = await extractViaDOM(options);
        method = 'DOM';
      }
      
      console.log(`[WA Extractor] Used: ${method}, found: ${contacts ? contacts.length : 0}`);
      
      if (!contacts || contacts.length === 0) {
        results.error = 'No contacts found. Make sure:\n1. Logged into WhatsApp Web\n2. Have groups with members\n3. Page has fully loaded';
        return results;
      }
      
      const timestamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, 19);
      const safeName = (contacts[0]?.groupName || 'WhatsApp').replace(/[^a-zA-Z0-9]/g, '_').slice(0, 30);
      const BOM = '\uFEFF';
      
      if (options.format === 'excel') {
        const xml = generateExcelXML(contacts);
        const filename = `WA_Contacts_${safeName}_${timestamp}.xls`;
        downloadFile(xml, filename, 'application/vnd.ms-excel');
        results.filename = filename;
      } else {
        const csv = BOM + generateCSV(contacts);
        const filename = `WA_Contacts_${safeName}_${timestamp}.csv`;
        downloadFile(csv, filename, 'text/csv');
        results.filename = filename;
      }
      
      results.success = true;
      results.count = contacts.length;
      
    } catch (e) {
      results.error = `Extraction failed: ${e.message}`;
      console.error('[WA Extractor]', e);
    }
    
    return results;
  }

  // ============================================================
  // MESSAGE LISTENER
  // ============================================================
  chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === 'ping') {
      sendResponse({ status: 'ok', version: '1.0.0' });
      return true;
    }
    
    if (message.action === 'extract') {
      const options = message.options || {
        allGroups: true,
        currentGroup: true,
        includeLabels: true,
        includeBusiness: true,
        format: 'csv'
      };
      
      runExtraction(options).then(result => {
        sendResponse(result);
      });
      
      return true;
    }
  });

  // ============================================================
  // INIT
  // ============================================================
  console.log('[WA Contacts Extractor] Injected successfully.');
  
  setTimeout(async () => {
    try {
      const dbs = await indexedDB.databases();
      const waDB = dbs.find(db => db.name && (db.name === 'model-storage' || db.name.includes('whatsapp')));
      if (waDB) {
        console.log(`[WA Extractor] ✓ IndexedDB available: ${waDB.name}`);
      } else {
        console.log('[WA Extractor] ⚠ No WhatsApp IndexedDB found');
      }
    } catch(e) {
      console.log('[WA Extractor] Init check:', e.message);
    }
  }, 3000);
})();