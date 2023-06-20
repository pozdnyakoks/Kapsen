import tyres from './../../../tyres.json';

export default function cart() {
  const deliveryPrice = 2500;
  if (localStorage.getItem('kapsenCart') === null) {
    return `
      <p class="path contacts-path title4"><a class="path-link" href="/">Главная — </a>Корзина</p>
      <div class="cart-empty cart-block">
        <h2 class="title2 empty-cart-title">В Корзине пока совсем ничего нет :(</h2>
      </div>
      <a href="/catalog" class="modal-form-btn cart-btn">перейти в каталог</a>
  `}

  // if (sumbmit) {
  //   return `
  //     <div class="cart-block cart-done">
  //       <img src="./src/assets/images/icons/ok.svg" alt="выполнено">
  //       <h2 class="title2 cart-done-title">БЛАГОДАРИМ ЗА ЗАКАЗ!</h2>
  //       <p class="cart-done-desc title2">Мы свяжемся с вами совсем скоро, чтобы уточнить детали.</p>
  //     </div>
  //     <a href="/" class="modal-form-btn cart-btn">вернуться на главную</a>
  // `}

  if (localStorage.getItem('kapsenCart') !== null) {
    const lsData = JSON.parse(localStorage.getItem('kapsenCart'));
    const arr = tyres.tyres.map(el => {
      if (lsData.hasOwnProperty(el.name)) return {
        sizes: el.sizes,
        name: el.name,
        img: el.img
      }
    }).filter(el => el !== undefined);

    let sum = 0;
    const res = arr.map(element => {
      let str = ''
      element.sizes.forEach(size => {
        if (lsData[element.name].find(el => el == size.size)) {
          sum += Number(size.price);
          str += `
         <li class="cart-list-item">
            <img class="cart-list-item-img" src=${element.img} alt=${element.name}">
            <div class="cart-list-item-info">
              <h2 class="cart-list-item-title title2">${element.name}</h2>
              <p class="cart-list-item-desc title4">${size.size}/${size.PR}/${size.standartRim}/${size.loadIndexSpeedRating}/${size.outerDiameter}/${size.sectionWidth}/${size.maxLoad}/${size.maxPressure}</p>
              <div class="cart-list-item-count">
                <button class="cart-list-item-less cart-list-item-btn"><img
                    src="./src/assets/images/icons/arrow-left.svg" alt="меньше"></button>
                <input class="cart-list-item-number" type="number" value="1">
                <button class="cart-list-item-more cart-list-item-btn"><img
                    src="./src/assets/images/icons/arrow-left.svg" alt="больше"></button>
                <button class="cart-list-item-delete title4">Удалить из корзины</button>
              </div>
            </div>
            <p class="class-list-item-price title3">${size.price} ₽</p>
          </li>
        `
        }
      })
      return str

    })

    return `
      <p class="path contacts-path title4"><a class="path-link" href="/">Главная — </a>Корзина</p>
      <div class="cart-block cart-full">
        <ul class="cart-list">
        ${res.join('')}
        </ul>

        <div class="cart-tabs-block">
          <div class="cart-tabs">
            <button id="deliveryTab" class="active cart-tabs-button title3">Доставка</button>
            <button id="pickupTab" class="cart-tabs-button title3"> Самовывоз</button >
          </div >

          <div id="deliveryTabContent" class="active cart-tabcontent">
            <div class="delivery-tab-info">
              <img src="./src/assets/images/icons/empty-wallet-small.svg" alt="кошелек">
              <span class="cart-tabcontent-price title3">2 500₽</span>
            </div>
            <p class="cart-tabcontent-desc title4">Kapsen — это бренд китайского производителя Shandong Hongsheng
              Rubber Co., Ltd. шин для всех типов транспортных средств.Шины компании Shandong Huasheng Rubber Co.,
              Ltd
              экспортируются в Европу, Америку, Ближний Восток, Африку и Юго-Восточную Азию. Предлагаемые
              высококачественные шины приобретают все больше и больше партнеров.Наш магазин примечателен, тем, что
              мы
              также предоставляем услуги шиномонтажа для грузовых автомобилей.</p>
          </div>

          <div id="pickupTabContent" class="cart-tabcontent">
            <div class="delivery-tab-info">
              <img src="./src/assets/images/icons/empty-wallet-small.svg" alt="кошелек">
              <span class="cart-tabcontent-price title3">бесплатно</span>
            </div>
            <p class="cart-tabcontent-desc title4">Kapsen — это бренд китайского производителя Shandong Hongsheng
              Rubber Co., Ltd. шин для всех типов транспортных средств.Шины компании Shandong Huasheng Rubber Co.,
              Ltd
              экспортируются в Европу, Америку, Ближний Восток, Африку и Юго-Восточную Азию. Предлагаемые
              высококачественные шины приобретают все больше и больше партнеров.Наш магазин примечателен, тем, что
              мы
              также предоставляем услуги шиномонтажа для грузовых автомобилей.</p>
            <div class="delivery-tab-info">
              <img src="./src/assets/images/icons/location.svg" alt="гео метка">
              <span class="cart-tabcontent-price title3">улица Беломорская 69/17, г. Казань</span>
            </div>
            <div class="delivery-tab-info">
              <img src="./src/assets/images/icons/radar.svg" alt="гео метка">
              <span class="cart-tabcontent-price title3">с 10:00 до 20:00</span>
            </div>
            <div class="delivery-tab-info">
              <img src="./src/assets/images/icons/warning-2.svg" alt="гео метка">
              <span class="cart-tabcontent-price title3">без перерывов и выходных</span>
            </div>
          </div>
          <p class="cart-sum title3">ИТОГО:<span id="total" class="title3 cart-total">${sum + deliveryPrice}</span><span class="title3 cart-total">₽</span></p>
        </div >
      </div >

      <form action="/" class="cart-form">
        <input class="cart-form-input title4" type="text" placeholder="Ваше имя">
        <input class="cart-form-input title4" type="tel" placeholder="Ваш телефон">
        <input class="cart-form-input title4" type="email" placeholder="Ваш email">
        <input class="cart-form-input title4 cart-form-input-address" type="text" placeholder="Адрес доставки">
        <div class="select-wrapper" id="payFormWrapper">
          <select class="cart-form-select cart-form-choose" name="payForm" id="payForm">
            <option class="cart-form-select-option" value="">Выбрать способ оплаты</option>
            <option class="cart-form-select-option" value="cash">Наличными при получении</option>
            <option class="cart-form-select-option" value="card">Картой при получении</option>
            <option class="cart-form-select-option" value="cardOnline">Картой онлайн</option>
            <option class="cart-form-select-option" value="requisites">Перевод по реквизитам</option>
          </select>
        </div>
        <div class="select-wrapper" id="cartCalendarWrapper">
          <input class="cart-form-calendar cart-form-choose" type="date" id="cartCalendar"
            placeholder="Выбрать дату">
        </div>
        <div class="select-wrapper" id="timeWrapper">
          <select class="cart-form-select cart-form-choose" name="time" id="time">
            <option value="" class="cart-form-select-option">Выбрать время</option>
            <option value="10-12" class="cart-form-select-option">10:00 - 12:00</option>
            <option value="12-16" class="cart-form-select-option">12:00 - 16:00</option>
            <option value="16-18" class="cart-form-select-option">16:00 - 18:00</option>
            <option value="18-21" class="cart-form-select-option">18:00 - 21:00</option>
          </select>
        </div>
        <textarea class="cart-form-textarea title4" name="commentToApply" id="commentToApply" cols="30" rows="10"
          placeholder="Комментарий к заказу"></textarea>

      </form>
      `

  }
}

