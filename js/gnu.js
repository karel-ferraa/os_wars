function submitForm() {
        // Hide the form
	let form = document.querySelector("#form");
	form.style.display = "none";
	
        // Display elements of the page that were hidden
        var elements = document.querySelectorAll(".pageContent");
        for (var i = 0; i < elements.length; i++) {
            elements[i].style.display = 'block';
        }
}
