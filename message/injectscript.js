console.log('content script.js ');
(function(){
    console.log("injected");

    var resOK = {
        farewell: "content script send response back..."
    };

    var resError = {
        farewell: "content script hasError!"
    };

    chrome.extension.sendMessage({greeting: "hello to extention!"}, function(response) {
            console.log('发送的。。。',response);
    });

    setTimeout(function() {
        chrome.extension.sendMessage({greeting: "hello to extention!"}, function(response) {
            console.log('发送的。。。',response);
        });
        // var src = chrome.extension.getURL("popup.html");
        // var $iframe = '<iframe style="position:absolute;top:0; left:0; z-index:1000;" src='+src+' height="300"></iframe>'
        // $('body').append($iframe);
    }, 3000);

    chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
        // console.log("Request comes from extention " + sender.tab.url);
        console.log('接收的',request.greeting);
        if (request.greeting === "hello to content script!"){
            sendResponse(resOK);
        }else{
            sendResponse(resError);
        }
    });
})();
