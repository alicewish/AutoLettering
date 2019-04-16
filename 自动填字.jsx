/*****************************************************************
 *
 * 漫画汉化批量自动填字脚本
 *
 * 作者：墨问非名
 *
 * 兼容Mac/Windows，不需要其他软件辅助
 *
 * Copyright (c) 2016-2019 Alicewish
 *
 * Version 20190318
 *
 *****************************************************************
 *
 * 使用说明：
 *
 * 1、脚本位置
 * # Windows
 * "C:\Program Files\Adobe\Adobe Photoshop CC 2019\Presets\Scripts"
 *
 * # Mac
 * "/Applications/Adobe Photoshop CC 2019/Presets/Scripts"
 *
 * 2、自定义选项
 * 【mainFolderPath】是你的汉化文件夹，其中放要汉化的漫画的解压包
 * 解压包里可以放要填字的JPG或者PSD，有PSD则读取PSD填字
 *
 * 【manga】是日漫模式，对应竖排文字和左对齐（顶对齐），默认不开启
 *
 * 必须有填字文档才能进行填字，将你的命名规则添加到【possibles】中即可
 * 【possibles】默认值如下：
 * ['-7标记.md', '-7标记.txt', '.md', '.txt', '填字.md', '填字.txt', '-填字.md', '-填字.txt', '填.md', '填.txt', '-填.md', '-填.txt',]
 *
 * 比如，我的【mainFolderPath】是【/Users/alicewish/Dropbox/Data/ComicProcess】
 * 要汉化的漫画的解压包在【/Users/alicewish/Dropbox/Data/ComicProcess/Exorsisters 001】
 * 填字文档是【/Users/alicewish/Dropbox/Data/ComicProcess/Exorsisters 001-7标记.md】
 *
 * 3、填字文档格式
 *
 * 我的格式：
 *
 * ## 01
 * 726,134,0,0,0
 * 今天是
 * 再好不过的
 * 结婚日子.
 *
 * 【## 】是markdown的二级标题标记，页码即使没有前导【## 】仍可识别
 *
 * 01
 * 726,134,0,0,0
 * 今天是
 * 再好不过的
 * 结婚日子.
 *
 * 726,134,0,0,0是坐标和RGB颜色，只有坐标或者只有颜色或者什么都没有仍能识别
 *
 * 【只有坐标】
 *
 * 01
 * 726,134
 * 今天是
 * 再好不过的
 * 结婚日子.
 *
 * 【只有颜色】
 *
 * 01
 * 0,0,0
 * 今天是
 * 再好不过的
 * 结婚日子.
 *
 * 【什么都没有】
 *
 * 01
 * 今天是
 * 再好不过的
 * 结婚日子.
 *
 * 填字文档范例：
 *
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
 *
 *****************************************************************
 *
 * Reference
 *
 * 1、此脚本的【单页填字部分】参考自@梁进刚 【给汉化者们分享几个小工具】
 * https://tieba.baidu.com/p/3020902369
 * [发布于2014-05-03 20:09]
 *
 * 2、部分自定义选项参考自暗
 *
 *****************************************************************
 *
 * MIT License
 *
 * Copyright (c) 2016-2019 Alicewish - https://alicewish.github.io
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is furnished
 * to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 *
 *****************************************************************
 *
 * 此脚本采用MIT许可证
 *
 * # 被授权人权利
 * 被授权人有权利使用、复制、修改、合并、出版发行、散布、再授权及贩售软件及软件的副本。
 * 被授权人可根据程序的需要修改授权条款为适当的内容。
 *
 * # 被授权人义务
 * 在软件和软件的所有副本中都必须包含版权声明和许可声明。
 *
 * # 其他重要特性
 * 此授权条款并非属copyleft的自由软件授权条款，允许在自由/开放源码软件或非自由软件（proprietary software）所使用。
 * MIT的内容可依照程序著作权者的需求更改内容。此亦为MIT与BSD（The BSD license, 3-clause BSD license）本质上不同处。
 * MIT条款可与其他授权条款并存。另外，MIT条款也是自由软件基金会（FSF）所认可的自由软件授权条款，与GPL兼容。
 *
 *****************************************************************/

//================全局参数区================
var logList = ['提示'];

var fontName = "MicrosoftYaHei";// 定义字体：微软雅黑
var fontSize = 30;// 定义字号

var pIgnore = new RegExp("( copy|-|填字)$", "g");
var pLettered = new RegExp("(填字|加框| copy| 拷贝|Whiten)$", "g");
var pPage = new RegExp("^(## |)\\d{1,4}$", "g");

