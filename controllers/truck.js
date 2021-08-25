
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
$("#truckimg").on('change', function () {
let formData = new FormData();
let files = $("#truckimg").get(0).files;
if (files.length > 0) {
formData.append("imageFile", files[0]);
}
// $("#add-hero").prop("disabled", true);
$.ajax({
type: 'POST',
url: 'http://localhost:9000/uploadTruckimg',
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



function validationtruck(){
  truckimage=$("#truckimage").val();
  tname=$("#tname").val();
  ttype=$("#ttype").val();
  tdesc=$("#tdesc").val();
  tmil=$("#tmil").val();
  trent=$("#trent").val();


  if (truckimage == ""){
    alert("Please select truck");
    $("#truckimage").focus();
    return false;
  
  }
    if (tname == ""){
    alert("Please insert truck name");
    $("#tname").focus();
    return false;
  
  }
 
  else if(ttype == ""){
    alert("Please enter type of truck");
    $("#ttype").focus();
    return false;
  }
  else if(tdesc == ""){
    alert("Please enter desc of truck");
    $("#tdesc").focus();
    return false;
  }
  else if(tmil == ""){
    alert("Please write milage of truck");
    $("#tmil").focus();
    return false;
  }
  else if(trent == ""){
    alert("Please write rental price of truck");
    $("#trent").focus();
    return false;
  }
  else{
    return true;
  }
  }















$('#Submit').click(function(e){
e.preventDefault();
if(validationtruck()){
truckimage=$("#truckimage").val();
tname=$("#tname").val();
ttype=$("#ttype").val();
tdesc=$("#tdesc").val();
tmil=$("#tmil").val();
trent=$("#trent").val();

data={
'truckimage':imageFile,
'tname':tname,
'ttype':ttype,
'tdesc':tdesc,
'tmil':tmil,
'trent':trent
}
console.log(data);



$.ajax({
type: 'POST',
url: 'http://localhost:9000/uploadtruck',
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


$.getJSON('http://localhost:9000/truck', function (res) {
$.each(res, function (index) {
$('#trucktable').append(
  "<tr><td>"+'<img src="http://localhost:9000/images/'+res[index].truckimage+'"  width="20px" height="20px" alt="">' + '</td><td>' +res[index].tname+"</td><td>" +
res[index].ttype+"</td><td>"+
res[index].tdesc + "</td><td>"+
res[index].tmil + "</td><td>"+
res[index].trent + "</td><td>"+
  "<Button class='btn btn-warning delete' btndelete='" + res[index]._id + "'>Delete</Button>" + "</td><td>" +
    
  "<a class='btn btn-info outline btn-xs update' href = 'truckupdate.html?id="+ res[index]._id +"'>Update</a>" +  
  "</td></tr>"  
 
    
);
});
/* }); */

$('#trucktable').on('click','.delete',function () {

id = $(this).attr('btndelete');
alert("Deleted");
$.ajax({
url: 'http://localhost:9000/deletetruck/'+id,
type: 'DELETE',
dataType: 'json',
data:id,
success: function (data, textStatus, xhr) {
  location.href="truck.html"
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
   