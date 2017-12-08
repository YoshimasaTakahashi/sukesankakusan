var appKey = "076466914c1ea1baaae4b73c3692872f1da7cf457855d2bc59201ab49eed438d";
var clientKey = "5885b95563e240ce72e782af1979db8cba1e63a70b3b425d817a8710feda4c73";

var ncmb = new NCMB(appKey, clientKey);

///// Called when app launch
//$(function () {
//    $("#LoginBtn").click(onLoginBtn);
//    $("#RegisterBtn").click(onRegisterBtn);
//    $("#YesBtn_logout").click(onLogoutBtn);
//});

//----------------------------------USER MANAGEMENT-------------------------------------//
var currentLoginUser; //現在ログイン中ユーザー

//function onRegisterBtn() {
//    //入力フォームからusername, password変数にセット
//    var username = $("#reg_username").val();
//    var password = $("#reg_password").val();
//
//    var user = new ncmb.User();
//    user.set("userName", username)
//        .set("password", password);
//
//    // 任意フィールドに値を追加 
//    user.signUpByAccount()
//        .then(function (user) {
//            alert("新規登録に成功");
//            currentLoginUser = ncmb.User.getCurrentUser();
//            $.mobile.changePage('#DetailPage');
//        })
//        .catch(function (error) {
//            alert("新規登録に失敗！次のエラー発生：" + error);
//        });
//}

function onLoginBtn() {
//    var username = $("#login_id").val();
//    var password = $("#login_password").val();
    var username = document.getElementById("login_id").value;
    var password = document.getElementById("login_password").value;
    // ユーザー名とパスワードでログイン
    ncmb.User.login(username, password)
        .then(function (user) {
            // alert("ログイン成功");
            currentLoginUser = ncmb.User.getCurrentUser();
            window.location.href = 'index2.html';
        })
        .catch(function (error) {
            // alert("ログイン失敗！次のエラー発生: " + error);
        });
}

function onLogoutBtn() {
    ncmb.User.logout();
    alert('ログアウト成功');
    currentLoginUser = null;
    window.location.href = 'index.html';
}
