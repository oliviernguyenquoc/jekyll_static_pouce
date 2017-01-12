$(document).ready(function(){
	$('#modal1').modal();
	$('select').material_select();
	$('.parallax').parallax();
	$('.button-collapse').sideNav();
});

/*-----------------------------------------------------------------------------------*/
/*	STICKY HEADER
/*-----------------------------------------------------------------------------------*/

var menu = $('#navbar');

$(window).bind('scroll', function () {
	if ($(window).scrollTop() > 300 && menu.hasClass('default')) {
        menu.removeClass('default').addClass('sticky').fadeIn('fast');
    } else if ($(window).scrollTop() <=  300 && menu.hasClass('sticky'))  {
        menu.removeClass('sticky').addClass('default').fadeIn(0);
    }
});

/*-----------------------------------------------------------------------------------*/
/*	COPY FRONT FORM DATA TO REAL FORM
/*-----------------------------------------------------------------------------------*/

// Function to load serialized data
function loadSerializedData(formId, data)
{
	var tmp = data.split('&'), dataObj = {};

	// Bust apart the serialized data string into an obj
	for (var i = 0; i < tmp.length; i++)
	{
		var keyValPair = tmp[i].split('=');
		dataObj[keyValPair[0]] = keyValPair[1];
	}

	// Loop thru form and assign each HTML tag the appropriate value
	$('#' + formId + ' :input').each(function(index, element) {
		if (dataObj[$(this).attr('name')])
			$(this).val(dataObj[$(this).attr('name')]);
	});

	Materialize.updateTextFields();
}


$(".signup a#pre_signup_btn").on('click', function() {
    var data = $('#pre_registration_form').serialize();
    loadSerializedData('registration_form', data)
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
