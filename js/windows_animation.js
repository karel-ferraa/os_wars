var div = document.querySelector("#wait_div");
var paragraph = document.createElement("p");
paragraph.textContent = "Working on updates: 1% complete\nDon't turn off your computer";
paragraph.id = "wait_text";
div.appendChild(paragraph);


const animationDuration = 5000;

document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
	let paragraph = document.querySelector("#wait_text");
	    paragraph.textContent = "Restarting...";
    }, animationDuration-1500);

    setTimeout(function() {
        
        const animationSection = document.getElementById("animation");
        if (animationSection) {
            document.body.removeChild(animationSection);
        }

        // Display elements of the page that were hidden
        var elements = document.querySelectorAll(".pageContent");
        for (var i = 0; i < elements.length; i++) {
            elements[i].style.display = 'block';
        }

        // Change colors and font size
        document.body.style.background = "radial-gradient(circle, #afc7e1, #90c5e8)";
        document.body.style.color = "rgb(19, 8, 119)";
        document.body.style.fontSize = "1em";

    }, animationDuration);
});
