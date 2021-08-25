
$(document).ready(function () {  

    function validationlogin(){
username = $("#username").val();
password = $("#password").val();
if (username == ""){
alert("Please insert your username");
$("#username").focus();
return false;

}
else if(password == ""){
alert("Please enter your passcode");
$("#password").focus();
return false;
}
else{
return true;
}
}

    $('#login').click(function (e) {

    e.preventDefault();
if(validationlogin ()){
       username = $("#username").val();
       password = $("#password").val();
       var data = {
       "username" : username,
       "password" : password
       }	   
        $.ajax({  
            type: 'post', 
  url: 'http://localhost:9000/login22/', 
            data:data,  
            success: function (res, textStatus, xhr) {  
    alert("Welcome to camden travels")
                if(res.token!=null)
                {
                    localStorage.setItem("token",res.token)
                    alert("Logged in Successfully")
                    if(res.user.Usertype=="Admin"){
                        location.href="bike.html";
                    }
                    else{
                        location.href="userprofile.html";
                    }

                }						 
            },  
            error: function (xhr, textStatus, errorThrown) {  
                console.log('Error in Operation');  
                    alert("Login denied");
                
            }  
        }); 
    } 
    }); 



});  
