 $(document).ready(function () {

      var tok = localStorage.getItem('token');
      alert(tok)
      var id;

      $.ajax({
        type: 'get',
        url: 'http://localhost:9000/user/me',
        beforeSend: function (xhr) {
          if (tok) {
            xhr.setRequestHeader('Authorization', 'Bearer ' + tok);
          }
        },
        success: function (data) {


          $('#userfullname').val(data.userfname + " " + data.userlname);
          $('#ID_user').val(data._id);
          $('#userfname').val(data.userfname);

          $('#userlname').val(data.userlname);
          /* date = new Date(data.date).toISOString().split('T')[0];
          $("#date").val(date); */
          $('#username').val(data.username);
          $('#password').val(data.password);
          id = data._id;
          console.log(id);
        },
        error: function () {
          alert("Sorry, you are not logged in.");
        }
      });


      $("#update_profile").click(function (e) {
        e.preventDefault();
        userfname = $("#userfname").val();
        userlname = $("#userlname").val();

        /* date = $("#date").val(); */

        username = $("#username").val();
        password = $("#password").val();
        data1 = {
          'userfname': userfname,
          'userlname': userlname,


          'username': username,
          'password': password

        }
        console.log(data1);

        $.ajax({
          type: "PUT",
          url: "http://localhost:9000/updateprofile",
          data: data1,
          success: function (result) {
            alert(result);
          },
          beforeSend: function (xhr) {
            if (tok) {
              xhr.setRequestHeader('Authorization', 'Bearer ' + tok);
            }
          },
        });

      });

      // for logging out

      $("#logout").click(function () {
        $.ajax({
          type: 'post',
          url: 'http://localhost:9000/users/logout',
          beforeSend: function (xhr) {
            if (tok) {
              xhr.setRequestHeader('Authorization', 'Bearer ' + tok);
            }
          },
          success: function (data) {
            location.href = "login.html";

          },

          error: function () {
            alert("Sorry, you are not logged in.");
          }
        });
      })

    });
