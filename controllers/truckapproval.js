$(document).ready(function () {
      var tok = localStorage.getItem('token');
      alert(tok)
      $.getJSON('http://localhost:9000/truckhire', function (res) {
        console.log(res)
        $.each(res.orders, function (index) {
          $('#trucktable').append(

            '<tr><th scope ="row">' + res.orders[index].userid.username + '</th>' +

            '<td class="w-25">' + "<img src='http://localhost:9000/images/" + res.orders[index].tid.truckimage + "' class='img-fluid img-thumbnail'></td><td>" +


            "<tr><td>" + res.orders[index].tid.tname + "</td><td>" +
            res.orders[index].status + "</td><td>" +
            "<Button class='btn btn-success clicks' btntruckapp_id='" + res.orders[index]._id + "'>Approve</Button>" + "</td><td>" +

            "<Button class='btn btn-danger delete' btndelete= '" + res.orders[index]._id + "'>Delete</Button></br></td></tr>" // class name should be different
          );
        }); // up and down id should be matched i. btnap
        $('#trucktable').on('click', '.delete', function () {

          id = $(this).attr('btndelete');
          alert("deleted");
          $.ajax({
            url: 'http://localhost:9000/deletetruckbookings/' + id,
            type: 'DELETE',
            dataType: 'json',
            data: id,
            success: function (data, textStatus, xhr) {
              location.href = ""
            },
            error: function (xhr, textStatus, errorThrown) {
              console.log('Error in Operation');
            }
          });
        });
      });
      $("#trucktable").on('click', '.clicks', function () {
        alert($(this).attr('btntruckapp_id'));

        $.ajax({
          type: 'put',
          url: 'http://localhost:9000/updateaprovaltruck/' + $(this).attr('btntruckapp_id'),
          beforeSend: function (xhr) {
            if (tok) {
              xhr.setRequestHeader('Authorization', 'Bearer ' + tok);
            }
          },
          success: function (res) {
            console.log(res);

          },

          error: function () {
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
   
     error: function() {
       alert("Sorry, you are not logged in.");
     }
   });
      })
    });