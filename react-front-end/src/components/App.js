import React, { Component } from "react";
import axios from "axios";
import "./styles/App.css";
import Nav from "./Nav";
import DigitalPet from "./DigitalPet";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			Activepet: "Click the button to load data!",
		};
	}

	fetchData = () => {
		axios
			.get("/api/digitalpet") // You can simply make your requests to "/api/whatever you want"
			.then((response) => {
				// handle success
				console.log(response.data);

				console.log(response.data.message); // Just the message
				this.setState({
					Activepet: response.data.message,
				});
			});
	};
	render() {
		return (
			<div className="App">
				<Nav />
				<DigitalPet Activepet={this.state.Activepet} />
				{/* <img src={this.state.Activepet.img} alt="digital-pet" /> */}
				<button onClick={this.fetchData}>Fetch Data</button>
			</div>
		);
	}
}

export default App;
