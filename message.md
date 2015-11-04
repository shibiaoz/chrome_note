> 背景 js 监听 发过来的消息，如果content script发来消息
```
// sender 这里代表浏览器的content 中的tab
// request 代表发来的消息体
chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
    {   var tab = sender.tab;
        console.log("Request comes from content script " + tab.url);
         var resOK = {
            greeting: "wo ca...." + request.greeting
        };
        debugger;
        chrome.tabs.sendMessage(tab.id,resOK, function(response) {
                console.log(response.greeting);
            }
        );
    });}
```


> 背景初始化时content script 中发送消息, 这里如果是browserAction设置popup就不起作用了
```
监听图标按钮的点击事件，回调中是点击当前的tab
chrome.browserAction.onClicked.addListener(function(tab) {
        // 扩展向内容脚本发送消息
        chrome.tabs.sendMessage(tab.id,{
                greeting: "hello to content script!"
            }, function(response) {
                console.log(response.farewell);
        });
    });
```

> 1/2都是背景的中代码
```
chrome.browserAction.onClicked.addListener(function(tab){});
chrome.pageAction.onClicked.addListener(function(tab){});
chrome.extension.onMessage.addListener(function (request, sender,sendResponse){});
chrome.tabs.sendMessage(tab.id,dataObj,function(response){});

```

> content script 中的通信写法
```
注意区分这里与chrome.tabs.sendMessage 不同的。后台程序要区分不同tab的，
前台发送的对象肯定只有一个后台啦。

chrome.extension.sendMessage({greeting: "hello to extention!"}, function(response) {
    console.log('发送的。。。',response.greeting);
});

chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
        // console.log("Request comes from extention " + sender.tab.url);
        console.log('接收的',request.greeting);
        sendResponse(resOK);
    });

```


> popup 与bg.js 如何通信
```
bg.js=>

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
        console.log('-->bg request => ' + request);
        sendResponse({"code":"sdfsfs"});
    });

popup.js =>

chrome.runtime.sendMessage({code:'close'},function (response){
        alert(response);
    });


```



