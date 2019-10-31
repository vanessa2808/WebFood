
import React, {Component} from 'react';

export default class Pane1 extends Component {
	render() {
		return(
			<p>
				<div className="py-1 bg-primary">
		          <div className="container">
		            <div className="row no-gutters d-flex align-items-start align-items-center px-md-0">
		              <div className="col-lg-12 d-block">
		                <div className="row d-flex">
		                  <div className="col-md pr-4 d-flex topper align-items-center">
		                    <div className="icon mr-2 d-flex justify-content-center align-items-center"><span className="icon-phone2" /></div>
		                    <span className="text">+ 1235 2355 98</span>
		                  </div>
		                  <div className="col-md pr-4 d-flex topper align-items-center">
		                    <div className="icon mr-2 d-flex justify-content-center align-items-center"><span className="icon-paper-plane" /></div>
		                    <span className="text">yenrion9941@email.com</span>
		                  </div>
		                  <div className="col-md-5 pr-4 d-flex topper align-items-center text-lg-right">
		                    <span className="text">3-5 Business days delivery &amp; Free Returns</span>
		                  </div>
		                </div>
		              </div>
		            </div>
		          </div>
		        </div>
      </p>
		);
	}
}


