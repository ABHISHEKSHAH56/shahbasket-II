import AsyncStorage from '@react-native-async-storage/async-storage'
import { applyMiddleware, createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import thunk from 'redux-thunk'
import rootReducers from './rootReducers'
const persistConfig = {
        key: 'root',
        storage: AsyncStorage,
        blacklist: ["shop"]

}

const persistedReducer = persistReducer(persistConfig, rootReducers)

export default () => {
        let store = createStore(persistedReducer, applyMiddleware(thunk))
        let persistor = persistStore(store)
        return { store, persistor };
}