var pCoorColor = new RegExp("^\\d{1,5},\\d{1,5},\\d{1,3},\\d{1,3},\\d{1,3}$", "g");
var pCoor = new RegExp("^\\d{1,5},\\d{1,5}$", "g");
var pColor = new RegExp("^\\d{1,3},\\d{1,3},\\d{1,3}$", "g");
var pMeta = new RegExp("^(\\d{1,5},\\d{1,5},\\d{1,3},\\d{1,3},\\d{1,3}|\\d{1,5},\\d{1,5}|\\d{1,3},\\d{1,3},\\d{1,3})$", "g");
var pComment = new RegExp("^(\\*|译注)", "g");


var possibles = ['-7标记.md', '-7标记.txt', '.md', '.txt', '填字.md', '填字.txt', '-填字.md', '-填字.txt', '填.md', '填.txt', '-填.md', '-填.txt',];

//================判断系统================
var systemOS, mainInputFolders, mainComicPath, mainMangaPath, logInfo;

//在Windows下，路径也必须都用“/”
if ($.os.search(/windows/i) != -1) {
    systemOS = "windows";
    mainComicPath = "C:/Users/alicewish/Dropbox/Data/ComicProcess";
    mainMangaPath = "C:/Users/alicewish/Dropbox/Data/MangaProcess";
} else {
    systemOS = "macintosh";
    mainComicPath = "/Users/alicewish/Dropbox/Data/ComicProcess";
    mainMangaPath = "/Users/alicewish/Dropbox/Data/MangaProcess";
}

var mainComicFolder = new Folder(mainComicPath);
var mainMangaFolder = new Folder(mainMangaPath);

mainInputFolders = [[mainComicFolder, 'Comic'], [mainMangaFolder, 'Manga']];

// alert(systemOS);

//================初始化标尺、字体单位设置================
var originalUnit = preferences.rulerUnits;
preferences.rulerUnits = Units.PIXELS;
var originalTypeUnit = preferences.typeUnits;
preferences.typeUnits = TypeUnits.POINTS;

app.preferences.rulerUnits = Units.PIXELS;
app.preferences.typeUnits = TypeUnits.PIXELS;
app.preferences.pointSize = PointType.POSTSCRIPT;

/**
 * Trim spaces, new lines  etc
 *
 * @param {string} str
 * @returns {string}
 */
function trim(str) {
    return str.replace(/(^[\s\n\r\t\x0B]+)|([\s\n\r\t\x0B]+$)/g, '');
}

if (String.prototype.trim == null) String.prototype.trim = function () {
    return this.replace(/(^[\s\n\r\t\x0B]+)|([\s\n\r\t\x0B]+$)/g, '')
};

//================写入到文本================
//并没有用到
function write2text(text, text_path) {
    //================输入文本文档================
    var myTextFile = new File(text_path);
    //================读取文本文档到数组================
    myTextFile.open("w");
    myTextFile.write(text);
    myTextFile.close();
}

//================读取文本到数组================
function text2array(text_path) {
    //================输入文本文档================
    var myTextFile = new File(text_path);
    var myLineArray = [];

    if (myTextFile.exists) {
        myTextFile.open("r");
        while (!myTextFile.eof) {
            var line = myTextFile.readln();
            myLineArray.push(trim(line));
        }
        myTextFile.close();
    }
    return myLineArray
}

function findTextPath(currentFolderName) {
    var txtList = [];
    var text_path;
    for (var t = 0; t < possibles.length; t++) {
        var possible = possibles[t];
        if (mode === 'Comic') {
            text_path = mainComicPath + '/' + currentFolderName + possible;
        } else {
            text_path = mainMangaPath + '/' + currentFolderName + possible;
        }
        var myTextFile = new File(text_path);
        if (myTextFile.exists) {
            txtList.push(text_path);
        }
    }
    return txtList
}

function array2meta(text_path) {
    var myLineArray = text2array(text_path);

    var pageNumIndexes = [];
    var k = 0;
    for (var lineIndex = 0; lineIndex < myLineArray.length; lineIndex++) {
        var thisLine = myLineArray[lineIndex];
        if (pPage.test(thisLine)) {
            pageNumIndexes[k] = lineIndex;
            k++;
        }
    }
    pageNumIndexes[k] = myLineArray.length;//结尾标记点

    var pageContents = [];
    for (var m = 0; m < pageNumIndexes.length - 1; m++) {
        var thisPage = myLineArray.slice(pageNumIndexes[m] + 1, pageNumIndexes[m + 1]);
        if (trim(thisPage[0]) === '') {
            thisPage.shift()
        }
        if (trim(thisPage[thisPage.length - 1]) === '') {
            thisPage.pop()
        }
        // pageContents[m] = thisPage;
        pageContents.push(thisPage);
    }
    return pageContents
}

