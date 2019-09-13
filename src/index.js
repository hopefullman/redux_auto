import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TodoList from './TodoList';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';
import store from './store/store';
class App extends Component{
	render(){
		return (
			<Provider store={store}>
				<TodoList/>
			</Provider>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
