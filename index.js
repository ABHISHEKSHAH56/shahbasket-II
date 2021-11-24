import React from 'react'
import { Alert, AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import { name as appName } from './app.json';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler'
import App from './navigation/App';
import { PersistGate } from 'redux-persist/integration/react';
import reduxstore from "./stores/store"

const Root = () => {
        const { store, persistor } = reduxstore()





        return (
                <Provider store={store}>
                        <PersistGate loading={null} persistor={persistor}>
                                <App />

                        </PersistGate>




                </Provider>

        )
}

AppRegistry.registerComponent(appName, () => gestureHandlerRootHOC(Root));
