# CSDN Search Result Blocker

![GitHub stars](https://img.shields.io/github/stars/Twilightsnow2009/CSDN-Search-Result-Blocker.svg?style=social&label=Stars)
![GitHub forks](https://img.shields.io/github/forks/Twilightsnow2009/CSDN-Search-Result-Blocker.svg?style=social&label=Fork)

一个基于 **Tampermonkey** 的用户脚本，旨在帮助用户在各种搜索引擎的搜索结果中自动移除与 **CSDN** 相关的链接。通过简单的配置，用户可以轻松地扩展脚本以支持多个搜索引擎，从而获得更干净、更符合个人需求的搜索体验。

## 功能

- **自动移除 CSDN 链接**：自动从搜索结果中移除 CSDN 链接。
- **多搜索引擎支持**：支持 Bing、Google 和百度等搜索引擎。
- **动态内容处理**：能够处理动态加载的搜索结果。
- **用户自定义**：用户可以根据需要添加或修改搜索引擎的规则。

## 安装

1. **安装 Tampermonkey**：
   - 如果您还没有安装 [Tampermonkey](https://tampermonkey.net/)，请先安装它。

2. **安装脚本**：
   - 点击以下按钮安装用户脚本：
     [![安装脚本](https://raw.githubusercontent.com/Twilightsnow2009/CSDN-Search-Result-Blocker/main/install-button.png)](https://github.com/Twilightsnow2009/CSDN-Search-Result-Blocker/raw/main/CSDN-Search-Result-Blocker.user.js)

## 使用方法

- 打开任何支持的搜索引擎（如 Bing、Google、百度）。
- 在搜索框中输入关键词并进行搜索。
- 脚本将自动移除搜索结果中的 CSDN 链接。

  ## 注意事项

- 确保您的浏览器已安装 Tampermonkey 扩展。
- 如果您对脚本进行了修改，请确保正确保存并重新加载页面。

## 反馈与支持

如果您在使用过程中遇到任何问题，或者有改进建议，请随时在 [Issues](https://github.com/Twilightsnow2009/CSDN-Search-Result-Blocker/issues) 中提交反馈。

## 许可证

本项目遵循 [MIT License](https://github.com/Twilightsnow2009/CSDN-Search-Result-Blocker/blob/main/LICENSE)。

## 联系方式

- **作者**：暮雪微晴
- **GitHub**：[Twilightsnow2009](https://github.com/Twilightsnow2009)
- **哔哩哔哩**：[暮雪微睛的个人空间](https://space.bilibili.com/3493294795393244)

## 扩展支持的搜索引擎

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

