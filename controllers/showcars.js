 
     
        $(document).ready(function () {  
            
            var tok = localStorage.getItem('token');
alert(tok)
       var id;
   
     /*    $.ajax({
     type: 'get',
     url: 'http://localhost:9000/user/me',
     beforeSend: function(xhr) {
       if (tok) {
         xhr.setRequestHeader('Authorization', 'Bearer ' + tok);
       }
     },
     success: function(data) {


      $('#userfullname').val(data.userfname + " " + data.userlname);
      $('#ID_user').val(data._id);
       
        
        
          id = data._id;   
          console.log(id);                                    
     },
     error: function() {
       alert("Sorry, you are not logged in.");
     }
   }); */

					
					$.ajax({
					type:'get',
					url:'http://localhost:9000/car',
					beforeSend: function(xhr) {
                   if (tok) {
                     xhr.setRequestHeader('Authorization', 'Bearer ' + tok);
                   }
                 },
                 success: function(res) {
					$.each(res, function (index) {
                    console.log(res[index]);
                 $('#carbook').append(
                  
                  '<div class="col-md-4">'+
                    '<img src="http://localhost:9000/images/'+res[index].carimg+'"  width="100%" height="300px" alt="">' +

                    
                      '<h5>Name'+ ':'+ res[index].cname+'</h5>' + 
                      
                      '<h5>Type'+ ':'+res[index].ctype+'</h5>' + 
                      
                      '<h5>Condition'+':'+ res[index].cdesc+'</h5>' + 
                   
                   
                 "<button class='btn btn-success clickme' id='book' c_id='" + res[index]._id+"'>BOOK</button>" 
                 
              +'</div>' 
                
                );
                 });
			},
                 error: function() {
                   alert("Sorry, you are not logged in.from api");
                 }					
					});





               $("#carbook").on('click','.clickme',function(){
                 alert($(this).attr('c_id'))
        $.ajax({
     type: 'post',
     url: 'http://localhost:9000/rentcar/'+$(this).attr('c_id'),
     beforeSend: function(xhr) {
       if (tok) {
         xhr.setRequestHeader('Authorization', 'Bearer ' + tok);
       }
     },
     success: function(res) {
       console.log(res);
                                     
        },
    
     error: function() {
       alert("Sorry, you are not logged in.");
     }
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
   /*   success: function(data) {
        $('#stage').append('<p> Username: ' + data.username  + '</p>' + "<p>Password : " + data.password + "<p/>");    
                                      
     }, */
     error: function() {
       alert("Sorry, you are not logged in.");
     }
   });
      }) 
        });
     