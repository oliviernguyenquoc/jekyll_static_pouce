$(".clock").TimeCircles({
	animation: "ticks",
	//circle_bg_color: "#000000",
	fg_width: 0.05,
	use_background: false,
	time: {
		Days: { 
			color: "#009688",
			text: "Jour"
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
