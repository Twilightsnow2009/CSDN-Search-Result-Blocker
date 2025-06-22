如果需要添加更多搜索引擎的支持，可以在脚本中的 `searchEngines` 对象中添加新的配置项。例如：

```javascript
'searchEngines': {
    'cn.bing.com': {
        'resultSelector': '.b_algo, .b_caption, li',
        'linkSelector': 'a'
    },
    'google.com': {
        'resultSelector': '.g',
        'linkSelector': 'a'
    },
    'baidu.com': {
        'resultSelector': '.c-container',
        'linkSelector': 'a'
    },
    'yoursearchengine.com': {
        'resultSelector': '.your-result-selector',
        'linkSelector': 'a'
    }
}



## 注意事项
确保您的浏览器已安装 Tampermonkey 扩展。
如果您对脚本进行了修改，请确保正确保存并重新加载页面。

## 反馈与支持
如果您在使用过程中遇到任何问题，或者有改进建议，请随时在Issues(https://github.com/Twilightsnow2009/CSDN-Search-Result-Blocker/issues)中提交反馈。

## 许可证
本项目遵循 MIT License(https://github.com/Twilightsnow2009/CSDN-Search-Result-Blocker/blob/main/LICENSE)。

## 联系方式:
作者:暮雪微晴
哔哩哔哩:https://space.bilibili.com/3493294795393244

GitHub:https://github.com/Twilightsnow2009
