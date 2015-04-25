# chrome_note
study chrome extensions noe

## 页面间的通信方式 ##
- runtime.sendMessage
- runtime.onMessage
- runtime.connect
- runtiime.OnConnect

eg: 发送消息
```
chrome.runtime.sendMessage('Hello', function(response){
	console.log(response);	
	// response id senden by sendResponse,the funtion
	//as anonymous function's thrid param of noMessge 																
    document.write(response);
});
```
`runtime.sendMessage([extensionId],message,[options],[callback])`

eg:接受消息
`chrome.runtime.onMessage`
```
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse){
    if(message == 'Hello'){
        sendResponse('Hello from background.');
    }
    console.log(sender);
});
```
