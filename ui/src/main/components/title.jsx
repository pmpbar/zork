import React from 'react';
import _ from 'underscore';
import TitleData from 'main/components/title-data.json';


const generate = {
  formulas: [
    ['num', ['Painful Truths', 'Problems', 'Things'], 'Only', 'people', 'Will Understand'],
    ['The', 'num', 'adjest', 'noun', 'Of', 'time'],
    ['The', 'num', 'adjest', 'noun', 'prep'],
    [['The', ''], 'num', 'noun', 'That', 'nounDesc'],
    ['num', 'people', 'Who', 'peopleDesc']
  ],
  MAX_TRIES: 5,
  randomFromDist: (list, dist) => {
    let k = Math.random();
    for(let i = 0; i < dist.length; i++) {
      k -= dist[i];
      if(k <= 0) return list[i];
    }
  },
  number: () => {
    return _.random(10, 50);
  },

  token: (f) => {
    if(f === 'num') return generate.number();
    else if(_.has(TitleData, f)) return _.sample(TitleData[f]);
    else if(_.isArray(f)) return _.sample(f);
    else return f;
  },

  title:  () => {
    const formula = generate.randomFromDist(generate.formulas, [0.1, 0.3, 0.2, 0.2, 0.2]);
    let title = [];
    const seen = [];
    for(var i = 0; i < formula.length; i++) {
      var f = formula[i];
      var token = generate.token(f);
      var tries = generate.MAX_TRIES;
      while(_.contains(seen, token) && tries > 0) {
        token = generate.token(f);
        tries--;
      }
      title.push(token);
      seen.push(token);
    }

    title = title.join(' ');
    return title;
  },
};

export default (props) => {
  const title = generate.title();
  return (<h1>{title}</h1>);
}
