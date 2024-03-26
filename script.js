document.getElementById("startButton").addEventListener("click", function() {
    var inputDate = document.getElementById("birthdayDate").value;
    var validDate = "2004-03-27"; // Desired date

    if (inputDate) { // Check if a date has been selected
        if (inputDate === validDate) { // Check if the selected date is correct
            // Hide the button and display birthday wishes
            document.getElementById("startButton").style.display = "none";
            document.getElementById("restartButton").style.display = "inline-block";
            document.getElementById("birthdayTitle").style.display = "none";
            document.getElementById("birthdayWishes").style.display = "block";
            document.getElementById("emojis").style.display = "block";

            // Generate and append emojis
            const emojis = ["🎉", "💞", "🎂", "🥳", "🎈", "🎁", "🎊", "😍", "🌟", "🍫","❣","💋","🎇","🤗","🤩","😍"];
            const emojiContainer = document.getElementById("emojis");
            for (let i = 0; i < 50; i++) {
                const emoji = document.createElement("span");
                emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
                emoji.classList.add("emoji");
                emoji.style.left = `${Math.random() * 100}vw`;
                emoji.style.animationDuration = `${Math.random() * 3 + 1}s`;
                emojiContainer.appendChild(emoji);
            }
        } else {
            alert("Incorrect date. Please select the correct date.");
        }
    } else {
        alert("Please select a date.");
    }
});

document.addEventListener("DOMContentLoaded", function() {
    // Find the start button by its ID
    const heart1button = document.getElementById("restartButton");

    // Add event listener to the start button
    restartButton.addEventListener("click", function() {
        // Navigate to the songs page
        window.location.href = "songs.html";
    });
});
document.addEventListener("DOMContentLoaded", function() {
    // Find the heart-shaped button by its class
    const heart2Button = document.querySelector("songsButton");

    // Add event listener to the heart-shaped button
    songsButton.addEventListener("click", function() {
        // Navigate to the images page
        window.location.href = "images.html";
    });
});
document.addEventListener("DOMContentLoaded", function() {
    // Find the heart-shaped button by its ID
    const heart3button = document.getElementById("heart3button");

    // Add event listener to the last button
    lastButton.addEventListener("click", function() {
        // Navigate to the last page
        window.location.href = "last.html";
    });
});




