import React, { Component } from 'react';
import AllAssets from './allAssets_query';

class Assets extends Component {
  constructor(props) {
    super(props);
    };

  render() {
    return (
      <div className="animated fadeIn">
        <AllAssets />
      </div>
    );
  }
}

export default Assets;
