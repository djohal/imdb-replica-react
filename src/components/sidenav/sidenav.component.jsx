import React, { useState } from "react";
import SideNav, { MenuIcon } from "react-simple-sidenav";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFilm,
  faTv,
  faGlobe,
  faAward,
  faUserFriends,
  faVideo,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

const SideNavContainer = (props) => {
  const [showNav, setShowNav] = useState();
  return (
    <div className="sidenav">
      <div className="menu-icon">
        <MenuIcon onClick={() => setShowNav(true)} />
      </div>
      <SideNav
        showNav={showNav}
        onHideNav={() => setShowNav(false)}
        title={[
          <>
            <FontAwesomeIcon
              icon={faTimes}
              color="white"
              onClick={() => setShowNav(false)}
            />
          </>,
        ]}
        items={[
          <>
            <FontAwesomeIcon icon={faFilm} color="white" size="1.5x" />
            <span>Movies</span>
          </>,
          <>
            <FontAwesomeIcon icon={faTv} color="white" size="1.5x" />
            <span>TV Shows</span>
          </>,
          <>
            <FontAwesomeIcon icon={faAward} color="white" size="1.5x" />
            <span>Awards & Events</span>
          </>,
          <>
            <FontAwesomeIcon icon={faUserFriends} color="white" size="1.5x" />
            <span>Celebs</span>
          </>,
          <>
            <FontAwesomeIcon icon={faVideo} color="white" size="1.5x" />
            <span>Videos</span>
          </>,
          <>
            <FontAwesomeIcon icon={faGlobe} color="white" size="1.5x" />
            <span>Community</span>
          </>,
        ]}
      />
    </div>
  );
};

export default SideNavContainer;
