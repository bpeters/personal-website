import 'babel-polyfill';
import 'whatwg-fetch';

import React from 'react';
import ReactDOM from 'react-dom';
import FastClick from 'fastclick';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Provider } from 'react-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';

import configureStore from './store';
import router from './router';
import history from './history';

const store = configureStore();

let routes = require('./routes.json').default; // Loaded with utils/routes-loader.js

const container = document.getElementById('container');

function renderComponent(component) {
  ReactDOM.render(
    <Provider store={store}>
      <MuiThemeProvider>
        {component}
      </MuiThemeProvider>
    </Provider>,
    container,
  );
}

// Find and render a web page matching the current URL path,
// if such page is not found then render an error page (see routes.json, core/router.js)
function render(location) {
  router.resolve(routes, location)
    .then(renderComponent)
    .catch(error => router.resolve(routes, { ...location, error }).then(renderComponent));
}

// Handle client-side navigation by using HTML5 History API
// For more information visit https://github.com/ReactJSTraining/history/tree/master/docs#readme
history.listen(render);
render(history.location);

// Eliminates the 300ms delay between a physical tap
// and the firing of a click event on mobile browsers
// https://github.com/ftlabs/fastclick
FastClick.attach(document.body);

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

// Enable Hot Module Replacement (HMR)
if (module.hot) {
  module.hot.accept('./routes.json', () => {
    routes = require('./routes.json').default; // eslint-disable-line global-require
    render(history.location);
  });
}
