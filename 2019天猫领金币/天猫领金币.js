auto.waitFor();
var height = device.height;
var width = device.width;
//将下面的（1080， 2160改为自己手机的宽和高）
setScreenMetrics(1080, 2160);
toast("设备高"+height);
lingqu()
function lingqu(){
    sleep(1500);
    if(text("签到").exists()){
        text("签到").findOne().click();
        sleep(1600);
        toast("签到成功");
    }
    sleep(1500);
    var try_times = 10;
    while(try_times != 0)
    {
        try_times =try_times - 1;
        sleep(1000);
        while(text("去进店").exists()){
        //要支持的动作
            toast("存在去进店");
            text("去进店").findOne().click();
            sleep(2500);
            swipe(width / 2, height - 600, width / 2, 0, 500);
            sleep(3500);
            swipe(width / 2, height - 600, width / 2, 0, 500);
            sleep(10000);
            swipe(width / 2, height - 600, width / 2, 0, 500);
            sleep(9000);
            back();
            sleep(2000);
            try_times = 10;
        }
        while(text("去浏览").exists()){
            //要支持的动作
            toast("存在去浏览");
            text("去浏览").findOne().click();
            sleep(1500);
            swipe(width / 2, height - 500, width / 2, 0, 500);
            sleep(2500);
            swipe(width / 2, height - 500, width / 2, 0, 500);
            sleep(10000);
            swipe(width / 2, height - 500, width / 2, 0, 500);
            sleep(8000);
            back();
            sleep(2000);
            try_times = 10;
        }
    }
    toast("结束");
}
