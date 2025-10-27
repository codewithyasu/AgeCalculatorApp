function calculateAge() {
    let dob = document.getElementById("dob").value;
    if (!dob) return alert("Please select your Date of Birth")

    const BirthDate = new Date(dob)
    const today = new Date()

    let years = today.getFullYear() - BirthDate.getFullYear()
    let months = today.getMonth() - BirthDate.getMonth()
    let days = today.getDate() - BirthDate.getDate()

    if (days < 0) {
        months--;
        const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0)
        days += prevMonth.getDate()
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    //total days lived 
    const totalDaysLived = Math.floor((today - BirthDate) / (1000 * 60 * 60 * 24))

    //Next bdy 
    const nextBirthday = new Date(today.getFullYear(), BirthDate.getMonth(), BirthDate.getDate())
    if (today > nextBirthday) nextBirthday.setFullYear(today.getFullYear() + 1)
    const diff = nextBirthday - today
    const daysToBirthday = Math.floor(diff / (1000 * 60 * 60 * 24))

    //Display result
    document.getElementById("age").innerHTML =
        `You are <strong>${years}</strong> years, <strong>${months}</strong> months, and <strong>${days}</strong> days old.`;

    document.getElementById("totalDays").innerHTML =
        `🗓️ Total days lived: <strong>${totalDaysLived.toLocaleString()}</strong>`;

    document.getElementById("nextBdy").innerHTML =
        `🎉 Next birthday in <strong>${daysToBirthday}</strong> days.`;

    document.getElementById("result").classList.remove("hidden");


}

function clearAll() {
    document.getElementById("dob").value = "";
    document.getElementById("result").classList.add("hidden");
}

function copyResult() {
    const ageText = document.getElementById("age").innerText;
    const totalDays = document.getElementById("totalDays").innerText;
    const nextBday = document.getElementById("nextBdy").innerText;
    const fullText = `${ageText}\n${totalDays}\n${nextBday}`;

    navigator.clipboard.writeText(fullText)
        .then(() => alert("Copied to clipboard ✅"))
        .catch(() => alert("Failed to copy ❌"));
}