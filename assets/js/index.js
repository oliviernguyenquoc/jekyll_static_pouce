/*-----------------------------------------------------------------------------------*/
/*	Initialize Modals, Select fields, Parallax effect, Side navs
/*-----------------------------------------------------------------------------------*/

$(document).ready(function(){
	$('#modal1').modal();
	$('#modal_connexion').modal();
	$('select').material_select();
	$('.parallax').parallax();
	$('.button-collapse').sideNav();

	// Use this for a smoother scroll
	// var easing = 'easeInQuad'; // https://jqueryui.com/easing
	// $('html, body').animate( { scrollTop: $(page).offset().top }, speed, easing );

	// Scroll to target jQuery function
	$('.scrollTo').on('click', function() {
		var target = $(this).attr('href'); // Go to target
		var speed = 500; // Animaton duration (en ms)
		$('html, body').animate( { scrollTop: $(target).offset().top-20 }, speed ); // Go
		return false;
	});
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


$("#signup a#pre_signup_btn").on('click', function() {
    var data = $('#pre_registration_form').serialize();
    loadSerializedData('registration_form', data);
});

$("a#pre_signup_inscription_btn").on('click', function() {
    var data = $('#pre_signup_inscription_form').serialize();
    loadSerializedData('registration_form', data);
});

/*-----------------------------------------------------------------------------------*/
/*	Serialize and send registration
/*-----------------------------------------------------------------------------------*/

// Function to serialize registration form to the JSON needed for the Pouce d'Or API
function serializeRegistrationForm()
{
	var json_mock = new Object();

	json_mock.fos_user_registration_form = new Object();
	json_mock.fos_user_registration_form.email = $('form#registration_form input#email').val();
	json_mock.fos_user_registration_form.plainPassword = new Object();
	json_mock.fos_user_registration_form.plainPassword.first = $('form#registration_form input#plainPasswordFirst').val();
	json_mock.fos_user_registration_form.plainPassword.second = $('form#registration_form input#plainPasswordSecond').val();
	json_mock.fos_user_registration_form.first_name = $('form#registration_form input#first_name').val();
	json_mock.fos_user_registration_form.last_name = $('form#registration_form input#last_name').val();
	json_mock.fos_user_registration_form.sex = $('form#registration_form select#sex').val();
	json_mock.fos_user_registration_form.school = $('form#registration_form select#university').val();
	json_mock.fos_user_registration_form.telephone = $('form#registration_form input#telephone').val();

	json_data = JSON.stringify(json_mock);

	return json_data;
}


//Submit registration form in modal
$(function() {
	$("button#submit").click(function(){
		form_data_JSON = serializeRegistrationForm();
 		console.log(form_data_JSON);

// 		$.ajax({
// 			type: "POST",
// 			url: "/api/v1/users",
// 			data: form_data_JSON,
// 			dataType: 'json',
// 			success: function(msg){
// 				$("#thanks").html(msg)
// 				$("#form-content").modal('hide');
// 			},
// 			error: function(){
// 				alert("Impossible de vous enregistrer. Merci de revenir plus tard.");
// 			}
// 		});

	});
});

/*-----------------------------------------------------------------------------------*/
/*	Validate regitration form
/*-----------------------------------------------------------------------------------*/

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

/*-----------------------------------------------------------------------------------*/
/*	whatis accordion
/*-----------------------------------------------------------------------------------*/

$("#whatis-accordion").click(function(){
	for(var i=1;i<=3;i++){
		if(document.getElementById("accordion"+i).getAttribute("class")=="active"){
			document.getElementById("whatis-right"+i).style.display="block";
		}
		else{
			document.getElementById("whatis-right"+i).style.display="none";
		}
	}
});

/*-----------------------------------------------------------------------------------*/
/*	whatis calendar
/*-----------------------------------------------------------------------------------*/
$(document).ready(function(){
	var now = new Date();
	var year = now.getFullYear();
	var month = now.getMonth() + 1;
	var date = now.getDate();


	var data = [{
	    date: year + '-' + month + '-' + (date - 1),
	    value: 'hello'
	}, {
	    date: year + '-' + month + '-' + date,
	    value: 'aujourd\'hui'
	}, {
	    date: new Date(year, month - 1, date + 1),
	    value: '吃饭睡觉打豆豆'
	}];

	var $ca = $('.calendar-container').calendar({
	    //view: 'month',
	    width: 320,
	    height: 320,
			// startWeek: 0,
	    // selectedRang: [new Date(), null],
	    data: data,
	    date: now,
	    onSelected: function (view, date, data) {
	        console.log('view:' + view)
	        console.log('date:' + date)
	        console.log('data:' + data);
	    },
	    viewChange: function (view, y, m) {
	        console.log(view, y, m)
	    }
	});
});
