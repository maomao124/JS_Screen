/**
 * Project name(项目名称)：JS_Screen
 * File name(文件名): test1
 * Author(作者）: mao
 * Author QQ：1296193245
 * GitHub：https://github.com/maomao124/
 * Date(创建日期)： 2022/3/18
 * Time(创建时间)： 21:05
 * Version(版本): 1.0
 * Description(描述)： JavaScript screen 对象中包含了有关计算机屏幕的信息，例如分辨率、宽度、高度等
 */

// screen 对象中的属性
//
// 属性	说明
// availTop	返回屏幕上方边界的第一个像素点（大多数情况下返回 0）
// availLeft	返回屏幕左边边界的第一个像素点（大多数情况下返回 0）
// availHeight	返回屏幕的高度（不包括 Windows 任务栏）
// availWidth	返回屏幕的宽度（不包括 Windows 任务栏）
// colorDepth	返回屏幕的颜色深度（color depth），根据 CSSOM（CSS 对象模型）视图，为兼容起见，该值总为 24。
// height	返回屏幕的完整高度
// pixelDepth	返回屏幕的位深度/色彩深度（bit depth），根据 CSSOM（CSS 对象模型）视图，为兼容起见，该值总为 24
// width	返回屏幕的完整宽度
// orientation	返回当前屏幕的方向

// document.write(screen.availTop + "<br>");
// document.write(screen.availLeft + "<br>");
document.write(screen.availHeight + "<br>");
document.write(screen.availWidth + "<br>");
document.write(screen.height + "<br>");
document.write(screen.width + "<br>");
document.write(screen.colorDepth + "<br>");
document.write(screen.pixelDepth + "<br>");
console.log(screen.orientation);
