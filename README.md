# chrome_note
study chrome extensions noe

## 页面间的通信方式 ##
- runtime.sendMessage
- runtime.onMessage
- runtime.connect
- runtiime.OnConnect

```
chrome.runtime.sendMessage('Hello', function(response){
	console.log(response);	
	// response id senden by sendResponse,the funtion
	//as anonymous function's thrid param of noMessge 																
    document.write(response);
});
```
`runtime.sendMessage([extensionId],message,[options],[callback])`