function meta2bubble(pageContents) {
    var bubbles = [];
    //================对每页================
    for (var l = 0; l < pageContents.length; l++) {
        var thisPage = pageContents[l];
        //================读取所有空行所在行数================
        var emptyRowIndexes = [0];
        var u = 1;
        for (var lineIndex = 0; lineIndex < thisPage.length; lineIndex++) {
            if (thisPage[lineIndex] === "") {
                emptyRowIndexes[u] = lineIndex;
                u++;
            }
        }
        // emptyRowIndexes[u] = thisPage.length;
        emptyRowIndexes.push(thisPage.length);//结尾标记点

        //================对每个气泡================
        var bubbleContents = [];
        for (var m = 0; m < emptyRowIndexes.length - 1; m++) {
            var thisBubble = thisPage.slice(emptyRowIndexes[m], emptyRowIndexes[m + 1]);
            if (trim(thisBubble[0]) === '') {
                thisBubble.shift()
            }
            if (trim(thisBubble[thisBubble.length - 1]) === '') {
                thisBubble.pop()
            }
            // bubbleContents[m] = thisBubble;
            bubbleContents.push(thisBubble)
        }
        bubbles.push(bubbleContents);
    }
    return bubbles
}

function processFolderPic(folderPath, bgFileList, bubbles, inputType, mode) {
    var outOption = new PhotoshopSaveOptions;
    outOption.embedColorProfile = true;
    outOption.alphaChannels = true;

    //================对每张图片================
    for (var h = 0; h < bgFileList.length; h++) {
        var currentFile = bgFileList[h];
        var currentFileName = currentFile.displayName;
        var index = currentFileName.lastIndexOf(".");
        var ext = currentFileName.substr(index + 1);
        var currentFileStem = currentFileName.split('.').slice(0, -1).join('.');

        var whitenFile = new File(folderPath + '/' + currentFileStem + '-Whiten.png');
        var outputFile = new File(folderPath + '/' + currentFileStem + '.psd');

        if (whitenFile.exists && inputType === 'jpg') {
            var openlayer = open(whitenFile);

            //激活当前图层。
            var layer = app.activeDocument.activeLayer;

            //复制当前图层。
            layer.copy();

            //不保存即关闭涂白文件。
            openlayer.close(SaveOptions.DONOTSAVECHANGES);

        }
        //打开原始图片。
        var bgFile = open(currentFile);
        var docRef = app.activeDocument;//当前打开的文档

        //读取文档宽度与高度
        var width = docRef.width;
        var height = docRef.height;

        //定义一个变量layer_bg，用来表示Photoshop的当前图层。
        var layer_bg = docRef.activeLayer;

        if (whitenFile.exists && inputType === 'jpg') {
            //调用document对象的paste方法，将内存中的拷贝，粘贴到当前文档。
            var layer_image = docRef.paste();
        }

        var bubbleContents = bubbles[h];
        // logInfo = bubbleContents.join('\r');
        // alert(logInfo);

        //================对每个气泡================
        for (var b = 0; b < bubbleContents.length; b++) {
            var thisBubble = bubbleContents[b];
            var info_str = thisBubble[0];
            var coorX = width * (b + 1) / (bubbleContents.length + 1);
            if (mode === 'Manga') {
                coorX = width - width * (b + 1) / (bubbleContents.length + 1);
            }
            var coorY = height * (b + 1) / (bubbleContents.length + 1);

            var red = 0;
            var green = 0;
            var blue = 0;

            if (pMeta.test(info_str)) {
                info_str = thisBubble.shift();
                var infos = info_str.split(',');
                if (pCoorColor.test(info_str)) {
                    coorX = parseInt(infos[0]);
                    coorY = parseInt(infos[1]);

                    red = parseInt(infos[2]);
                    green = parseInt(infos[3]);
                    blue = parseInt(infos[4]);
                } else if (pCoor.test(info_str)) {
                    coorX = parseInt(infos[0]);
                    coorY = parseInt(infos[1]);
                } else if (pColor.test(info_str)) {
                    red = parseInt(infos[0]);
                    green = parseInt(infos[1]);
                    blue = parseInt(infos[2]);
                }
            }

            var textColor = new SolidColor();//定义字体颜色
            textColor.rgb.red = red;
            textColor.rgb.green = green;
            textColor.rgb.blue = blue;

            var contents4layer = thisBubble.join('\r');

            //================对注释================
            var thisFontSize = 0;
            if (pComment.test(contents4layer) && thisBubble.length === 1) {
                thisFontSize = 25
            }

            var artLayerRef = docRef.artLayers.add();//添加图层
            artLayerRef.kind = LayerKind.TEXT;//转为文本图层
            var textItemRef = artLayerRef.textItem;

            textItemRef.antiAliasMethod = AntiAlias.STRONG; //消除锯齿方式
            /********************
             * 犀利=CRISP
             * 无=NONE
             * 锐利=SHARP
             * 平滑=SMOOTH
             * 浑厚=STRONG
             ********************/
            textItemRef.autoKerning = AutoKernType.OPTICAL; //字符间距微调
            /********************
             * 手动指定=MANUAL
             * 度量标准=METRICS
             * 视觉=OPTICAL（推荐这个，字距更为紧凑）
             ********************/
            textItemRef.direction = Direction.HORIZONTAL; //文本取向
            /********************
             * 水平=HORIZONTAL
             * 竖直=VERTICAL
             ********************/
            textItemRef.justification = Justification.CENTER; //对齐方式
            /********************
             * 左对齐=LEFT
             * 右对齐=RIGHT
             * 居中对齐=CENTER
             ********************/

            textItemRef.color = textColor;//字体颜色
            if (thisFontSize > 0) {
                textItemRef.size = thisFontSize; //字号
            } else {
                textItemRef.size = fontSize; //字号
            }
            textItemRef.font = fontName;

            if (mode === 'Manga') {
                textItemRef.direction = Direction.VERTICAL; //文本取向
                textItemRef.justification = Justification.LEFT; //对齐方式
                textItemRef.size = 20; //字号
            }

            // The position of origin for the text. The array members specify the X and Y coordinates.
            // Equivalent to clicking the text tool at a point in the document to create the point of origin for text.
            //文本原点的位置。
            //等效于用文本工具单击文档中某个点以创建文本的原点。
            textItemRef.position = Array(coorX, coorY);//定位锚点位置
            textItemRef.contents = contents4layer;
        }
        //输出psd格式文件
        bgFile.saveAs(outputFile, outOption, 1, Extension.LOWERCASE);

        //不保存关闭处理后的文件
        bgFile.close(SaveOptions.DONOTSAVECHANGES);
    }

}

