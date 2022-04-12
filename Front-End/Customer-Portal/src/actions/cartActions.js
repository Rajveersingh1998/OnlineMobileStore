export const addToCartAction = (product) => {
  return {
    type: 'add-to-cart',
    product: product,
  }
}

export const removeFromCartAction = (product) => {
  return {
    type: 'remove-from-cart',
    product: product,
  }
}
