// ===== Scroll Reveal Sections =====
const sections = document.querySelectorAll(".section");
window.addEventListener("scroll", reveal);

function reveal(){
  sections.forEach(sec =>{
    const top = sec.getBoundingClientRect().top;
    const view = window.innerHeight - 100;
    if(top < view){ sec.classList.add("show"); }
  });
}
reveal();



// ===== Contact Form (Email Ready) =====
// optional only if using EmailJS
// emailjs.init("YOUR_PUBLIC_KEY");

// document.querySelector(".contact-form").addEventListener("submit", e=>{
//   e.preventDefault();
//   alert("Message Sent Successfully!");
// });
