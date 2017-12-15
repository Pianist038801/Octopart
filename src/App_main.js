import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import getData from './api';
import { Card, Icon, Image } from 'semantic-ui-react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import ToolTip from './components/ToolTip.js';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

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
		this.state = { open: false, data: [], id: 1, propertyName: 'part no' };
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
	handleOpen = () => {
		this.setState({ open: true });
	};
	done = () => {
		this.setState({ open: false, id: 6 });
	};
	reset = () => {
		this.setState({ open: false, id: 1 });
	};
	onNext = () => {
		if (this.state.id == 5) return;
		this.setState({ id: this.state.id + 1 });
	};
	onBack = () => {
		this.setState({ id: this.state.id - 1 });
	};
	onDone = () => {
		this.setState({ open: true });
	};
	onChange = (propertyName) => {
		this.setState({ propertyName });
		return;
	};

	getVal = (str, strSel, ind) => {
		if (this.state.id == ind) return strSel;
		if (this.state.id > ind) return str;
		return '';
	};
	getBorder = (num) => {
		if (this.state.id == num) return 'red';
		if (this.state.id < num) return 'white';
		return 'grey';
	};
	render() {
		let children = [];
		let second = [ 'ABC   10 items   in 5 days', 'GAW   5 items   in 4 days', 'ABC   6 items   in 7 days' ];
		let third = [ '20%   INR 3000/-   11%', '50%   INR 1000/-   48%', '70%   INR 2000/-   16%' ];
		const actions = [
			<FlatButton label="Re-set columns" primary={true} onClick={this.reset} />,
			<FlatButton label="Done importing" primary={true} onClick={this.done} />
		];

		for (let i = 0; i < this.state.data.length; i++) {
			children.push(
				<Card>
					<Card.Content>
						<Card.Header>
							Part_No: {' '}
							<input
								type="text"
								value={this.getVal(
									this.state.data[i]['part no'],
									this.state.data[i][this.state.propertyName],
									1
								)}
								name="name"
								style={{ borderWidth: 1, borderColor: this.getBorder(1) }}
							/>{' '}
							Qty:
							<input
								type="text"
								value={this.getVal(
									this.state.data[i]['qty'],
									this.state.data[i][this.state.propertyName],
									2
								)}
								style={{ borderWidth: 1, borderColor: this.getBorder(2) }}
								name="name"
							/>
							Manufacturer:
							<input
								type="text"
								value={this.getVal(
									this.state.data[i]['Manufacturer'],
									this.state.data[i][this.state.propertyName],
									3
								)}
								style={{ borderWidth: 1, borderColor: this.getBorder(3) }}
								name="name"
							/>
							{'   '} Price:
							<input
								type="text"
								value={this.getVal(
									this.state.data[i]['Price'],
									this.state.data[i][this.state.propertyName],
									4
								)}
								style={{ borderWidth: 1, borderColor: this.getBorder(4) }}
								name="name"
							/>
							{'   '} Description:
							<input
								type="text"
								value={this.getVal(
									this.state.data[i]['Description'],
									this.state.data[i][this.state.propertyName],
									5
								)}
								style={{ borderWidth: 1, borderColor: this.getBorder(5) }}
								name="name"
							/>
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

		return (
			<div className="container">
				<div style={{ height: 150 }} />
				{this.state.id < 6 && (
					<ToolTip
						num={this.state.id}
						onChange={this.onChange}
						onNext={this.onNext}
						onBack={this.onBack}
						onDone={this.onDone}
					/>
				)}
				<Dialog actions={actions} modal={true} open={this.state.open}>
					Everything look okay?
				</Dialog>
				{children}
			</div>
		);
	}
}
export default App;
