import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import logo from './logo.svg';
import Dropzone from 'react-dropzone';

class App extends Component {
	render() {
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
											ref={(node) => {}}
											onDrop={(accepted, rejected) => {
												alert(accepted);
											}}
										>
											<div className="droptext">
												<span>Drag a BOM file here </span>
												<span className="accepts">(.ods, Excel, .csv, .txt, Eagle 6 .sch)</span>
											</div>
										</Dropzone>
										<div className="dropzone">
											<div className="droptext">
												<span>Drag a BOM file here </span>
												<span className="accepts">(.ods, Excel, .csv, .txt, Eagle 6 .sch)</span>
											</div>
										</div>
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
