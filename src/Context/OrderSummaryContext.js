import React from 'react'

const IngContext = React.createContext({
    ingredients: {},
    cancel: ()=>{},
    continue: ()=>{},
    price: "",
})

export default IngContext