 $(document).ready(function () {  
    var urlPa = new URLSearchParams(window.location.search); 
    var id = urlPa.get("id");

            $.getJSON('http://localhost:9000/bikebyID/' + id, function (res) {

            console.log(id);
        $('#bname').val(res.bname);   
        $('#btype').val(res.btype); 
        $('#bdesc').val(res.bdesc); 
        $('#bmil').val(res.bmil); 
		 $('#brent').val(res.brent); 

            });
            
            $('#update').on("click",function (e){
                e.preventDefault();
                var bname = $("#bname").val();
                var btype = $("#btype").val();
                var bdesc = $("#bdesc").val();
                var bmil = $("#bmil").val();
				var brent = $("#brent").val();

                alert("Successfully updated bike information")
                var data = {
                    bname: bname,
                    btype: btype,
                    bdesc: bdesc,
                    bmil: bmil,
					brent: brent
                }
                $.ajax({
                    type: 'PUT',
                    url: 'http://localhost:9000/updatebike/' + id,
                    data: data,
                    success: function(res, textStatus, xhr){
                        alert(res.message);
                       // location.href = "bikeupdate.html"
                    },
                    error: function(xhr, textStatus, errorThrown){

                    }
                    
                })
            })
 
   });		 