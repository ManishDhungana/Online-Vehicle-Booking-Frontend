
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
$("#bikeimg").on('change', function () {
    let formData = new FormData();
    let files = $("#bikeimg").get(0).files;
    if (files.length > 0) {
        formData.append("imageFile", files[0]);
    }

    $.ajax({
        type: 'POST',
        url: 'http://localhost:9000/uploadBikeimg',
        contentType: false,
        cache: false,
        processData: false,
        data: formData,
        success: function (data) {
          alert("Image Selected")
            imageFile = data.filename;
            // $("#add-hero").prop("disabled", false);
        },
        error: function () {
            alert("Image upload failed!");
        }
    });
});

function validationbike(){
  /*  var letter = /^[a-zA-Z]+$/; */
  bikeimage = $("#bikeimage").val();
bname = $("#bname").val();
btype = $("#btype").val();
bdesc = $("#bdesc").val();
bmil = $("#bmil").val();
brent = $("#brent").val();






if (bikeimage == ""){
	alert("Please select car");
	$("#bikeimage").focus();
	return false;

}
  if (bname == ""){
	alert("Please insert car name");
	$("#bname").focus();
	return false;

}

/* else if (email.value.match(letter)){
	alert("Please correct your emailaddress"); 
	  $("#email").focus();
	return false;
  }  */
else if(btype == ""){
	alert("Please enter type of car");
	$("#btype").focus();
	return false;
}
else if(bdesc == ""){
	alert("Please enter descof car");
	$("#bdesc").focus();
	return false;
}
else if(bmil == ""){
	alert("Please write milage of car");
	$("#bmil").focus();
	return false;
}
else if(brent == ""){
	alert("Please write rental price of car");
	$("#brent").focus();
	return false;
}
else{
	return true;
}
}




$('#Submit').click(function(e){
          e.preventDefault();
          if(validationbike()){
            bikeimage=$("#bikeimage").val();
          bname=$("#bname").val();
       btype=$("#btype").val();
       bdesc=$("#bdesc").val();
       bmil=$("#bmil").val();
      brent=$("#brent").val();

   
   
      data={
      'bikeimage':imageFile,
      'bname':bname,
      'btype':btype,
      'bdesc':bdesc,
      'bmil':bmil,
      'brent':brent
      }
      console.log(data);

      $.ajax({
   type: 'POST',
   url: 'http://localhost:9000/uploadbike',
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
    });


    $.getJSON('http://localhost:9000/bike', function (res) {

$.each(res, function (index) {
$('#biketable').append("<tr><td>"
  +'<img src="http://localhost:9000/images/'+res[index].bikeimage+'"  width="20px" height="20px" alt="">' + '</td><td>' +
  res[index].bname+"</td><td>" +
res[index].btype+"</td><td>"+
res[index].bdesc + "</td><td>"+
res[index].bmil + "</td><td>"+
res[index].brent + "</td><td>"+

  "<Button class='btn btn-warning outline btn-xs delete' btndelete='" + res[index]._id + "'>Delete</Button>" +   "</td><td>"+
  
  


  "<a class='btn btn-info outline btn-xs update' href = 'bikeupdate.html?id="+ res[index]._id +"'>Update</a>" +  
  "</td></tr>" 

);
});

$('#biketable').on('click','.delete',function () {

id = $(this).attr('btndelete');
alert("deleted");
$.ajax({
url: 'http://localhost:9000/deletebike/'+id,
type: 'DELETE',
dataType: 'json',
data:id,
success: function (data, textStatus, xhr) {
  location.href="bike.html"
},
error: function (xhr, textStatus, errorThrown) {
console.log('Error in Operation');
}
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
