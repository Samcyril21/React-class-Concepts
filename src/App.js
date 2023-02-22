import React, { Component } from 'react';

import './style.css';

export default class Sam extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h2>Hi, This is Class Function.</h2>
        <p>
          When creating a React component, the component's name must start with
          an upper case letter. The component has to include the extends
          React.Component statement, this statement creates an inheritance to
          React.Component, and gives your component access to React.Component's
          functions. The component also requires a render() method, this method
          returns HTML.
        </p>
      </div>
    );
  }
}
