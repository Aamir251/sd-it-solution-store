import { Id } from "sanity"

export type CartItem = {
  _id : Id
  slug : string
  name : string
  qty : number
  imageUrl : string
}


export type CartContextType = {
  items : CartItem[]
  addItem : (item : CartItem) => void
  deleteItem : (id : Id) => void
  updateQty : (id : Id, newQty : number) => void
}
