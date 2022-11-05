import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      fromAirport: "",
      toAirport: "",
      company: "",
      dateOfDeparture: "",
      password: "",
      passwordConfirmed: "",
    };
    //binding part
    this.changeFirstName = this.changeFirstName.bind(this);
    this.changeLastName = this.changeLastName.bind(this);
    this.changeEmail = this.changeEmail.bind(this);
    this.changePassword = this.changePassword.bind(this);
    this.changePasswordConfirmed = this.changePasswordConfirmed.bind(this);
    this.changeFromAirport = this.changeFromAirport.bind(this);
    this.changeToAirport = this.changeToAirport.bind(this);
    this.changeDateOfDeparture = this.changeDateOfDeparture.bind(this);
    this.changeCompany = this.changeCompany.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  //setting states
  changeFirstName(event) {
    this.setState({
      firstName: event.target.value,
    });
  }

  changeLastName(event) {
    this.setState({
      lastName: event.target.value,
    });
  }
  changeEmail(event) {
    this.setState({
      email: event.target.value,
    });
  }
  changeDateOfDeparture(event) {
    this.setState({
      dateOfDeparture: event.target.value,
    });
  }
  changeFromAirport(event) {
    this.setState({
      fromAirport: event.target.value,
    });
  }
  changePassword(event) {
    this.setState({
      password: event.target.value,
    });
  }
  changePasswordConfirmed(event) {
    this.setState({
      passwordConfirmed: event.target.value,
    });
  }

  changeCompany(event) {
    this.setState({
      company: event.target.value,
    });
  }
  changeToAirport(event) {
    this.setState({
      toAirport: event.target.value,
    });
  }

  //only run when form is submitted
  onSubmit(event) {
    event.preventDefault();
    const registered = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      dateOfDeparture: this.state.dateOfDeparture,
      password: this.state.password,
      passwordConfirmed: this.state.passwordConfirmed,
      company: this.state.company,
      fromAirport: this.state.fromAirport,
      toAirport: this.state.toAirport,
    };
    axios
      .post("http://localhost:4000/api/book", registered)
      .then((response) => console.log(response.data));
    this.setState({
      firstName: "",
      lastName: "",
      email: "",
      fromAirport: "",
      toAirport: "",
      company: "",
      dateOfDeparture: "",
      password: "",
      passwordConfirmed: "",
    });
  }
  //confirm password.

  render() {
    return (
      <div className="App">
        <div className="form-div">
          <div className="text-h1">
            <p>fly with us people.</p>
          </div>
          <form onSubmit={this.onSubmit}>
            <div>
              <input
                type="text"
                required
                placeholder="First Name"
                className="form-control"
                onChange={this.changeFirstName}
                value={this.state.firstName}
              />
            </div>
            <div>
              <input
                type="text"
                required
                placeholder="Last Name"
                className="form-control"
                onChange={this.changeLastName}
                value={this.state.lastName}
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Email"
                className="form-control"
                required
                onChange={this.changeEmail}
                value={this.state.email}
              />
            </div>
            <div>
              <select
                onChange={this.changeFromAirport}
                value={this.state.fromAirport}
                className="form-control"
              >
                <option required default>
                  From airport...
                </option>
                <option>A</option>
                <option>B</option>
              </select>
            </div>
            <div>
              <select
                className="form-control"
                onChange={this.changeToAirport}
                value={this.state.toAirport}
              >
                <option required default>
                  To airport...
                </option>
                <option>A</option>
                <option>B</option>
              </select>
            </div>
            <div>
              <select
                onChange={this.changeCompany}
                value={this.state.company}
                className="form-control"
              >
                <option default>Select Company</option>
                <option>xyz</option>
                <option>Bbb</option>
                <option>ztb</option>
              </select>
            </div>
            <div>
              <input
                id="other"
                type="datetime-local"
                onChange={this.changeDateOfDeparture}
                value={this.state.dateOfDeparture}
                className="form-control"
              />
            </div>
            <div>
              <input
                id="pass"
                type="password"
                className="form-control"
                placeholder="password"
                onChange={this.changePassword}
                value={this.state.password}
              />
            </div>
            <div>
              <input
                id="pass2"
                type="password"
                className="form-control"
                placeholder="confirm password"
                onChange={this.changePasswordConfirmed}
                value={this.state.passwordConfirmed}
              />
            </div>
            <div>
              <input
                id="submitbtn"
                type="submit"
                className="btn btn-outline-primary btn-lg"
                value="Book flight"
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
