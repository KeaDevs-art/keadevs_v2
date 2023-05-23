/* eslint-disable react/jsx-no-comment-textnodes */
import { useContext } from "react";
import { Link } from "react-router-dom";

import { NavigationContext } from "../../../../contexts/navigation.context";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import HomeIcon from "@mui/icons-material/Home";
import HomeRepairServiceIcon from "@mui/icons-material/HomeRepairService";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";

import Avatar from "../../../../assets/anime_avatar.jpg";

import styled from "styled-components";

const MobileNavContainer = styled.div`
  height: 90vh;
  width: 100%;
  background: rgba(0, 0, 0, 0.13);
  box-shadow: 0 4rem 3rem rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(0.49rem);
  -webkit-backdrop-filter: blur(0.49rem);
  padding: 1.4rem;

  position: absolute;
  left: 0;
  bottom: 0;
  z-index: 999;

  border-top-left-radius: 1.2rem;
  border-top-right-radius: 1.2rem;

  display: grid;
  grid-template-rows: min-content min-content 1fr min-content;

  .back {
    ${"" /* background-color: red; */}
  }
  .avatar {
    display: flex;
    flex-direction: column;
    align-items: center;

    &--img {
      height: 10rem;
      width: 10rem;
      border-radius: 50%;
      margin: 1.5rem auto;
    }
    .name {
      font-size: 2.8rem;
    }
    .mail {
      color: currentColor;
      text-decoration: none;
      font-size: 1.4rem;
    }
  }

  .nav-links {
    display: flex;
    flex-direction: column;

    .link {
      background-color: gray;
      color: rgba(255, 255, 255, 0.4);
      padding: 1.8rem 1rem;
      border-radius: 1rem;
      margin-top: 1.6rem;
      text-decoration: none;
      display: flex;
      align-items: center;
      gap: 1.4rem;

      font-size: 1.4rem;
    }
  }

  .copy-text-block {
    text-align: center;

    &-sign {
        font-size: 1.4rem;
    }
  }
`;

const MobileNavigation = () => {
  const { handleMenu } = useContext(NavigationContext);

  return (
    <MobileNavContainer>
      <div className="back">
        <KeyboardArrowDownIcon fontSize="large" onClick={handleMenu} />
      </div>
      <div className="avatar">
        <img className="avatar--img" src={Avatar} />
        <h1 className="name">kea.devs_</h1>
        <a className="mail" href="mailto:iamkeadevs@gmail">
          iamkeadevs@gmail.com
        </a>
      </div>
      <div className="nav-links">
        <Link className="link" to="/" onClick={handleMenu}>
          <HomeIcon fontSize="large" />
          // home
        </Link>
        <Link className="link" to="/expertise" onClick={handleMenu}>
          <HomeRepairServiceIcon fontSize="large" />
          // expertise
        </Link>
        <Link className="link" to="/projects" onClick={handleMenu}>
          <AccountTreeIcon fontSize="large" />
          // projects
        </Link>
        <Link className="link" to="/contact" onClick={handleMenu}>
          <ConnectWithoutContactIcon fontSize="large" />
          // contact
        </Link>
      </div>
      <div className="copy-text-block">
        <span className="copy-text-block-sign">&copy;</span> OFF CAMERA by keadevs 2023
      </div>
    </MobileNavContainer>
  );
};

export default MobileNavigation;
