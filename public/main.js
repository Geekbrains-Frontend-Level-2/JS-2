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
      block.classList.add('good-cart')
      block.innerHTML = `<p class="good-info">Product: ${this.name}<br>Price: ${this.price}</p>`
      PlaceToAdd.appendChild(block)
      
      const counterPlus = new CounterButton('+')
      counterPlus._render()
      
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

    const placeToBtn = document.querySelectorAll('.good-card')
    console.log(placeToBtn);
    
      for (let i=0; i<placeToBtn.length; i++) {
        if(placeToBtn) {
        const btn = this.getTamplate()
        btn.innerHTML = this.text
        placeToBtn[i].appendChild(btn)

        btn.addEventListener('click', () => {
          this.onBtnClick()
        })
      }
    }
  }
}

class CounterButton extends Button {
  constructor(text) {
    super(text)
  }

  getTamplate() {
    const btn = document.createElement('button')
    btn.classList.add('btn')

    return btn
  }

  _render() {
    const placeToCounter = document.querySelectorAll('.good-cart')
    console.log(placeToCounter);
    
      for (let i=0; i<placeToCounter.length; i++) {
        if(placeToCounter) {
        const btn = this.getTamplate()
        btn.innerHTML = this.text
        placeToCounter[i].appendChild(btn)

        btn.addEventListener('click', () => {
          this.onBtnClick()
        })
      }
    }
  }
}

const addToCart = new Button('Add to cart')
addToCart._render()