const userReducer = (state=false, action) => {
    switch (action) {
      case 'true':
        return true
  
      case 'false':
        return false
  
      default:
        return state
    }
  }
  
  export default userReducer
  