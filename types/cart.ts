import { Id } from "sanity"

export type CartItem = {
  _id : Id
  slug : string
  name : string
  qty : number
  price : number
  imageUrl : string
  inStock : number // this refers to the maximum quantity that the user can order
}


export type CartContextType = {
  items : CartItem[]
  addItem : (item : CartItem) => void
  deleteItem : (id : Id) => void
  updateQty : (id : Id, newQty : number) => void
}
