const setItem = (key, item) => {
    if (typeof window === 'undefined') {
      return null
    }
    localStorage.setItem(key, item)
  }
   
  const getItem = key => {
    if (typeof window === 'undefined') {
      return null
    }
    return localStorage.getItem(key)
  }
   
  const removeItem = key => {
    if (typeof window === 'undefined') {
      return null
    }
    localStorage.removeItem(key)
  }
   
  export const myLocalStorage = {
    getItem,
    setItem,
    removeItem
  }