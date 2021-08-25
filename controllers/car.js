  
      $(document).ready(function () {  

              var tok = localStorage.getItem('token');
              alert(tok)
                     var id;
                 
                      $.ajax({
                   type: 'get',
                   url: 'http://localhost:9000/user/me',
                   beforeSend: function(xhr) {
                     if (tok) {
                       xhr.setRequestHeader('Authorization', 'Bearer ' + tok);
                     }
                   },
                   success: function(data) {
              
                     
                        id = data._id;                                       
                   },
                   error: function(e) {
                     alert("Sorry, you are not logged in.");
                   }
                 });
  let imageFile = '';
   $("#carimg").on('change', function () {
        let formData = new FormData();
        let files = $("#carimg").get(0).files;
        if (files.length > 0) {
            formData.append("imageFile", files[0]);
        }
        $.ajax({
            type: 'POST',
            url: 'http://localhost:9000/uploadCarimg',
            contentType: false,
            cache: false,
            processData: false,
            data: formData,
            success: function (data) {
              alert("Image Selected")
                imageFile = data.filename;
            },
            error: function () {
                alert("Image upload failed!");
            }
        });
    });
 


    function validationcar(){
             /*  var letter = /^[a-zA-Z]+$/; */
             carimg = $("#carimg").val();
	cname = $("#cname").val();
	ctype = $("#ctype").val();
  cdesc = $("#cdesc").val();
  

  if (carimg == ""){
	alert("Please select car");
	$("#carimg").focus();
	return false;

}
  if (cname == ""){
	alert("Please insert car name");
	$("#cname").focus();
	return false;

}

/* else if (email.value.match(letter)){
	alert("Please correct your emailaddress"); 
	  $("#email").focus();
	return false;
  }  */
else if(ctype == ""){
	alert("Please enter type of car");
	$("#ctype").focus();
	return false;
}
else if(cdesc == ""){
	alert("Please enter descof car");
	$("#cdesc").focus();
	return false;
}


else{
	return true;
}
}


   $('#send').click(function(e){
          e.preventDefault();
          if(validationcar()){
            carimg=$("#carimg").val();
           cname=$("#cname").val();
           ctype=$("#ctype").val();
           cdesc=$("#cdesc").val();
          

          data={
          'carimg':imageFile,
          'cname':cname,
          'ctype':ctype,
          'cdesc':cdesc
          
          }
          console.log(data);
  
          $.ajax({
       type: 'POST',
       url: 'http://localhost:9000/uploadcar',
       data:data,
       beforeSend: function(xhr) {
         if (tok) {
           xhr.setRequestHeader('Authorization', 'Bearer ' + tok);
           /* console.log("checking token") */
           alert("Success");
           console.log(tok)
         }
       },
       success: function(data) {
         console.log(data);                  
          },
       error: function(e) {
         alert("Sorry, you are not logged in from api.");
       }
      
     });
    }
 $.getJSON('http://localhost:9000/car', function (res) {

$.each(res, function (index) {
 $('#cartable').append("<tr><td>"+'<img src="http://localhost:9000/images/'+res[index].carimg+'"  width="20px" height="20px" alt="">' + '</td><td>' +
 res[index].cname+"</td><td>" +
   res[index].ctype+"</td><td>"+
res[index].cdesc + "</td><td>"+

  "</td></tr>" 

);
});
});

 
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
