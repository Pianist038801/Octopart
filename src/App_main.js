import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import getData from './api';
import { Card, Icon, Image } from 'semantic-ui-react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

class App extends Component {
	constructor(props) {
		super(props);

		var data = [];
		for (let i = 1; i < props.location.state.data.length; i++) {
			let arr = props.location.state.data[i];
			let temp = {};
			for (let j = 0; j < arr.length; j++) {
				temp[props.location.state.data[0][j]] = arr[j];
			}
			data.push(temp);
		}
		this.getDataFromServer(data);
		this.state = { data: [] };
	}
	componentDidMount() {}
	async getDataFromServer(data) {
		var skus = [];
		for (let i = 0; i < data.length; i++) {
			// 	console.log(data[i]['part no']);
			skus[i] = await getData(data[i]['part no']);
		}

		this.setState({ data: data, skus: skus });
	}

	render() {
		let children = [];
		let second = [ 'ABC   10 items   in 5 days', 'GAW   5 items   in 4 days', 'ABC   6 items   in 7 days' ];
		let third = [ '20%   INR 3000/-   11%', '50%   INR 1000/-   48%', '70%   INR 2000/-   16%' ];
		for (let i = 0; i < this.state.data.length; i++) {
			children.push(
				<Card>
					<Card.Content>
						<Card.Header>
							Part_No: {this.state.data[i]['part no']} {'   '} Qty: {this.state.data[i]['qty']}
							{'   '} Manufacturer: {this.state.data[i]['Manufacturer']}
							{'   '} Price: {this.state.data[i]['Price']} {'   '} Description:{' '}
							{this.state.data[i]['Description']}
						</Card.Header>
						<Card.Header>{second[i]} </Card.Header>
						<Card.Description> {third[i]} </Card.Description>
					</Card.Content>
				</Card>
			);
			/*
			children.push(
				<tr>
					<td>{this.state.data[i]['part no']}</td>
					<td>{this.state.data[i]['qty']}</td>
					<td>{this.state.data[i]['Manufacturer']}</td>
					<td>{this.state.data[i]['Description']}</td>
					<td>{this.state.data[i]['Price']}</td>
				</tr>
			);

			for (let j = 0; j < this.state.skus[i].length; j++) {
				children.push(
					<tr>
						<td>{this.state.skus[i][j]._source.company_sku}</td>
						<td>{this.state.skus[i][j]._source.manufacturer}</td>
						<td>{this.state.skus[i][j]._source.description}</td>
						<td>{this.state.skus[i][j]._source.msrp}</td>
					</tr>
				);
			}*/
		}

		return <div className="container">{children}</div>;
	}
}
export default App;
