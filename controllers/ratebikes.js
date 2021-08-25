
		$(document).ready(function () {
		  var tok = localStorage.getItem('token');
		  alert(tok)
		  let userid = ''
	
		  $.ajax({
			url: 'http://localhost:9000/bikestatus',
			type: 'get',
			beforeSend: function (xhr) {
			  if (tok) {
				xhr.setRequestHeader('Authorization', 'Bearer ' + tok);
			  }
			},
			success: function (res, textStatus, xhr) {
				console.log(res)
			  $.each(res.orders, function (index) {
				
				$('#biketable').append(
				 '<tr><th scope ="row">' +  res.orders[index].bid.bname + '</th>' + 
	'<td class="w-25">'+ "<img src='http://localhost:9000/images/" + res.orders[index].bid.bikeimage + "' class='img-fluid img-thumbnail'></td><td>" +
						
				'<strong>'+  res.orders[index].status + "</td><td>" + '</strong>'+
				 
				   /* res.orders[index]._id + "</td><td>" +  */
				  '<form>' + '<select class="ratingscar ' + res.orders[index]._id + '" >' + '<option value="1">1</option>' + '<option value="2">2</option>'
				  + ' <option value="3">3</option>' + '<option value="4">4</option>' + '<option value="5">5</option>' + '</select>' + '</form>' + '</td><td>' +
				  /*  res.orders[index].bid.rate + "</td><td>" +  */
				  "<Button class=' btn btn-success rate' btnrate= '" + res.orders[index]._id + "'>Rate</Button></br></td></tr>"
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
		  $('#biketable').on('click', '.rate', function () {
			id = $(this).attr('btnrate');
			rate = $('.' + id).val();
			data = {
	
			  bid: id,
			  rating: rate
	
			}
			console.log(data)
			alert('success')
	
			$.ajax({
			  url: 'http://localhost:9000/bikerating',
			  type: 'post',
			  dataType: 'json',
			  data: data,
			  beforeSend: function (xhr) {
				if (tok) {
				  xhr.setRequestHeader('Authorization', 'Bearer ' + tok);
				}
			  },
			  success: function (data, textStatus, xhr) {
				
				alert("success");
				
			  },
			  error: function (xhr, textStatus, errorThrown) {
				console.log('Error in Operation');
			  }
			});
			
			
			
			
			
		  });
		});
	
  