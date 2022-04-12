const cartReducer = (state = [], action) => {
  switch (action.type) {
    case 'add-to-cart':
      return [...state, action.product]

    case 'remove-from-cart':
      return state.filter((p) => p.mid !== action.product.mid)
      // remove the product from cartItems
      // const newItems = []
      // for (const product of state) {
      //   if (product.id !== action.product.id) {
      //     newItems.push(product)
      //   }
      // }
      // return newItems

    default:
      return state
  }
}

export default cartReducer
