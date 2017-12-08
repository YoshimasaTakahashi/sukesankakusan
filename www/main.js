/*ons.bootstrap();*/

ons.ready(function () {
    console.log("Onsen UI is ready!");
});

/*ログイン実装前*/
function btnClick() {
    window.location.href = 'index2.html';
}

/*タブバー*/
document.addEventListener('show', function (event) {
    var page = event.target;
    var titleElement = document.querySelector('#toolbar-title');

    if (page.matches('#first-page')) {
        titleElement.innerHTML = 'スケさん拡散';
    } else if (page.matches('#second-page')) {
        titleElement.innerHTML = 'スケさん拡散';
    } else if (page.matches('#third-page')) {
        titleElement.innerHTML = 'スケさん拡散';
    }
});

/*通知設定*/
window.onload = function () {
    var cntdwn = document.getElementById('cntdwn');
    var cntdwnItem = document.getElementById('cntdwnItem');

    cntdwn.addEventListener('change', function (e) {
        cntdwnItem.innerHTML = e.target.checked ? '<ons-list-item><div class="notifi">国家試験</div><div class="right"><ons-switch id="cntdwn" checked></ons-switch></div></ons-list-item><ons-list-item><div class="notifi">運動会</div><div class="right"><ons-switch id="cntdwn" checked></ons-switch></div></ons-list-item><ons-list-item><div class="notifi">J検</div><div class="right"><ons-switch id="cntdwn" checked></ons-switch></div></ons-list-item><ons-list-item><div class="notifi">学校祭</div><div class="right"><ons-switch id="cntdwn" checked></ons-switch></div></ons-list-item>' : '';
    });
}


/*時間のやつ*/
var toDoubleDigits = function (num) {
    num += "";
    if (num.length === 1) {
        num = "0" + num;
    }
    return num;
};

/*拡散*/
var data = new Array();
var date = new Array();
var img = new Array();

function doClick() {
    //時刻データを取得して変数jikanに格納する
    var jikan = new Date();

    //時・分・秒を取得する
    var hour = jikan.getHours();
    var minute = toDoubleDigits(jikan.getMinutes());

    var val = document.getElementById('text').value;
    if (val) {
        data.push(val);
        date.push(hour + ":" + minute);
        img.push(null);
        var res = '<ul>';
        for (var i = 0; i < data.length; i++) {
            if (data[i]) {
                res += '<ons-list-item modifier="nodivider" style="margin-bottom:-10px;"><div class="right">' + date[i] + '<span>' + data[i] + '</span></div></ons-list-item><ons-button modifier="quiet" style="position:relative; right:5px; top:-8px; width:10px height:10px"><ons-icon icon="fa-thumbs-o-up"></ons-icon></ons-button>';
            }
            if (img[i]) {
                res += '<ons-list-item modifier="nodivider" style="margin-bottom:-10px;"><div class="right">' + date[i] + '<img src="' + img[i] + '"/></div></ons-list-item><ons-button modifier="quiet" style="position:relative; right:5px; top:-8px; width:10px height:10px"><ons-icon icon="fa-thumbs-o-up"></ons-icon></ons-button>';
            }
        }
        res += '</ul>';
        var msg = document.getElementById('msg');
        msg.innerHTML = res;
    }
    var reset_target = document.getElementById("text");
    if (reset_target.value == '') {} else {
        reset_target.value = '';
    }

    // 現在の縦スクロール位置
    var scrollPosition = document.getElementById("msg").scrollTop;
    // スクロール要素の高さ
    var scrollHeight = document.getElementById("msg").scrollHeight;

    document.getElementById("msg").scrollTop = scrollHeight;
}

function picPush() {
    //時刻データを取得して変数jikanに格納する
    var jikan = new Date();

    //時・分・秒を取得する
    var hour = jikan.getHours();
    var minute = toDoubleDigits(jikan.getMinutes());

    var val = document.getElementById('text').value;
    var image = document.getElementById('showImage').src;
    if (val || image) {
        data.push(val);
        date.push(hour + ":" + minute);
        img.push(image);
        var res = '<ul>';
        for (var i = 0; i < data.length; i++) {
            if (data[i]) {
                res += '<ons-list-item modifier="nodivider" style="margin-bottom:-10px;"><div class="right">' + date[i] + '<span>' + data[i] + '</span></div></ons-list-item><ons-button modifier="quiet" style="position:relative; right:5px; top:-8px; width:10px height:10px"><ons-icon icon="fa-thumbs-o-up"></ons-icon></ons-button>';
            }
            if (img[i]) {
                res += '<ons-list-item modifier="nodivider" style="margin-bottom:-10px;"><div class="right">' + date[i] + '<img src="' + img[i] + '"/></div></ons-list-item><ons-button modifier="quiet" style="position:relative; right:5px; top:-8px; width:10px height:10px"><ons-icon icon="fa-thumbs-o-up"></ons-icon></ons-button>';
            }
        }
        res += '</ul>';
        var msg = document.getElementById('msg');
        msg.innerHTML = res;
    }
    var reset_target = document.getElementById("text");
    if (reset_target.value == '') {} else {
        reset_target.value = '';
    }
    if (image) {
        var image = document.getElementById('showImage');
        image.src = null;


    }

    // 現在の縦スクロール位置
    var scrollPosition = document.getElementById("msg").scrollTop;
    // スクロール要素の高さ
    var scrollHeight = document.getElementById("msg").scrollHeight;

    document.getElementById("msg").scrollTop = scrollHeight;
}

