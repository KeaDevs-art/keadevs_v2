import { Fragment } from "react";

import "./navigation.styles.scss";

const Navigation = () => {
  return (
    <Fragment>
      <header>
        <h3>lookbook</h3>
        <nav className="nav-bar">
          <ul className="nav-list">
            <li className="nav-item">
              <a className="nav-link" href="/">
                home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                expertise
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                projects
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                contact
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </Fragment>
  );
};

export default Navigation;
