import React, { Component } from 'react';

import SingleTile from './SingleTile';

class WindowTiles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tiles: [],
    };
  }
  componentDidMount() {
    const url =
      'https://dev-api.ff-24.net/api/v0/windows/config?lang=pl&currentPath=1';
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({
          tiles: data,
        });
      })
      .catch((error) => console.log(error));
  }
  renderItems() {
    return this.state.tiles.map((item) => (
      <SingleTile key={item.name} item={item} />
    ));
  }

  render() {
    // return <ul>{this.renderItems()}</ul>;
    return (
      <section>
        <header>
          <div className="menu">
            <img src="images/menu.png" alt="Menu" className="menu" />
          </div>
          <img src="images/logo.png" className="logo" alt="logo" />
          <h1>Free shipping over $2000</h1>
          <div className="mainframe">30% OFF WINDOWS</div>
          <div className="title">Window Type</div>
        </header>
        <div className="container">{this.renderItems()}</div>
        <div>
          <img className="search" src="images/search.png" alt="logo" />
          <img src="images/info.png" className="info" alt="logo" />
        </div>
      </section>
    );
  }
}

export default WindowTiles;
