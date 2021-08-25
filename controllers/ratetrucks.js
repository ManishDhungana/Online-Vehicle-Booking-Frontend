
		$(document).ready(function () {
		  var tok = localStorage.getItem('token');
		  alert(tok)
		  let userid = ''
	
		  $.ajax({
			url: 'http://localhost:9000/truckstatus',
			type: 'get',
			beforeSend: function (xhr) {
			  if (tok) {
				xhr.setRequestHeader('Authorization', 'Bearer ' + tok);
			  }
			},
	
			success: function (res, textStatus, xhr) {
			  $.each(res.orders, function (index) {
				$('#trucktable').append(
				'<tr><th scope ="row">' +  res.orders[index].tid.tname + '</th>' +
	'<td class="w-25">'+ "<img src='http://localhost:9000/images/" + res.orders[index].tid.truckimage + "' class='img-fluid img-thumbnail'></td><td>" +
				  res.orders[index].status + "</td><td>" +
				  '<form>' + '<select class="ratingstruck ' + res.orders[index]._id + '" >' + '<option value="1">1</option>' + '<option value="2">2</option>'
				  + ' <option value="3">3</option>' + '<option value="4">4</option>' + '<option value="5">5</option>' + '</select>' + '</form>' + '</td><td>' +
				  "<Button class=' btn btn-success trate' btnrate= '" + res.orders[index]._id + "'>Rate</Button></br></td></tr>"
				);
			  });
			},
			error: function (xhr, textStatus, errorThrown) {
			  console.log('Error in Operation');
			}
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
	
	
	
	
	
	
	
		  // up and down id should be matched i. btnap
		  $('#trucktable').on('click', '.trate', function () {
			id = $(this).attr('btnrate');
			rate = $('.' + id).val();
			data = {
	
			  tid: id,
			  rating: rate
	
			}
			alert('success')
			console.log(data)
	
			$.ajax({
			  url: 'http://localhost:9000/truckrating',
			  type: 'post',
			  dataType: 'json',
			  data: data,
			  beforeSend: function (xhr) {
				if (tok) {
				  xhr.setRequestHeader('Authorization', 'Bearer ' + tok);
				}
			  },
			  success: function (data, textStatus, xhr) {
				//location.href="bike.html"
			  },
			  error: function (xhr, textStatus, errorThrown) {
				console.log('Error in Operation');
			  }
			});
		  });
		});
