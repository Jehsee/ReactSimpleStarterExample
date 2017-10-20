import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/searchbar';
import VideoList from './components/video_list';
const API_KEY = 'AIzaSyDf4wViDxETd4FrlI37FZ3pX-XAEZUvIZ4'

// create a new component. This component should produce some HTML
class App extends Component {
	constructor(props) {
		super(props)

		this.state = { videos: [] }

		YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
			this.setState({ videos })
		})
	}

	render() {
		return (
			<div>
				<SearchBar />
				<VideoList videos={this.state.videos} />
			</div>
		)
	}
}

// Take this compnent's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'))