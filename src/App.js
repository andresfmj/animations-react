import React, { Component } from "react";

import "./App.css";
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";

class App extends Component {
	state = {
		isModalOpen: false,
		showBlock: false
	}
	

	modalShow = (ev) => {
		this.setState({isModalOpen: true})
	}
	modalClose = (ev) => {
		this.setState({isModalOpen: false})
	}

	render() {
		return (
			<div className="App">
				<h1>React Animations</h1>
				{/* <button className="Button" onClick={() => this.setState(prevState => ({showBlock: !prevState.showBlock}))}>Toggle</button>
				<Transition in={this.state.showBlock} timeout={{enter: 300, exit: 600}} mountOnEnter unmountOnExit>
					{state => (
						<div style={{
							backgroundColor: 'red',
							width: 100,
							height: 100,
							margin: 'auto',
							transition: 'opacity 1s ease-out',
							opacity: state === 'exiting' || state === 'entering' ? 0 : 1
						}}></div>
					)}
				</Transition> */}
				<br />
				<Modal show={this.state.isModalOpen} closed={this.modalClose} />
				{this.state.isModalOpen ? <Backdrop show={this.state.isModalOpen} /> : null}
				<button className="Button" onClick={this.modalShow}>Open Modal</button>
				<h3>Animating Lists</h3>
				<List />
			</div>
		);
	}
}

export default App;
