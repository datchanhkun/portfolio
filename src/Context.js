import { createContext, useReducer } from 'react'

export const themeContext = createContext()

const initialState = {
  darkMode: true,
  article: {}
}

const themeReducer = (state, action) => {
  switch(action.type) {
    case 'toggle': 
      return { ...state, darkMode: !state.darkMode }
    case 'article': 
      return { ...state, article: action.payload}
    default:
      return state;
  }
}

export const ThemeProvider = (props) => {
  const [state, dispatch] = useReducer(themeReducer, initialState)
  return (
    <themeContext.Provider value={{state, dispatch}}>
      {props.children}
    </themeContext.Provider>
  )
}
