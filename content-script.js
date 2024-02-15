


// Send message
const response = await chrome.runtime.sendMessage({type: "cs"});
console.log(response);

// listen for messages