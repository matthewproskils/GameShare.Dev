import React from 'react'

class MainTopbar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id="NavigationHeader">
        <div id="NavInner">
          <div className="left logo">
            <a className="link" href="/">
              <img src="./static/GameShare.png"></img>
            </a>
          </div>
          <div className="left link">
            <a href="/template">Templates</a>
          </div>
          <div className="left link">
            <a href="/explore">Explore</a>
          </div>
          <div className="left link">
            <a href="/about">About Us</a>
          </div>
          <div className="right link">
            <a href="/join">Join Us</a>
          </div>
          <div className="right link">
            <a href="/signin">Sign In</a>
          </div>
        </div>
      </div>
    )
  }
}

export default MainTopbar;