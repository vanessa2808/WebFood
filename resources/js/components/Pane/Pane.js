import React, {Component} from 'react';
import bg_1 from "./bg_1.jpg";
import bg_2 from "./bg_2.jpg";
import category_1 from "./category_1.jpg";
import category_2 from "./category_2.jpg";
var sectionStyle = {
  width: "100%",
  height: "600px",
  margin: "0 auto",
};
class Pane extends Component {
	render() {
		return(
			<div>
      
 
      <img  src={bg_1} alt="flower" style={sectionStyle} />


      </div>
      
     
 
	

		);
	}
}


export default Pane;