import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import getData from './api';
import { Card, Icon, Image } from 'semantic-ui-react';
import 'bootstrap/dist/css/bootstrap.css';

import ToolTip from './components/ToolTip.js';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

class App extends Component {
	setState(prop) {
		super.setState(prop, this.saveBom);
	}

	constructor(props) {
		super(props);
		this.setState = this.setState.bind(this);
		var bomData = localStorage.getItem('boms');
		var boms = [];
		if (bomData == 'null' || bomData == undefined || bomData == null) {
			console.log('No Bom Here');
			boms = [];
		} else {
			console.log('Bom Here');
			boms = JSON.parse(bomData);
			console.log(boms);
		}
		var bomID = props.location.state.bomID;
		var bomArray = [];
		console.log('BomID=', bomID);
		var _done = false;
		var _totalCount = 0;
		if (!isNaN(bomID)) {
			bomArray = boms[bomID].data;
			_totalCount = boms[bomID].totalCount;
			_done = true;
		} else {
			bomArray = props.location.state.data;
		}
		var data = [];
		if (isNaN(bomID))
			for (let i = 1; i < bomArray.length; i++) {
				let arr = bomArray[i];
				let temp = {};
				for (let j = 0; j < arr.length; j++) {
					temp[bomArray[0][j]] = arr[j];
				}
				data.push(temp);
			}
		else data = bomArray.slice(1);
		let bNew = false;
		if (isNaN(bomID)) {
			bNew = true;
			bomID = boms.length;
			boms.push({
				title: 'Untitled',
				data: props.location.state.data,
				date: new Date().toISOString().slice(0, 10)
			});

			//localStorage.setItem('boms', JSON.stringify(boms));
		}

		this.getDataFromServer(data);
		console.log('FieldArray=', bomArray[0]);
		this.state = {
			showStockList: false,
			showMatchList: false,
			caption: boms[bomID].title,
			captionEdit: false,
			new: bNew,
			bomID: bomID,
			field: bomArray[0],
			title: bomArray[0],
			boms: boms,
			open: false,
			data: [],
			id: 1,
			done: _done,
			propertyName: bomArray[0][0],
			totalCount: _totalCount,
			editCaption: 'Schematic Reference',
			showEdit: false
		};
	}

	saveBom = () => {
		let bomTemp = this.state.boms.slice(0);
		bomTemp[this.state.bomID].title = this.state.caption;
		bomTemp[this.state.bomID].totalCount = this.state.totalCount;
		bomTemp[this.state.bomID].date = new Date().toISOString().slice(0, 10);
		var _boms = [ this.state.title ].concat(this.state.data);

		bomTemp[this.state.bomID].data = _boms;
		localStorage.setItem('boms', JSON.stringify(bomTemp));
	};

	componentWillUnmount() {
		console.log('UNMOUNT');

		//this.saveBom();
		console.log(this.state.data);
	}

	async getDataFromServer(data) {
		var skus = [];
		for (let i = 0; i < data.length; i++) {
			// 	console.log(data[i]['part no']);
			skus[i] = await getData(data[i]['part no']);
		}
		console.log('Dat=', data);
		this.setState({ data: data, skus: skus });
	}

	handleOpen = () => {
		this.setState({ open: true });
	};

	done = () => {
		//Format Datas
		console.log('UHAHA');
		var _data = this.state.data.slice(0);
		var _total = 0;
		for (var i = 0; i < this.state.data.length; i++) {
			for (var j = this.state.id; j < this.state.title.length; j++) {
				_data[i][this.state.title[j]] = j == 1 ? 1 : '';
			}
			_total += parseInt(this.state.data[i][this.state.title[1]]);
		}

		this.setState({ data: _data, open: false, done: true, totalCount: _total });
	};

	reset = () => {
		this.setState({ open: false, id: 1, propertyName: this.state.title[0] });
	};

	onNext = () => {
		if (this.state.id == 5) return;
		this.setState({ id: this.state.id + 1, propertyName: this.state.title[this.state.id] });
	};
	onBack = () => {
		this.setState({ id: this.state.id - 1, propertyName: this.state.title[this.state.id - 2] });
	};
	onDone = () => {
		this.setState({ open: true });
	};
	onChange = (propertyName) => {
		var _title = this.state.title.slice(0);
		_title[this.state.id - 1] = propertyName;
		this.setState({
			propertyName: propertyName,
			title: _title
		});
		return;
	};

