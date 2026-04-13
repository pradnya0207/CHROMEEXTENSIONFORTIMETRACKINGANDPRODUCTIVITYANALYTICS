let startTime = {};
let currentTab = "";

chrome.tabs.onActivated.addListener(activeInfo => {

    chrome.tabs.get(activeInfo.tabId, function(tab) {

        if (!tab.url) return;

        let newTab = tab.url;

        if (currentTab !== "") {

            let endTime = Date.now();
            let timeSpent = Math.floor((endTime - startTime[currentTab]) / 1000);

            fetch("http://127.0.0.1:8000/api/track/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    website: currentTab,
                    time_spent: timeSpent
                })
            });

        }

        currentTab = newTab;
        startTime[currentTab] = Date.now();

    });

});