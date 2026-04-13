document.getElementById("trackBtn").addEventListener("click", function () {

    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {

        let url = tabs[0].url;

        fetch("http://127.0.0.1:8000/api/track/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                website: url,
                time_spent: 10
            })
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            alert("Data sent successfully!");
        })
        .catch(error => {
            console.error(error);
            alert("Error sending data");
        });

    });

});