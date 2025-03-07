// function to check if a year is a leap year
function checkLeapYear() {
    let year = document.getElementById("year").value;
    year = parseInt(year); // convert input to integer


    if (isNaN(year)) {
        alert("Please enter a valid year.");
        return; // stops the execution of the function
    }

    let isLeap = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
    let days = isLeap ? 366 : 365;
    let notLeapText = `It's <span style="color:rgb(238, 68, 68)">not</span> a leap year.`;
    let message = isLeap ? "It's a leap year!" : notLeapText;

    // i-empty yung mga elements na to para di madisplay yung Leap Year text na nanggaling sa checkLeapYearsLived()
    document.getElementById("leap-text").innerHTML = ""; 
    document.getElementById("year-text").innerHTML = ""; 

    // set text inside the overlay
    document.getElementById("yearText").innerHTML = `The year <strong>${year}</strong> has`;
    document.getElementById("daysText").innerHTML = `<span style="letter-spacing: -10px;">${days}</span><span style="font-size: 100px;">days</span>`;
    document.getElementById("messageText").innerHTML = message;

    // show overlay
    let overlay = document.getElementById("overlay");
    overlay.classList.add("show");
}

// function to check the current year
function checkCurrentYear() {
    let currentYear = new Date().getFullYear();
    document.getElementById("year").value = currentYear;
    checkLeapYear();
}

// function to check leap years lived
function checkLeapYearsLived() {
    let birthYear = document.getElementById("birthYear").value;
    birthYear = parseInt(birthYear); //convert to int

    if (isNaN(birthYear)) {
        alert("Please enter a valid birth year.");
        return; 
    }

    // variable to store the current year
    let currentYear = new Date().getFullYear();
    // check if birth year is lagpas sa current year
    if (birthYear > currentYear) {
        alert("Birth year cannot be in the future.");
        return;
    }

    let leapYears = 0;
    //leap year counter
    for (let year = birthYear; year <= currentYear; year++) {
        if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
            leapYears++;
        }
    }

    let message = leapYears > 0 
        ? "—extra days just for you!"
        : "You haven't lived through any leap years yet.";

    // set overlay text
    document.getElementById("yearText").innerHTML = `Since <b>${birthYear}</b>, you’ve experienced`;
    document.getElementById("daysText").innerHTML = `${leapYears}`;
    document.getElementById("leap-text").innerHTML = `<span style="font-size: 150px; font-family: sans-serif; margin: 0;">leap</span>`;
    document.getElementById("year-text").innerHTML = `<span style="font-size: 150px; font-family: sans-serif; margin: 0;">year</span>`;
    document.getElementById("messageText").innerHTML = message;

    // show overlay
    let overlay = document.getElementById("overlay");
    overlay.classList.add("show");
}



// function to hide the overlay pag nagclick sa overlay
function hideOverlay() {
    let overlay = document.getElementById("overlay");
    overlay.classList.remove("show");

     // clear the input fields pag nagclick sa overlay
    document.getElementById("year").value = "";
    document.getElementById("birthYear").value = "";
}

// event listeners for buttons
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("checkCurrentYearBtn").addEventListener("click", checkCurrentYear);
    document.getElementById("checkYearBtn").addEventListener("click", checkLeapYear);
    document.getElementById("checkLivedLeapYearsBtn").addEventListener("click", checkLeapYearsLived);

    // event listener for overlay
    document.getElementById("overlay").addEventListener("click", hideOverlay);
});