	getVal = (str, strSel, ind) => {
		if (this.state.done) return str;
		if (this.state.done && ind == 2 && this.state.id == 1) return '1';

		if (this.state.id == ind) return strSel;
		if (this.state.id > ind) return str;
		return '';
	};
	getBorder = (num) => {
		if (this.state.done) return 'grey';
		if (this.state.id == num) return 'red';
		if (this.state.id < num) return 'white';
		return 'grey';
	};
	_remove = (ind) => {
		var v = this.state.data.slice(0);
		v.splice(ind, 1);
		this.setState({ data: v });
	};
	handleInputChange(index, event) {
		const target = event.target;
		let value = target.value;
		const name = target.name;
		var _data = this.state.data.slice(0);
		var _prevVal = _data[index][name];

		if (name == this.state.title[1] && parseInt(value) < 1) {
		} else {
			var _total = this.state.totalCount;
			if (name == this.state.title[1]) {
				if (value == '') {
					value = 1;
				}

				_total = parseInt(_total) - parseInt(_prevVal) + parseInt(value);
			}
			_data[index][name] = value;
			this.setState({ data: _data, totalCount: _total });
		}
	}
	render() {
		var Popup = (
			<ToolTip
				downOption={this.state.field}
				onNext={this.onNext}
				onBack={this.onBack}
				onChange={this.onChange}
				onDone={this.onDone}
				num={this.state.id}
			/>
		);
		var datas = [];
		for (let i = 0; i < this.state.data.length; i++) {
			let _id = i;
			datas.push(
				<tr className="lineitem" id="uploaded0">
					<td className="closer">
						<div>
							<a href="#">
								<img
									style={{ width: '15px', height: '15px' }}
									src="/assets/close.png"
									onClick={() => this._remove(_id)}
								/>
							</a>
						</div>
					</td>
					<td className="line-number-handle">
						<div>
							<div className="line-number">{i + 1}</div>
							<div className="handle">|||</div>
						</div>
					</td>
					<td className="query">
						<div>
							<input
								type="text"
								style={{ borderWidth: 1, borderColor: this.getBorder(1) }}
								value={this.getVal(
									this.state.data[i][this.state.title[0]],
									this.state.data[i][this.state.propertyName],
									1
								)}
								name={this.state.title[0]}
								onChange={this.handleInputChange.bind(this, i)}
							/>
						</div>
					</td>
					<td className="undo-delete" colspan="2">
						<div>
							<div>Row deleted</div>
							<a href="#">Undo</a>
						</div>
					</td>
					<td className="quantity">
						<div>
							<input
								className="form-control"
								style={{ borderWidth: 1, borderColor: this.getBorder(2) }}
								type="number"
								value={this.getVal(
									this.state.data[i][this.state.title[1]],
									this.state.data[i][this.state.propertyName],
									2
								)}
								name={this.state.title[1]}
								onChange={this.handleInputChange.bind(this, i)}
							/>
						</div>
					</td>
					{i == 0 ? (
						<td class="matched-parts availability-good">
							<div>
								<div>
									<a
										href="https://octopart.com/afk227m63h32t-f-cornell+dubilier-4030445"
										target="_blank"
										class="selected-part"
									>
										<div class="manufacturer-name">Cornell Dubilier</div>
										<div class="mpn">AFK227M63H32T-F</div>
									</a>
									<div class="offers-indicator">
										<a
											href="#"
											onClick={() => this.setState({ showStockList: !this.state.showStockList })}
										>
											25
										</a>
										{this.state.showStockList && (
											<div class="offers-tooltip">
												<div>
													<div>
														<p>
															<span>10</span>
															<span> </span>
															<span>distributors</span>
															<span> </span>
															<span>have</span>
															<span> this in-stock and available at qty </span>
															<span>1</span>
															<span>:</span>
														</p>
														<table>
															<thead>
																<tr>
																	<th>Distributor</th>
																	<th>Stock</th>
																	<th>Price</th>
																</tr>
															</thead>
															<tbody>
																<tr>
																	<td>
																		<span>Digi-Key</span>
																		<span class="packaging">
																			<span> (</span>
																			<span>Cut Tape</span>
																			<span>)</span>
																		</span>
																	</td>
																	<td>
																		<div class="in-stock-quantity">11,013</div>
																	</td>
																	<td>
																		<div class="price-at-total-quantity was-converted">
																			<small class="currency-code">INR</small>
																			<span> </span>
																			<span class="amount">135.99270</span>
																			<span class="conversion-asterisk">*</span>
																			<noscript />
																		</div>
																	</td>
																</tr>
																<tr>
																	<td>
																		<span>Digi-Key</span>
																		<span class="packaging">
																			<span> (</span>
																			<span>Custom Reel</span>
																			<span>)</span>
																		</span>
																	</td>
																	<td>
																		<div class="in-stock-quantity">11,013</div>
																	</td>
																	<td>
																		<div class="price-at-total-quantity was-converted">
																			<small class="currency-code">INR</small>
																			<span> </span>
																			<span class="amount">135.99270</span>
																			<span class="conversion-asterisk">*</span>
																			<noscript />
																		</div>
																	</td>
																</tr>
																<tr>
																	<td>
																		<span>Arrow</span>
																		<span class="packaging" />
																	</td>
																	<td>
																		<div class="in-stock-quantity">97</div>
																	</td>
																	<td>
																		<div class="price-at-total-quantity was-converted">
																			<small class="currency-code">INR</small>
																			<span> </span>
																			<span class="amount">119.17323</span>
																			<span class="conversion-asterisk">*</span>
																			<noscript />
																		</div>
																	</td>
																</tr>
																<tr>
																	<td>
																		<span>Mouser</span>
																		<span class="packaging" />
																	</td>
																	<td>
																		<div class="in-stock-quantity">2,235</div>
																	</td>
																	<td>
																		<div class="price-at-total-quantity was-converted">
																			<small class="currency-code">INR</small>
																			<span> </span>
																			<span class="amount">117.38992</span>
																			<span class="conversion-asterisk">*</span>
																			<noscript />
																		</div>
																	</td>
																</tr>
																<tr>
																	<td>
																		<span>Onlinecomponents.com</span>
																		<span class="packaging">
																			<span> (</span>
																			<span>Bulk</span>
																			<span>)</span>
																		</span>
																	</td>
																	<td>
																		<div class="in-stock-quantity">100</div>
																	</td>
																	<td>
																		<div class="price-at-total-quantity was-converted">
																			<small class="currency-code">INR</small>
																			<span> </span>
																			<span class="amount">59.01570</span>
																			<span class="conversion-asterisk">*</span>
																			<noscript />
																		</div>
																	</td>
																</tr>
																<tr>
																	<td>
																		<span>Master Electronics</span>
																		<span class="packaging" />
																	</td>
																	<td>
																		<div class="in-stock-quantity">88</div>
																	</td>
																	<td>
																		<div class="price-at-total-quantity was-converted">
																			<small class="currency-code">INR</small>
																			<span> </span>
																			<span class="amount">59.01570</span>
																			<span class="conversion-asterisk">*</span>
																			<noscript />
																		</div>
																	</td>
																</tr>
																<tr>
																	<td>
																		<span>Farnell</span>
																		<span class="packaging">
																			<span> (</span>
																			<span>Cut Tape</span>
																			<span>)</span>
																		</span>
																	</td>
																	<td>
																		<div class="in-stock-quantity">227</div>
																	</td>
																	<td>
																		<div class="price-at-total-quantity was-converted">
																			<small class="currency-code">INR</small>
																			<span> </span>
																			<span class="amount">162.17846</span>
																			<span class="conversion-asterisk">*</span>
																			<noscript />
																		</div>
																	</td>
																</tr>
																<tr>
																	<td>
																		<span>Newark</span>
																		<span class="packaging">
																			<span> (</span>
																			<span>Cut Tape</span>
																			<span>)</span>
																		</span>
																	</td>
																	<td>
																		<div class="in-stock-quantity">227</div>
																	</td>
																	<td>
																		<div class="price-at-total-quantity was-converted">
																			<small class="currency-code">INR</small>
																			<span> </span>
																			<span class="amount">60.23450</span>
																			<span class="conversion-asterisk">*</span>
																			<noscript />
																		</div>
																	</td>
																</tr>
																<tr>
																	<td>
																		<span>element14 APAC</span>
																		<span class="packaging" />
																	</td>
																	<td>
																		<div class="in-stock-quantity">227</div>
																	</td>
																	<td>
																		<div class="price-at-total-quantity was-converted">
																			<small class="currency-code">INR</small>
																			<span> </span>
																			<span class="amount">139.50811</span>
																			<span class="conversion-asterisk">*</span>
																			<noscript />
																		</div>
																	</td>
																</tr>
																<tr>
																	<td>
																		<span>Quest</span>
																		<span class="packaging" />
																	</td>
																	<td>
																		<div class="in-stock-quantity">87</div>
																	</td>
																	<td>
																		<div class="price-at-total-quantity was-converted">
																			<small class="currency-code">INR</small>
																			<span> </span>
																			<span class="amount">128.29500</span>
																			<span class="conversion-asterisk">*</span>
																			<noscript />
																		</div>
																	</td>
																</tr>
															</tbody>
														</table>
													</div>
													<div>
														<p>Out-of-stock or insufficient stock:</p>
														<table>
															<thead>
																<tr>
																	<th>Distributor</th>
																	<th>Stock</th>
																	<th>Price</th>
																</tr>
															</thead>
															<tbody>
																<tr>
																	<td>
																		<span>Allied Electronics</span>
																		<span class="packaging">
																			<span> (</span>
																			<span>Bulk</span>
																			<span>)</span>
																		</span>
																	</td>
																	<td>
																		<div class="in-stock-quantity has-stock-problem">
																			0
																		</div>
																	</td>
																	<td>
																		<div class="price-at-total-quantity was-converted">
																			<small class="currency-code">INR</small>
																			<span> </span>
																			<span class="amount">83.39175</span>
																			<span class="conversion-asterisk">*</span>
																			<noscript />
																		</div>
																	</td>
																</tr>
															</tbody>
														</table>
													</div>
													<p class="distributors-with-pricing-at-higher-quantity">
														<span>14</span>
														<span> distributors with pricing at qty &gt; </span>
														<span>1</span>
													</p>
												</div>
											</div>
										)}
									</div>
								</div>
								<noscript />
								<ul class="empty" />
							</div>
						</td>
					) : i == 1 ? (
						<td class="matched-parts availability-good other-parts-is-open">
							<div>
								<div>
									<a
										href="https://octopart.com/ina114ap-texas+instruments-414192"
										target="_blank"
										class="selected-part"
									>
										<div class="manufacturer-name">Texas Instruments</div>
										<div class="mpn">INA114AP</div>
									</a>
									<noscript />
								</div>
								<a
									href="#"
									class="caution"
									onClick={() => {
										this.setState({ showMatchList: !this.state.showMatchList });
									}}
								>
									<img alt="Multiple matches found" src="/assets/caution.png" /> {' '}
								</a>
								{this.state.showMatchList && (
									<div class="all-parts has-caution">
										<h4>Multiple matches found</h4>
										<ul>
											<li class="part-option availability-good selected">
												<div>
													<div class="manufacturer-name-mpn-description">
														<div class="manufacturer-name">Texas Instruments</div>
														<div class="mpn">INA114AP</div>
														<div class="description">
															SP Amp INSTR Amp Single 18V 8-Pin PDIP
														</div>
													</div>
													<div class="details-image">
														<a
															href="https://octopart.com/ina114ap-texas+instruments-414192"
															target="_blank"
															class="details"
														>
															<span>Details</span>
														</a>
														<div class="image">
															<img
																src="https://sigma.octopart.com/17935162/image/Texas-Instruments-INA114AP.jpg"
																alt="Image for INA114AP"
															/>{' '}
														</div>
													</div>
												</div>
											</li>
											<li class="part-option availability-warning">
												<div>
													<div class="manufacturer-name-mpn-description">
														<div class="manufacturer-name">Burr Brown</div>
														<div class="mpn">INA114AP</div>
														<div class="description">
															IC, INSTRUMENT AMP, 1MHZ, 110DB, DIP-8
														</div>
													</div>
													<div class="details-image">
														<a
															href="https://octopart.com/ina114ap-burr+brown-11758520"
															target="_blank"
															class="details"
														>
															<span>Details</span>
														</a>
														<div class="image">
															<img
																src="https://sigma.octopart.com/37126057/image/Burr-Brown-INA114AP.jpg"
																alt="Image for INA114AP"
															/>
														</div>
													</div>
												</div>
											</li>
										</ul>
									</div>
								)}
							</div>
						</td>
					) : (
						<td className="matched-parts no-matches-found">
							<div>No matches found</div>
							<a href="#" className="create-custom-lineitem">
								Create custom row
							</a>
						</td>
					)}
					<td className="lineitem-details">
						<table>
							<tbody>
								<tr>
									<td className="lineitem-details-column lineitem-details-column-schematicReference">
										<div>
											<a
												href="#"
												onClick={() =>
													this.setState({
														editIndex: i,
														editField: this.state.title[2],
														editShow: true,
														editCaption: 'Schemaic Reference'
													})}
												className="edit-link"
											>
												Edit
											</a>
											<div style={{ borderWidth: 1, borderColor: this.getBorder(3) }}>
												{this.getVal(
													this.state.data[i][this.state.title[2]],
													this.state.data[i][this.state.propertyName],
													3
												)}
											</div>
											<a href="#" className="more-link">
												More...
											</a>
										</div>
									</td>
									<td className="lineitem-details-column lineitem-details-column-internalPartNumber">
										<div>
											<a
												href="#"
												className="edit-link"
												onClick={() =>
													this.setState({
														editIndex: i,
														editField: this.state.title[3],
														editShow: true,
														editCaption: 'Internal Part Number'
													})}
											>
												Edit
											</a>
											<div style={{ borderWidth: 1, borderColor: this.getBorder(4) }}>
												{this.getVal(
													this.state.data[i][this.state.title[3]],
													this.state.data[i][this.state.propertyName],
													4
												)}
											</div>
											<a href="#" className="more-link">
												More...
											</a>
										</div>
									</td>
									<td className="lineitem-details-column lineitem-details-column-description">
										<div>
											<a
												href="#"
												className="edit-link"
												onClick={() =>
													this.setState({
														editIndex: i,
														editField: this.state.title[4],
														editShow: true,
														editCaption: 'Description'
													})}
											>
												Edit
											</a>
											<div style={{ borderWidth: 1, borderColor: this.getBorder(5) }}>
												{this.getVal(
													this.state.data[i][this.state.title[4]],
													this.state.data[i][this.state.propertyName],
													5
												)}
											</div>
											<a href="#" className="more-link">
												More...
											</a>
										</div>
									</td>
								</tr>
							</tbody>
						</table>
					</td>
					<td className="selected-distributors">
						<table>
							<tbody>
								<tr>
									<td className="selected-distributor has-cart">
										<div>
											<div className="selected-offer">
												<div className="no-price">--</div>
											</div>
										</div>
									</td>
									<td className="selected-distributor has-cart">
										<div>
											<div className="selected-offer">
												<div className="no-price">--</div>
											</div>
										</div>
									</td>
									<td className="selected-distributor has-cart">
										<div>
											<div className="selected-offer">
												<div className="no-price">--</div>
											</div>
										</div>
									</td>
								</tr>
							</tbody>
						</table>
					</td>
					<td className="distributor-sku empty">
						<div>N/A</div>
					</td>
					<td className="unit-price empty">
						<div>N/A</div>
					</td>
					<td className="line-total empty">
						<div>N/A</div>
					</td>
					<td className="batch-total empty">
						<div>N/A</div>
					</td>
					<td className="notes">
						<div>
							<a href="#" className="edit-link">
								Edit
							</a>
							<div />
							<a href="#" className="more-link">
								More...
							</a>
						</div>
					</td>
				</tr>
			);
		}

		return (
			<div className="body" style={{ paddingTop: 120 }}>
				<Dialog
					modal={true}
					open={this.state.open}
					bodyStyle={{ backgroundColor: 'black', color: 'white', alignItems: 'center' }}
				>
					Everything look okay?
					<button style={{ marginLeft: 250, marginRight: 20 }} onClick={this.reset}>
						Re-set columns
					</button>
					<button onClick={this.done}>Done importing</button>
				</Dialog>
				<div className="page bom-tool show">
					<div id="bombom">
						<div className="bombom">
							<h1>
								{!this.state.captionEdit ? (
									<button
										style={{
											backgroundColor: 'transparent',
											borderWidth: 0,
											color: 'rgb(41,92,174)',

											fontSize: 30
										}}
										onClick={() => {
											this.setState({ captionEdit: true, caption1: this.state.caption });
										}}
									>
										{this.state.caption}
									</button>
								) : (
									<div>
										<input
											type="text"
											value={this.state.caption1}
											onChange={(val) => {
												this.setState({ caption1: val.target.value });
											}}
											ref={(r) => (this.title = r)}
											style={{ width: '200px', color: 'rgb(41,92,174)', fontSize: 30 }}
										/>
										<label
											onClick={() =>
												this.setState({ caption: this.state.caption1, captionEdit: false })}
											style={{ marginLeft: 20, marginRight: 20, color: 'grey', fontSize: 10 }}
										>
											OK
										</label>
										<label
											onClick={() => this.setState({ captionEdit: false })}
											style={{ color: 'grey', fontSize: 10 }}
										>
											Cancel
										</label>
									</div>
								)}
							</h1>
							<div className="batch-size-pricing">
								<div className="batch-size">
									<label>Batch size:</label>
									<input type="number" value="" />
								</div>
								<div className="pricing">
									<h3 className="bom-total">
										<small className="currency-code">INR</small>
										<span> </span>
										<span className="amount">0.00</span>
										<span> each</span>
									</h3>
									<h4 className="batch-total-bom-coverage">
										<div className="batch-total">
											<small className="currency-code">INR</small>
											<span> </span>
											<span className="amount">0.00</span>
											<span> total</span>
										</div>
										<div className="bom-coverage">
											<span>0</span>
											<span>% BOM coverage</span>
										</div>
									</h4>
								</div>
							</div>
							<div className="frozen-thead">
								<table>
									<thead className="bom-head">
										<tr className="top">
											<th className="column-group-selector-heading" colspan="2">
												<div>
													<div className="column-group-selector">
														<a href="#" className="opener" />
													</div>
												</div>
											</th>
											<th className="item-and-quantity" colspan="2">
												<div>Part Number &amp; Qty</div>
											</th>
											<th className="matched-parts">
												<div>Matched Parts</div>
											</th>
											<th className="lineitem-details-heading-top">
												<div>
													<div className="heading">Line Item Details</div>
													<a className="" href="#">
														Hide
													</a>
												</div>
											</th>
											<th className="selected-distributors-heading-top">
												<div>
													<div className="heading">Preferred Distributors</div>
													<a className="" href="#">
														Hide
													</a>
													<a className="" href="#">
														Edit
													</a>
												</div>
											</th>
											<th colspan="4" className="cart-pricing-select">
												<div>
													<div className="cart">
														<div>Shopping List</div>
													</div>
													<label>Auto fill</label>
													<div className="pricing-select">
														<select>
															<option selected="" value="lowest_overall">
																Lowest Price (Overall)
															</option>
															<option value="lowest_preferred">
																Lowest Price (Preferred)
															</option>
															<option value="2c3be9310496fffc">Digi-Key</option>
															<option value="a5e060ea85e77627">Mouser</option>
															<option value="d294179ef2900153">Newark</option>
															<option value="custom" disabled="">
																Custom
															</option>
														</select>
														<i className="icon icon_arrow_down_small" />
													</div>
													<a className="" href="#">
														Hide
													</a>
												</div>
											</th>
											<th className="notes-heading">
												<div>
													<a className="heading" href="#">
														Notes
													</a>

													<a href="#">Hide</a>
												</div>
											</th>
										</tr>
										<tr className="bottom">
											<th className="edit" colspan="2">
												<div>
													<a href="#">
														<span>Edit</span>
													</a>
												</div>
											</th>
											<th className="item">
												{!this.state.done && this.state.id == 1 ? (
													<div>
														<div>Part Number</div>
														{Popup}
													</div>
												) : (
													<div>Part Number</div>
												)}
											</th>
											<th className="quantity">
												{!this.state.done && this.state.id == 2 ? (
													<div>
														<div>Qty</div>
														{Popup}
													</div>
												) : (
													<div>Qty</div>
												)}
											</th>
											<th className="manufacturer-mpn">
												<div>Manufacturer/MPN</div>
											</th>
											<th className="lineitem-details-heading-bottom">
												<div>
													<table>
														<thead>
															<tr>
																<th className="lineitem-details-column schematic-reference">
																	<div>
																		{!this.state.done && this.state.id == 3 ? (
																			<div>
																				<div>Schematic Reference</div>
																				{Popup}
																			</div>
																		) : (
																			<div>Schematic Reference</div>
																		)}
																	</div>
																</th>
																<th className="lineitem-details-column internal-part-number">
																	<div>
																		{!this.state.done && this.state.id == 4 ? (
																			<div>
																				<div>Internal Part Number</div>
																				{Popup}
																			</div>
																		) : (
																			<div>Internal Part Number</div>
																		)}
																	</div>
																</th>
																<th className="lineitem-details-column description">
																	<div>
																		{!this.state.done && this.state.id == 5 ? (
																			<div>
																				<div>Description</div>
																				{Popup}
																			</div>
																		) : (
																			<div>Description</div>
																		)}
																	</div>
																</th>
															</tr>
														</thead>
													</table>
												</div>
											</th>
											<th className="selected-distributors-heading-bottom">
												<div>
													<table>
														<thead>
															<tr>
																<th className="selected-distributor has-cart">
																	<div>
																		<div className="name">Digi-Key</div>
																		<a href="#">
																			<small>
																				<i className="icon icon_cart" />
																				<span>Buy Now</span>
																			</small>
																		</a>
																	</div>
																</th>
																<th className="selected-distributor has-cart">
																	<div>
																		<div className="name">Mouser</div>
																		<a href="#">
																			<small>
																				<i className="icon icon_cart" />
																				<span>Buy Now</span>
																			</small>
																		</a>
																	</div>
																</th>
																<th className="selected-distributor has-cart">
																	<div>
																		<div className="name">Newark</div>
																		<a href="#">
																			<small>
																				<i className="icon icon_cart" />
																				<span>Buy Now</span>
																			</small>
																		</a>
																	</div>
																</th>
															</tr>
														</thead>
													</table>
												</div>
											</th>
											<th className="distributor-sku">
												<div>
													<a href="#">Distributor/SKU</a>
												</div>
											</th>
											<th className="unit-price">
												<div>
													<a href="#">Unit Price</a>
												</div>
											</th>
											<th className="line-total">
												<div>Line Total</div>
											</th>
											<th className="batch-total">
												<div>Batch Total</div>
											</th>
											<th className="notes-heading-bottom" />
										</tr>
									</thead>
								</table>
							</div>
							<table>
								<tbody className="bom-body ui-sortable">{datas}</tbody>
								<tfoot className="bom-foot">
									<tr>
										<td className="closer" />
										<td />
										<td colspan="2" className="add-line-item">
											<div>
												<input type="text" placeholder="Add MPN or SKU" value="" />
												<a
													href="#"
													className="pastebox-trigger"
													onClick={() => {
														this.setState({ showPaste: true });
													}}
												>
													Paste
												</a>
												{this.state.showPaste && (
													<div class="pastebox">
														<a
															href="#"
															class="cancel"
															onClick={() => {
																this.setState({ showPaste: false });
															}}
														>
															<img
																style={{ width: '15px', height: '15px' }}
																src="/assets/close.png"
															/>
														</a>
														<textarea placeholder="MAX232DR, 10" />
														<div class="instructions">
															Paste in multiple part numbers and quantities (optional)
														</div>
														<a
															href="#"
															class="ok"
															onClick={() => {
																this.setState({ showPaste: false });
															}}
														>
															OK
														</a>
													</div>
												)}
											</div>
										</td>
										<td colspan="8" />
									</tr>
									<tr>
										<td className="closer" />
										<td />
										<td className="component-count-label">
											<div>Component count:</div>
										</td>
										<td className="component-count">
											<div>{this.state.totalCount}</div>
										</td>
										<td colspan="8" />
									</tr>
								</tfoot>
							</table>
							{this.state.editShow && (
								<div class="modals">
									<div class="lineitem-details modal" style={{ display: 'block' }}>
										<div class="modal-dialog">
											<div class="modal-content">
												<div class="modal-header">
													<a
														href="#"
														class="closer"
														onClick={() => this.setState({ editShow: false })}
													>
														<img
															style={{ width: '15px', height: '15px' }}
															src="/assets/close.png"
														/>
													</a>
													<h3>{this.state.editCaption}</h3>
												</div>
												<div class="modal-body">
													<textarea id="editArea">
														{this.state.data[this.state.editIndex][this.state.editField]}
													</textarea>
												</div>
												<div class="modal-footer">
													<a
														href="#"
														class="button button-primary"
														onClick={() => {
															var _data = this.state.data;
															_data[this.state.editIndex][
																this.state.editField
															] = document.getElementById('editArea').value;

															this.setState({ dat: _data, editShow: false });
														}}
													>
														Save changes
													</a>
													<a
														href="#"
														class="button"
														onClick={() => this.setState({ editShow: false })}
													>
														Cancel
													</a>
												</div>
											</div>
										</div>
									</div>
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
		);
	}
}
export default App;
