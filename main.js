import './style.css'
import catalog, { catalogItem } from './src/assets/js/catalog';


const applyFooter = document.querySelector('.apply-btn');
const modal = document.getElementById('apply')
const applyForm = document.getElementById('applyForm')
const availableForm = document.getElementById('availableForm')
const thanks = document.getElementById('thanksForApply')
const availableModel = document.getElementById('availableModel')
const thanksForAvailable = document.getElementById('thanksForAvailable')

// открыть модальное окно
applyFooter.addEventListener('click', () => {
  modal.classList.add('visible');
  document.body.style.overflow = 'hidden';
})

// закрыть модальное окно
function closeModal() {
  thanks.classList.remove('visible');
  modal.classList.remove('visible');
  thanksForAvailable.classList.remove('visible');
  availableModel.classList.remove('visible');
  document.body.style.overflow = '';
}
// закрыть модальное окно
document.addEventListener('click', (ev) => {
  if (ev.target.classList.contains('modal')) {
    closeModal()
  }
  if (ev.target.classList.contains('modal-close-btn') || ev.target.parentElement.classList.contains('modal-close-btn')) {
    closeModal()
  }
})

// анимация блоков на главной
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


// открыть модальное окно со спасибо после сабмита
applyForm.addEventListener('submit', (ev) => {
  ev.preventDefault();
  thanks.classList.add('visible');
  document.body.style.overflow = 'hidden';
})
availableForm.addEventListener('submit', (ev) => {
  ev.preventDefault();
  thanksForAvailable.classList.add('visible');
  document.body.style.overflow = 'hidden';
})

const heroTitle = document.querySelector('.hero-title')
const heroImg = document.querySelector('.hero-img')
const loader = document.querySelector('.loader')

// лоадер
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


const catalogList = document.getElementById('catalog-list');
catalogList.insertAdjacentHTML('beforeend', catalog());

const filteredCatalogs = document.querySelectorAll('.catalogFilter');

// фильтрация каталога
filteredCatalogs.forEach(filteredCatalog => {
  const filteredList = filteredCatalog.querySelector('.catalog-list')
  filteredList.insertAdjacentHTML('beforeend', catalog(filteredCatalog.dataset.filter))
})




const catalogItemEl = document.getElementById('catalogItem')
let curr = '';

// отменить дефолтный переход по ссылкам внутри сайта
function linksPath() {
  const links = document.querySelectorAll('a');
  // console.log(links)
  links.forEach(el => {
    if (el.getAttribute('href')[0] === '/') {
      el.addEventListener('click', (ev) => {
        ev.preventDefault()
        // console.log(el.dataset.model)
        if (el.dataset.model) {
          // console.log('jjj')
          catalogItemEl.querySelector('.container').innerHTML = '';
          catalogItemEl.querySelector('.container').insertAdjacentHTML('beforeend', catalogItem(el.dataset.model))
          changeActiveSize()
          linksPath();
          askForAvailable();
        }

        const prevPath = window.location.pathname;
        // console.log(el.getAttribute('href'))
        history.pushState({
          prevUrl: prevPath, currUrl: el.getAttribute('href')
        }, 'link', el.getAttribute('href'));
        curr = el.getAttribute('href');
        // console.log(window.history.state)
        changePath(prevPath, window.location.pathname)
      })
    }
  })
}
linksPath();


// переход по ссылкам с анимацией
function changePath(prevPath, path) {
  window.scrollTo(0, 0);

  const possiblePaths = ['all', 'steer', 'drive', 'trailer', 'longhaul', 'onoffroad', 'offroad'];
  let selector = path.slice(1);
  let prevSelector = prevPath.slice(1);
  if (path.split('/').length > 2) {
    // console.log('path3')
    const lastPath = possiblePaths.find(el => el === path.split('/')[path.split('/').length - 1])
    selector = lastPath === undefined ? 'catalogItem' : selector;
  }
  if (prevPath.split('/').length > 2) {
    // console.log('prevpath3')
    const lastPath = possiblePaths.find(el => el === prevPath.split('/')[prevPath.split('/').length - 1])
    prevSelector = lastPath === undefined ? 'catalogItem' : prevSelector;
  }

  const home = document.getElementById('home');

  // console.log(prevPath)
  // console.log(path)

  // console.log(selector)
  // console.log(prevSelector)

  if (path === '/' && prevPath === '/') {
    // console.log('equal home')
    home.classList.add('block', 'visible');
  }

  else if (path === prevPath) {
    if (path.split('/').length > 2) {
      if (!possiblePaths.find(el => el === path.split('/')[path.split('/').length - 1])) {
        catalogItemEl.querySelector('.container').innerHTML = '';
        catalogItemEl.querySelector('.container').insertAdjacentHTML('beforeend', catalogItem())
        changeActiveSize()
        linksPath()
        askForAvailable()
      }
    }
    document.getElementById(selector).classList.add('block', 'visible');
  }

  else if (path !== prevPath && prevPath === '/') {
    // console.log('from home')
    // 
    home.classList.remove('visible');
    setTimeout(() => {
      home.classList.remove('block')
      document.getElementById(selector).classList.add('block');
      document.getElementById(selector).classList.add('visible')
    }, 600)
  }

  else if (path !== prevPath && path === '/') {
    // console.log('to home')

    document.getElementById(prevSelector).classList.remove('visible');
    setTimeout(() => {
      home.classList.add('block')
      document.getElementById(prevSelector).classList.remove('block');
      home.classList.add('visible')
    }, 600)
  }

  else {
    // console.log('else')
    document.getElementById(prevSelector).classList.remove('visible');
    setTimeout(() => {
      document.getElementById(prevSelector).classList.remove('block');
      document.getElementById(selector).classList.add('block');
      document.getElementById(selector).classList.add('visible')
    }, 600)

  }

  // header links
  // активная ссылка в хэдере
  const headerLinks = document.querySelectorAll('.header-nav-list-item-link');
  headerLinks.forEach(link => {
    if (link.getAttribute('href') === path) {
      link.classList.add('active')
    } else {
      link.classList.remove('active')
    }
  })
}

