import React from 'react';
import Request from 'superagent';

class EmailVerifier extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
       value: '',
       emailStatus: "Unverified email"
                  };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();    
    Request.get("https://api.mailtest.in/v1/" + this.state.value.slice(this.state.value.indexOf("@") + 1)).then((res) => 
    {
      this.setState({ response: res});
      console.log(this.state.response);
      this.setState({emailStatus : this.state.response.text});
      console.log(this.status.emailStatus);
    });
    console.log(this.state.response);
  }
  componentWillUnmount()
  {
 // this.setState({emailStatus : this.state.response.text});
//    console.log(this.status.emailStatus);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Email
          <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <div> {this.state.emailStatus} </div>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
export default EmailVerifier;

//da korisnik vidi verify i unverify