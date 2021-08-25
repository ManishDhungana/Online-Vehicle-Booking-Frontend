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
			 
			     $.getJSON('http://localhost:9000/gcontact', function (res) {

$.each(res, function (index) {
$('#contacttable').append("<tr><td>"
  
  +res[index].email+"</td><td>" +
res[index].title+"</td><td>"+
res[index].subject + "</td><td>"+
res[index].message + "</td><td>"+
res[index]._id + "</td><td>"+

  "</td></tr>" 

);
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