/*class Good {
  name = 'aquanir'
  price = 120
  color
  constructor (name,price) {
    this.name = name
    this.price = price
  }
  publicStatus() {
    console.log('I am a color');
  }
}
console.log(Good)

const Aquanir = new Good()
console.log(Aquanir);
Aquanir.publicStatus()

const Nyrocryl = new Good('Nyrocryl', 140)
console.log(Nyrocryl)
Nyrocryl.publicStatus()

class Button {
  text = ''
  constructor(text) {
    this.text = text
  }

  onBtnClick() {
    console.log('Clicked!');
  }

  getTamplate() {
    const btn = document.createElement('button')
    btn.classList.add('btn')

    return btn
  }
  
  _render() {
    const placeToReneder = document.querySelector('.btns')
    if(placeToReneder) {
      const btn = this.getTamplate()
      btn.innerHTML = this.text
      placeToReneder.appendChild(btn)

      btn.addEventListener('click', () => {
        this.onBtnClick()
      })
    }
  }
}

class AddGood extends Button {
  constructor(text) {
    super(text)
  }
  getTamplate() {
    const btn = document.createElement('button')
    btn.classList.add('btn')

    return btn
  }
  onBtnClick() {
    console.log('Added!');
  }
}

class WishButton extends Button {
  getTamplate() {
    const btn = document.createElement('button')
    btn.classList.add('btn', 'btn-wish')
    
    return btn
  }
}

const addToCart = new Button('Add to cart')
const addGood = new AddGood('+')
const wishButton = new WishButton('')

const btns = [addToCart, addGood, wishButton]

btns.forEach(btn => {
  btn._render()
})*/

class List {
  items = []

  constructor () {
    let goods = this.fetchGoods()
    goods = goods.map(cur => {
      return new GoodItem(cur)
    })
    this.items.push(...goods)
    this.render()
  }

  fetchGoods() {
    return [
      { name: 'Aquanir', price: 100 },
      { name: 'Hypersid Extra', price: 80 },
      { name: 'Nirocryl 100 Extra', price: 90 },
      { name: 'Nirocryl 2000 Extra', price: 140 },
      { name: 'Nirocryl 2000 Extra White', price: 140 },
      { name: 'Nirocryl For The Bath', price: 120 },
      { name: 'Niroplast', price: 150 },
      { name: 'Polyurethane For Exterior', price: 160 },
      { name: 'Wondercryl', price: 110 },
      { name: 'Wonderspeed', price: 110 }
    ]
  }

  render() {
    console.log(this.items);
    this.items.forEach(good => {
      good.render()
    })
  }
}

class Cart {
  
}

class GoodItem {
  name = ''
  price = 0

  constructor({ name, price }) {
    this.name = name
    this.price = price
  }
  onBlockClick() {
    console.log('Add!');
    const PlaceToAdd = document.querySelector('.cart')
    if (PlaceToAdd) {
      const block = document.createElement('div')
      block.innerHTML = `<p class="good-info">Product: ${this.name}<br>Price: ${this.price}</p>`
      PlaceToAdd.appendChild(block)
    }
  }

  render() {
    const placeToRender = document.querySelector('.goods-list')
    if (placeToRender) {
      const block = document.createElement('div')
      block.classList.add('good-card')
      block.innerHTML = `<p class="good-info">Product: ${this.name}<br>Price: ${this.price}</p>`
      placeToRender.appendChild(block)
      block.addEventListener('click', () => {
        this.onBlockClick()
      })
    }
  }
}

const ListInstance = new List()

class Button {
  text = ''
  constructor(text) {
    this.text = text
  }

  onBtnClick() {
    console.log('Added!');
  }

  getTamplate() {
    const btn = document.createElement('button')
    btn.classList.add('btn')

    return btn
  }
  
  _render() {

    const placeToBtn = document.querySelector('.good-card')
    console.log(placeToBtn);
    
    if(placeToBtn) {
      const btn = this.getTamplate()
      btn.innerHTML = this.text
      placeToBtn.appendChild(btn)

      btn.addEventListener('click', () => {
        this.onBtnClick()
      })
    }
  }
}

const addToCart = new Button('Add to cart')
addToCart._render()