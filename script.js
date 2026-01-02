      const hamburger = document.querySelector(".hamburger");
      const navMenu = document.querySelector(".navbar-list");
      const navLinks = document.querySelectorAll(".nav-item");

      hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
      });

      navLinks.forEach((link) => {
        link.addEventListener("click", () => {
          hamburger.classList.remove("active");
          navMenu.classList.remove("active");
        });
      });

      const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: .5
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("mulai-spin");
            } else {
                entry.target.classList.remove("mulai-spin");
            }
        });
    }, observerOptions);

    const targetGambar = document.querySelector(".about-image-wrapper");
    if (targetGambar) {
        observer.observe(targetGambar);
    } else {
        console.log("Element .about-image-wrapper tidak ditemukan!");
    }
    
    // TYPING EFFECT 
    const textElement = document.querySelector(".typing-text");
    const words = ["Munji", "Gilang",];
    
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    
    const typeEffect = () => {
        const currentWord = words[wordIndex];
        const currentChars = currentWord.substring(0, charIndex);
        
        textElement.textContent = currentChars;
        
        let typeSpeed = isDeleting ? 100 : 200;
        
        if (!isDeleting && charIndex < currentWord.length) {
            charIndex++;
        } else if (isDeleting && charIndex > 0) {
            charIndex--;
        } else {
            isDeleting = !isDeleting;
            
            if (!isDeleting) {
                wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;
            } else {
                typeSpeed = 2000;
            }
        }
        
        setTimeout(typeEffect, typeSpeed);
    }
    
    if (textElement) {
        typeEffect();
    }