function camera() {
    var pic = document.getElementById('pic');
    var msg = document.getElementById('msg');
    if (pic.value) {
        pic.value = false;
        pic.innerHTML = '';

        var style = msg.style;
        style.height = '87%';
        
        var style = pic.style;
        style.height = '0px';

    } else {
        pic.value = true;
        pic.innerHTML = '<ons-list-item style="float:left;"><div style="background-color:#000000; border-radius:5px; margin-right:10px; margin-top:-5px; width:45px; line-height:45px; text-aligin:center; padding: 5px 5px 0 5px;" onclick="snapPicture()"><ons-icon icon="fa-camera" size="35px" style="color:white;"></ons-icon></div><div style="background-color:#000000; border-radius:5px; margin-right:10px;  margin-top:-5px; width:45px; line-height:45px; text-aligin:center; padding: 5px 5px 0 5px;" onclick="getPhoto();"><ons-icon icon="fa-picture-o" size="35px" style="color:white;"></ons-icon></div><div style="margin-top:-5px;"><img id="showImage" style="display:none;;"/></div></ons-list-item>';

        var style = msg.style;
        style.height = '75%';
        
        var style = pic.style;
        style.height = '72px';

        // 現在の縦スクロール位置
        var scrollPosition = document.getElementById("msg").scrollTop;
        // スクロール要素の高さ
        var scrollHeight = document.getElementById("msg").scrollHeight;

        document.getElementById("msg").scrollTop = scrollHeight;

    }

}

/*乱数*/
function getUniqueStr(myStrong) {
    var strong = 1000;
    if (myStrong) strong = myStrong;
    return new Date().getTime().toString(16) + Math.floor(strong * Math.random()).toString(16)
}

/*カメラ*/
var ncmb = new NCMB("076466914c1ea1baaae4b73c3692872f1da7cf457855d2bc59201ab49eed438d", "5885b95563e240ce72e782af1979db8cba1e63a70b3b425d817a8710feda4c73");

// 写真
function snapPicture() {
    var uuid = getUniqueStr();
    navigator.camera.getPicture(onSuccess, onFail, {
        quality: 100,
        destinationType: Camera.DestinationType.DATA_URL
    });

    //成功した際に呼ばれるコールバック関数
    function onSuccess(imageData) {
        // 画像を表示
        var image = document.getElementById('showImage');
        image.src = "data:image/jpeg;base64," + imageData;
        picPush();


        var byteCharacters = toBlob(imageData);
        ncmb.File.upload(uuid, byteCharacters)
            .then(function () {
                // alert("Successful");
            })
            .catch(function (error) {
                alert(JSON.stringify(error));
            });
    }

    //失敗した場合に呼ばれるコールバック関数
    function onFail(message) {
        alert('キャンセルしました');
    }
}

function toBlob(base64) {
    var bin = atob(base64.replace(/^.*,/, ''));
    var buffer = new Uint8Array(bin.length);
    for (var i = 0; i < bin.length; i++) {
        buffer[i] = bin.charCodeAt(i);
    }
    // Blobを作成
    try {
        var blob = new Blob([buffer.buffer], {
            type: 'image/png'
        });
    } catch (e) {
        return false;
    }
    return blob;
}


// ギャラリー画像
function getPhoto() {
    //Specify the source to get the photos.
    navigator.camera.getPicture(onSuccess, onFail, {
        quality: 100,
        destinationType: Camera.DestinationType.DATA_URL,
        sourceType: navigator.camera.PictureSourceType.PHOTOLIBRARY
    });
    
    function onSuccess(imageData) {
    var uuid = getUniqueStr();
    var image = document.getElementById('showImage');
    image.src = "data:image/jpeg;base64," + imageData;
    picPush();
    
    var byteCharacters = toBlob(imageData);
        ncmb.File.upload(uuid, byteCharacters)
            .then(function () {
                // alert("Successful");
            })
            .catch(function (error) {
                alert(JSON.stringify(error));
            });
    }

    function onFail(message) {
        alert('An error occured: ' + message);
    }
}


