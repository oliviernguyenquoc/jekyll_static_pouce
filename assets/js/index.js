$(document).ready(function(){
	$('#modal1').modal();
	$('select').material_select();
	$('.parallax').parallax();
	$('.button-collapse').sideNav();
});

//Submit registration form in modal
// $(function() {
// 	$("button#submit").click(function(){
// 		$.ajax({
// 			type: "POST",
// 			url: "",
// 			data: $('form.registration_form').serialize(),
// 			dataType: 'json',
// 			success: function(msg){
// 				$("#thanks").html(msg)
// 				$("#form-content").modal('hide'); 
// 			},
// 			error: function(){
// 				alert("failure");
// 			}
// 		});
// 	});
// });

// Validation registration form
$(document).ready(function(){
	$("#registration_form").validate({
		rules: {
			email: {
				required: true,
				email: true
			},
			plainPasswordFirst: {
				required: true,
				minlength: 5
			},
			plainPasswordSecond: {
				required: true,
				equalTo: "#plainPasswordFirst"
			},
			first_name: {
				required: true
			},
			last_name: {
				required: true
			},
			sex: "required",
			telephone: "required",
			university: "required",
			CGU: "required"
		},
		//For custom messages
		messages: {
			email:{
				required: "Veuillez indiquer une adresse mail",
				email: "Email non valide"
			},
			plainPasswordFirst:{
				minlength: "5 characters minimum"
			},
			plainPasswordSecond: {
				required: "Veuiller confirmer le mot de passe",
				equalTo: "Mot de passe différent"
			},
			first_name: {
				required: "Veuiller indiquer votre prénom"
			},
			last_name: {
				required: "Veuiller indiquer votre nom"
			},
			sex: "Veuiller indiquer votre sexe",
			telephone: "Veuiller indiquer votre numéro de téléphone",
			university: "Veuiller indiquer votre école ou université",
			CGU: "Veuiller approuver le règlement du concours"
		},
		onkeyup: function(element) {$(element).valid()},
		errorElement : 'div',
		errorPlacement: function(error, element) {
			var placement = $(element).data('error');
			if (placement) {
				$(placement).append(error)
			} else {
				error.insertAfter(element);
			}
		}
	});
});
