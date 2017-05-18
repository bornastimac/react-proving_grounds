import React from 'react';
import Request from 'superagent';


class Exchange extends React.Component {

constructor(props)
{
    super(props);
    this.state = { value: ""};
    this.sendRequest = this.sendRequest.bind(this);
}
sendRequest()
{
    Request.get("http://hnbex.eu/api/v1/rates/daily/").then((res) => {
        this.setState( {response: res});
         });
 // Request.get("http://hnbex.eu/api/v1/rates/daily/").end(function(err, res)  {
 //     this.setState( {response: res});
 //   });
   
    console.log(this.state.response);
}
  render() {
    return (
    <div>
        <button onClick={this.sendRequest}> Get exchange rate </button>
        <textarea>
            {this.state.response}
        </textarea>
    </div>
    );
  }
}

export default Exchange;