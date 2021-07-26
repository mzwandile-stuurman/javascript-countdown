let x = setInterval(function(){
    const setdate = new Date('June 16 2022');
    const today = new Date();
    const difference = setdate -today;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);
    document.querySelector(".timer").innerHTML = `
    <span class = "circle">Days ${days}</span>
    <span class = "circle">Hours ${hours}</span>
    <span class = "circle">minutes ${minutes}</span>
    <span class = "circle">Seconds ${seconds}</span>
    to my birth day.
    
    `
},1000)