//================主体程序================

var folderPath;
for (var x = 0; x < mainInputFolders.length; x++) {
    var mainInputFolder = mainInputFolders[x][0];
    var mode = mainInputFolders[x][1];
    // alert(mainInputFolder);
    // alert(mode);
    if (mainInputFolder != null) {
        var mainFileList = mainInputFolder.getFiles();
        mainFileList.sort();

        var mainFolderList = [];
        for (var i = 0; i < mainFileList.length; i++) {
            var currentFile = mainFileList[i];
            if (currentFile instanceof Folder && !pIgnore.test(currentFile.displayName)) {
                mainFolderList.push(currentFile);
            }
        }
        if (mainFolderList.length === 0) {
            // alert('无事可做💤');
        } else {
            // alert(mainFolderList.length);
            //================对每个文件夹================
            for (var j = 0; j < mainFolderList.length; j++) {
                var currentFolder = mainFolderList[j];
                // alert(currentFolder);
                var currentFolderName = currentFolder.displayName;
                if (mode === 'Comic') {
                    folderPath = mainComicPath + '/' + currentFolderName;
                } else {
                    folderPath = mainMangaPath + '/' + currentFolderName;
                }

                var txtList = findTextPath(currentFolderName, mode);
                if (txtList.length >= 1) {
                    logList.push(currentFolderName);

                    var text_path = txtList[0];
                    // alert(text_path);

                    var pageContents = array2meta(text_path);
                    var bubbles = meta2bubble(pageContents);

                    if (currentFolder != null) {
                        var jpgList = currentFolder.getFiles("*.jpg");
                        jpgList.sort();

                        var psdList = currentFolder.getFiles("*.psd");
                        psdList.sort();

                        var inputType = 'jpg';

                        var bgFileList = [];
                        for (var p = 0; p < jpgList.length; p++) {
                            var currentJpg = jpgList[p];
                            var currentFileName = currentJpg.displayName;
                            var index = currentFileName.lastIndexOf(".");
                            var ext = currentFileName.substr(index + 1);
                            var currentFileStem = currentFileName.split('.').slice(0, -1).join('.');
                            if (!pLettered.test(currentFileStem)) {
                                bgFileList.push(currentJpg);
                            }
                        }
                        if (psdList.length > 0) {
                            inputType = 'psd';
                            bgFileList = psdList;
                        }
                        if (bgFileList.length === bubbles.length && bgFileList.length > 0) {
                            processFolderPic(folderPath, bgFileList, bubbles, inputType, mode);
                        } else {
                            alert('图片张数：' + bgFileList.length + '\r' + '文稿页数：' + bubbles.length)
                        }
                    } else
                        logList.push('未找到填字文档：' + currentFolderName);
                }
            }
        }
    }
}
logInfo = logList.join('\r');
// alert(logInfo);
// console.log(logInfo);