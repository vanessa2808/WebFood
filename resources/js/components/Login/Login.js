import React, {Component} from 'react';



export default class Login extends Component {
  render() {
    return (
      <div>
                
      <div data-vide-bg="video/keyboard">
  <div className="main-container">
    {/*header*/}
    <div className="header-w3l">
      <h1>Modern Login Form</h1>
    </div>
    {/*//header*/}
    {/*main*/}
    <div className="main-content-agile">
      <div className="w3ls-pro">
        <h2>Login Now</h2>
      </div>
      <div className="sub-main-w3ls">   
        <form action="#" method="post">
          <input placeholder="Enter your E-mail" name="enter mail" type="email" required />
          <span className="icon1"><i className="fa fa-envelope" aria-hidden="true" /></span>
          <input placeholder="Enter Password" name="Password" type="password" required />
          <span className="icon2"><i className="fa fa-unlock-alt" aria-hidden="true" /></span>
          <div className="checkbox-w3">
            <span className="check-w3"><input type="checkbox" />Remember Me</span>
            <a href="#">Forgot Password?</a>
            <div className="clear" />
          </div>
          <div className="social-icons"> 
            <ul>
              <li><a href="#"><i className="fa fa-facebook" aria-hidden="true" /></a></li>
              <li><a href="#"><i className="fa fa-twitter" aria-hidden="true" /></a></li>
              <li><a href="#"><i className="fa fa-google-plus" aria-hidden="true" /></a></li> 
            </ul>  
          </div>
          <input type="submit" defaultValue />
        </form>
        </div>
      </div>
    </div>
  </div>
</div>
    );
  }
}