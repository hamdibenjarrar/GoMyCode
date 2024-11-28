// Smooth Scroll for navigation
const links = document.querySelectorAll("nav a");
links.forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();
        document.querySelector(e.target.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});
// Three.js for Hero Section Background
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.querySelector("#home").appendChild(renderer.domElement);

const geometry = new THREE.SphereGeometry(1, 32, 32);
const material = new THREE.MeshStandardMaterial({ color: 0xff6347 });
const sphere = new THREE.Mesh(geometry, material);
scene.add(sphere);

const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(10, 10, 10);
scene.add(pointLight);

camera.position.z = 5;

function animate() {
    requestAnimationFrame(animate);
    sphere.rotation.x += 0.01;
    sphere.rotation.y += 0.01;
    renderer.render(scene, camera);
}
animate();

window.addEventListener("resize", () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
});

// GSAP Animations
gsap.registerPlugin(ScrollTrigger);

// Hero Section Animation
gsap.from("#home h1", {
    duration: 1,
    opacity: 0,
    y: -50,
    ease: "power2.out"
});

gsap.from("#home p", {
    duration: 1.5,
    opacity: 0,
    y: 50,
    ease: "power2.out",
    delay: 0.5
});

gsap.from("#home a", {
    duration: 2,
    opacity: 0,
    scale: 0.8,
    ease: "power2.out",
    delay: 1
});

// Skills Animation
gsap.from("#skills .flex", {
    scrollTrigger: {
        trigger: "#skills",
        start: "top 80%",
        toggleActions: "play none none none"
    },
    opacity: 0,
    y: 50,
    duration: 1,
    stagger: 0.2
});

// Projects Animation
gsap.from("#projects .bg-gray-900", {
    scrollTrigger: {
        trigger: "#projects",
        start: "top 80%",
        toggleActions: "play none none none"
    },
    opacity: 0,
    y: 50,
    duration: 1,
    stagger: 0.3
});

// Contact Section Animation
gsap.from("#contact form", {
    scrollTrigger: {
        trigger: "#contact",
        start: "top 80%",
        toggleActions: "play none none none"
    },
    opacity: 0,
    y: 50,
    duration: 1
});
