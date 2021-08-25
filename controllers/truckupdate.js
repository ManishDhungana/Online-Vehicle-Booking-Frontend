 $(document).ready(function () {  
    var urlPa = new URLSearchParams(window.location.search); 
    var id = urlPa.get("id");

            $.getJSON('http://localhost:9000/truckbyID/' + id, function (res) {

            console.log(id);
        $('#tname').val(res.tname);   
        $('#ttype').val(res.ttype); 
        $('#tdesc').val(res.tdesc); 
        $('#tmil').val(res.tmil); 
		 $('#trent').val(res.trent); 

            });
            
            $('#update').on("click",function (e){
                e.preventDefault(); 
                var tname = $("#tname").val();
                var ttype = $("#ttype").val();
                var tdesc = $("#tdesc").val();
                var tmil = $("#tmil").val();
				var trent = $("#trent").val();

                alert("Successfully updated truck information")
                var data = {
                    tname: tname,
                    ttype: ttype,
                    tdesc: tdesc,
                    tmil: tmil,
					trent: trent
                }
                $.ajax({
                    type: 'PUT',
                    url: 'http://localhost:9000/updatetruck/' + id,
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