import React, { Component } from "react";
import axios from "axios";
import "./styles/App.css";
import Nav from "./Nav";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			message: "Click the button to load data!",
		};
	}

	fetchData = () => {
		axios
			.get("/api/data") // You can simply make your requests to "/api/whatever you want"
			.then((response) => {
				// handle success
				console.log(response.data); // The entire response from the Rails API

				console.log(response.data.message); // Just the message
				this.setState({
					message: response.data.message,
				});
			});
	};
	render() {
		return (
			<div className="App">
				<Nav />
				<img src={this.state.message} alt="digital-pet" />
				<button onClick={this.fetchData}>Fetch Data</button>
			</div>
		);
	}
}

export default App;
