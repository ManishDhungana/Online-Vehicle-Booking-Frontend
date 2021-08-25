
    
        $(document).ready(function () {  
            
            var tok = localStorage.getItem('token');
alert(tok)


					
					$.ajax({
					type:'get',
					url:'http://localhost:9000/bike',
					beforeSend: function(xhr) {
                   if (tok) {
                     xhr.setRequestHeader('Authorization', 'Bearer ' + tok);
                   }
                 },
                 success: function(res) {
					$.each(res, function (index) {
                    console.log(res[index]);
                 $('#bikebook').append( 
                   
                  '<div class="col-md-4">'+
                    '<img src="http://localhost:9000/images/'+res[index].bikeimage+'" width="100%" height="300px" alt="">' +

                   
                      '<h5>Name'+':'+ res[index].bname+'</h5>' + 
                     
                      '<h5>Type'+':'+ res[index].btype+'</h5>' + 
                      
                      '<h5>Condition'+':'+ res[index].bdesc+'</h5>' + 
                      
                      '<h5>Milage'+ ':'+res[index].bmil+'</h5>' + 
                      
                      '<h5>Rent'+ ':'+res[index].brent+'</h5>' + 
                     
                 "<button class='btn btn-success clickme' id='book' b_id='" + res[index]._id+"'>BOOK</button>"  +'</div>'
                 /*  +'</div>' +'</div>' +'</div>' */
                
                );
                 });
			},
                 error: function() {
                   alert("Sorry, you are not logged in.");
                 }					
					});



      $("#bikebook").on('click','.clickme',function(){
                 alert($(this).attr('b_id'))
        $.ajax({
     type: 'post',
     url: 'http://localhost:9000/rentbike/'+$(this).attr('b_id'),
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
  