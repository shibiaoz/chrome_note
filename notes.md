每一个扩展程序包含以下文件：
一个清单文件
一个或多个HTML文件 (除非扩展程序是一个主题背景)
    可选：一个或多个JavaScript文件
    可选： 您的扩展程序需要的任何其它文件，例如图片


    .crx


使用Google Chrome浏览器的调试器时可能会发现，扩展程序中的每一个文件也可以通过绝对URL访问，就像这样：
chrome-extension://<扩展程序唯一标识符>/<文件路径>

chrome-extension://nhbmlmacegbnjllbddklihfbhpnpemnk/popup.html
前台页面如何引入插件中的页面，创建一个窗口引入后台页面插入前台(通过content script来实现)
var src = chrome.extension.getURL("popup.html");

注意点：
1.
page 引入的js不能以inline的方式引入

在popup 中如何调用bg 中的函数
chrome.extension.getBackgroundPage()
返回的bg 的window对象

2.

指定了弹出框的话 chrome.browserAction.onClicked 事件会失效

3.
关于sender

由popup和bg发送消息时 Sender

Object {id: "jakklaaifkgohekmdejmehikkbakelgd"}

由Tab发送时

Object {id: "jakklaaifkgohekmdejmehikkbakelgd", url: "http://weibo.com/u/2371564754/home?wvr=5", tab: Object}

很明显Tab发送时的Sender对象和其他不一样  可以用sender.tab判断


问题：
1.
chrome.runtime 与chrome.extension 的区别
popup 与content script
chrome.extension.sendMessage
chrome.runtime.sendMessage
bg.js  => chrome.extension.onMessage.addEventListener
能监听到chrome.runtime.sendMessage 发来的消息呢。

2. background 和 eventPages 的区别
 书籍： http://www.cnblogs.com/cart55free99/p/3753722.html

http://blog.inching.org/2014/01/23/chrome-extension-develop/
https://developer.chrome.com/extensions/content_scripts
http://blog.csdn.net/my_business/article/details/7711525


3. 如何更新popup 页面
方案-1
POPUP.JS function =>callForBg
bg.js chrome.extentsion.getViews()[0].callForBg();
方案-2
把popupJS的函数用一个对象都封装好 然后在popupJS中得到backgroundJS的window 将这个popupJS的对象保存在backgroundJS的某个变量中  然后通过该变量.xxx()这样的方式来调用popupJS中的函数




