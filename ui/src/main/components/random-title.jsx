import React, { Component } from 'react';
import _ from 'underscore';
import TitleData from 'main/components/title-data.json';


export default class RandomTitle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
    };

    this.MAX_TRIES = 5;
    this.formulas = [
      ['num', ['Painful Truths', 'Problems', 'Things'], 'Only', 'people', 'Will Understand'],
      ['The', 'num', 'adjest', 'noun', 'Of', 'time'],
      ['The', 'num', 'adjest', 'noun', 'prep'],
      [['The', ''], 'num', 'noun', 'That', 'nounDesc'],
      ['num', 'people', 'Who', 'peopleDesc']
    ];
  }

  componentDidMount() {
    if (this.state.title === '') {
      this.generate()
    }
  }

  randomFromDist = (list, dist) => {
    let k = Math.random();
    for(let i = 0; i < dist.length; i++) {
      k -= dist[i];
      if(k <= 0) return list[i];
    }
  };

  generateToken = (formula) => {
    if(formula === 'num') return _.random(10, 50);
    else if(_.has(TitleData, formula)) return _.sample(TitleData[formula]);
    else if(_.isArray(formula)) return _.sample(formula);
    else return formula;
  };

  generate =  () => {
    const formula = this.randomFromDist(this.formulas, [0.1, 0.3, 0.2, 0.2, 0.2]);
    let title = [];
    const seen = [];
    for(var i = 0; i < formula.length; i++) {
      var f = formula[i];
      var token = this.generateToken(f);
      var tries = this.MAX_TRIES;
      while(_.contains(seen, token) && tries > 0) {
        token = this.generateToken(f);
        tries -= 1;
      }
      title.push(token);
      seen.push(token);
    }
    this.setState({ title: title.join(' ') });
  };

  render() {
    return (<h1>{this.state.title}</h1>);
  }
}
