$(document).ready(function () {
      var tok = localStorage.getItem('token');
      alert(tok)
      $.getJSON('http://localhost:9000/carhire', function (res) {
        console.log(res)
        $.each(res.orders, function (index) {
          $('#cartable').append(


            '<tr><th scope ="row">' + res.orders[index].userid.username + '</th>' +

            '<td class="w-25">' + "<img src='http://localhost:9000/images/" + res.orders[index].cid.carimg + "' class='img-fluid img-thumbnail'></td><td>" +

            res.orders[index].cid.cname + "</td><td>" +

            res.orders[index].status + "</td><td>" +
            "<button class='btn btn-success clicks' btnap_id='" + res.orders[index]._id + "'>Approve</button>" + "</td><td>" +
            "<button class='btn btn-danger delete' btndelete='" + res.orders[index]._id + "'>Delete</button></td></tr>"
            /* +'</div>' +'</div>' +'</div>' +'</div>' */



          );
        }); // up and down id should be matched i. btnap
        $('#cartable').on('click', '.delete', function () {

          id = $(this).attr('btndelete');
          alert("deleted");
          $.ajax({
            url: 'http://localhost:9000/deletecarbookings/' + id,
            type: 'DELETE',
            dataType: 'json',
            data: id,
            success: function (data, textStatus, xhr) {
              location.href = "bike.html"
            },
            error: function (xhr, textStatus, errorThrown) {
              console.log('Error in Operation');
            }
          });
        });
      });
      $("#cartable").on('click', '.clicks', function () {
        alert($(this).attr('btnap_id'));

        $.ajax({
          type: 'put',
          url: 'http://localhost:9000/updateaprovalcar/' + $(this).attr('btnap_id'),
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