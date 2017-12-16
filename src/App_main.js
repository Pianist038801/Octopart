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
		this.state = {
			field: props.location.state.data[0],
			title: props.location.state.data[0],
			open: false,
			data: [],
			id: 1,
			done: false,
			propertyName: 'part no'
		};
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
		this.setState({ open: false, done: true });
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
		var _title = this.state.title.slice(0);
		_title[this.state.id - 1] = propertyName;
		this.setState({
			propertyName: propertyName,
			title: _title
		});
		return;
	};

	getVal = (str, strSel, ind) => {
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
	render() {
		const actions = [
			<FlatButton label="Re-set columns" primary={true} onClick={this.reset} />,
			<FlatButton label="Done importing" primary={true} onClick={this.done} />
		];

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
								<i class="fa fa-times" onClick={() => this._remove(_id)} aria-hidden="true" />
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
							/>
						</div>
					</td>
					<td className="matched-parts no-matches-found">
						<div>No matches found</div>
						<a href="#" className="create-custom-lineitem">
							Create custom row
						</a>
					</td>
					<td className="lineitem-details">
						<table>
							<tbody>
								<tr>
									<td className="lineitem-details-column lineitem-details-column-schematicReference">
										<div>
											<a href="#" className="edit-link">
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
											<a href="#" className="edit-link">
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
											<a href="#" className="edit-link">
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
				<Dialog actions={actions} modal={true} open={this.state.open}>
					Everything look okay?
				</Dialog>
				<div className="page bom-tool show">
					<div id="bombom">
						<div className="bombom">
							<h1>
								<a href="#" className="bom-name">
									<span>Untitled BOM</span>
								</a>
							</h1>
							<div className="batch-size-pricing">
								<div className="batch-size">
									<label>Batch size:</label>
									<input type="number" value="" />
								</div>
								<div className="pricing">
									<h3 className="bom-total">
										<small className="currency-code">NOK</small>
										<span> </span>
										<span className="amount">0.00</span>
										<span> each</span>
									</h3>
									<h4 className="batch-total-bom-coverage">
										<div className="batch-total">
											<small className="currency-code">NOK</small>
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
												<a href="#" className="pastebox-trigger">
													Paste
												</a>
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
											<div>{this.state.data.length}</div>
										</td>
										<td colspan="8" />
									</tr>
								</tfoot>
							</table>
							<div className="modals" />
						</div>
					</div>
				</div>
			</div>
		);
	}
}
export default App;
