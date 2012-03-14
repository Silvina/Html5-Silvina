   $(document).ready(function() {
        alert("La pagina termino de cargarse");
     });
	 
	 //document.getElementById('Alias').focus();
	$(document).ready(function() {
		$('#Alias').focus();
	 });
	 
	 $(document).ready(function () {
                $ ("#Boton1").click(function (evento) {
   				     evento.preventDefault();
					var param = $("#Alias").val();
					url = "api/dispatcher.php";
        			$.post(url, {service: 'welcome.hello', params: {"name":""+ param+""}},
									function(data){
										$("#response").html(data);
							});
					$("#Alias").val('');
					$("#Alias").focus();
					});
			
			});
		
			
				