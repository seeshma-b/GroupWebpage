/**
 * Toggles the display of an individual team member's bio
 * @param {string} bioId - The ID of the bio section to show or hide
 */
function toggleBio(bioId) {
    const bio = document.getElementById(bioId);
    // Toggle between showing and hiding the bio section
    if (bio.style.display === "none" || bio.style.display === "") {
        bio.style.display = "block";
    } else {
        bio.style.display = "none";
    }
}

/**
 * Shows the specified section ('bios' or 'vision') and hides the other
 * @param {string} sectionId - The ID of the section to display
 */
function showSection(sectionId) {
    const biosSection = document.getElementById("bios");
    const visionSection = document.getElementById("vision");

    // Display the bios section and hide the vision section
    if (sectionId === "bios") {
        biosSection.style.display = "flex";
        visionSection.style.display = "none";
    }
    // Display the vision section and hide the bios section
    else if (sectionId === "vision") {
        biosSection.style.display = "none";
        visionSection.style.display = "block";
    }
}
    let currentSlide = 0;

    function moveSlide(direction) {
        const track = document.querySelector('.carousel-track');
        const slides = document.querySelectorAll('.carousel-track img');
        currentSlide = (currentSlide + direction + slides.length) % slides.length;
        const offset = -currentSlide * 100;
        track.style.transform = `translateX(${offset}%)`;
    }

document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".tj-carousel-track img");
    let currentIndex = 0;

    // Set the first image as visible initially
    images[currentIndex].classList.add("active");

    // Add click event to fade to the next image
    images.forEach((img) => {
        img.addEventListener("click", () => {
            images[currentIndex].classList.remove("active");

            // Move to the next image, loop back to the start if at the end
            currentIndex = (currentIndex + 1) % images.length;

            images[currentIndex].classList.add("active");
        });
    });
});