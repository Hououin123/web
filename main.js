document.addEventListener("DOMContentLoaded", function() {
        // Get all the flower leaf elements
        const flowers = document.querySelectorAll('.flower__leaf');
        let currentIndex = 0;
        let changing = true;
    
        function changeColor() {
            if (changing) {
                // Change one flower's color to yellow every 2 seconds
                flowers[currentIndex].classList.add('yellow');
                flowers[currentIndex].classList.remove('blue');
                currentIndex++;
    
                // When all flowers are yellow, wait 3 seconds, then change them all back to blue
                if (currentIndex >= flowers.length) {
                    changing = false;
                    setTimeout(() => {
                        flowers.forEach(flower => {
                            flower.classList.add('blue');
                            flower.classList.remove('yellow');
                        });
                        currentIndex = 0;
                        changing = true; // Reset to start changing color again
                    }, 3000); // 3 seconds delay for all to change back to blue
                } else {
                    setTimeout(changeColor, 2000); // Call itself after 2 seconds
                }
            }
        }
    
        // Initialize all flowers as blue
        flowers.forEach(flower => flower.classList.add('blue'));
    
        // Start the color change sequence
        setTimeout(changeColor, 2000); // Initial delay of 2 seconds
    });
    
onload = () =>{
        document.body.classList.remove("container");
};
