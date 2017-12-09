import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';


class App extends Component {
	componentWillMount() {
        const config = {
            apiKey: 'AIzaSyCEWJTb02IaQvcH0ll9_QfNXH__EkkA8Tk',
            authDomain: 'idirectory-79bb4.firebaseapp.com',
            databaseURL: 'https://idirectory-79bb4.firebaseio.com',
            projectId: 'idirectory-79bb4',
            storageBucket: 'idirectory-79bb4.appspot.com',
            messagingSenderId: '707645966617'
        };
        firebase.initializeApp(config);
	}

	render() {
		return (
			<Provider store={createStore(reducers)}>
				<View>
					<Text>
						Hello!
					</Text>
				</View>
			</Provider>
		);
	}
}

export default App;
