// Initialize GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Create floating shapes for background
const floatingShapes = document.getElementById('floatingShapes');
for (let i = 0; i < 15; i++) {
  const shape = document.createElement('div');
  shape.classList.add('shape');

  const size = Math.random() * 100 + 50; 
  shape.style.width = `${ size }px`;
  shape.style.height = `${ size }px`;

  const colors = [
    'rgba(255, 107, 107, 0.3)',
    'rgba(255, 209, 102, 0.3)',
    'rgba(74, 111, 165, 0.3)',
    'rgba(78, 205, 196, 0.3)'
  ];
  shape.style.background = colors[Math.floor(Math.random() * colors.length)];

  shape.style.left = `${ Math.random() * 100 }%`;
  shape.style.top = `${ Math.random() * 100 }%`;

  floatingShapes.appendChild(shape);

  // Animate shapes
  gsap.to(shape, {
    x: Math.random() * 100 - 50,
    y: Math.random() * 100 - 50,
    rotation: Math.random() * 360,
    duration: Math.random() * 10 + 10,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut"
  });
}

// Animate hero elements to come out of screen
gsap.fromTo('.hero-title',
  { opacity: 0, z: -500, rotationX: 90 },
  {
    opacity: 1, z: 0, rotationX: 0, duration: 1.5, ease: "power3.out",
    scrollTrigger: {
      trigger: '.hero-title',
      start: 'top 80%',
      toggleActions: 'play none none reverse'
    }
  }
);

gsap.fromTo('.hero-subtitle',
  { opacity: 0, z: -300, rotationY: 30 },
  {
    opacity: 1, z: 0, rotationY: 0, duration: 1.2, delay: 0.3, ease: "power2.out",
    scrollTrigger: {
      trigger: '.hero-subtitle',
      start: 'top 80%',
      toggleActions: 'play none none reverse'
    }
  }
);

gsap.fromTo('.cta-button',
  { opacity: 0, scale: 0.5, z: -200 },
  {
    opacity: 1, scale: 1, z: 0, duration: 1, delay: 0.6, ease: "back.out(1.7)",
    scrollTrigger: {
      trigger: '.cta-button',
      start: 'top 80%',
      toggleActions: 'play none none reverse'
    }
  }
);

// Animate section titles
gsap.fromTo('.section-title',
  { opacity: 0, z: -300, rotationY: 20 },
  {
    opacity: 1, z: 0, rotationY: 0, duration: 1,
    scrollTrigger: {
      trigger: '.section-title',
      start: 'top 85%',
      toggleActions: 'play none none reverse'
    }
  }
);

// Animate about section
gsap.fromTo('.about-text',
  { opacity: 0, x: -100, z: -200 },
  {
    opacity: 1, x: 0, z: 0, duration: 1,
    scrollTrigger: {
      trigger: '.about-content',
      start: 'top 80%',
      toggleActions: 'play none none reverse'
    }
  }
);

gsap.fromTo('.about-image',
  { opacity: 0, x: 100, z: -200 },
  {
    opacity: 1, x: 0, z: 0, duration: 1, delay: 0.3,
    scrollTrigger: {
      trigger: '.about-content',
      start: 'top 80%',
      toggleActions: 'play none none reverse'
    }
  }
);

// Animate program cards to come out of screen
gsap.fromTo('.program-card',
  { opacity: 0, z: -300, rotationY: 20 },
  {
    opacity: 1, z: 0, rotationY: 0, duration: 1, stagger: 0.2,
    scrollTrigger: {
      trigger: '.programs-grid',
      start: 'top 80%',
      toggleActions: 'play none none reverse'
    }
  }
);

// Animate faculty cards
gsap.fromTo('.faculty-card',
  { opacity: 0, z: -200, scale: 0.8 },
  {
    opacity: 1, z: 0, scale: 1, duration: 0.8, stagger: 0.15,
    scrollTrigger: {
      trigger: '.faculty-grid',
      start: 'top 80%',
      toggleActions: 'play none none reverse'
    }
  }
);

// Animate contact section
gsap.fromTo('.contact-info',
  { opacity: 0, x: -100, z: -200 },
  {
    opacity: 1, x: 0, z: 0, duration: 1,
    scrollTrigger: {
      trigger: '.contact-container',
      start: 'top 80%',
      toggleActions: 'play none none reverse'
    }
  }
);

gsap.fromTo('.contact-form',
  { opacity: 0, x: 100, z: -200 },
  {
    opacity: 1, x: 0, z: 0, duration: 1, delay: 0.3,
    scrollTrigger: {
      trigger: '.contact-container',
      start: 'top 80%',
      toggleActions: 'play none none reverse'
    }
  }
);

// Add mouse move parallax effect
document.addEventListener('mousemove', (e) => {
  const moveX = (e.clientX - window.innerWidth / 2) * 0.01;
  const moveY = (e.clientY - window.innerHeight / 2) * 0.01;

  gsap.to('.hero-title', { x: moveX * 2, y: moveY * 2, duration: 1 });
  gsap.to('.hero-subtitle', { x: moveX * 1.5, y: moveY * 1.5, duration: 1 });
  gsap.to('.cta-button', { x: moveX, y: moveY, duration: 1 });

  gsap.to('.program-card', { x: moveX * 0.5, y: moveY * 0.5, duration: 1 });
  gsap.to('.faculty-card', { x: moveX * 0.3, y: moveY * 0.3, duration: 1 });
});

// Add interactive hover effects for cards
document.querySelectorAll('.program-card, .faculty-card').forEach(card => {
  card.addEventListener('mouseenter', () => {
    gsap.to(card, {
      z: 50,
      rotationY: 5,
      rotationX: 5,
      duration: 0.5,
      ease: "power2.out"
    });

    if (card.querySelectorAll('.floating-element').length > 0) {
      gsap.to(card.querySelectorAll('.floating-element'), {
        scale: 1.2,
        duration: 0.5,
        stagger: 0.1
      });
    }
  });

  card.addEventListener('mouseleave', () => {
    gsap.to(card, {
      z: 0,
      rotationY: 0,
      rotationX: 0,
      duration: 0.5,
      ease: "power2.out"
    });

    if (card.querySelectorAll('.floating-element').length > 0) {
      gsap.to(card.querySelectorAll('.floating-element'), {
        scale: 1,
        duration: 0.5
      });
    }
  });
});

// Button click effect
document.querySelectorAll('.cta-button').forEach(button => {
  button.addEventListener('click', (e) => {
    gsap.to(button, {
      scale: 0.9,
      duration: 0.1,
      yoyo: true,
      repeat: 1
    });

    // Create a ripple effect
    const ripple = document.createElement('div');
    ripple.style.position = 'fixed';
    ripple.style.width = '20px';
    ripple.style.height = '20px';
    ripple.style.borderRadius = '50%';
    ripple.style.background = 'rgba(255, 255, 255, 0.5)';
    ripple.style.pointerEvents = 'none';
    ripple.style.zIndex = '1000';
    document.body.appendChild(ripple);

    gsap.fromTo(ripple,
      {
        x: e.clientX - 10,
        y: e.clientY - 10,
        scale: 0,
        opacity: 1
      },
      {
        scale: 20,
        opacity: 0,
        duration: 1,
        onComplete: () => {
          document.body.removeChild(ripple);
        }
      }
    );
  });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const targetId = this.getAttribute('href');
    if (targetId === '#') return;

    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  });
});