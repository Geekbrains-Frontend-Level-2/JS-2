import './style.css'
import List from './list.js'
import Cart from './cart.js'

const CartInstance = new Cart()
const ListInstance = new List(CartInstance)
