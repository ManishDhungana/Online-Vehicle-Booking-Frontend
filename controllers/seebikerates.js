
    $(document).ready(function () {
      var tok = localStorage.getItem('token');
      alert(tok)
      $.getJSON('http://localhost:9000/seebikerates', function (res) {
        console.log(res)
        $.each(res.orders, function (index) {
          $('#bikeratetable').append(

            '<tr><th scope ="row">' +  res.orders[index].bid.bname  + '</th>' +

           
              

            + res.orders[index].userid.username + "</td><td>" 

            +   res.orders[index].bid.bname + "</td><td>" +
			

         /*    res.orders[index].rate + "</td><td>" + */


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
 