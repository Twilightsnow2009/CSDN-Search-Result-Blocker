// ==UserScript==
// @name         CSDN-Search-Result-Blocker
// @namespace    https://github.com/Twilightsnow2009/CSDN-Search-Result-Blocker
// @version      1.0
// @description  CSDN Search Result Blocker 是一个基于 Tampermonkey 的用户脚本，旨在帮助用户在各种搜索引擎的搜索结果中自动移除与 CSDN 相关的链接。通过简单的配置，用户可以轻松地扩展脚本以支持多个搜索引擎，从而获得更干净、更符合个人需求的搜索体验。
// @author       暮雪微晴
// @match        *://*.bing.com/*
// @match        *://*.google.com/*
// @match        *://*.baidu.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // 用户可自定义的搜索引擎配置
    const searchEngines = {
        'cn.bing.com': {
            resultSelector: '.b_algo, .b_caption, li',
            linkSelector: 'a'
        },
        'google.com': {
            resultSelector: '.g',
            linkSelector: 'a'
        },
        'baidu.com': {
            resultSelector: '.c-container',
            linkSelector: 'a'
        }
    };

    const csdnPattern = /csdn\.net/;

    function isCSDNResult(element, linkSelector) {
        const links = element.querySelectorAll(linkSelector);
        return Array.from(links).some(link => csdnPattern.test(link.href));
    }

    function removeCSDNResult(resultElement) {
        if (resultElement) {
            resultElement.style.display = 'none';
        }
    }

    function processSearchResults() {
        const hostname = window.location.hostname;
        if (searchEngines[hostname]) {
            const { resultSelector, linkSelector } = searchEngines[hostname];
            const results = document.querySelectorAll(resultSelector);
            Array.from(results).forEach(element => {
                if (isCSDNResult(element, linkSelector)) {
                    removeCSDNResult(element);
                }
            });
        }
    }

    function observeDOMChanges() {
        const observer = new MutationObserver((mutations, obs) => {
            mutations.forEach(mutation => {
                if (mutation.type === 'childList') {
                    mutation.addedNodes.forEach(node => {
                        if (node.nodeType === 1) { // Element node
                            processSearchResults();
                        }
                    });
                }
            });
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    }

    function run() {
        processSearchResults();
        observeDOMChanges();
    }

    run();
})();
