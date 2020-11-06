const getCheck = (id,arr) => {
    return arr.filter(el => el.id === id).map(el => el.checked)[0];
  }
  const getCheckLabel = (id,arr) => {
    return arr
    .filter((el) => el.id === id)
    .map((el) => el.label)
    .join(" ")
  }
  const getCheckId = (id,arr) => {
    return arr.filter((el) => el.id === id).map((el) => el.id)[0]
  }
  
  export {getCheck,getCheckLabel,getCheckId};