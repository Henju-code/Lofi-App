import { createStore, combineReducers } from 'redux'

import drawerReducer from './Drawer/Drawer.reducer'

const rootReducer = combineReducers({
    drawer: drawerReducer,
})

const store = createStore(rootReducer)

export default store