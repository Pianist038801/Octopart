import React, { Component } from 'react';
var FontAwesome = require('react-fontawesome');
const options = [ 'Part Number', 'Qty', 'Schemantic Reference', 'Internal Part Number', 'Description' ];
const downOption = [ 'part no', 'qty', 'Manufacturer', 'Description', 'Price' ];
class ToolTip extends Component {
	constructor(props) {
		super(props);
		this.state = { downOption: props.downOption, num: props.num - 1, filename: 'sample octo.xslx' };
	}
	componentWillReceiveProps(props) {
		this.setState({ downOption: props.downOption, num: props.num - 1 });
	}

	render() {
		return (
			<div class="choose-column-tooltip">
				<div>
					<div class="prompt">
						<div class="instructions">
							<span>Choose the column from your file to use for the </span>
							<span class="column-name">{options[this.state.num]}</span>
							<span> column.</span>
						</div>
						<div class="filename">{this.state.filename}</div>
					</div>
					<form>
						<div class="column-select-container">
							<div class="column-select">
								<select>
									{this.state.num != 0 && <option>[skip this column]</option>}
									{this.state.downOption.map((val, id) => (
										<option
											value={id}
											onClick={() => this.props.onChange(this.state.downOption[id])}
										>
											{this.state.downOption[id]}
										</option>
									))}
								</select>
								<FontAwesome
									className="super-crazy-colors"
									name="angle-down"
									size="1x"
									style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
								/>
							</div>
						</div>
						<div class="step-controls">
							<div class="step">
								<span>Step </span>
								<span>{this.state.num + 1}</span>
								<span> of </span>
								<span>5</span>
							</div>
							<div class="controls">
								{this.state.num != 0 && (
									<a class="back" href="#" onClick={this.props.onBack}>
										<span>Back</span>
									</a>
								)}
								<a class="next" href="#" onClick={this.props.onNext}>
									<span>Next</span>
								</a>
								<a class="done" href="#" onClick={this.props.onDone}>
									Done
								</a>
							</div>
						</div>
					</form>
				</div>
			</div>
		);
	}
}

export default ToolTip;
