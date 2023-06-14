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
  }, 2000)
})


const links = document.querySelectorAll('a');
links.forEach(el => {
  if (el.getAttribute('href')[0] === '/') {
    el.addEventListener('click', (ev) => {
      ev.preventDefault()

      const prevPath = window.location.pathname;
      history.pushState({}, 'link', el.getAttribute('href'));
      changePath(prevPath, window.location.pathname)
    })
  }
})

function changePath(prevPath, path) {
  const home = document.getElementById('home');
  const selector = path.slice(1);
  const prevSelector = prevPath.slice(1);

  if (path === '/' && prevPath === '/') {
    home.classList.add('block', 'visible');
  }

  else if (path === prevPath) {
    document.getElementById(selector).classList.add('block', 'visible');
  }

  else if (path !== prevPath && prevPath === '/') {
    home.classList.remove('visible');

    setTimeout(() => {
      home.classList.remove('block')
      document.getElementById(selector).classList.add('block');
      document.getElementById(selector).classList.add('visible')
    }, 600)
  }

  else if (path !== prevPath && path === '/') {
    document.getElementById(prevSelector).classList.remove('visible');
    setTimeout(() => {
      home.classList.add('block')
      document.getElementById(prevSelector).classList.remove('block');
      home.classList.add('visible')
    }, 600)
  }

  else {
    document.getElementById(prevSelector).classList.remove('visible');
    // setTimeout(() => {
    document.getElementById(prevSelector).addEventListener('transitionend', () => {
      document.getElementById(prevSelector).classList.remove('block')
      document.getElementById(selector).classList.add('block');
      document.getElementById(selector).classList.add('visible')

    })
    // }, 600)

  }

  // header links
  const headerLinks = document.querySelectorAll('.header-nav-list-item-link');
  headerLinks.forEach(link => {
    if (link.getAttribute('href') === path) {
      link.classList.add('active')
    } else {
      link.classList.remove('active')
    }
  })
}

changePath(window.location.pathname, window.location.pathname)


