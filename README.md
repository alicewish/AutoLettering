漫画汉化批量自动填字脚本

作者：墨问非名

兼容Mac/Windows，不需要其他软件辅助

Copyright (c) 2016-2019 Alicewish

Version 20190318



使用说明：

1、脚本位置
# Windows
"C:\Program Files\Adobe\Adobe Photoshop CC 2019\Presets\Scripts"

# Mac
"/Applications/Adobe Photoshop CC 2019/Presets/Scripts"

2、自定义选项
【mainFolderPath】是你的汉化文件夹，其中放要汉化的漫画的解压包
解压包里可以放要填字的JPG或者PSD，有PSD则读取PSD填字

【manga】是日漫模式，对应竖排文字和左对齐（顶对齐），默认不开启

必须有填字文档才能进行填字，将你的命名规则添加到【possibles】中即可
【possibles】默认值如下：
['-7标记.md', '-7标记.txt', '.md', '.txt', '填字.md', '填字.txt', '-填字.md', '-填字.txt', '填.md', '填.txt', '-填.md', '-填.txt',]

比如，我的【mainFolderPath】是【/Users/alicewish/Dropbox/Data/ComicProcess】
要汉化的漫画的解压包在【/Users/alicewish/Dropbox/Data/ComicProcess/Exorsisters 001】
填字文档是【/Users/alicewish/Dropbox/Data/ComicProcess/Exorsisters 001-7标记.md】

3、填字文档格式

我的格式：

## 01
726,134,0,0,0
今天是
再好不过的
结婚日子.

【## 】是markdown的二级标题标记，页码即使没有前导【## 】仍可识别

01
726,134,0,0,0
今天是
再好不过的
结婚日子.

726,134,0,0,0是坐标和RGB颜色，只有坐标或者只有颜色或者什么都没有仍能识别

【只有坐标】

01
726,134
今天是
再好不过的
结婚日子.

【只有颜色】

01
0,0,0
今天是
再好不过的
结婚日子.

【什么都没有】

01
今天是
再好不过的
结婚日子.

填字文档范例：

============分割线============
## 01
474,818,0,0,0
|每个人|
|都起来!|

820,895,0,0,0
出了什么事!?

1324,822,0,0,0
所有年纪最小的
都上来,嘿,你!

1594,836,0,0,0
其他人,带上
你们需要的东西,
然后赶紧跑!

784,2064,0,0,0
|啊啊啊啊!|

921,2130,0,0,0
|啊啊啊啊!|

1597,1873,0,0,0
带他们去
安全的地方.

## 02
730,155,0,0,0
我会
没事的!

1665,334,0,0,0
|快走!|

235,856,0,0,0
里碧!我们需要离开!

1602,851,0,0,0
|呃啊啊啊!|

1471,2244,0,0,0
|艾芙!|

## 03
722,155,0,0,0
里碧,我们必须离开这里!

1156,1336,0,0,0
|我知道!|
|现在救救我!|

============分割线============



Reference

1、此脚本的【单页填字部分】参考自@梁进刚 【给汉化者们分享几个小工具】
https://tieba.baidu.com/p/3020902369
[发布于2014-05-03 20:09]

2、部分自定义选项参考自暗



MIT License

Copyright (c) 2016-2019 Alicewish - https://alicewish.github.io

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is furnished
to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.



此脚本采用MIT许可证

# 被授权人权利
被授权人有权利使用、复制、修改、合并、出版发行、散布、再授权及贩售软件及软件的副本。
被授权人可根据程序的需要修改授权条款为适当的内容。

# 被授权人义务
在软件和软件的所有副本中都必须包含版权声明和许可声明。

# 其他重要特性
此授权条款并非属copyleft的自由软件授权条款，允许在自由/开放源码软件或非自由软件（proprietary software）所使用。
MIT的内容可依照程序著作权者的需求更改内容。此亦为MIT与BSD（The BSD license, 3-clause BSD license）本质上不同处。
MIT条款可与其他授权条款并存。另外，MIT条款也是自由软件基金会（FSF）所认可的自由软件授权条款，与GPL兼容。