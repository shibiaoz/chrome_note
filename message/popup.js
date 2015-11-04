
function callForBg() {
    $('body').find('ul li').eq(0).html("背景js 调用popup 中的函数");
}

function callForBg2() {
    $('body').find('ul li').eq(0).html("背景js 调用popup 22222");
}


$(function  () {
    $('#btn').on('click', function () {
        chrome.runtime.sendMessage({code:'close'},function (response){
            var bg = chrome.extension.getBackgroundPage();
            bg.shareObj = {
                test: callForBg2,
                test2: callForBg
            }
            alert(response);

        });
    });
// 在popup中还可以注入代码到web page中，但只限于对dom的访问和修改：
// chrome.tabs.executeScript(null, {code:"document.body.style.backgroundColor=blue"});
    $('#funForPopup').on('click', function () {
        // 在popup.html中可以直接通过background对象可以直接调用background中定义的方法或对象：
        // var bg = chrome.runtime.getBackgroundPage();
        debugger;
        var fun = chrome.extension.getBackgroundPage().funForPopup
        fun();
    });
})