const cartCount = document.querySelector('.cart-count');

window.addEventListener('popstate', () => {
  // console.log(window.location.pathname)
  // console.log(window.history.state)
  const sections = document.querySelectorAll('section');

  window.scrollTo(0, 0);
  const path = window.location.pathname;
  // console.log(path)
  const possiblePaths = ['all', 'steer', 'drive', 'trailer', 'longhaul', 'onoffroad', 'offroad'];
  let selector = path.slice(1);
  // console.log(selector)
  if (path.split('/').length > 2) {
    const lastPath = possiblePaths.find(el => el === path.split('/')[path.split('/').length - 1])
    selector = lastPath === undefined ? 'catalogItem' : selector;
  }

  const home = document.getElementById('home');

  sections.forEach(section => {
    section.classList.remove('block', 'visible')
  })

  if (path === '/') home.classList.add('block', 'visible');
  else document.getElementById(selector).classList.add('block', 'visible')


  const headerLinks = document.querySelectorAll('.header-nav-list-item-link');
  headerLinks.forEach(link => {
    if (link.getAttribute('href') === path) {
      link.classList.add('active')
    } else {
      link.classList.remove('active')
    }
  })
})



function changeActiveSize() {
  document.querySelectorAll('.open-btn-add').forEach(button => {
    button.addEventListener('click', () => {

      button.classList.remove('open-btn-add')
      button.classList.add('open-btn-incart')
      button.innerHTML = `<a href="/cart">в корзине</a>`

      if (!localStorage.getItem('kapsenCart'))
        localStorage.setItem('kapsenCart', JSON.stringify({ [button.dataset.name]: [button.dataset.size] }));
      else {
        const lsObj = localStorage.getItem('kapsenCart');
        const lsName = JSON.parse(lsObj)
        console.log(lsName)
        if (lsName[button.dataset.name] === undefined) {

          lsName[button.dataset.name] = [button.dataset.size]
          localStorage.setItem('kapsenCart', JSON.stringify(lsName))
        }
        else {
          JSON.parse(localStorage.getItem('kapsenCart'))
          lsName[button.dataset.name] = [...lsName[button.dataset.name], button.dataset.size]
          localStorage.setItem('kapsenCart', JSON.stringify(lsName))

        }


      }
      cartCount.textContent = String(Number(++cartCount.textContent))
    })
  })


  if (localStorage.getItem('kapsenCart') !== null) {
    const lsObj = localStorage.getItem('kapsenCart');
    const lsName = JSON.parse(lsObj)
    let count = 0;
    for (let models in lsName) {
      count += models.length
    }
    if (count > 0) {
      cartCount.classList.add('visible');
      cartCount.textContent = String(count)
    }
  }

  const sizes = document.querySelectorAll('.catalog-size-row')
  sizes.forEach(size => {
    size.addEventListener('click', () => {
      sizes.forEach(el => {
        el.querySelector('.open-btn').classList.remove('visible')
        el.classList.remove('open-size')
      })
      size.querySelector('.open-btn').classList.add('visible')
      size.classList.add('open-size');
    })
  })
}

// window.addEventListener('storage', () => {
//   console.log('hhh')
//   if (localStorage.getItem('kapsenCart') !== null) {
//     console.log(JSON.parse(localStorage.getItem('kapsenCart')))
//   }
// })

// window.addEventListener('storage', () => {
//   alert('session storage variable value changed');
// });

function askForAvailable() {
  document.querySelectorAll('.open-btn-out').forEach(button => {
    button.addEventListener('click', () => {
      availableModel.classList.add('visible')
      document.body.style.overflow = 'hidden';
      availableModel.querySelector('#availableTextarea').value = `Пожалуйста, сообщите мне, когда модель ${button.dataset.name} размера ${button.dataset.size} появится в наличии`
    })
  })
}

