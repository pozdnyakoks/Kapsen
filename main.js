import './style.css'
import catalog, { catalogItem } from './src/assets/js/catalog';


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
const loader = document.querySelector('.loader')
document.addEventListener('DOMContentLoaded', () => {
  // setTimeout(() => {
  loader.classList.add('hidden');
  changePath(window.location.pathname, window.location.pathname)

  setTimeout(() => {
    heroTitle.classList.add('scroll')
    heroImg.classList.add('scroll')
    loader.classList.add('none');
  }, 1000)
  // }, 5000)
})


const links = document.querySelectorAll('a');
links.forEach(el => {
  if (el.getAttribute('href')[0] === '/') {
    el.addEventListener('click', (ev) => {
      ev.preventDefault()

      const prevPath = window.location.pathname;
      history.pushState({ prevUrl: prevPath }, 'link', el.getAttribute('href'));
      // if (el.dataset.model) {
      //   console.log('hhh')
      //   const selector = window.location.pathname.slice(1);
      //   const prevSelector = prevPath.slice(1);
      //   document.getElementById(prevSelector).classList.remove('visible');
      //   document.getElementById(prevSelector).classList.remove('block')
      //   document.getElementById(selector).classList.add('block');
      //   document.getElementById(selector).classList.add('visible')
      //   // document.getElementById('catalogItem').insertAdjacentHTML('beforeend', catalogItem())
      //   catalogItem()


      // }
      // else {
      // if (el.dataset.filter) {

      // }
      console.log(el.dataset.model)
      changePath(prevPath, window.location.pathname)
      // }
    })
  }
})

function changePath(prevPath, path) {
  const home = document.getElementById('home');
  const selector = path.slice(1);
  const prevSelector = prevPath.slice(1);
  console.log(prevPath)
  console.log(path)

  if (path === '/' && prevPath === '/') {
    // console.log('equal main')

    home.classList.add('block', 'visible');
  }

  else if (path === prevPath) {
    // console.log('equal paths')

    document.getElementById(selector).classList.add('block', 'visible');
  }

  else if (path !== prevPath && prevPath === '/') {
    // console.log('form main')

    home.classList.remove('visible');

    setTimeout(() => {
      home.classList.remove('block')
      document.getElementById(selector).classList.add('block');
      document.getElementById(selector).classList.add('visible')
    }, 600)
  }

  else if (path !== prevPath && path === '/') {
    // console.log('to main')

    document.getElementById(prevSelector).classList.remove('visible');
    setTimeout(() => {
      home.classList.add('block')
      document.getElementById(prevSelector).classList.remove('block');
      home.classList.add('visible')
    }, 600)
  }

  else {
    // console.log('else')

    // console.log(prevSelector)
    // console.log(selector)
    document.getElementById(prevSelector).classList.remove('visible');
    setTimeout(() => {
      // document.getElementById(prevSelector).addEventListener('transitionend', () => {
      document.getElementById(prevSelector).classList.remove('block')
      document.getElementById(selector).classList.add('block');
      document.getElementById(selector).classList.add('visible')

      // })
    }, 600)

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

const catalogList = document.getElementById('catalog-list');
catalogList.insertAdjacentHTML('beforeend', catalog());

const filteredCatalogs = document.querySelectorAll('.catalogFilter');

filteredCatalogs.forEach(filteredCatalog => {
  const filteredList = filteredCatalog.querySelector('.catalog-list')
  // console.log(filteredList)
  filteredList.insertAdjacentHTML('beforeend', catalog(filteredCatalog.dataset.filter))
})

// window.addEventListener('popstate', () => {
//   // console.log(document.referrer)
//   // const url = new URL(document.referrer)
//   // console.log(url.pathname)
//   console.log(window.history.state)
//   if (window.history.state == null) {
//     changePath('/', window.location.pathname)
//   } else {
//     console.log(window.history.state.prevUrl)
//     console.log(window.location.pathname)
//     changePath(window.history.state.prevUrl, window.location.pathname)

//   }
//   // console.log(window.history.state.prevUrl)
//   // console.log(window.location.pathname)
//   // const prevPath = window.location.pathname;
//   // history.pushState({}, 'link', el.getAttribute('href'));
// })



