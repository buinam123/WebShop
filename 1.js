
 $(function(){
	 new WOW().init();
}) 

function formdangnhap()
{
    // Bước 1: Lấy giá trị của username và password
    var username = document.getElementById('txttaikhoan').value;
    var password = document.getElementById('txtpass').value;
 
    // Bước 2: Kiểm tra dữ liệu hợp lệ hay không
    if (username == ''){
        alert('Bạn chưa nhập tên đăng nhập');
    }
    else if (password == '')
    {
        alert('Bạn chưa nhập mật khẩu');
    }
    else{
        alert('Ban đăng nhập thành công!');
        return true;
    }
 
    return false;
}

function formdangky(){

     var username = document.getElementById('txtuser').value;
     var password = document.getElementById('txtpassword').value;
     var passwordre = document.getElementById('txtpasswordre').value;
     var address = document.getElementById('txtaddress').value;
     var email = document.getElementById('txtemail').value;

     if (username =='') {
        alert('Bạn cần điền tài khoản đăng ký!');
        username.focus();
         return false;
     }
     else if (password =='') {
        alert('bạn cần điền mật khẩu!')
        password.focus();
         return false;
     }
     else if (passwordre != password) {
        alert('Mật khẩu không giống nhau!').focus();
         return false;

     }
     else if (address =='') {
        alert('Bạn cần nhập địa chỉ').focus();
         return false;
     }
        var atposition = x.indexOf("@");
        var dotposition = x.lastIndexOf(".");
        if (atposition < 1 || dotposition < (atposition + 2)
                || (dotposition + 2) >= x.length) {
            alert("Please enter a valid e-mail address.");
            return false;
        }

    var checkbox = document.getElementsByName("gender");
                for (var i = 0; i < checkbox.length; i++){
                    if (checkbox[i].checked === true){
                        alert(checkbox[i].value);
                    }
     } 
     else{
        alert('Bạn đã đăng ký thành công!!');
     }
     
}

 