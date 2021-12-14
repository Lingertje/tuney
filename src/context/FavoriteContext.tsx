import { createContext, useReducer } from "react";

const initialState = {
	favorites: []
};

const actions = {
	ADD_FAVORITE_ITEM: "ADD_FAVORITE_ITEM",
	REMOVE_FAVORITE_ITEM: "REMOVE_FAVORITE_ITEM",
};

const reducer = (state: any, action: any) => {
	switch (action.type) {
	case actions.ADD_FAVORITE_ITEM:
		return {
			favorites: [
				...state.favorites,
				{
					id: new Date().valueOf(),
					label: action.FavoriteItemLabel,
					completed: false
				}
			]
		};
	case actions.REMOVE_FAVORITE_ITEM: {
		const filteredFavoriteItem = state.favorites.filter(
			(favorites: any) => favorites.id !== action.todoItemId
		);
		return { favorites: filteredFavoriteItem };
	}
	default:
		return state;
	}
};

const FavoritesContext = createContext<any | null>(null);

const FavoritesProvider = ({ children }: any) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	const value = {
		favorites: state.favorites,
		addFavoriteItem: (favoriteItem: any) => {
			dispatch({ type: actions.ADD_FAVORITE_ITEM, favoriteItem });
		},
		removeFavoriteItem: (favoriteItemId: any) => {
			dispatch({ type: actions.REMOVE_FAVORITE_ITEM, favoriteItemId });
		},
	};

	return (
		<FavoritesContext.Provider value={value}>
			{children}
		</FavoritesContext.Provider>
	);
};

export { FavoritesContext, FavoritesProvider };
