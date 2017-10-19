import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/searchbar';

const API_KEY = 'AIzaSyDf4wViDxETd4FrlI37FZ3pX-XAEZUvIZ4'



// create a new component. This component should produce some HTML
const App = () => {
	return (
		<div>
			<SearchBar />
		</div>
	)
}

// Take this compnent's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'))