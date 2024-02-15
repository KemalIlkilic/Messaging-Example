

// Send message
const response = await chrome.runtime.sendMessage({type: "pop"});
console.log(response);