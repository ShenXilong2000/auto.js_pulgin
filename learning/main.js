// toast('Hello, Auto.js');

// var name = getPackageName("QQ");
// toast(name);


//发送邮件操作-----失败
// app.sendEmail
// ({
//     email:["1097166568@qq.com"],
//     subject: '这是一个邮件标题',
//     text:"这是邮件正文"
// });


//返回现在屏幕正在运行的app 名称
//双屏是返回最近有操作的app名称
// var ans = currentPackage();
// toast(ans);

//返回现在屏幕正在运行的app 中的活动的页面名称
// var ans = currentActivity();
// toast(ans);


// 剪切板操作
// setClip("在剪切板的内容");
// toast("剪切板的内容是:" + getClip());

//立刻退出脚本
// exit();


//调用该函数时会判断运行脚本的设备系统的版本号，如果没有达到要求则抛出异常。
// requiresApi(24);


//聊天刷屏
auto();
var txt_redo = "测试Auto.js，用来刷屏！";
while(true)
{
    className("EditText").findOne().setText(txt_redo);
    text("发送").findOne().click();
}