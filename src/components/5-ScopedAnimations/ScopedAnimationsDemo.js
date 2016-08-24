import ScopedAnimations from './ScopedAnimations';

import React, { Component } from 'react';

import js from '!!raw!./ScopedAnimations.js';
import css from '!!raw!./ScopedAnimations.css';
import animationsCss from '!!raw!shared/styles/animations.css';
import Snippet from 'shared/Snippet/Snippet';

export default class ScopedAnimationsDemo extends Component {

  render() {
    const files = [
      { name: 'ScopedAnimations.js', source: js },
      { name: 'ScopedAnimations.css.js', source: css },
      { name: 'shared/styles/animations.css.js', source: animationsCss }
    ];

    return (
      <Snippet files={files}>
        <ScopedAnimations />
      </Snippet>
    );
  }

};
