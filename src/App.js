import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import logo from './logo.svg';
import Dropzone from 'react-dropzone';

class App extends Component {
	constructor(props) {
		super(props);
		this.dropZone = null;
	}
	render() {
		return (
			<div className="bom-tool show">
				<h1 data-reactid=".0.2">
					<div className="bom-name" data-reactid=".0.2.0">
						<span data-reactid=".0.2.0.0">Untitled BOM</span>
					</div>
				</h1>
				<div className="batch-size-pricing" data-reactid=".0.8">
					<div className="batch-size is-read-only" data-reactid=".0.8.0">
						<label data-reactid=".0.8.0.0">Batch size:</label>
						<div data-reactid=".0.8.0.1">1</div>
					</div>
					<div className="pricing" data-reactid=".0.8.1">
						<h3 className="bom-total" data-reactid=".0.8.1.0">
							<small className="currency-code" data-reactid=".0.8.1.0.0">
								INR
							</small>
							<span data-reactid=".0.8.1.0.1"> </span>
							<span className="amount" data-reactid=".0.8.1.0.2">
								14,053.08
							</span>
							<span data-reactid=".0.8.1.0.3"> each</span>
						</h3>
						<h4 className="batch-total-bom-coverage" data-reactid=".0.8.1.1">
							<div className="batch-total" data-reactid=".0.8.1.1.0">
								<small className="currency-code" data-reactid=".0.8.1.1.0.0">
									INR
								</small>
								<span data-reactid=".0.8.1.1.0.1"> </span>
								<span className="amount" data-reactid=".0.8.1.1.0.2">
									14,053.08
								</span>
								<span data-reactid=".0.8.1.1.0.3"> total</span>
							</div>
							<div className="bom-coverage" data-reactid=".0.8.1.1.1">
								<span data-reactid=".0.8.1.1.1.0">60</span>
								<span data-reactid=".0.8.1.1.1.1">% BOM coverage</span>
							</div>
						</h4>
					</div>
				</div>

				<div className="frozen-thead" data-reactid=".0.9">
					<table data-reactid=".0.9.0">
						<thead className="bom-head" data-reactid=".0.9.0.0">
							<tr className="top" data-reactid=".0.9.0.0.0">
								<th className="column-group-selector-heading" colspan="2" data-reactid=".0.9.0.0.0.0">
									<div data-reactid=".0.9.0.0.0.0.0">
										<noscript data-reactid=".0.9.0.0.0.0.0.0" />
									</div>
								</th>
								<th className="item-and-quantity" colspan="2" data-reactid=".0.9.0.0.0.1">
									<div data-reactid=".0.9.0.0.0.1.0">Part Number &amp; Qty</div>
								</th>
								<th className="matched-parts" data-reactid=".0.9.0.0.0.2">
									<div data-reactid=".0.9.0.0.0.2.0">Matched Parts</div>
								</th>
								<th className="lineitem-details-heading-top" data-reactid=".0.9.0.0.0.3">
									<div data-reactid=".0.9.0.0.0.3.0">Line Item Details</div>
								</th>
								<noscript data-reactid=".0.9.0.0.0.4" />
								<th colspan="4" className="cart-pricing-select" data-reactid=".0.9.0.0.0.5">
									<div data-reactid=".0.9.0.0.0.5.0">
										<div className="cart" data-reactid=".0.9.0.0.0.5.0.0">
											<div data-reactid=".0.9.0.0.0.5.0.0.0">Shopping List</div>
										</div>
										<div className="pricing-select is-read-only" data-reactid=".0.9.0.0.0.5.0.2">
											Lowest Price (Overall)
										</div>
									</div>
								</th>
								<th className="notes-heading" data-reactid=".0.9.0.0.0.6">
									<div data-reactid=".0.9.0.0.0.6.0">
										<div className="heading" data-reactid=".0.9.0.0.0.6.0.0">
											Notes
										</div>
										<noscript data-reactid=".0.9.0.0.0.6.0.1" />
									</div>
								</th>
							</tr>
							<tr className="bottom" data-reactid=".0.9.0.0.1">
								<th className="edit" colspan="2" data-reactid=".0.9.0.0.1.0">
									<div data-reactid=".0.9.0.0.1.0.0" />
								</th>
								<th className="item" data-reactid=".0.9.0.0.1.1">
									<div data-reactid=".0.9.0.0.1.1.0">Part Number</div>
								</th>
								<th className="quantity" data-reactid=".0.9.0.0.1.2">
									<div data-reactid=".0.9.0.0.1.2.0">Qty</div>
								</th>
								<th className="manufacturer-mpn" data-reactid=".0.9.0.0.1.3">
									<div data-reactid=".0.9.0.0.1.3.0">
										<div data-reactid=".0.9.0.0.1.3.0.0">Manufacturer/MPN</div>
										<noscript data-reactid=".0.9.0.0.1.3.0.1" />
									</div>
								</th>
								<th className="lineitem-details-heading-bottom" data-reactid=".0.9.0.0.1.4">
									<div data-reactid=".0.9.0.0.1.4.0">
										<table data-reactid=".0.9.0.0.1.4.0.0">
											<thead data-reactid=".0.9.0.0.1.4.0.0.0">
												<tr data-reactid=".0.9.0.0.1.4.0.0.0.0">
													<th
														className="lineitem-details-column schematic-reference"
														data-reactid=".0.9.0.0.1.4.0.0.0.0.$schematicReference"
													>
														<div data-reactid=".0.9.0.0.1.4.0.0.0.0.$schematicReference.0">
															<div data-reactid=".0.9.0.0.1.4.0.0.0.0.$schematicReference.0.0">
																<span data-reactid=".0.9.0.0.1.4.0.0.0.0.$schematicReference.0.0.0">
																	Schematic Reference
																</span>
																<noscript data-reactid=".0.9.0.0.1.4.0.0.0.0.$schematicReference.0.0.1" />
															</div>
														</div>
													</th>
													<th
														className="lineitem-details-column internal-part-number"
														data-reactid=".0.9.0.0.1.4.0.0.0.0.$internalPartNumber"
													>
														<div data-reactid=".0.9.0.0.1.4.0.0.0.0.$internalPartNumber.0">
															<div data-reactid=".0.9.0.0.1.4.0.0.0.0.$internalPartNumber.0.0">
																<span data-reactid=".0.9.0.0.1.4.0.0.0.0.$internalPartNumber.0.0.0">
																	Internal Part Number
																</span>
																<noscript data-reactid=".0.9.0.0.1.4.0.0.0.0.$internalPartNumber.0.0.1" />
															</div>
														</div>
													</th>
													<th
														className="lineitem-details-column description"
														data-reactid=".0.9.0.0.1.4.0.0.0.0.$description"
													>
														<div data-reactid=".0.9.0.0.1.4.0.0.0.0.$description.0">
															<div data-reactid=".0.9.0.0.1.4.0.0.0.0.$description.0.0">
																<span data-reactid=".0.9.0.0.1.4.0.0.0.0.$description.0.0.0">
																	Description
																</span>
																<noscript data-reactid=".0.9.0.0.1.4.0.0.0.0.$description.0.0.1" />
															</div>
														</div>
													</th>
												</tr>
											</thead>
										</table>
									</div>
								</th>
								<noscript data-reactid=".0.9.0.0.1.5" />
								<th className="distributor-sku" data-reactid=".0.9.0.0.1.6">
									<div data-reactid=".0.9.0.0.1.6.0">
										<div data-reactid=".0.9.0.0.1.6.0.0">Distributor/SKU</div>
										<noscript data-reactid=".0.9.0.0.1.6.0.1" />
									</div>
								</th>
								<th className="unit-price" data-reactid=".0.9.0.0.1.7">
									<div data-reactid=".0.9.0.0.1.7.0">
										<div data-reactid=".0.9.0.0.1.7.0.0">Unit Price</div>
										<noscript data-reactid=".0.9.0.0.1.7.0.1" />
									</div>
								</th>
								<th className="line-total" data-reactid=".0.9.0.0.1.8">
									<div data-reactid=".0.9.0.0.1.8.0">Line Total</div>
								</th>
								<th className="batch-total" data-reactid=".0.9.0.0.1.9">
									<div data-reactid=".0.9.0.0.1.9.0">Batch Total</div>
								</th>
								<th className="notes-heading-bottom" data-reactid=".0.9.0.0.1.a" />
							</tr>
						</thead>
					</table>
				</div>
				<table data-reactid=".0.a">
					<tbody className="bom-body" data-reactid=".0.a.0">
						<tr
							className="lineitem"
							id="uploadLine_qftkieYNXlxIwUwk"
							data-reactid=".0.a.0.$uploadLine_qftkieYNXlxIwUwk"
						>
							<td className="closer" data-reactid=".0.a.0.$uploadLine_qftkieYNXlxIwUwk.0">
								<div data-reactid=".0.a.0.$uploadLine_qftkieYNXlxIwUwk.0.0" />
							</td>
							<td className="line-number-handle" data-reactid=".0.a.0.$uploadLine_qftkieYNXlxIwUwk.1">
								<div data-reactid=".0.a.0.$uploadLine_qftkieYNXlxIwUwk.1.0">1</div>
							</td>
							<td className="query is-read-only" data-reactid=".0.a.0.$uploadLine_qftkieYNXlxIwUwk.2">
								<div data-reactid=".0.a.0.$uploadLine_qftkieYNXlxIwUwk.2.0">0-332-002-256</div>
							</td>
							<td
								className="undo-delete"
								colspan="2"
								data-reactid=".0.a.0.$uploadLine_qftkieYNXlxIwUwk.3"
							>
								<div data-reactid=".0.a.0.$uploadLine_qftkieYNXlxIwUwk.3.0">
									<div data-reactid=".0.a.0.$uploadLine_qftkieYNXlxIwUwk.3.0.0">Row deleted</div>
								</div>
							</td>
							<td className="quantity is-read-only" data-reactid=".0.a.0.$uploadLine_qftkieYNXlxIwUwk.4">
								<div data-reactid=".0.a.0.$uploadLine_qftkieYNXlxIwUwk.4.0">1</div>
							</td>
							<td
								className="matched-parts availability-poor"
								data-reactid=".0.a.0.$uploadLine_qftkieYNXlxIwUwk.5"
							>
								<div data-reactid=".0.a.0.$uploadLine_qftkieYNXlxIwUwk.5.0">
									<div data-reactid=".0.a.0.$uploadLine_qftkieYNXlxIwUwk.5.0.0">
										<a
											href="https://octopart.com/0-332-002-256-bosch+tools-13229117"
											target="_blank"
											className="selected-part"
											data-reactid=".0.a.0.$uploadLine_qftkieYNXlxIwUwk.5.0.0.0"
										>
											<div
												className="manufacturer-name"
												data-reactid=".0.a.0.$uploadLine_qftkieYNXlxIwUwk.5.0.0.0.0"
											>
												Bosch Tools
											</div>
											<div
												className="mpn"
												data-reactid=".0.a.0.$uploadLine_qftkieYNXlxIwUwk.5.0.0.0.1"
											>
												0-332-002-256
											</div>
										</a>
										<div
											className="offers-indicator"
											data-reactid=".0.a.0.$uploadLine_qftkieYNXlxIwUwk.5.0.0.1"
										>
											<a href="#" data-reactid=".0.a.0.$uploadLine_qftkieYNXlxIwUwk.5.0.0.1.0">
												1
											</a>
											<noscript data-reactid=".0.a.0.$uploadLine_qftkieYNXlxIwUwk.5.0.0.1.1" />
										</div>
									</div>
								</div>
							</td>
							<td className="lineitem-details" data-reactid=".0.a.0.$uploadLine_qftkieYNXlxIwUwk.6">
								<table data-reactid=".0.a.0.$uploadLine_qftkieYNXlxIwUwk.6.0">
									<tbody data-reactid=".0.a.0.$uploadLine_qftkieYNXlxIwUwk.6.0.0">
										<tr data-reactid=".0.a.0.$uploadLine_qftkieYNXlxIwUwk.6.0.0.0">
											<td
												className="lineitem-details-column is-read-only lineitem-details-column-schematicReference"
												data-reactid=".0.a.0.$uploadLine_qftkieYNXlxIwUwk.6.0.0.0.$schematicReference"
											>
												<div data-reactid=".0.a.0.$uploadLine_qftkieYNXlxIwUwk.6.0.0.0.$schematicReference.0">
													<div data-reactid=".0.a.0.$uploadLine_qftkieYNXlxIwUwk.6.0.0.0.$schematicReference.0.0" />
													<a
														href="#"
														className="more-link"
														data-reactid=".0.a.0.$uploadLine_qftkieYNXlxIwUwk.6.0.0.0.$schematicReference.0.1"
													>
														More...
													</a>
												</div>
											</td>
											<td
												className="lineitem-details-column is-read-only lineitem-details-column-internalPartNumber"
												data-reactid=".0.a.0.$uploadLine_qftkieYNXlxIwUwk.6.0.0.0.$internalPartNumber"
											>
												<div data-reactid=".0.a.0.$uploadLine_qftkieYNXlxIwUwk.6.0.0.0.$internalPartNumber.0">
													<div data-reactid=".0.a.0.$uploadLine_qftkieYNXlxIwUwk.6.0.0.0.$internalPartNumber.0.0">
														jhgfjfkh
													</div>
													<a
														href="#"
														className="more-link"
														data-reactid=".0.a.0.$uploadLine_qftkieYNXlxIwUwk.6.0.0.0.$internalPartNumber.0.1"
													>
														More...
													</a>
												</div>
											</td>
											<td
												className="lineitem-details-column is-read-only lineitem-details-column-description"
												data-reactid=".0.a.0.$uploadLine_qftkieYNXlxIwUwk.6.0.0.0.$description"
											>
												<div data-reactid=".0.a.0.$uploadLine_qftkieYNXlxIwUwk.6.0.0.0.$description.0">
													<div data-reactid=".0.a.0.$uploadLine_qftkieYNXlxIwUwk.6.0.0.0.$description.0.0" />
													<a
														href="#"
														className="more-link"
														data-reactid=".0.a.0.$uploadLine_qftkieYNXlxIwUwk.6.0.0.0.$description.0.1"
													>
														More...
													</a>
												</div>
											</td>
										</tr>
									</tbody>
								</table>
							</td>
							<td className="hidden" data-reactid=".0.a.0.$uploadLine_qftkieYNXlxIwUwk.7" />
							<td className="distributor-sku" data-reactid=".0.a.0.$uploadLine_qftkieYNXlxIwUwk.8">
								<div data-reactid=".0.a.0.$uploadLine_qftkieYNXlxIwUwk.8.0">
									<div
										className="current-distributor"
										data-reactid=".0.a.0.$uploadLine_qftkieYNXlxIwUwk.8.0.0"
									>
										<a
											href="https://octopart.com/click/track?country=AE&amp;ak=68b25f31&amp;sig=052ee98&amp;sid=14232&amp;ppid=13229117&amp;vpid=158387073&amp;ct=offers"
											target="_blank"
											data-reactid=".0.a.0.$uploadLine_qftkieYNXlxIwUwk.8.0.0.0"
										>
											<div
												className="distributor"
												data-reactid=".0.a.0.$uploadLine_qftkieYNXlxIwUwk.8.0.0.0.0"
											>
												Beyond Components
											</div>
											<div
												className="sku"
												data-reactid=".0.a.0.$uploadLine_qftkieYNXlxIwUwk.8.0.0.0.1"
											>
												0-332-002-256
											</div>
											<div
												className="in-stock-quantity availability has-stock-problem"
												data-reactid=".0.a.0.$uploadLine_qftkieYNXlxIwUwk.8.0.0.0.2"
											>
												<small data-reactid=".0.a.0.$uploadLine_qftkieYNXlxIwUwk.8.0.0.0.2.0">
													No Stock
												</small>
											</div>
											<div
												className="packaging"
												data-reactid=".0.a.0.$uploadLine_qftkieYNXlxIwUwk.8.0.0.0.3"
											>
												<small data-reactid=".0.a.0.$uploadLine_qftkieYNXlxIwUwk.8.0.0.0.3.0" />
											</div>
										</a>
									</div>
								</div>
							</td>
							<td className="unit-price" data-reactid=".0.a.0.$uploadLine_qftkieYNXlxIwUwk.9">
								<div
									className="price-at-total-quantity was-converted"
									data-reactid=".0.a.0.$uploadLine_qftkieYNXlxIwUwk.9.0"
								>
									<small
										className="currency-code"
										data-reactid=".0.a.0.$uploadLine_qftkieYNXlxIwUwk.9.0.0"
									>
										INR
									</small>
									<span data-reactid=".0.a.0.$uploadLine_qftkieYNXlxIwUwk.9.0.1"> </span>
									<span className="amount" data-reactid=".0.a.0.$uploadLine_qftkieYNXlxIwUwk.9.0.2">
										3,580.08165
									</span>
									<span
										className="conversion-asterisk"
										data-reactid=".0.a.0.$uploadLine_qftkieYNXlxIwUwk.9.0.3"
									>
										*
									</span>
									<noscript data-reactid=".0.a.0.$uploadLine_qftkieYNXlxIwUwk.9.0.4" />
								</div>
							</td>
							<td
								className="line-total was-converted"
								data-reactid=".0.a.0.$uploadLine_qftkieYNXlxIwUwk.a"
							>
								<div data-reactid=".0.a.0.$uploadLine_qftkieYNXlxIwUwk.a.0" className="price">
									<small
										className="currency-code"
										data-reactid=".0.a.0.$uploadLine_qftkieYNXlxIwUwk.a.0.0"
									>
										INR
									</small>
									<span data-reactid=".0.a.0.$uploadLine_qftkieYNXlxIwUwk.a.0.1"> </span>
									<span className="amount" data-reactid=".0.a.0.$uploadLine_qftkieYNXlxIwUwk.a.0.2">
										3,580.08
									</span>
									<span
										className="conversion-asterisk"
										data-reactid=".0.a.0.$uploadLine_qftkieYNXlxIwUwk.a.0.3"
									>
										*
									</span>
									<noscript data-reactid=".0.a.0.$uploadLine_qftkieYNXlxIwUwk.a.0.4" />
								</div>
							</td>
							<td
								className="batch-total was-converted"
								data-reactid=".0.a.0.$uploadLine_qftkieYNXlxIwUwk.b"
							>
								<div data-reactid=".0.a.0.$uploadLine_qftkieYNXlxIwUwk.b.0" className="price">
									<small
										className="currency-code"
										data-reactid=".0.a.0.$uploadLine_qftkieYNXlxIwUwk.b.0.0"
									>
										INR
									</small>
									<span data-reactid=".0.a.0.$uploadLine_qftkieYNXlxIwUwk.b.0.1"> </span>
									<span className="amount" data-reactid=".0.a.0.$uploadLine_qftkieYNXlxIwUwk.b.0.2">
										3,580.08
									</span>
									<span
										className="conversion-asterisk"
										data-reactid=".0.a.0.$uploadLine_qftkieYNXlxIwUwk.b.0.3"
									>
										*
									</span>
									<noscript data-reactid=".0.a.0.$uploadLine_qftkieYNXlxIwUwk.b.0.4" />
								</div>
							</td>
							<td className="notes is-read-only" data-reactid=".0.a.0.$uploadLine_qftkieYNXlxIwUwk.c">
								<div data-reactid=".0.a.0.$uploadLine_qftkieYNXlxIwUwk.c.0">
									<div data-reactid=".0.a.0.$uploadLine_qftkieYNXlxIwUwk.c.0.0">hjhgkjgkj</div>
									<a
										href="#"
										className="more-link"
										data-reactid=".0.a.0.$uploadLine_qftkieYNXlxIwUwk.c.0.1"
									>
										More...
									</a>
								</div>
							</td>
						</tr>
						<tr className="lineitem" id="-L-HWQZYJOjN_piEazuI" data-reactid=".0.a.0.$-L-HWQZYJOjN_piEazuI">
							<td className="closer" data-reactid=".0.a.0.$-L-HWQZYJOjN_piEazuI.0">
								<div data-reactid=".0.a.0.$-L-HWQZYJOjN_piEazuI.0.0" />
							</td>
							<td className="line-number-handle" data-reactid=".0.a.0.$-L-HWQZYJOjN_piEazuI.1">
								<div data-reactid=".0.a.0.$-L-HWQZYJOjN_piEazuI.1.0">2</div>
							</td>
							<td className="query is-read-only" data-reactid=".0.a.0.$-L-HWQZYJOjN_piEazuI.2">
								<div data-reactid=".0.a.0.$-L-HWQZYJOjN_piEazuI.2.0">1234</div>
							</td>
							<td className="undo-delete" colspan="2" data-reactid=".0.a.0.$-L-HWQZYJOjN_piEazuI.3">
								<div data-reactid=".0.a.0.$-L-HWQZYJOjN_piEazuI.3.0">
									<div data-reactid=".0.a.0.$-L-HWQZYJOjN_piEazuI.3.0.0">Row deleted</div>
								</div>
							</td>
							<td className="quantity is-read-only" data-reactid=".0.a.0.$-L-HWQZYJOjN_piEazuI.4">
								<div data-reactid=".0.a.0.$-L-HWQZYJOjN_piEazuI.4.0">4</div>
							</td>
							<td
								className="matched-parts availability-good"
								data-reactid=".0.a.0.$-L-HWQZYJOjN_piEazuI.5"
							>
								<div data-reactid=".0.a.0.$-L-HWQZYJOjN_piEazuI.5.0">
									<div data-reactid=".0.a.0.$-L-HWQZYJOjN_piEazuI.5.0.0">
										<a
											href="https://octopart.com/1234-davies+molding-32972108"
											target="_blank"
											className="selected-part"
											data-reactid=".0.a.0.$-L-HWQZYJOjN_piEazuI.5.0.0.0"
										>
											<div
												className="manufacturer-name"
												data-reactid=".0.a.0.$-L-HWQZYJOjN_piEazuI.5.0.0.0.0"
											>
												Davies Molding
											</div>
											<div className="mpn" data-reactid=".0.a.0.$-L-HWQZYJOjN_piEazuI.5.0.0.0.1">
												1234
											</div>
										</a>
										<div
											className="offers-indicator"
											data-reactid=".0.a.0.$-L-HWQZYJOjN_piEazuI.5.0.0.1"
										>
											<a href="#" data-reactid=".0.a.0.$-L-HWQZYJOjN_piEazuI.5.0.0.1.0">
												6
											</a>
											<noscript data-reactid=".0.a.0.$-L-HWQZYJOjN_piEazuI.5.0.0.1.1" />
										</div>
									</div>
								</div>
							</td>
							<td className="lineitem-details" data-reactid=".0.a.0.$-L-HWQZYJOjN_piEazuI.6">
								<table data-reactid=".0.a.0.$-L-HWQZYJOjN_piEazuI.6.0">
									<tbody data-reactid=".0.a.0.$-L-HWQZYJOjN_piEazuI.6.0.0">
										<tr data-reactid=".0.a.0.$-L-HWQZYJOjN_piEazuI.6.0.0.0">
											<td
												className="lineitem-details-column is-read-only lineitem-details-column-schematicReference"
												data-reactid=".0.a.0.$-L-HWQZYJOjN_piEazuI.6.0.0.0.$schematicReference"
											>
												<div data-reactid=".0.a.0.$-L-HWQZYJOjN_piEazuI.6.0.0.0.$schematicReference.0">
													<div data-reactid=".0.a.0.$-L-HWQZYJOjN_piEazuI.6.0.0.0.$schematicReference.0.0" />
													<a
														href="#"
														className="more-link"
														data-reactid=".0.a.0.$-L-HWQZYJOjN_piEazuI.6.0.0.0.$schematicReference.0.1"
													>
														More...
													</a>
												</div>
											</td>
											<td
												className="lineitem-details-column is-read-only lineitem-details-column-internalPartNumber"
												data-reactid=".0.a.0.$-L-HWQZYJOjN_piEazuI.6.0.0.0.$internalPartNumber"
											>
												<div data-reactid=".0.a.0.$-L-HWQZYJOjN_piEazuI.6.0.0.0.$internalPartNumber.0">
													<div data-reactid=".0.a.0.$-L-HWQZYJOjN_piEazuI.6.0.0.0.$internalPartNumber.0.0" />
													<a
														href="#"
														className="more-link"
														data-reactid=".0.a.0.$-L-HWQZYJOjN_piEazuI.6.0.0.0.$internalPartNumber.0.1"
													>
														More...
													</a>
												</div>
											</td>
											<td
												className="lineitem-details-column is-read-only lineitem-details-column-description"
												data-reactid=".0.a.0.$-L-HWQZYJOjN_piEazuI.6.0.0.0.$description"
											>
												<div data-reactid=".0.a.0.$-L-HWQZYJOjN_piEazuI.6.0.0.0.$description.0">
													<div data-reactid=".0.a.0.$-L-HWQZYJOjN_piEazuI.6.0.0.0.$description.0.0" />
													<a
														href="#"
														className="more-link"
														data-reactid=".0.a.0.$-L-HWQZYJOjN_piEazuI.6.0.0.0.$description.0.1"
													>
														More...
													</a>
												</div>
											</td>
										</tr>
									</tbody>
								</table>
							</td>
							<td className="hidden" data-reactid=".0.a.0.$-L-HWQZYJOjN_piEazuI.7" />
							<td className="distributor-sku has-packaging" data-reactid=".0.a.0.$-L-HWQZYJOjN_piEazuI.8">
								<div data-reactid=".0.a.0.$-L-HWQZYJOjN_piEazuI.8.0">
									<div
										className="current-distributor"
										data-reactid=".0.a.0.$-L-HWQZYJOjN_piEazuI.8.0.0"
									>
										<a
											href="https://octopart.com/click/track?country=AE&amp;ak=68b25f31&amp;sig=074dfde&amp;sid=459&amp;ppid=32972108&amp;vpid=349394517&amp;ct=offers"
											target="_blank"
											data-reactid=".0.a.0.$-L-HWQZYJOjN_piEazuI.8.0.0.0"
										>
											<div
												className="distributor"
												data-reactid=".0.a.0.$-L-HWQZYJOjN_piEazuI.8.0.0.0.0"
											>
												Digi-Key
											</div>
											<div className="sku" data-reactid=".0.a.0.$-L-HWQZYJOjN_piEazuI.8.0.0.0.1">
												1722-1235-ND
											</div>
											<div
												className="in-stock-quantity availability"
												data-reactid=".0.a.0.$-L-HWQZYJOjN_piEazuI.8.0.0.0.2"
											>
												<small data-reactid=".0.a.0.$-L-HWQZYJOjN_piEazuI.8.0.0.0.2.0">
													Stock: 449
												</small>
											</div>
											<div
												className="packaging"
												data-reactid=".0.a.0.$-L-HWQZYJOjN_piEazuI.8.0.0.0.3"
											>
												<small data-reactid=".0.a.0.$-L-HWQZYJOjN_piEazuI.8.0.0.0.3.0">
													Bulk
												</small>
											</div>
										</a>
									</div>
								</div>
							</td>
							<td className="unit-price" data-reactid=".0.a.0.$-L-HWQZYJOjN_piEazuI.9">
								<div
									className="price-at-total-quantity was-converted"
									data-reactid=".0.a.0.$-L-HWQZYJOjN_piEazuI.9.0"
								>
									<small className="currency-code" data-reactid=".0.a.0.$-L-HWQZYJOjN_piEazuI.9.0.0">
										INR
									</small>
									<span data-reactid=".0.a.0.$-L-HWQZYJOjN_piEazuI.9.0.1"> </span>
									<span className="amount" data-reactid=".0.a.0.$-L-HWQZYJOjN_piEazuI.9.0.2">
										323.40802
									</span>
									<span
										className="conversion-asterisk"
										data-reactid=".0.a.0.$-L-HWQZYJOjN_piEazuI.9.0.3"
									>
										*
									</span>
									<noscript data-reactid=".0.a.0.$-L-HWQZYJOjN_piEazuI.9.0.4" />
								</div>
							</td>
							<td className="line-total was-converted" data-reactid=".0.a.0.$-L-HWQZYJOjN_piEazuI.a">
								<div data-reactid=".0.a.0.$-L-HWQZYJOjN_piEazuI.a.0" className="price">
									<small className="currency-code" data-reactid=".0.a.0.$-L-HWQZYJOjN_piEazuI.a.0.0">
										INR
									</small>
									<span data-reactid=".0.a.0.$-L-HWQZYJOjN_piEazuI.a.0.1"> </span>
									<span className="amount" data-reactid=".0.a.0.$-L-HWQZYJOjN_piEazuI.a.0.2">
										1,293.63
									</span>
									<span
										className="conversion-asterisk"
										data-reactid=".0.a.0.$-L-HWQZYJOjN_piEazuI.a.0.3"
									>
										*
									</span>
									<noscript data-reactid=".0.a.0.$-L-HWQZYJOjN_piEazuI.a.0.4" />
								</div>
							</td>
							<td className="batch-total was-converted" data-reactid=".0.a.0.$-L-HWQZYJOjN_piEazuI.b">
								<div data-reactid=".0.a.0.$-L-HWQZYJOjN_piEazuI.b.0" className="price">
									<small className="currency-code" data-reactid=".0.a.0.$-L-HWQZYJOjN_piEazuI.b.0.0">
										INR
									</small>
									<span data-reactid=".0.a.0.$-L-HWQZYJOjN_piEazuI.b.0.1"> </span>
									<span className="amount" data-reactid=".0.a.0.$-L-HWQZYJOjN_piEazuI.b.0.2">
										1,293.63
									</span>
									<span
										className="conversion-asterisk"
										data-reactid=".0.a.0.$-L-HWQZYJOjN_piEazuI.b.0.3"
									>
										*
									</span>
									<noscript data-reactid=".0.a.0.$-L-HWQZYJOjN_piEazuI.b.0.4" />
								</div>
							</td>
							<td className="notes is-read-only" data-reactid=".0.a.0.$-L-HWQZYJOjN_piEazuI.c">
								<div data-reactid=".0.a.0.$-L-HWQZYJOjN_piEazuI.c.0">
									<div data-reactid=".0.a.0.$-L-HWQZYJOjN_piEazuI.c.0.0" />
									<a href="#" className="more-link" data-reactid=".0.a.0.$-L-HWQZYJOjN_piEazuI.c.0.1">
										More...
									</a>
								</div>
							</td>
						</tr>
						<tr className="lineitem" id="-L-HWQ_6R-RQe4K7Cayu" data-reactid=".0.a.0.$-L-HWQ_6R-RQe4K7Cayu">
							<td className="closer" data-reactid=".0.a.0.$-L-HWQ_6R-RQe4K7Cayu.0">
								<div data-reactid=".0.a.0.$-L-HWQ_6R-RQe4K7Cayu.0.0" />
							</td>
							<td className="line-number-handle" data-reactid=".0.a.0.$-L-HWQ_6R-RQe4K7Cayu.1">
								<div data-reactid=".0.a.0.$-L-HWQ_6R-RQe4K7Cayu.1.0">3</div>
							</td>
							<td className="query is-read-only" data-reactid=".0.a.0.$-L-HWQ_6R-RQe4K7Cayu.2">
								<div data-reactid=".0.a.0.$-L-HWQ_6R-RQe4K7Cayu.2.0">3456</div>
							</td>
							<td className="undo-delete" colspan="2" data-reactid=".0.a.0.$-L-HWQ_6R-RQe4K7Cayu.3">
								<div data-reactid=".0.a.0.$-L-HWQ_6R-RQe4K7Cayu.3.0">
									<div data-reactid=".0.a.0.$-L-HWQ_6R-RQe4K7Cayu.3.0.0">Row deleted</div>
								</div>
							</td>
							<td className="quantity is-read-only" data-reactid=".0.a.0.$-L-HWQ_6R-RQe4K7Cayu.4">
								<div data-reactid=".0.a.0.$-L-HWQ_6R-RQe4K7Cayu.4.0">40</div>
							</td>
							<td
								className="matched-parts availability-warning"
								data-reactid=".0.a.0.$-L-HWQ_6R-RQe4K7Cayu.5"
							>
								<div data-reactid=".0.a.0.$-L-HWQ_6R-RQe4K7Cayu.5.0">
									<div data-reactid=".0.a.0.$-L-HWQ_6R-RQe4K7Cayu.5.0.0">
										<a
											href="https://octopart.com/3456-adafruit+industries-82218805"
											target="_blank"
											className="selected-part"
											data-reactid=".0.a.0.$-L-HWQ_6R-RQe4K7Cayu.5.0.0.0"
										>
											<div
												className="manufacturer-name"
												data-reactid=".0.a.0.$-L-HWQ_6R-RQe4K7Cayu.5.0.0.0.0"
											>
												Adafruit Industries
											</div>
											<div className="mpn" data-reactid=".0.a.0.$-L-HWQ_6R-RQe4K7Cayu.5.0.0.0.1">
												3456
											</div>
										</a>
										<div
											className="offers-indicator"
											data-reactid=".0.a.0.$-L-HWQ_6R-RQe4K7Cayu.5.0.0.1"
										>
											<a href="#" data-reactid=".0.a.0.$-L-HWQ_6R-RQe4K7Cayu.5.0.0.1.0">
												3
											</a>
											<noscript data-reactid=".0.a.0.$-L-HWQ_6R-RQe4K7Cayu.5.0.0.1.1" />
										</div>
									</div>
								</div>
							</td>
							<td className="lineitem-details" data-reactid=".0.a.0.$-L-HWQ_6R-RQe4K7Cayu.6">
								<table data-reactid=".0.a.0.$-L-HWQ_6R-RQe4K7Cayu.6.0">
									<tbody data-reactid=".0.a.0.$-L-HWQ_6R-RQe4K7Cayu.6.0.0">
										<tr data-reactid=".0.a.0.$-L-HWQ_6R-RQe4K7Cayu.6.0.0.0">
											<td
												className="lineitem-details-column is-read-only lineitem-details-column-schematicReference"
												data-reactid=".0.a.0.$-L-HWQ_6R-RQe4K7Cayu.6.0.0.0.$schematicReference"
											>
												<div data-reactid=".0.a.0.$-L-HWQ_6R-RQe4K7Cayu.6.0.0.0.$schematicReference.0">
													<div data-reactid=".0.a.0.$-L-HWQ_6R-RQe4K7Cayu.6.0.0.0.$schematicReference.0.0" />
													<a
														href="#"
														className="more-link"
														data-reactid=".0.a.0.$-L-HWQ_6R-RQe4K7Cayu.6.0.0.0.$schematicReference.0.1"
													>
														More...
													</a>
												</div>
											</td>
											<td
												className="lineitem-details-column is-read-only lineitem-details-column-internalPartNumber"
												data-reactid=".0.a.0.$-L-HWQ_6R-RQe4K7Cayu.6.0.0.0.$internalPartNumber"
											>
												<div data-reactid=".0.a.0.$-L-HWQ_6R-RQe4K7Cayu.6.0.0.0.$internalPartNumber.0">
													<div data-reactid=".0.a.0.$-L-HWQ_6R-RQe4K7Cayu.6.0.0.0.$internalPartNumber.0.0" />
													<a
														href="#"
														className="more-link"
														data-reactid=".0.a.0.$-L-HWQ_6R-RQe4K7Cayu.6.0.0.0.$internalPartNumber.0.1"
													>
														More...
													</a>
												</div>
											</td>
											<td
												className="lineitem-details-column is-read-only lineitem-details-column-description"
												data-reactid=".0.a.0.$-L-HWQ_6R-RQe4K7Cayu.6.0.0.0.$description"
											>
												<div data-reactid=".0.a.0.$-L-HWQ_6R-RQe4K7Cayu.6.0.0.0.$description.0">
													<div data-reactid=".0.a.0.$-L-HWQ_6R-RQe4K7Cayu.6.0.0.0.$description.0.0" />
													<a
														href="#"
														className="more-link"
														data-reactid=".0.a.0.$-L-HWQ_6R-RQe4K7Cayu.6.0.0.0.$description.0.1"
													>
														More...
													</a>
												</div>
											</td>
										</tr>
									</tbody>
								</table>
							</td>
							<td className="hidden" data-reactid=".0.a.0.$-L-HWQ_6R-RQe4K7Cayu.7" />
							<td className="distributor-sku" data-reactid=".0.a.0.$-L-HWQ_6R-RQe4K7Cayu.8">
								<div data-reactid=".0.a.0.$-L-HWQ_6R-RQe4K7Cayu.8.0">
									<div
										className="current-distributor"
										data-reactid=".0.a.0.$-L-HWQ_6R-RQe4K7Cayu.8.0.0"
									>
										<a
											href="https://octopart.com/click/track?country=AE&amp;ak=68b25f31&amp;sig=05356bd&amp;sid=13007&amp;ppid=82218805&amp;vpid=423139435&amp;ct=offers"
											target="_blank"
											data-reactid=".0.a.0.$-L-HWQ_6R-RQe4K7Cayu.8.0.0.0"
										>
											<div
												className="distributor"
												data-reactid=".0.a.0.$-L-HWQ_6R-RQe4K7Cayu.8.0.0.0.0"
											>
												Adafruit Industries
											</div>
											<div className="sku" data-reactid=".0.a.0.$-L-HWQ_6R-RQe4K7Cayu.8.0.0.0.1">
												ADA3456
											</div>
											<div
												className="in-stock-quantity availability"
												data-reactid=".0.a.0.$-L-HWQ_6R-RQe4K7Cayu.8.0.0.0.2"
											>
												<small data-reactid=".0.a.0.$-L-HWQ_6R-RQe4K7Cayu.8.0.0.0.2.0">
													Stock: Yes
												</small>
											</div>
											<div
												className="packaging"
												data-reactid=".0.a.0.$-L-HWQ_6R-RQe4K7Cayu.8.0.0.0.3"
											>
												<small data-reactid=".0.a.0.$-L-HWQ_6R-RQe4K7Cayu.8.0.0.0.3.0" />
											</div>
										</a>
									</div>
								</div>
							</td>
							<td className="unit-price" data-reactid=".0.a.0.$-L-HWQ_6R-RQe4K7Cayu.9">
								<div
									className="price-at-total-quantity was-converted"
									data-reactid=".0.a.0.$-L-HWQ_6R-RQe4K7Cayu.9.0"
								>
									<small className="currency-code" data-reactid=".0.a.0.$-L-HWQ_6R-RQe4K7Cayu.9.0.0">
										INR
									</small>
									<span data-reactid=".0.a.0.$-L-HWQ_6R-RQe4K7Cayu.9.0.1"> </span>
									<span className="amount" data-reactid=".0.a.0.$-L-HWQ_6R-RQe4K7Cayu.9.0.2">
										229.48414
									</span>
									<span
										className="conversion-asterisk"
										data-reactid=".0.a.0.$-L-HWQ_6R-RQe4K7Cayu.9.0.3"
									>
										*
									</span>
									<noscript data-reactid=".0.a.0.$-L-HWQ_6R-RQe4K7Cayu.9.0.4" />
								</div>
							</td>
							<td className="line-total was-converted" data-reactid=".0.a.0.$-L-HWQ_6R-RQe4K7Cayu.a">
								<div data-reactid=".0.a.0.$-L-HWQ_6R-RQe4K7Cayu.a.0" className="price">
									<small className="currency-code" data-reactid=".0.a.0.$-L-HWQ_6R-RQe4K7Cayu.a.0.0">
										INR
									</small>
									<span data-reactid=".0.a.0.$-L-HWQ_6R-RQe4K7Cayu.a.0.1"> </span>
									<span className="amount" data-reactid=".0.a.0.$-L-HWQ_6R-RQe4K7Cayu.a.0.2">
										9,179.37
									</span>
									<span
										className="conversion-asterisk"
										data-reactid=".0.a.0.$-L-HWQ_6R-RQe4K7Cayu.a.0.3"
									>
										*
									</span>
									<noscript data-reactid=".0.a.0.$-L-HWQ_6R-RQe4K7Cayu.a.0.4" />
								</div>
							</td>
							<td className="batch-total was-converted" data-reactid=".0.a.0.$-L-HWQ_6R-RQe4K7Cayu.b">
								<div data-reactid=".0.a.0.$-L-HWQ_6R-RQe4K7Cayu.b.0" className="price">
									<small className="currency-code" data-reactid=".0.a.0.$-L-HWQ_6R-RQe4K7Cayu.b.0.0">
										INR
									</small>
									<span data-reactid=".0.a.0.$-L-HWQ_6R-RQe4K7Cayu.b.0.1"> </span>
									<span className="amount" data-reactid=".0.a.0.$-L-HWQ_6R-RQe4K7Cayu.b.0.2">
										9,179.37
									</span>
									<span
										className="conversion-asterisk"
										data-reactid=".0.a.0.$-L-HWQ_6R-RQe4K7Cayu.b.0.3"
									>
										*
									</span>
									<noscript data-reactid=".0.a.0.$-L-HWQ_6R-RQe4K7Cayu.b.0.4" />
								</div>
							</td>
							<td className="notes is-read-only" data-reactid=".0.a.0.$-L-HWQ_6R-RQe4K7Cayu.c">
								<div data-reactid=".0.a.0.$-L-HWQ_6R-RQe4K7Cayu.c.0">
									<div data-reactid=".0.a.0.$-L-HWQ_6R-RQe4K7Cayu.c.0.0" />
									<a href="#" className="more-link" data-reactid=".0.a.0.$-L-HWQ_6R-RQe4K7Cayu.c.0.1">
										More...
									</a>
								</div>
							</td>
						</tr>
						<tr className="lineitem" id="-L-L76lmSkFeTc7P5UAl" data-reactid=".0.a.0.$-L-L76lmSkFeTc7P5UAl">
							<td className="closer" data-reactid=".0.a.0.$-L-L76lmSkFeTc7P5UAl.0">
								<div data-reactid=".0.a.0.$-L-L76lmSkFeTc7P5UAl.0.0" />
							</td>
							<td className="line-number-handle" data-reactid=".0.a.0.$-L-L76lmSkFeTc7P5UAl.1">
								<div data-reactid=".0.a.0.$-L-L76lmSkFeTc7P5UAl.1.0">4</div>
							</td>
							<td className="query is-read-only" data-reactid=".0.a.0.$-L-L76lmSkFeTc7P5UAl.2">
								<div data-reactid=".0.a.0.$-L-L76lmSkFeTc7P5UAl.2.0">
									Ammeter selector switch 4-position 6A (3STI 4002RQ08) 05 Nos.
								</div>
							</td>
							<td className="undo-delete" colspan="2" data-reactid=".0.a.0.$-L-L76lmSkFeTc7P5UAl.3">
								<div data-reactid=".0.a.0.$-L-L76lmSkFeTc7P5UAl.3.0">
									<div data-reactid=".0.a.0.$-L-L76lmSkFeTc7P5UAl.3.0.0">Row deleted</div>
								</div>
							</td>
							<td className="quantity is-read-only" data-reactid=".0.a.0.$-L-L76lmSkFeTc7P5UAl.4">
								<div data-reactid=".0.a.0.$-L-L76lmSkFeTc7P5UAl.4.0">1</div>
							</td>
							<td
								className="matched-parts no-matches-found"
								data-reactid=".0.a.0.$-L-L76lmSkFeTc7P5UAl.5"
							>
								<div data-reactid=".0.a.0.$-L-L76lmSkFeTc7P5UAl.5.0">No matches found</div>
							</td>
							<td className="lineitem-details" data-reactid=".0.a.0.$-L-L76lmSkFeTc7P5UAl.6">
								<table data-reactid=".0.a.0.$-L-L76lmSkFeTc7P5UAl.6.0">
									<tbody data-reactid=".0.a.0.$-L-L76lmSkFeTc7P5UAl.6.0.0">
										<tr data-reactid=".0.a.0.$-L-L76lmSkFeTc7P5UAl.6.0.0.0">
											<td
												className="lineitem-details-column is-read-only lineitem-details-column-schematicReference"
												data-reactid=".0.a.0.$-L-L76lmSkFeTc7P5UAl.6.0.0.0.$schematicReference"
											>
												<div data-reactid=".0.a.0.$-L-L76lmSkFeTc7P5UAl.6.0.0.0.$schematicReference.0">
													<div data-reactid=".0.a.0.$-L-L76lmSkFeTc7P5UAl.6.0.0.0.$schematicReference.0.0" />
													<a
														href="#"
														className="more-link"
														data-reactid=".0.a.0.$-L-L76lmSkFeTc7P5UAl.6.0.0.0.$schematicReference.0.1"
													>
														More...
													</a>
												</div>
											</td>
											<td
												className="lineitem-details-column is-read-only lineitem-details-column-internalPartNumber"
												data-reactid=".0.a.0.$-L-L76lmSkFeTc7P5UAl.6.0.0.0.$internalPartNumber"
											>
												<div data-reactid=".0.a.0.$-L-L76lmSkFeTc7P5UAl.6.0.0.0.$internalPartNumber.0">
													<div data-reactid=".0.a.0.$-L-L76lmSkFeTc7P5UAl.6.0.0.0.$internalPartNumber.0.0" />
													<a
														href="#"
														className="more-link"
														data-reactid=".0.a.0.$-L-L76lmSkFeTc7P5UAl.6.0.0.0.$internalPartNumber.0.1"
													>
														More...
													</a>
												</div>
											</td>
											<td
												className="lineitem-details-column is-read-only lineitem-details-column-description"
												data-reactid=".0.a.0.$-L-L76lmSkFeTc7P5UAl.6.0.0.0.$description"
											>
												<div data-reactid=".0.a.0.$-L-L76lmSkFeTc7P5UAl.6.0.0.0.$description.0">
													<div data-reactid=".0.a.0.$-L-L76lmSkFeTc7P5UAl.6.0.0.0.$description.0.0" />
													<a
														href="#"
														className="more-link"
														data-reactid=".0.a.0.$-L-L76lmSkFeTc7P5UAl.6.0.0.0.$description.0.1"
													>
														More...
													</a>
												</div>
											</td>
										</tr>
									</tbody>
								</table>
							</td>
							<td className="hidden" data-reactid=".0.a.0.$-L-L76lmSkFeTc7P5UAl.7" />
							<td className="distributor-sku empty" data-reactid=".0.a.0.$-L-L76lmSkFeTc7P5UAl.8">
								<div data-reactid=".0.a.0.$-L-L76lmSkFeTc7P5UAl.8.0">N/A</div>
							</td>
							<td className="unit-price empty" data-reactid=".0.a.0.$-L-L76lmSkFeTc7P5UAl.9">
								<div data-reactid=".0.a.0.$-L-L76lmSkFeTc7P5UAl.9.0">N/A</div>
							</td>
							<td className="line-total empty" data-reactid=".0.a.0.$-L-L76lmSkFeTc7P5UAl.a">
								<div data-reactid=".0.a.0.$-L-L76lmSkFeTc7P5UAl.a.0">N/A</div>
							</td>
							<td className="batch-total empty" data-reactid=".0.a.0.$-L-L76lmSkFeTc7P5UAl.b">
								<div data-reactid=".0.a.0.$-L-L76lmSkFeTc7P5UAl.b.0">N/A</div>
							</td>
							<td className="notes is-read-only" data-reactid=".0.a.0.$-L-L76lmSkFeTc7P5UAl.c">
								<div data-reactid=".0.a.0.$-L-L76lmSkFeTc7P5UAl.c.0">
									<div data-reactid=".0.a.0.$-L-L76lmSkFeTc7P5UAl.c.0.0" />
									<a href="#" className="more-link" data-reactid=".0.a.0.$-L-L76lmSkFeTc7P5UAl.c.0.1">
										More...
									</a>
								</div>
							</td>
						</tr>
						<tr className="lineitem" id="-L-L76oAGbyyeMB58JrU" data-reactid=".0.a.0.$-L-L76oAGbyyeMB58JrU">
							<td className="closer" data-reactid=".0.a.0.$-L-L76oAGbyyeMB58JrU.0">
								<div data-reactid=".0.a.0.$-L-L76oAGbyyeMB58JrU.0.0" />
							</td>
							<td className="line-number-handle" data-reactid=".0.a.0.$-L-L76oAGbyyeMB58JrU.1">
								<div data-reactid=".0.a.0.$-L-L76oAGbyyeMB58JrU.1.0">5</div>
							</td>
							<td className="query is-read-only" data-reactid=".0.a.0.$-L-L76oAGbyyeMB58JrU.2">
								<div data-reactid=".0.a.0.$-L-L76oAGbyyeMB58JrU.2.0">
									2- Voltmeter Selector switch 4-position 6A (3STI 4001RKO8) 05 Nos.
								</div>
							</td>
							<td className="undo-delete" colspan="2" data-reactid=".0.a.0.$-L-L76oAGbyyeMB58JrU.3">
								<div data-reactid=".0.a.0.$-L-L76oAGbyyeMB58JrU.3.0">
									<div data-reactid=".0.a.0.$-L-L76oAGbyyeMB58JrU.3.0.0">Row deleted</div>
								</div>
							</td>
							<td className="quantity is-read-only" data-reactid=".0.a.0.$-L-L76oAGbyyeMB58JrU.4">
								<div data-reactid=".0.a.0.$-L-L76oAGbyyeMB58JrU.4.0">1</div>
							</td>
							<td
								className="matched-parts no-matches-found"
								data-reactid=".0.a.0.$-L-L76oAGbyyeMB58JrU.5"
							>
								<div data-reactid=".0.a.0.$-L-L76oAGbyyeMB58JrU.5.0">No matches found</div>
							</td>
							<td className="lineitem-details" data-reactid=".0.a.0.$-L-L76oAGbyyeMB58JrU.6">
								<table data-reactid=".0.a.0.$-L-L76oAGbyyeMB58JrU.6.0">
									<tbody data-reactid=".0.a.0.$-L-L76oAGbyyeMB58JrU.6.0.0">
										<tr data-reactid=".0.a.0.$-L-L76oAGbyyeMB58JrU.6.0.0.0">
											<td
												className="lineitem-details-column is-read-only lineitem-details-column-schematicReference"
												data-reactid=".0.a.0.$-L-L76oAGbyyeMB58JrU.6.0.0.0.$schematicReference"
											>
												<div data-reactid=".0.a.0.$-L-L76oAGbyyeMB58JrU.6.0.0.0.$schematicReference.0">
													<div data-reactid=".0.a.0.$-L-L76oAGbyyeMB58JrU.6.0.0.0.$schematicReference.0.0" />
													<a
														href="#"
														className="more-link"
														data-reactid=".0.a.0.$-L-L76oAGbyyeMB58JrU.6.0.0.0.$schematicReference.0.1"
													>
														More...
													</a>
												</div>
											</td>
											<td
												className="lineitem-details-column is-read-only lineitem-details-column-internalPartNumber"
												data-reactid=".0.a.0.$-L-L76oAGbyyeMB58JrU.6.0.0.0.$internalPartNumber"
											>
												<div data-reactid=".0.a.0.$-L-L76oAGbyyeMB58JrU.6.0.0.0.$internalPartNumber.0">
													<div data-reactid=".0.a.0.$-L-L76oAGbyyeMB58JrU.6.0.0.0.$internalPartNumber.0.0" />
													<a
														href="#"
														className="more-link"
														data-reactid=".0.a.0.$-L-L76oAGbyyeMB58JrU.6.0.0.0.$internalPartNumber.0.1"
													>
														More...
													</a>
												</div>
											</td>
											<td
												className="lineitem-details-column is-read-only lineitem-details-column-description"
												data-reactid=".0.a.0.$-L-L76oAGbyyeMB58JrU.6.0.0.0.$description"
											>
												<div data-reactid=".0.a.0.$-L-L76oAGbyyeMB58JrU.6.0.0.0.$description.0">
													<div data-reactid=".0.a.0.$-L-L76oAGbyyeMB58JrU.6.0.0.0.$description.0.0" />
													<a
														href="#"
														className="more-link"
														data-reactid=".0.a.0.$-L-L76oAGbyyeMB58JrU.6.0.0.0.$description.0.1"
													>
														More...
													</a>
												</div>
											</td>
										</tr>
									</tbody>
								</table>
							</td>
							<td className="hidden" data-reactid=".0.a.0.$-L-L76oAGbyyeMB58JrU.7" />
							<td className="distributor-sku empty" data-reactid=".0.a.0.$-L-L76oAGbyyeMB58JrU.8">
								<div data-reactid=".0.a.0.$-L-L76oAGbyyeMB58JrU.8.0">N/A</div>
							</td>
							<td className="unit-price empty" data-reactid=".0.a.0.$-L-L76oAGbyyeMB58JrU.9">
								<div data-reactid=".0.a.0.$-L-L76oAGbyyeMB58JrU.9.0">N/A</div>
							</td>
							<td className="line-total empty" data-reactid=".0.a.0.$-L-L76oAGbyyeMB58JrU.a">
								<div data-reactid=".0.a.0.$-L-L76oAGbyyeMB58JrU.a.0">N/A</div>
							</td>
							<td className="batch-total empty" data-reactid=".0.a.0.$-L-L76oAGbyyeMB58JrU.b">
								<div data-reactid=".0.a.0.$-L-L76oAGbyyeMB58JrU.b.0">N/A</div>
							</td>
							<td className="notes is-read-only" data-reactid=".0.a.0.$-L-L76oAGbyyeMB58JrU.c">
								<div data-reactid=".0.a.0.$-L-L76oAGbyyeMB58JrU.c.0">
									<div data-reactid=".0.a.0.$-L-L76oAGbyyeMB58JrU.c.0.0" />
									<a href="#" className="more-link" data-reactid=".0.a.0.$-L-L76oAGbyyeMB58JrU.c.0.1">
										More...
									</a>
								</div>
							</td>
						</tr>
					</tbody>
					<tfoot className="bom-foot" data-reactid=".0.a.1">
						<tr data-reactid=".0.a.1.0">
							<td className="closer" data-reactid=".0.a.1.0.0" />
							<td data-reactid=".0.a.1.0.1" />
							<td className="component-count-label" data-reactid=".0.a.1.0.2">
								<div data-reactid=".0.a.1.0.2.0">Component count:</div>
							</td>
							<td className="component-count" data-reactid=".0.a.1.0.3">
								<div data-reactid=".0.a.1.0.3.0">47</div>
							</td>
							<td colspan="7" data-reactid=".0.a.1.0.4" />
						</tr>
					</tfoot>
				</table>
			</div>
		);
	}
}
export default App;
