import React from 'react';
import { AppRegistry } from 'react-native';
import App from './App';
import { render } from 'react-dom';

// Define el nombre de la aplicación directamente aquí
const appName = 'CiudadanApp';

const rootTag = document.getElementById('root');

if (rootTag) {
  AppRegistry.registerComponent(appName, () => App);
  AppRegistry.runApplication(appName, {
    initialProps: {},
    rootTag: rootTag,
  });
} else {
  render(<App />, rootTag);
}
