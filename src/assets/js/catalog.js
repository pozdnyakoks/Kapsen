import tyres from './../../../tyres.json';

function catalogItem(item) {

  const row = item.sizes.map(size => {
    return `
      <div class="catalog-item-table-row title4 ">
        <p>${size.size}</p>
        <p>${size.PR}</p>
        <p>${size.standartRim}</p>
        <p>${size.loadIndexSpeedRating}</p>
        <p>${size.outerDiameter}</p>
        <p>${size.sectionWidth}</p>
        <p>${size.maxLoad}</p>
        <p>${size.maxPressure}</p>
        <p>${size.price}</p>
      </div>
`
  }).join('');

  return `
   <div class="catalog-item-main">
      <img class="catalog-item-main-img" src=${item.img} alt=${item.name}>
      <div class="catalog-item-main-info">
        <h2 class="title1 catalog-item-main-title">${item.name}</h2>
        <p class="catalog-item-main-desc title4">${item.desc}</p>
      </div>
    </div>

    <div class="catalog-item-table">
      <div class="catalog-item-table-row title4 catalog-item-table-row-thead">
        <p>Размер</p>
        <p>Норма слойности</p>
        <p>Стандартный колесный&nbsp;диск</p>
        <p>Индекс нагрузки</p>
        <p>Наружный диаметр&nbsp;(mm)</p>
        <p>Ширина шины&nbsp;(mm)</p>
        <p>Максимальная нагрузка&nbsp;(kg)
          одинарная&nbsp;/&nbsp;двойная</p>
        <p>Максимальное
          давление&nbsp;(KPA)</p>
        <p>Цена</p>
      </div>
      ${row}
    </div>

  `

}

// {
//   "name": "",
//     "description": "",
//       "img": "",
//         "road": "",
//           "position": "",
//             "sizes": [
//               {
//                 "size": "",
//                 "PR": "",
//                 "standartRim": "",
//                 "loadIndexSpeedRating": "",
//                 "outerDiameter": "",
//                 "sectionWidth": "",
//                 "maxLoad": "",
//                 "maxPressure": "",
//                 "price": ""
//               }
//             ]
// },

export default function catalog() {
  // console.log('kkk')
  return tyres.tyres.map(tyre =>
    ` <li class="catalog-list-item">
        <img src=${tyre.img} alt=${tyre.name}>
        <div class="catalog-list-item-block">
          <button class="catalog-list-item-btn title3">
            ПОДРОБНЕЕ
          </button>
          <h3 class="catalog-list-item-title">${tyre.name}</h3>
        </div>
      </li>`
  ).join('')
}