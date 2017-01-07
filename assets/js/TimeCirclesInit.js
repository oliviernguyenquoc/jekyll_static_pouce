$(".clock").TimeCircles({
	animation: "ticks",
	//circle_bg_color: "#000000",
	fg_width: 0.05,
	use_background: false,
	time: {
		Days: { 
			color: "#009688",
			text: "Jour",
			show: false
		},
    	Hours: { 
    		color: "#009688",
    		text: "Heures"
		},
    	Minutes: { 
    		color: "#009688",
    		text: "Minutes"
		},
    	Seconds: { 
    		color: "#009688",
    		text: "Secondes"
		}
	}
});

var date1 = new Date();
var datadate = $(".clock_day").attr( 'data-date' );
var date2 = Date.parse(datadate);
var diff = new Date(date2 - date1);
var days = Math.floor(diff / 1000 / 60 / 60 / 24);

$(".clock_day").replaceWith(
	'<span class="clock_day" style="font-size: 100px;">'+ days +'</span>'
);
