	// Sticky Navbar
    let header = document.querySelector('header');
    let menu = document.querySelector('#menu-icon');
    let navbar = document.querySelector('.navbar');
     
     
    window.addEventListener('scroll', () => {
        header.classList.toggle('shadow', window.scrollY > 0);
    });
     
    menu.onclick = () => {
        navbar.classList.toggle('active');
    }
    window.onscroll = () => {
        navbar.classList.remove('active');
    }
     
    // Dark Mode
    let darkmode = document.querySelector('#darkmode');
     
    darkmode.onclick = () => {
        if(darkmode.classList.contains('bx-moon')){
            darkmode.classList.replace('bx-moon','bx-sun');
            document.body.classList.add('active');
        }else{
            darkmode.classList.replace('bx-sun','bx-moon');
            document.body.classList.remove('active');
        }
    }
    const words = ["Frontend Developer", "Frelancer","Mobile app Developer", "Web Developer","Desktop app Developer"];
        let i = 0;
        let timer;

        function typingEffect() {
            let word = words[i].split("");
            var loopTyping = function () {
                if (word.length > 0) {
                    document.getElementById('typing-text').innerHTML += word.shift();
                } else {
                    deletingEffect();
                    return false;
                }
                timer = setTimeout(loopTyping, 200);
            };
            loopTyping();
        }

        function deletingEffect() {
            let word = words[i].split("");
            var loopDeleting = function () {
                if (word.length > 0) {
                    word.pop();
                    document.getElementById('typing-text').innerHTML = word.join("");
                } else {
                    if (words.length > (i + 1)) {
                        i++;
                    } else {
                        i = 0;
                    }
                    typingEffect();
                    return false;
                }
                timer = setTimeout(loopDeleting, 100);
            };
            loopDeleting();
        }

        typingEffect();
        const currentYear = new Date().getFullYear();
        // Display the current year in the span with id "currentYear"
        document.getElementById("currentYear").textContent = currentYear;
        
        document.addEventListener('DOMContentLoaded', function () {
            const percentElements = document.querySelectorAll('.percentage');
            percentElements.forEach(function (percentElement) {
                const percent = parseInt(percentElement.textContent);
                const progressBar = percentElement.nextElementSibling.nextElementSibling;
                // Set custom property for width
                progressBar.style.setProperty('--percent', percent + '%');
            });
        });