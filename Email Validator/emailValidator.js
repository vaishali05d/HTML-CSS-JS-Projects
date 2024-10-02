// Log a message to the console to indicate that the script is running
console.log("Script is running");

// Get the button element by its ID
const validateBtn = document.getElementById("validateBtn");

// Add an event listener to the button for the "click" event
validateBtn.addEventListener("click", async (e) => {
    e.preventDefault();
    console.log("Clicked");

    // Retrieve the value of the email input field
    let email = document.getElementById('email').value;

    // Construct the API URL with the email entered by the user
    let url = `https://api.emailvalidation.io/v1/info?apikey=ema_live_MQMovRNLEQnRZKh5CEiKcesJx7fTHma9374tF82b&email=${email}`;

    // Make an asynchronous request to the API using the Fetch API
    let res = await fetch(url);

    // Parse the JSON response from the API
    let resultShow = await res.json();

    const results = document.getElementById('results');
    let str = '';
    for (key of Object.keys(resultShow)) {
        str = str + `<div class="res"><b>${key}</b>: ${resultShow[key]}</div><br>`;

    }
    console.log(str);

    // Set the inner HTML of the results container to the constructed string
    results.innerHTML = str;
});

