class Good {
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
})



