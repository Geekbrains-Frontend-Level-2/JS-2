class AbstractList {
  items = []

  constructor(item = []) {
   this.item = []
  }

  add(item) {
    this.items.push(item)
    console.log(this);
  }

  remove() {

  }

  render() {
    console.log(this.items);
    this.items.forEach(good => {
      good.render()
    })
  }
}

class List extends AbstractList  {
  _cartInstance = null
  constructor (CartInstance) {
    super()
    this._cartInstance = CartInstance
    let goodsPromise = this.fetchGoods()
    goodsPromise.then(() => {
      this.render()
    })
  }

  fetchGoods() {
    const result = fetch('http://localhost:3002/database.json');
    return result
    .then(res => {
      return res.json()
    })
    .then(data => {
      console.log(data);
      this.items = data.data.map(cur => {
        return new GoodItem(cur, this._cartInstance)
      })
    })
    .catch(err => {
      console.warn('Check network', err)
    })
  }
}




class Cart extends AbstractList {
  constructor () {
    super()
    this.init()
  }

  init() {
    const block = document.createElement('div')
    block.classList.add('cart')

    const list = document.createElement('div')
    list.classList.add('cart-list')
    block.appendChild(list)

    const ButtonInstance = new Button('Cart', () => {
      list.classList.toggle('shown')
    })
    block.appendChild(ButtonInstance.getTemplate())

    const placeToRender = document.querySelector('header')
    if(placeToRender) {
      placeToRender.appendChild(block)
    }
  }
}

class GoodItem {
  name = ''
  price = 0
  _cartInstance = null

  constructor({ name, price }, CartInstance) {
    this.name = name
    this.price = price
    this._cartInstance = CartInstance
  }
  onBlockClick() {
    console.log('Add!');

    const PlaceToAdd = document.querySelector('.cart')
    if (PlaceToAdd) {
      const block = document.createElement('div')
      block.classList.add('good-cart')
      block.innerHTML = `<p class="good-info">Product: ${this.name}<br>Price: ${this.price}</p>`
      PlaceToAdd.appendChild(block)
    }
  }
  

  render() {
    const placeToRender = document.querySelector('.goods-list')
    if (placeToRender) {
      const block = document.createElement('div')
      block.classList.add('good-card')
      block.innerHTML = `<p class="good-info">Product: ${this.name}<br>Price: ${this.price}</p>
      <div class="btn-wrp"</div>`
      placeToRender.appendChild(block)
      
      const AddButton = new Button('Add to cart', () => {
        this._cartInstance.add(this)
      })
      block.querySelector('.btn-wrp').appendChild(AddButton.getTemplate())
    }
  }
}


const CartInstance = new Cart()
const ListInstance = new List(CartInstance)

// class Button {
//   text = ''
//   constructor(text) {
//     this.text = text
//   }

//   onBtnClick() {
//     console.log('Added!');
//   }

//   getTamplate() {
//     const btn = document.createElement('button')
//     btn.classList.add('btn')

//     return btn
//   }
  
//   _render() {

//     const placeToBtn = document.querySelectorAll('.good-card')
//     console.log(placeToBtn);
    
//       for (let i=0; i<placeToBtn.length; i++) {
//         if(placeToBtn) {
//         const btn = this.getTamplate()
//         btn.innerHTML = this.text
//         placeToBtn[i].appendChild(btn)

//         btn.addEventListener('click', () => {
//           this.onBtnClick()
//         })
//       }
//     }
//   }
// }

// class CounterButton extends Button {
//   constructor(text) {
//     super(text)
//   }

//   getTamplate() {
//     const btn = document.createElement('button')
//     btn.classList.add('btn')

//     return btn
//   }

//   _render() {
//     const placeToCounter = document.querySelectorAll('.good-cart')
//     console.log(placeToCounter);
    
//       for (let i=0; i<placeToCounter.length; i++) {
//         if(placeToCounter) {
//         const btn = this.getTamplate()
//         btn.innerHTML = this.text
//         placeToCounter[i].appendChild(btn)

//         btn.addEventListener('click', () => {
//           this.onBtnClick()
//         })
//       }
//     }
//   }
// }

// const addToCart = new Button('Add to cart')
// addToCart._render()