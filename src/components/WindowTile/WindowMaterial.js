import React, { Component } from 'react';
import MaterialTile from './MaterialTile';

class WindowMaterial extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tiles: [],
    };
  }
  componentDidMount() {
    const url =
      'https://dev-api.ff-24.net/api/v0/windows/config?lang=pl&currentPath=3';
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
      <MaterialTile key={item.number} item={item} />
    ));
  }

  render() {
    // return <ul>{this.renderItems()}</ul>;
    return (
      <section>
        <header>
          <div className="header">
            <img src="images/logo.png" className="logo" alt="logo" />
            <img src="images/menu.png" className="menu" alt="logo" />
            <div className="title">Window Material</div>
            <img className="search" src="images/search.png" alt="logo" />
            <img src="images/info.png" className="info" alt="logo" />
          </div>
        </header>
        <div className="wrapper">{this.renderItems()}</div>
      </section>
      // <section>
      //   <header>
      //     <div>
      //       <img src="images/menu.png" alt="Menu" className="menu" />
      //     </div>
      //     <img src="images/logo.png" className="logo" alt="logo" />
      //     {/* <h1>Free shipping over $2000</h1>
      //     <div className="mainframe">30% OFF WINDOWS</div> */}
      //     <div className="title">Window Material</div>
      //   </header>
      //   <div className="container">{this.renderItems()}</div>
      //   <div>
      //     <img className="search" src="images/search.png" alt="logo" />
      //     <img src="images/info.png" className="info" alt="logo" />
      //   </div>
      // </section>
    );
  }
}
export default WindowMaterial;
