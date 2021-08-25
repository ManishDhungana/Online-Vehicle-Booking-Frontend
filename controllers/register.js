
		$(document).ready(function () {  

      
			$('#UserRegistration').click(function (e){  
         e.preventDefault();
         
			   var userfname = $("#userfname").val();
			   var userlname = $("#userlname").val();
			   
			   
			   var username = $("#username").val();
			   var password = $("#password").val();
			   var cpassword = $("#cpassword").val();
			   var Usertype = $("#Usertype").val();
			   
			   //alert(password)
			   var data = {
				"userfname" : userfname,
				"userlname" : userlname,
			
				"username" : username,
				"password" : password,
				"cpassword" : cpassword,
			    "Usertype" : Usertype
			
               };	 
               
               
               console.log(data);
               if(userfname == "" || userlname == "" ||username == "" || password == "" || cpassword =="" ) {
                 alert("Please Fill out the required fields!!");
			   }
			   else if(password !== cpassword){
alert("password not matched")
			   }

               else {




				$.ajax({  
					type: 'POST', 
					url: 'http://localhost:9000/upload', 
					data:data,  
					success: function (res, textStatus, xhr) {  
						
						alert("Registered Successfully");
					   location.href = "login.html";		
					   console.log(' User Registration Successfully Done');
					   				 
					},  
					error: function (xhr, textStatus, errorThrown) {  
						alert(errorThrown);
						console.log('Error in Operation');  
                    }  
                
                });  
            }
			}); 
//var tok = localStorage.getItem('token');
//alert(tok)		
		});  
 