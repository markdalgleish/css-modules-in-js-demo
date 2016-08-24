import ClassComposition from './ClassComposition';

import React, { Component } from 'react';

import js from '!!raw!./StyleVariantA/StyleVariantA.js';
import css from '!!raw!./StyleVariantA/StyleVariantA.css';
import layoutCss from '!!raw!shared/styles/layout.css';
import typographyCss from '!!raw!shared/styles/typography.css';
import Snippet from 'shared/Snippet/Snippet';

export default class ClassCompositionDemo extends Component {

  render() {
    const files = [
      { name: 'StyleVariantA.js', source: js },
      { name: 'StyleVariantA.css.js', source: css },
      { name: 'shared/styles/layout.css.js', source: layoutCss },
      { name: 'shared/styles/typography.css.js', source: typographyCss }
    ];

    return (
      <Snippet files={files}>
        <ClassComposition />
      </Snippet>
    );
  }

};
