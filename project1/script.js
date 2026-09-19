function calculateAge() {
    let dob = document.getElementById("dob").value;
    let result = document.getElementById("result");

    if (dob === "") {
        result.innerHTML = "Please select your date of birth!";
        return;
    }

    let birthDate = new Date(dob);
    let today = new Date();

    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    if (days < 0) {
        months--;
        let prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
        days += prevMonth.getDate();
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    result.innerHTML = 
        `Your Age is <br>
         ${years} Years, ${months} Months, ${days} Days`;
}
