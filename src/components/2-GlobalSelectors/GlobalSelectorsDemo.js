import GlobalSelectors from './GlobalSelectors';

import React, { Component } from 'react';

import js from '!!raw!./GlobalSelectors.js';
import css from '!!raw!./GlobalSelectors.css';
import Snippet from 'shared/Snippet/Snippet';

export default class GlobalSelectorsDemo extends Component {

  render() {
    const files = [
      { name: 'GlobalSelectors.js', source: js },
      { name: 'GlobalSelectors.css.js', source: css }
    ];

    return (
      <Snippet files={files}>
        <GlobalSelectors />
      </Snippet>
    );
  }

};
