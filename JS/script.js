const animationDuration = 500;


document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('container');

    function createCoin() {
        const coin = document.createElement('div'); // a div element represents a coin
        coin.className = 'coin';

        // Set a random position horizontally
        coin.style.left = `${Math.random() * window.innerWidth}px`;

        // Speed of the fall
        coin.style.animationDuration = `${1.5 + Math.random() * 5}s`;

        // Add the new coin to the end of the child list of container in the DOM
        container.appendChild(coin);

        // Remove the coin from the container once the animation is over
        coin.addEventListener('animationend', function() {
            container.removeChild(coin);
        });
    }

    // Creates coins every 50ms
    const interval = setInterval(createCoin, 50);

    // Stop creating coins and clear the container after 5 seconds
    setTimeout(function() {
        clearInterval(interval);

        // Remove all coins from the container
        while (container.firstChild) {
            container.removeChild(container.firstChild);
        }
        // Change background color to white
        document.body.style.backgroundColor = 'white';

        //allow the page to scroll again
        document.body.style.overflow = 'scroll';
        

        //remove all element from body
        /*
        while (document.body.firstChild){
            document.body.removeChild(document.body.firstChild);
        }*/
        const animationSection = document.getElementById("animation");
        if (animationSection) {
            document.body.removeChild(animationSection);
        }

        // Display elements of the page that were hidden
        var elements = document.querySelectorAll("#pageContent");
        for (var i = 0; i < elements.length; i++) {
            elements[i].style.display = 'block';
        }

    }, animationDuration);

    
});

