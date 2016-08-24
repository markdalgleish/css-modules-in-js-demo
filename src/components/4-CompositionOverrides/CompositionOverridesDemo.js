import CompositionOverrides from './CompositionOverrides';

import React, { Component } from 'react';

import js from '!!raw!./CompositionOverrides.js';
import css from '!!raw!./CompositionOverrides.css';
import layoutCss from '!!raw!shared/styles/layout.css';
import typographyCss from '!!raw!shared/styles/typography.css';
import Snippet from 'shared/Snippet/Snippet';

export default class CompositionOverridesDemo extends Component {

  render() {
    const files = [
      { name: 'CompositionOverrides.js', source: js },
      { name: 'CompositionOverrides.css.js', source: css },
      { name: 'shared/styles/layout.css.js', source: layoutCss },
      { name: 'shared/styles/typography.css.js', source: typographyCss }
    ];

    return (
      <Snippet files={files}>
        <CompositionOverrides />
      </Snippet>
    );
  }

};
