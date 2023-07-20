import modals from "./src/assets/js/modals.js";
import footer from "./src/assets/js/footer.js";
import header from "./src/assets/js/header.js";
import validate from "./src/assets/js/formValidation.js";
const app = document.getElementById('app')

app.insertAdjacentHTML('afterbegin', header())
app.insertAdjacentHTML('afterbegin', modals())
app.insertAdjacentHTML('beforeend', footer())
document.querySelector('main').insertAdjacentHTML('afterbegin', `<button class="hero-btn" aria-label="обратная связь">
        <picture>
          <source srcset="./src/assets/images/icons/messages-tab.svg" media="(max-width: 1200px)" />
          <img src="./src/assets/images/icons/messages.svg" alt="обратная связь">
        </picture>
      </button>`)



function setFavicons(favImg) {
  let headTitle = document.querySelector('head');
  let setFavicon = document.createElement('link');
  setFavicon.setAttribute('rel', 'shortcut icon');
  setFavicon.setAttribute('href', favImg);
  headTitle.appendChild(setFavicon);
}
setFavicons('./src/assets/images/favicons/Icon32.ico');
setFavicons('./src/assets/images/favicons/Icon152.ico');
setFavicons('./src/assets/images/favicons/Icon32.png');
setFavicons('./src/assets/images/favicons/Icon152.png');

let meta = document.createElement('meta');
meta.name = "keywords"
meta.content = 'грузовые шины, грузовые шины kapsen, грузовые шины капсен, капсен, kapsen, купить грузовые шины, грузовые шины 22.5, шины + для грузовых автомобилей, грузовая шина 315, отзыв грузовых шин, грузовые шины 70, грузовые шины 75, давление + в грузовых шинах, грузовые шины 17.5, грузовые шины кама, Грузовые шины бу, грузовые шины 385, протектор грузовых шин, купить грузовые шины 22.5, грузовой индекс шин, грузовые шины r 22.5, грузовые шины цена, грузовые шины r20, грузовые шины 65, шины грузовые 17.5 75, грузовые шины 215,грузовая шина рулевая, давление + в шинах грузового автомобиля, авито грузовые шины, грузовые шины r16, нагрузка грузовых шин, таблица грузовых шин, размеры грузовых шин, ремонт грузовых шин,грузовые шины 315 70, грузовые шины 385 65, продажа грузовых шин, ось грузовых шин, шины грузовые 75 купить, китайские грузовые шины, индекс нагрузки грузовых шин, купить шины 17.5 грузовые, грузовые шины 215 75, купить грузовые шины бу, протектор шин грузового автомобиля, грузовые шины екатеринбург, грузовые шины б + у, шины грузовые 70 купить, грузовые шины ведущие  843,шины грузовые 315 купить, грузовые шины + в москве, грузовые шины 22, грузовые шины 19.5, грузовые шины 315 80 22.5';
document.getElementsByTagName('head')[0].appendChild(meta);



const burgerBtnApply = document.getElementById('burgerApply');
const applyFooter = document.getElementById('footer-btn');
const modal = document.getElementById('apply')
const applyForm = document.getElementById('applyForm')
const availableForm = document.getElementById('availableForm')
const thanks = document.getElementById('thanksForApply')
const availableModel = document.getElementById('availableModel')
const thanksForAvailable = document.getElementById('thanksForAvailable')
const heroBtn = document.querySelector('.hero-btn')

// открыть модальное окно
function openModal() {
  modal.classList.add('visible');
  document.body.style.overflow = 'hidden';
}

heroBtn.addEventListener('click', openModal)
burgerBtnApply.addEventListener('click', openModal)
applyFooter.addEventListener('click', openModal)

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
  if (ev.target.classList.contains('modal-close-btn') || ev.target.parentElement.classList.contains('modal-close-btn') || ev.target.parentElement.parentElement.classList.contains('modal-close-btn')) {
    closeModal()
  }
})


// открыть модальное окно со спасибо после сабмита
applyForm.addEventListener('submit', (ev) => {
  ev.preventDefault();
  let isError = false;
  const inputs = applyForm.querySelectorAll('input');
  inputs.forEach(el => el.value === '' ? el.classList.add('error') : '');
  validate(applyForm)
  inputs.forEach(input => {
    if (input.classList.contains('error')) isError = true
  })

  if (!isError) {
    submit(applyForm);
    applyForm.reset();
    thanks.classList.add('visible');
    document.body.style.overflow = 'hidden';
  }
})
// отправка данных и открытие окна со спасибо
availableForm.addEventListener('submit', (ev) => {
  ev.preventDefault();
  let isError = false;
  const inputs = availableForm.querySelectorAll('input');
  inputs.forEach(el => el.value === '' ? el.classList.add('error') : '');
  validate(availableForm)
  inputs.forEach(input => {
    if (input.classList.contains('error')) isError = true
  })

  if (!isError) {
    submit(availableForm);
    availableForm.reset();
    thanksForAvailable.classList.add('visible');
    document.body.style.overflow = 'hidden';
  }
})

// елси в корзине что-то есть - отобразить
const cartCount = document.querySelector('.cart-count');
const mobileCartCount = document.querySelector('.mobile-cart-count');
let countItems = 0;
if (localStorage.getItem('kapsenCart') !== null) {
  const lsObj = localStorage.getItem('kapsenCart');
  const lsName = JSON.parse(lsObj)
  for (let models in lsName) {
    countItems += lsName[models].length
  }
  if (countItems > 0) {
    cartCount.classList.add('visible');
    mobileCartCount.classList.add('visible');
    cartCount.textContent = countItems
    mobileCartCount.textContent = countItems
  } else {
    cartCount.classList.remove('visible');
    mobileCartCount.classList.remove('visible');

  }
}

const burger = document.querySelector('.header-burger');
const burgerMenu = document.querySelector('.burger-menu');
burger.addEventListener('click', () => {
  burger.classList.toggle('active')
  burgerMenu.classList.toggle('active')
})


let url = window.location.pathname;
const headerLinks = document.querySelectorAll('.header-nav-list-item-link');
headerLinks.forEach(link => {
  if (link.getAttribute('href') === url) {
    link.classList.add('active')
  } else {
    link.classList.remove('active')
  }
})

async function submit(thisForm) {
  let formData = new FormData(thisForm);
  const request = new XMLHttpRequest();
  request.open("POST", "/mail.php", true);
  request.send(formData);
}


document.querySelectorAll('input[name="tel"]').forEach(input => {

  input.addEventListener('input', () => {
    const notNumbers = /\D/;
    const val = input.value;
    const repl = val.replace(notNumbers, '');
    input.value = repl;
  })

})