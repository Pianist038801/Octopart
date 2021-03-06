import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import Dropzone from 'react-dropzone';
import * as XLSX from 'xlsx';

class App extends Component {
	constructor(props) {
		super(props);
		this.dropZone = null;
		this.state = { boms: [] };
	}
	componentDidMount() {
		var bomData = localStorage.getItem('boms');
		console.log('BomDATA=', bomData);
		var boms = [];
		if (bomData == null || bomData == 'null' || bomData == undefined) boms = [];
		else boms = JSON.parse(bomData);

		this.setState({ boms: boms });
	}
	loadFile(files) {
		const f = files[0];
		var name = f.name;
		const reader = new FileReader();
		reader.onload = (evt) => {
			/* Parse data */
			const bstr = evt.target.result;
			const wb = XLSX.read(bstr, { type: 'binary' });
			/* Get first worksheet */
			const wsname = wb.SheetNames[0];
			const ws = wb.Sheets[wsname];
			/* Convert array of arrays */
			const data = XLSX.utils.sheet_to_json(ws, { header: 1 });
			/* Update state */
			console.log(data);
			this.props.history.push({
				pathname: '/main',
				state: {
					data: data
				}
			});
		};
		reader.readAsBinaryString(f);
	}

	render() {
		var boms = [];
		console.log('BOMARRAY=', this.state.boms);
		for (var i = 0; i < this.state.boms.length; i++) {
			let j = i;
			let _href = '/main/' + j.toString();
			boms.push(
				<ul>
					<li class="first-in-row">
						<a
							class="saved-bom"
							onClick={() => {
								this.props.history.push({
									pathname: '/main',
									state: {
										bomID: j
									}
								});
							}}
							target="_blank"
						>
							<h3>{this.state.boms[i].title}</h3>
							<div class="last-updated">Last updated: {this.state.boms[i].date}</div>
						</a>
					</li>
				</ul>
			);
		}
		return (
			<section className="content bom-tool manage" style={{ marginTop: '-60px' }}>
				<div className="inner">
					<h1>
						<i className="fa fa-list-ul" aria-hidden="true" /> BOM Tool
					</h1>
				</div>
				<div className="inner">
					<div className="create-or-upload container-fluid">
						<div className="row">
							<div className="col-sm-4">
								<form className="create" method="post" action="/bom-tool/api/new">
									<input type="submit" value="Create a New BOM" className="create-button" />
									<input
										name="_authentication_token"
										type="hidden"
										value="211321901470595359153915695414268937302"
									/>
								</form>
							</div>
							<div className="col-sm-1">
								<div className="vertical-separator">
									<div className="top" />
									<div className="middle">or</div>
									<div className="bottom" />
								</div>
							</div>
							<div className="col-sm-7">
								<div className="upload">
									<div className="bom-dropzone">
										<Dropzone
											className="dropzone"
											ref={(node) => (this.dropZone = node)}
											onDrop={(acceptedFiles) => {
												this.loadFile(acceptedFiles);
											}}
										>
											<div className="droptext">
												<span>Drag a BOM file here </span>
												<span className="accepts">(.ods, Excel, .csv, .txt, Eagle 6 .sch)</span>
											</div>
										</Dropzone>
									</div>
									<div className="or-select-files">
										<div>
											<form method="post" action="/bom-tool/upload" encType="multipart/form-data">
												<input
													name="_authentication_token"
													type="hidden"
													value="211321901470595359153915695414268937302"
												/>
												<input type="hidden" name="from_where" value="bom_manager" />
												<input
													type="file"
													id="datafile-1wjsS4rm"
													name="datafile"
													className="datafile"
													onChange={(e) => this.loadFile(e.target.files)}
												/>
												<label htmlFor="datafile-1wjsS4rm">
													<span>or select a file...</span>
												</label>
											</form>
											<div className="accepts">(.xls, .xlsx, .csv, .txt, Eagle 6 .sch)</div>
										</div>
									</div>
									<div className="upload-bom-button">
										<div>
											<form method="post" action="/bom-tool/upload" encType="multipart/form-data">
												<input
													name="_authentication_token"
													type="hidden"
													value="211321901470595359153915695414268937302"
												/>
												<input type="hidden" name="from_where" value="bom_manager" />
												<input
													type="file"
													id="datafile-4WfBYlCI"
													name="datafile"
													className="datafile"
												/>
												<label htmlFor="datafile-4WfBYlCI">
													<span>Upload BOM</span>
												</label>
											</form>
											<div className="accepts">(.xls, .xlsx, .csv, .txt, Eagle 6 .sch)</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="hint">
						Not sure where to start?
						<a href="/bom-tool/or-try-this-sample-bom">Try a sample BOM</a> or see the{' '}
						<a href="/help#users-how-to-bom">BOM Tool Quickstart</a>.
					</div>
				</div>
				<div className="inner">
					<hr />
				</div>
				<div className="inner">
					<h2>Saved BOMs</h2>
					<div class="saved-boms">
						<div>
							<div class="saved-boms-list">{boms}</div>
						</div>
					</div>
					<div className="sign-in">
						<a href="/auth/login?continue_to=https://octopart.com/bom-tool&amp;sig=560745">Sign in</a> to
						view your Saved BOMs.
					</div>
				</div>
			</section>
		);
	}
}
export default App;
