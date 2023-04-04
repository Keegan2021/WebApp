var settingsButton = document.getElementById('settings-button');
var settingsPane = document.getElementById('settings-pane');


settingsButton.addEventListener('click', function() {
    if (settingsPane.style.display === 'block') {
        closeSettingsPane();
    } else {
        openSettingsPane();
    } 
});

document.addEventListener('click', function(event) {
    // If settings Pane is not displayed dont do anything.
    if (settingsPane.style.display === 'none' ) {
        return
    }
    // Check if the clicked element is outside the settings pane
    if (event.target != settingsButton && !settingsPane.contains(event.target)) {
        closeSettingsPane();
    }
});

function openSettingsPane() {
    settingsPane.style.display = 'block';
    settingsButton.style.transform = "rotate(10deg)";
    setTimeout(function() {
        settingsButton.style.transform = "rotate(20deg)";
    }, 10);
    setTimeout(function() {
        settingsButton.style.transform = "rotate(30deg)";
    }, 20);
}

function closeSettingsPane() {
    settingsPane.style.display = 'none';
    settingsButton.style.transform = "rotate(20deg)";
    setTimeout(function() {
        settingsButton.style.transform = "rotate(10deg)";
    }, 10);
    setTimeout(function() {
        settingsButton.style.transform = "rotate(0deg)";
    }, 20);
}