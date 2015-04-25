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
    document.write(response);
});
```
`runtime.sendMessage([extensionId],message,[options],[callback])`
