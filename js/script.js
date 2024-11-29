// Three.js for Background Animation
const canvas = document.querySelector("#heroCanvas");
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);

const geometry = new THREE.TorusKnotGeometry(10, 3, 100, 16);
const material = new THREE.MeshStandardMaterial({ color: 0xff6347 });
const torusKnot = new THREE.Mesh(geometry, material);
scene.add(torusKnot);

const pointLight = new THREE.PointLight(0xffffff, 1);
pointLight.position.set(20, 20, 20);
scene.add(pointLight);

camera.position.z = 30;

function animate() {
  requestAnimationFrame(animate);
  torusKnot.rotation.x += 0.01;
  torusKnot.rotation.y += 0.01;
  renderer.render(scene, camera);
}
animate();

window.addEventListener("resize", () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
});

// GSAP Hero Animations
gsap.from("#hero h1", { duration: 1.5, opacity: 0, y: -50, ease: "power2.out" });
gsap.from("#hero p", { duration: 1.8, opacity: 0, y: 50, ease: "power2.out", delay: 0.5 });
gsap.from("#hero a", { duration: 2, opacity: 0, scale: 0.8, ease: "power2.out", delay: 1 });
// About Section Animations with GSAP
gsap.from("#about img", {
  scrollTrigger: {
    trigger: "#about",
    start: "top 80%",
    toggleActions: "play none none none",
  },
  x: -100,
  opacity: 0,
  duration: 1.2,
  ease: "power2.out",
});

gsap.from("#about h2, #about p, #about a", {
  scrollTrigger: {
    trigger: "#about",
    start: "top 80%",
    toggleActions: "play none none none",
  },
  y: 50,
  opacity: 0,
  duration: 1,
  stagger: 0.3,
  ease: "power2.out",
});
// Skills Section Animations with GSAP
gsap.from("#skills .flex", {
  scrollTrigger: {
    trigger: "#skills",
    start: "top 80%",
    toggleActions: "play none none none",
  },
  y: 50,
  opacity: 0,
  duration: 1,
  stagger: 0.3,
  ease: "power2.out",
});
// Projects Section Animations with GSAP
gsap.from("#projects .bg-gray-900", {
  scrollTrigger: {
    trigger: "#projects",
    start: "top 80%",
    toggleActions: "play none none none",
  },
  y: 50,
  opacity: 0,
  duration: 1,
  stagger: 0.3,
  ease: "power2.out",
});
// Contact Section Animation
gsap.from("#contact form", {
  scrollTrigger: {
    trigger: "#contact",
    start: "top 80%",
    toggleActions: "play none none none",
  },
  y: 50,
  opacity: 0,
  duration: 1,
  ease: "power2.out",
});
// Footer Social Media Animation
gsap.from("footer .flex a", {
  scrollTrigger: {
    trigger: "footer",
    start: "top 90%",
    toggleActions: "play none none none",
  },
  opacity: 0,
  y: 20,
  stagger: 0.2,
  duration: 1,
  ease: "power2.out",
});


// Animate Hero Section
gsap.from("#home h1", {
  duration: 1.5,
  opacity: 0,
  y: -50,
  ease: "power2.out",
});

gsap.from("#home p", {
  duration: 1.8,
  opacity: 0,
  y: 50,
  ease: "power2.out",
});

gsap.from("#home a", {
  duration: 2,
  opacity: 0,
  scale: 0.8,
  ease: "power2.out",
});

// Skills Section
gsap.from("#skills .flex", {
  scrollTrigger: {
    trigger: "#skills",
    start: "top 80%",
    toggleActions: "play none none none",
  },
  opacity: 0,
  y: 50,
  stagger: 0.2,
  duration: 1,
});

// Projects Section
gsap.from("#projects .bg-gray-900", {
  scrollTrigger: {
    trigger: "#projects",
    start: "top 80%",
    toggleActions: "play none none none",
  },
  opacity: 0,
  y: 50,
  stagger: 0.3,
  duration: 1,
});

// Footer Social Icons
gsap.from("footer .flex a", {
  scrollTrigger: {
    trigger: "footer",
    start: "top 90%",
    toggleActions: "play none none none",
  },
  opacity: 0,
  y: 20,
  stagger: 0.2,
  duration: 1,
  ease: "power2.out",
});
// Parallax Scrolling with Three.js
let mouseX = 0, mouseY = 0;

document.addEventListener("mousemove", (e) => {
  mouseX = (e.clientX / window.innerWidth) * 2 - 1;
  mouseY = (e.clientY / window.innerHeight) * 2 - 1;
});

function animateParallax() {
  requestAnimationFrame(animateParallax);
  sphere.position.x += (mouseX * 2 - sphere.position.x) * 0.05;
  sphere.position.y += (-mouseY * 2 - sphere.position.y) * 0.05;
  renderer.render(scene, camera);
}
animateParallax();
// Modal Functionality
const modal = document.getElementById("project-modal");
const modalClose = document.getElementById("modal-close");
const modalTitle = document.getElementById("modal-title");
const modalDescription = document.getElementById("modal-description");
const modalImage = document.getElementById("modal-image");
const modalLink = document.getElementById("modal-link");

document.querySelectorAll(".project-card").forEach((card) => {
  card.addEventListener("click", () => {
    modalTitle.textContent = card.dataset.title;
    modalDescription.textContent = card.dataset.description;
    modalImage.src = card.dataset.image;
    modalLink.href = card.dataset.link;
    modal.classList.remove("hidden");
  });
});

modalClose.addEventListener("click", () => {
  modal.classList.add("hidden");
});

// Loading Spinner
window.addEventListener("load", () => {
  document.getElementById("loading-spinner").style.display = "none";
});

gsap.from("#skills .flex", {
  opacity: 0,
  y: 50,
  duration: 1.2,
  ease: "power3.out",
  stagger: 0.3
});
document.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    console.log(`Navigating to ${link.href}`);
  });
});
