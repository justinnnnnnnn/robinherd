import React from 'react';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }
  // .then(() => this.props.history.push('/'));

  // demoSubmit(e) {
  //   e.preventDefault();
  //   const user = Object.assign({}, this.state);
  //   this.props.processForm({username: , password: });
  // }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    // console.log(this.props)
    return (
      <div className="login-form-container">
        <div>
          {/* snatched from robinhood */}
          <img src="https://cdn.robinhood.com/assets/generated_assets/1e23d6b90f0d905b425ea289de345ab1.jpg" srcSet="https://cdn.robinhood.com/assets/generated_assets/1e23d6b90f0d905b425ea289de345ab1.jpg 720w, https://cdn.robinhood.com/assets/generated_assets/632fcb3e7ed928b2a960f3e003d10b44.jpg 1440w"/> 
          {/* srcset="https://cdn.robinhood.com/assets/generated_assets/1e23d6b90f0d905b425ea289de345ab1.jpg 720w, https://cdn.robinhood.com/assets/generated_assets/632fcb3e7ed928b2a960f3e003d10b44.jpg 1440w"/> */}
        </div>
        <div>
          <form onSubmit={this.handleSubmit} className="login-form-box">
                <header>
                  <span>Welcome to Robinherd</span>
                </header>
                        <label>
                          <span>Username</span>
                          <input type="text"
                            value={this.state.username}
                            onChange={this.update('username')}
                            className="login-input"
                          />
                        </label>

                        <label>
                          <span>Password</span>
                          <input type="password"
                            value={this.state.password}
                            onChange={this.update('password')}
                            className="login-input"
                          />
                          <button type="button" ariaLabel="show password in plain text" ariaPressed="false" ariaBusy="false" className="css-755mzn">
                            <span ariaHidden="true">
                              <svg fill="none" height="16" role="img" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg">
                                <path clipRule="evenodd" d="M1 7.99996C1 7.99996 2.90909 3.54541 8 3.54541C13.0909 3.54541 15 7.99996 15 7.99996C15 7.99996 13.0909 12.4545 8 12.4545C2.90909 12.4545 1 7.99996 1 7.99996ZM5.77254 8.00002C5.77254 9.2282 6.77163 10.2273 7.99982 10.2273C9.228 10.2273 10.2271 9.2282 10.2271 8.00002C10.2271 6.77184 9.228 5.77275 7.99982 5.77275C6.77163 5.77275 5.77254 6.77184 5.77254 8.00002Z" fill="var(--rh__text-color)" fillRule="evenodd" />
                              </svg>
                            </span>
                          </button>
                        </label>
                      <footer> 
                        <div className="login-form">
                          <button type="submit" className="session-submit">
                            <span>Sign In</span>
                          </button>
                        </div>
                      </footer>
            <br/>
            Please {this.props.formType} or {this.props.navLink}
            {this.renderErrors()}
          </form>
      </div>
    </div>
    );
  }
}

export default SessionForm;
