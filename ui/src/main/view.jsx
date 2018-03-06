import React, { Component } from 'react';
import LoremIpsum from 'main/components/lorem-ipsum'
import Title from 'main/components/title'
import config from 'config.json';
import 'main/styles/app.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      submitted: ['last'],
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
          const submitted = [...this.state.submitted, submission];
          this.setState({submission: '', submitted});
        }
      })
  }
  render() {
    const { outputs, submission, submitted } = this.state;
    /* const { loggedIn } = this.props;
    if (!loggedIn) {
      return <Redirect to='/login' />
    } */
    return (
      <div className="app">
        <div className="main-text">
          <Title />
          <LoremIpsum paragraphs={1} />
          {outputs.map((o,i) => <p key={i}>({submitted[i]}) {o}</p>)}
          <LoremIpsum paragraphs={5} />
          <LoremIpsum paragraphs={3} />
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


