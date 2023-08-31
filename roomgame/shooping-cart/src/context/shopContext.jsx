import React,{createContext} from 'react'
export const shopContext = createContext(null)
export const shopContextProvider = () => {
  return (
    <div>shopContext</div>
  )
}
