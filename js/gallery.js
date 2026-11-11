
// Function 1: Update the main image
function upDate(previewPic) {

    console.log("upDate function activated");

    // Get the image inside the selected figure
    var image = previewPic.querySelector("img");

    // Get the alternative text
    var text = image.alt;

    // Get the main image area
    var mainImage = document.getElementById("image");

    // Update the text
    mainImage.innerHTML = text;

    // Update the background image
    mainImage.style.backgroundImage = "url('" + image.src + "')";
}


// Function 2: Restore the original image
function unDo() {

    console.log("unDo function activated");

    var mainImage = document.getElementById("image");

    // Restore the original text
    mainImage.innerHTML =
        "Hover over or focus on an image below to display it here.";

    // Remove the background image
    mainImage.style.backgroundImage = "";
}


// Function 3: Add tabindex automatically
function addTabIndex() {

    console.log("addTabIndex function activated");

    // Select all gallery figures
    var figures = document.querySelectorAll(".gallery-item");

    // Loop through every figure
    for (var i = 0; i < figures.length; i++) {

        // Add tabindex to make each figure accessible
        figures[i].setAttribute("tabindex", "0");
    }
}
