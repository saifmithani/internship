document.getElementById("subscribeBtn").addEventListener("click", function () {
    const fname = document.getElementById("fname").value.trim();
    const lname = document.getElementById("lname").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message");

    if (fname === "" || lname === "" || email === "") {
        message.style.color = "red";
        message.textContent = "Please fill all fields.";
        return;
    }

    if (!email.includes("@")) {
        message.style.color = "red";
        message.textContent = "Please enter a valid email.";
        return;
    }

    message.style.color = "green";
    message.textContent = `Thank you ${fname}! You are subscribed 🎉`;

    // Clear inputs
    document.getElementById("fname").value = "";
    document.getElementById("lname").value = "";
    document.getElementById("email").value = "";
});