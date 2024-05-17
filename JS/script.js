document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('container');

    function createCoin(){
        const coin = document.createElement('div') /*a div element represent a coin*/
        coin.className = 'coin';

        /*Set a random position on horinzontally*/
        coin.style.left = `${Math.random() * window.innerWidth}px`;

        /*speed of the fall */
        coin.style.animationDuration = `${1.5 + Math.random() * 5}s`;


        /*Add the new coin to the end of the child list of container in the DOM*/
        container.appendChild(coin);

        /*Take of the coin of the container once the animationned is over*/
        coin.addEventListener('animationend', function() {
            container.removeChild(coin);
        });
    }

        
            
        // Creates coins every 50ms
        setInterval(createCoin, 50);
        
        // Redirect toward the  apple.html after a given time
        setTimeout(function() {
            window.location.href = "../html/apple.html";
        }, 5000);

    

});