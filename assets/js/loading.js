document.addEventListener("DOMContentLoaded", function () {
    // An array of image and video URLs to preload
    const assetUrls = [
        "https://res.cloudinary.com/dyve8u6cx/video/upload/v1704965580/0A95E5A4-84B8-40B3-8463-B85405671B8F_ij0usz.mov",
        "https://res.cloudinary.com/dyve8u6cx/video/upload/v1705029784/andy_cxuqqa.wav"
    ];

    // Counter to track loaded assets
    let loadedCount = 0;
    let totalAssets = assetUrls.length;

    // Function to update the loading bar
    function updateLoadingBar() {
        loadedCount++;
        const progress = (loadedCount / totalAssets) * 100;
        const loadingBar = document.querySelector(".loader-bar");
        loadingBar.style.width = progress + "%";

        if (loadedCount === totalAssets) {
            // All assets are loaded, smoothly complete the loading bar animation
            loadingBar.style.animation = "complete-progress 0.5s linear forwards";
            showSoundOptions();
            // Hide the loading screen after the animation completes
            // setTimeout(function () {
            //     document.querySelector(".loading-screen").style.display = "none";
            //     // Display the content once the loading screen is hidden
            //     document.querySelector(".content").style.display = "block";
            
            // }, 500); // Adjust the duration to match your animation time
        }
    }

    // Preload images and videos
    assetUrls.forEach(function (url) {
        const asset = new Image(); // Use Image for images, or create video elements for videos
        asset.src = url;
        asset.onload = updateLoadingBar;
        asset.onerror = updateLoadingBar; // Handle errors if needed
    });
    
     // Function to display sound options
     function showSoundOptions() {
        const soundOptions = document.querySelector(".sound-options"); // Make sure this exists in your HTML
        soundOptions.style.display = "block"; // Show the sound options
    }

    // Event listeners for the sound options buttons
    document.querySelector(".sound-on").addEventListener("click", function() {
        handleSoundChoice(true);
    });

    document.querySelector(".sound-off").addEventListener("click", function() {
        handleSoundChoice(false);
    });

    // Function to handle sound choice and reveal content
    function handleSoundChoice(soundOn) {
        // Here you can set the sound state of your website based on `soundOn`
        // For example, mute or unmute videos, background music, etc.

        // Hide the loading screen and show the content
        document.querySelector(".loading-screen").style.display = "none";
        document.querySelector(".content").style.display = "block";
    }
});
