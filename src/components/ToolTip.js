import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
const options = [ 'Part Number', 'Qty', 'Schemantic Reference', 'Internal Part Number', 'Description' ];
const downOption = [ 'part no', 'qty', 'Manufacturer', 'Description', 'Price' ];
class ToolTip extends Component {
	constructor(props) {
		super(props);
		this.state = { value: props.num, num: props.num - 1, filename: 'sample octo.xslx' };
	}
	componentWillReceiveProps(props) {
		this.setState({ value: props.num, num: props.num - 1 });
	}
	handleChange = (event, index, value) => {
		this.props.onChange(downOption[value - 1]);
		this.setState({ value });
	};

	render() {
		return (
			<div style={{ backgroundColor: 'grey', width: 600, padding: 30 }}>
				<span>
					Choose the column from your file to use for the <span>{options[this.state.num]}</span> column
				</span>
				<DropDownMenu value={this.state.value} onChange={this.handleChange}>
					<MenuItem value={1} primaryText="part no" />
					<MenuItem value={2} primaryText="qty" />
					<MenuItem value={3} primaryText="Manufacturer" />
					<MenuItem value={4} primaryText="Description" />
					<MenuItem value={5} primaryText="Price" />
				</DropDownMenu>
				<p style={{ height: 20 }} />
				<span>Step {this.state.num + 1} of 5</span>
				{this.state.num != 0 && (
					<button style={{ marginLeft: 200, marginRight: 20 }} onClick={this.props.onBack}>
						{' '}
						Back
					</button>
				)}
				<button
					style={{ marginLeft: this.state.num == 0 ? 200 : 0, marginRight: 20 }}
					onClick={this.props.onNext}
				>
					{' '}
					Next{' '}
				</button>
				<button style={{ marginRight: 20 }} onClick={this.props.onDone}>
					{' '}
					Done{' '}
				</button>
			</div>
		);
	}
}

export default ToolTip;
