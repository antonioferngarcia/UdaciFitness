import React, { Component } from 'react';
import { View } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import AddEntry from "./components/AddEntry";
import entries from "./reducers/index.reducer";

export default class App extends Component {
  store = createStore(entries);

  render() {
    return (
      <Provider store={this.store}>
        <View style={{ flex: 1 }}>
          <AddEntry />
        </View>
      </Provider>
    );
  }
}
