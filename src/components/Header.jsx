import React from 'react';
import { getToken } from '../auth';

const Header = ({ userName }) => {
  const auth = getToken();

  return (
    <div>
      <div className="welcome-header">
        <h2>{!auth ? "Welcome to" : `Welcome back ${userName}`}</h2>
        <img className="welcome-logo" src={StLogoHorizontal} />
        <p>A convenient destination for people to discover, buy and sell items.</p>
        <div className="welcome-body">
          <h2>Recently Sold Items:</h2>
          <div className="welcome-products">
            <figure>
              <img className="welcome-image" src={stMug} />
              <figcaption>Stranger Things Mug</figcaption>
            </figure>
            <figure>
              <img className="welcome-image" src={dirtBike} />
              <figcaption>Sweet Dirtbike</figcaption>
            </figure>
            <figure>
              <img className="welcome-image" src={stPatch} />
              <figcaption>Stranger Things Patch</figcaption>
            </figure>
            <figure>
              <img className="welcome-image" src={puppy} />
              <figcaption>Golden Retriever Puppies </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header;