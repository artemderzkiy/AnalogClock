(function() {
	'use strict';

const secArrow = document.querySelector('.arrow-second');
const minArrow = document.querySelector('.arrow-minute');
const hourArrow = document.querySelector('.arrow-hour');

	function setDate() {
		const now = new Date();
		const seconds = now.getSeconds();		
		const minutes = now.getMinutes();		
		const hours = now.getHours();
		console.log(hours + " " + minutes + " " + seconds);
		const secondsDeg= (seconds/60)*360 + 90;
		const minutesDeg= (minutes/60)*360 + 90;
		const hoursDeg= (hours/12)*360 + 90;
		secArrow.style.transform=`rotate(${secondsDeg}deg)`
		minArrow.style.transform=`rotate(${minutesDeg}deg)`
		hourArrow.style.transform=`rotate(${hoursDeg}deg)`
	}

	 setInterval(setDate, 1000) 

	}())