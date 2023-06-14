import './style.css'

const applyFooter = document.querySelector('.apply-btn');
const modal = document.querySelector('.modal')
const applyForm = document.getElementById('applyForm')
const thanks = document.querySelector('.thanks')


applyFooter.addEventListener('click', () => {
  modal.classList.add('visible');
  document.body.style.overflow = 'hidden';
})


function closeModal() {
  thanks.classList.remove('visible');
  modal.classList.remove('visible');
  document.body.style.overflow = '';
}

document.addEventListener('click', (ev) => {
  if (ev.target.classList.contains('modal')) {
    closeModal()
  }

  if (ev.target.classList.contains('modal-close-btn') || ev.target.parentElement.classList.contains('modal-close-btn')) {
    closeModal()
  }
})

function reveal() {
  const animate = document.querySelectorAll('.animate')

  for (let i = 0; i < animate.length; i++) {
    let windowHeight = window.innerHeight;
    let elementTop = animate[i].getBoundingClientRect().top;
    let elementVisible = 440;
    if (elementTop < windowHeight - elementVisible) {
      animate[i].classList.add("scroll");
    }
  }
}

window.addEventListener('scroll', reveal)

applyForm.addEventListener('submit', (ev) => {
  ev.preventDefault();
  thanks.classList.add('visible');
  document.body.style.overflow = 'hidden';
})

const heroTitle = document.querySelector('.hero-title')
const heroImg = document.querySelector('.hero-img')

document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    heroTitle.classList.add('scroll')
    heroImg.classList.add('scroll')
  }, 1000)
})



