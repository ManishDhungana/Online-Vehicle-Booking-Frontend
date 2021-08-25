 $(document).ready(function () {  

      var tok = localStorage.getItem('token');
            alert(tok)
            function validationlogin(){
             /*  var letter = /^[a-zA-Z]+$/; */
	email = $("#email").val();
	title = $("#title").val();
  subject = $("#subject").val();
  message = $("#message").val();


 
	 if (email == ""){
	alert("Please insert your emailaddress");
	$("#email").focus();
	return false;

}

/* else if (email.value.match(letter)){
	alert("Please correct your emailaddress"); 
	  $("#email").focus();
	return false;
  }  */
else if(title == ""){
	alert("Please enter your title");
	$("#title").focus();
	return false;
}
else if(subject == ""){
	alert("Please enter subject");
	$("#subject").focus();
	return false;
}
else if(message == ""){
	alert("Please write messages");
	$("#message").focus();
	return false;
}
else{
	return true;
}
}
     


 $('#submit').click(function(e){

   e.preventDefault();
   if(validationlogin()){
email=$("#email").val();
title=$("#title").val();
 subject=$("#subject").val();
 message=$("#message").val();
	
  data={
'email':email,
'title':title,
'subject':subject,
'message':message
}
console.log(data); 


        $.ajax({
     type: 'post',
     url: 'http://localhost:9000/contact',
     dataType:'JSON',
     data:data,
     beforeSend: function(xhr) {
       if (tok) {
         xhr.setRequestHeader('Authorization', 'Bearer ' + tok);
         /* console.log("checking token") */
         console.log(tok)
       }
     },
     success: function(data) {
       console.log(data);
       alert("sent");
	
                            
        },
    
     error: function(e) {
       alert("Sorry, you are not logged in from api.");
     }
   });
 }
      });
 
      $("#logout").click(function(){
        $.ajax({
     type: 'post',
     url: 'http://localhost:9000/users/logout',
     beforeSend: function(xhr) {
       if (tok) {
         xhr.setRequestHeader('Authorization', 'Bearer ' + tok);
       }
     },
     success: function(data) {
		location.href="login.html";
                                     
        },
  
     error: function() {
       alert("Sorry, you are not logged in.");
     }
   });
      }) 
 

        });