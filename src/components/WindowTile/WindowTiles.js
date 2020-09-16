import React, { Component } from 'react';

import SingleTile from './SingleTile';
import ReactBootstrap from 'react-bootstrap';
import $ from 'jquery';
$(document).ready(function () {
  $(this).show('slide', { direction: 'left' }, 1000);
  // $('#slide').animate({ width: 'toggle' }, 3050);
  $('#slide').click(function () {
    $(this).show('slide', { direction: 'left' }, 1000);
  });
  //   var boxWidth = $('.box').width();
  //   $('.slide-left').click(function () {
  //     $('.box').animate({
  //       width: 0,
  //     });
  //   });
  //   $('.slide-right').click(function () {
  //     $('.box').animate({
  //       width: boxWidth,
  //     });
  //   });
});

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
      <>
        <SingleTile key={item.name} item={item} />
      </>
    ));
  }

  render() {
    // return <ul>{this.renderItems()}</ul>;
    return (
      <>
        <section>
          <div className="header">
            <img src="images/logo.svg" className="logo" alt="logo" />
            <img src="images/menu.svg" className="menu" alt="logo" />
            <div className="shipping">Free shipping over $2000</div>
            <div className="mainframe">
              <span className="mainText">30% off on windows</span>
            </div>
            <div className="title">Window Type</div>
            <img className="search" src="images/search.png" alt="logo" />
            <img src="images/info.png" className="info" alt="logo" />
          </div>
          <div className="wrapper">{this.renderItems()}</div>
        </section>
      </>
    );
  }
}

export default WindowTiles;
