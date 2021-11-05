import React from 'react';
import { getToken } from '../auth';

const Header = ({ userName }) => {
  const auth = getToken();

  return (
    <div>
      <div className="welcome-header">
        {/* <h2>{!auth ? "Welcome to" : `Welcome back ${userName}`}</h2> */}
        <p>An app that will keep track of your routine and activities.</p>
        <div className="welcome-body">
          <h2>Please choose one of the following:</h2>
          <div className="welcome-list">
            <figure>
              <img className="welcome-image" src={"https://www.brottv.pl/wp-content/gallery/anime-workout-girl/vlcsnap-2020-07-24-08h39m06s489.png"} />
              <figcaption>Routines</figcaption>
            </figure>
            <figure>
              <img className="welcome-image" src={"https://th.bing.com/th/id/OIP.0DQzErzW9UhtyVTfd0ePFAEsCq?pid=ImgDet&rs=1"} />
              <figcaption>Activities</figcaption>
            </figure>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header;