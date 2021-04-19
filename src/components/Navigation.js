import React from "react";
import HomeIcon from '@material-ui/icons/Home';
import LocalActivityIcon from '@material-ui/icons/LocalActivity';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import MarkunreadIcon from '@material-ui/icons/Markunread';
import FlipCameraAndroidIcon from '@material-ui/icons/FlipCameraAndroid';
import '../styles/style.css'

import { Link } from '@reach/router'

function Navigation() {
  return (
    <div>
      <nav className="navbar fixed-bottom navbar-light">
        <div className="container footer__navigation">
          <Link className="navbar-brand" to="/">
            <HomeIcon className="footer__icon" />
            <p>Home</p>
          </Link>
          <Link className="navbar-brand" to="/activity">
            <LocalActivityIcon className="footer__icon" />
            <p>Activity</p>
          </Link>
          <Link className="navbar-brand" to="/wallet">
            <AccountBalanceWalletIcon className="footer__icon" />
            <p>Wallet</p>
          </Link>
          <Link className="navbar-brand" to="/market">
            <MarkunreadIcon className="footer__icon" />
            <p>Market</p>
          </Link>
          <Link className="navbar-brand" to="/earn">
            <FlipCameraAndroidIcon className="footer__icon" />
            <p>Earn</p>
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
