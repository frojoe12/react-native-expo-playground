import React, { createContext, useState} from 'react'

export const FavoritesContext = createContext({
    ids: [],
    addFavorite: (id) => {},
    removeFavorite: (id) => {}
})

const FavoritesContextProvider = ({children}) => {

    const [favoriteMealIds,setFavoriteMealIds] = useState(['m3'])

    const addFavorite = (id) => {
        setFavoriteMealIds(current => [...current, id])
    }
    
    const removeFavorite = (id) => {
        setFavoriteMealIds(current => current.filter(mealId => mealId !== id))
    }

    const value = {
        ids: favoriteMealIds,
        addFavorite,
        removeFavorite
    }

    return <FavoritesContext.Provider value={value}>
        {children}
    </FavoritesContext.Provider>
}

export default FavoritesContextProvider