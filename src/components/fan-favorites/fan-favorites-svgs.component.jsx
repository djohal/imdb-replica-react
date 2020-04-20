import React from "react";

export const WatchlistRibbonSvg = () => (
  <svg
    className="watchlist-ribbon__bg"
    width="24px"
    height="34px"
    viewBox="0 0 24 34"
    xmlns="http://www.w3.org/2000/svg"
    role="presentation"
  >
    <polygon
      className="watchlist-ribbon__bg-ribbon"
      fill="#000000"
      points="24 0 0 0 0 32 12.2436611 26.2926049 24 31.7728343"
    ></polygon>
    <polygon
      className="watchlist-ribbon__bg-hover"
      points="24 0 0 0 0 32 12.2436611 26.2926049 24 31.7728343"
    ></polygon>
    <polygon
      className="watchlist-ribbon__bg-shadow"
      points="24 31.7728343 24 33.7728343 12.2436611 28.2926049 0 34 0 32 12.2436611 26.2926049"
    ></polygon>
  </svg>
);

export const WatchlistRibbonIconSvg = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    className="icon icon--add icon--inline"
    viewBox="0 0 24 24"
    fill="currentColor"
    role="presentation"
  >
    <path fill="none" d="M0 0h24v24H0V0z"></path>
    <path d="M18 13h-5v5c0 .55-.45 1-1 1s-1-.45-1-1v-5H6c-.55 0-1-.45-1-1s.45-1 1-1h5V6c0-.55.45-1 1-1s1 .45 1 1v5h5c.55 0 1 .45 1 1s-.45 1-1 1z"></path>
  </svg>
);

export const RatingSvg = () => (
  <svg
    width="24"
    height="24"
    xmlns="http://www.w3.org/2000/svg"
    className="ipc-icon ipc-icon--star-inline"
    viewBox="0 0 24 24"
    fill="currentColor"
    role="presentation"
  >
    <path d="M12 20.1l5.82 3.682c1.066.675 2.37-.322 2.09-1.584l-1.543-6.926 5.146-4.667c.94-.85.435-2.465-.799-2.567l-6.773-.602L13.29.89a1.38 1.38 0 0 0-2.581 0l-2.65 6.53-6.774.602C.052 8.126-.453 9.74.486 10.59l5.147 4.666-1.542 6.926c-.28 1.262 1.023 2.26 2.09 1.585L12 20.099z"></path>
  </svg>
);
