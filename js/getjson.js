var json;
window.onload = function () {
    var url = "https://mockapi.eolinker.com/FF5yzAld2d6adda0e9ea92a7d467f142b6d5daa928b3e7c/hotSearch"/*json文件url*/
    var request = new XMLHttpRequest();
    request.open("get", url);/*设置请求方法与路径*/
    request.send(null);/*不发送数据到服务器*/
    request.onload = function () {/*XHR对象获取到返回信息后执行*/
        if (request.status == 200) {/*返回状态为200，即为数据获取成功*/
            json = JSON.parse(request.responseText);
            console.log(json)
        }else{/*请求失败的提醒*/
            console.log('JSON:Some errors have occurred')
        }
    }
}

// This file is for testing purposes only and is not actually used in Project
// This file is for testing purposes only and is not actually used in Project
// This file is for testing purposes only and is not actually used in Project
// This file is for testing purposes only and is not actually used in Project
// This file is for testing purposes only and is not actually used in Project
