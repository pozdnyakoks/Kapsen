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

const animationEl = document.querySelectorAll('.animate')
console.log(animationEl)

// window.addEventListener('scroll', () => {

// const observer = new IntersectionObserver((entries) => {
//   entries.forEach((entry) => {
//     // console.log(entry)
//     // console.log(entry.isIntersecting)
//     if (entry.isIntersecting) {
//       entry.target.classList.add('scroll')
//     }
//     // else {
//     //   entry.target.classList.remove('scroll')
//     // }

//   })
// }
//   ,
//   {
//     threshold: 1
//   }
// );


// for (let i = 0; i < animationEl.length; i++) {
//   const elements = animationEl[i];
//   observer.observe(elements);
// }
// });
//


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
  }, 2000)
})



