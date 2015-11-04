var shareObj = {};



chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
        if (!sender.tab) {
            // popup runtime.sendMessage
            return;
        }
        var tab = sender.tab ? sender.tab : sender;
        // 这里面popup 和content script 发来的消息都能收到，奇怪了
        console.log("Request comes from content script " + tab.url);
         var resOK = {
            greeting: "wo ca...." + request.greeting
        };
        chrome.tabs.sendMessage(tab.id,resOK, function(response) {
                console.log(response.greeting);
            }
        );
    });

// 设置 popup之后这个监听事件就失效了
chrome.browserAction.onClicked.addListener(function(tab) {
    // 扩展向内容脚本发送消息
    console.log('clicked....');
    chrome.tabs.sendMessage(tab.id,{
            greeting: "hello to content script!"
        }, function(response) {
            console.log(response.farewell);
    });
});


chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    console.log('-->bg request => ' + request);
    sendResponse({"code":"sdfsfs"});
});


function funForPopup() {
    console.log('这个函数是bg中的，可以在popup js 中调用');
}





/**
 * chrome.browserAction.onClicked.addListener(function(tab) {
        // 扩展向内容脚本发送消息
        chrome.tabs.sendMessage(tab.id,{
                greeting: "hello to content script!"
            }, function(response) {
                console.log(response.farewell);
            });
        });
 */

// 右键菜单
// Copyright (c) 2010 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// A generic onclick callback function.
function genericOnClick(info, tab) {
  console.log("item " + info.menuItemId + " was clicked");
  console.log("info: " + JSON.stringify(info));
  console.log("tab: " + JSON.stringify(tab));
}


var parentID = chrome.contextMenus.create({"title": "Test parent item"});
var child1 = chrome.contextMenus.create({"title": "Child 1", "parentId": parentID, "onclick": genericOnClick});
var child2 = chrome.contextMenus.create({"title": "Child 2", "parentId": parentID, "onclick": genericOnClick});


// Create a parent item and two children.
// var parent = chrome.contextMenus.create({"title": "Test parent item"});
// var child1 = chrome.contextMenus.create(
//   {"title": "Child 1", "parentId": parent, "onclick": genericOnClick});
// var child2 = chrome.contextMenus.create(
//   {"title": "Child 2", "parentId": parent, "onclick": genericOnClick});
// console.log("parent:" + parent + " child1:" + child1 + " child2:" + child2);



