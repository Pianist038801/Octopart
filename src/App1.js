import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
class App extends Component {
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<div className="container" style={{ fontSize: 30, paddingTop: 50 }}>
						<i class="fa fa-list-ul" aria-hidden="true" /> BOM Tool
					</div>
				</header>
				<p className="App-intro">
					<div className="container" style={{ background: 'white', height: '100%' }}>
						<div className="row" style={{ padding: '10px' }}>
							<div className="col-sm-4" style={{ 'vertical-align': 'middle', pa }}>
								<button className="btn-primary">Create a New BOM</button>
							</div>
							<div className="col-sm-1" style={{ height: '90px', lineHeight: '90px' }}>
								<div className="top" />
								<div>or</div>
								<div className="down" />
							</div>
							<div className="col-sm-7">
								<div className="dottedDiv">
									Drag a BOM file here
									<span style={{ fontSize: '10px', color: 'grey' }}>
										(.ods, Excel, .csv, .txt, Eagle 6 .sch)
									</span>
								</div>
								<button
									id="button"
									className="fileBtn"
									onClick={() => {
										document.getElementById('file-input').click();
									}}
								>
									<u>or select a file...</u>
								</button>
								<input id="file-input" type="file" name="name" style={{ display: 'none' }} />
							</div>
						</div>
					</div>
				</p>
			</div>
		);
	}
}
export default App;
