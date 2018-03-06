import React, { Component } from 'react';
import LoremIpsum from 'main/components/lorem-ipsum'
import config from 'config.json';
import 'main/styles/app.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      outputs: [],
      submission: '',
    };
  }
  componentDidMount() {
    this.getOutput();
  }
  getOutput = () => {
    fetch(`${config.apiRoot}/output`)
      .then(res => res.json())
      .then(json => {
        if (json.status === 'OK') {
          const outputs = [...this.state.outputs, json.output.replace('>', '')];
          this.setState({outputs});
        }
      })
  }
  submit = (e) => {
    const { submission } = this.state;
    e.preventDefault();
    fetch(`${config.apiRoot}/submit`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        submission,
      }),
    }).then(res => res.json())
      .then(json => {
        if (json.status === 'OK') {
          console.log(json.output);
          this.getOutput();
          this.setState({submission: ''});
        }
      })
  }
  render() {
    const { outputs, submission } = this.state;
    /* const { loggedIn } = this.props;
    if (!loggedIn) {
      return <Redirect to='/login' />
    } */
    return (
      <div className="app">
        <div className="main-text">
          <h1> The 10 ways to be more productive </h1>
          <LoremIpsum paragraphs={1} />
          {outputs.map((o,i) => <p key={i}>{o}</p>)}
          <LoremIpsum paragraphs={5} />
        </div>
        <form onSubmit={(e) => this.submit(e)} className="form-inline submission-form">
          <div className="form-group form-row submission-form justify-content-center">
            <input
              className="input-text-zork col-5"
              value={submission}
              onChange={(e) => this.setState({submission: e.target.value})}
            />
            <button className="btn btn-primary btn-zork col-1 offset-1" type="submit">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}


