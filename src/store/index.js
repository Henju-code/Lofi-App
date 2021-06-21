import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import createSaga from 'redux-saga'

import drawerReducer from './Drawer/Drawer.reducer'
import lofiRadiosReducer from './LofiRadios/LofiRadios.reducer'
import sagas from './sagas'

const sagaMiddleware = createSaga()

const rootReducer = combineReducers({
    drawer: drawerReducer,
    lofiRadios: lofiRadiosReducer
})

export default createStore(
    rootReducer,
    compose(
        applyMiddleware(sagaMiddleware)
    )
)


sagaMiddleware.run(sagas)