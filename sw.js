// listen for messages first
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  // request
  console.log(request)
  // info about the actual message being sent

  // sender
  console.log(sender)
  // info on where the message was sent from e.g tab info or not

  // sendResponse
  // when required send resp back to the sender
  if (request.type === 'hello') {
    sendResponse({ farewell: 'goodbye' })
  }

  // can do a switch case to allow multiple types of message
  //e.g
  const type = request.type
  switch (type) {
    case 'value-one':
      // do something
      break
    case 'value-two':
      // do something
      break
  }

  // return true
  return true
})

// send message from service worker to current tab

// get tab id
const [tab] = await chrome.tabs.query({ active: true, lastFocusedWindow: true })

// use tab for sending message
const response = await chrome.tabs.sendMessage(tab.id, { greeting: 'hello' })

console.log(response)
