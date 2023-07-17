import React, { useState, useCallback } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { Visible, Hidden } from "react-awesome-styled-grid";
import Footer from "./Footer";
import Effect from "./Effect";

export const Header: React.FC = (): JSX.Element => {
  const [isShowMenu, setIsShowMenu] = useState<boolean>(false);
  const [className, setClassName] = useState<string>("");
  const [isLeftEffect, setIsLeftEffect] = useState<boolean>(false);
  const [rightEffectStr, setRightEffectStr] = useState<String>("");

  const getEffectLi = useCallback(
    (str: String) => {
      return (
        <li onMouseEnter={() => setRightEffectStr(str)}>
          <Effect
            str={str}
            enable={rightEffectStr === str}
            callback={() => setRightEffectStr("")}
          />
        </li>
      );
    },
    [rightEffectStr]
  );

  return (
    <Container>
      {isShowMenu && <GlobalStyle />}
      <Border />
      <Left onMouseEnter={() => setIsLeftEffect(true)}>
        <a href="/">
          <Name>
            <Effect
              str="KASHIWA SATO"
              enable={isLeftEffect}
              callback={() => setIsLeftEffect(false)}
              display="inline"
            />
          </Name>
          <SubName>
            <Hidden sm>
              <Effect
                str="SAMURAI INC. TOKY"
                enable={isLeftEffect}
                callback={() => setIsLeftEffect(false)}
                display="inline"
              />
            </Hidden>
          </SubName>
        </a>
      </Left>
      <Right className={isShowMenu ? "show" : ""}>
        <SideMenu>
          <Menu>
            {getEffectLi("PROJECT")}
            <li className="line">|</li>
            {getEffectLi("PROFILE")}
            <li className="line">|</li>
            {getEffectLi("CONTACT")}
          </Menu>

          <Lang>
            {getEffectLi("ENGLISH")}
            <li className="line">|</li>
            {getEffectLi("JAPANESE")}
            <li className="line">|</li>
            {getEffectLi("CHINESE")}
          </Lang>
        </SideMenu>
        <Search onMouseLeave={() => setClassName("")}>
          <Input
            type="text"
            placeholder="PLEASE INPUT KEYWORD"
            className={className}
          />
          <Visible xs>
            <ClearIcon />
            <SearchButton>Search</SearchButton>
            <Footer className="menu-footer" />
          </Visible>
          <Hidden xs>
            <SearchIcon onMouseEnter={() => setClassName("active")} />
          </Hidden>
        </Search>
      </Right>
      <Clear />
      <Visible xs>
        {!isShowMenu ? (
          <MenuIcon onClick={() => setIsShowMenu(true)} />
        ) : (
          <CloseIcon onClick={() => setIsShowMenu(false)} />
        )}
      </Visible>
    </Container>
  );
};

const GlobalStyle = createGlobalStyle`
  html,body {
    overflow:hidden;
  }
`;
const Container = styled.div`
  margin-top: 70px;
  margin-bottom: 70px;
  position: relative;

  @media (max-width: 767px) {
    margin-top: 40px;
    margin-bottom: 80px;
  }
`;
const Border = styled.div`
  width: 34px;
  display: inline;
  float: left;
  box-sizing: border-box;
  border-left: 0px solid #000;
  height: 10px;
  line-height: 1em;
  transition: border-left-width 0.15s;
  background-color: #000;
  @media (max-width: 767px) {
    height: 28px;
    width: 11px;
  }
`;
const Left = styled.div`
  float: left;
  white-space: nowrap;
  font-size: 12px;
  margin-left: 40px;
  line-height: 1em;
  letter-spacing: 0.1em;
  @media (max-width: 767px) {
    margin-left: 13px;
  }
`;
const Name = styled.span`
  @media (max-width: 767px) {
    font-size: 18px;
    line-height: 18px;
  }
`;
const SubName = styled.span`
  margin-left: 20px;
  color: #999;
  @media (max-width: 767px) {
    margin-left: 0px;
    display: block;
    font-size: 10px;
    transform-origin: 0 0;
    color: #575757;
    line-height: 18px;
    -webkit-transform: scale(0.8, 0.8);
    transform: scale(0.8, 0.8);
    -webkit-transform-origin: 0 0;
  }
`;

const Right = styled.div`
  float: right;
  white-space: nowrap;
  position: relative;

  @media (max-width: 767px) {
    display: none;
    width: 100%;
    height: 100%;
    position: fixed;
    top: 150px;
    background-color: #fff;
    z-index: 200;
    padding-left: 25px;

    ul {
      display: block !important;
      margin-left: 0px;
      padding-inline-start: 0px;
    }
    li {
      float: none !important;
      display: block !important;
      margin-bottom: 30px;
      font-size: 16px;
    }

    .line {
      display: none !important;
    }
  }
`;
const SideMenu = styled.div`
  margin-right: 60px;
  display: inline-block;

  ul {
    display: inline-block;
    list-style: none;
    margin-top: 0;
    margin-bottom: 0;
  }

  li {
    display: inline;
    float: left;
    color: #999;
  }

  .line {
    margin-left: 9px;
    margin-right: 9px;
  }
  @media (min-width: 1440px) {
    margin-right: 130px;
  }
  @media (max-width: 767px) {
    width: 100%;
  }
`;
const Menu = styled.ul`
  padding-left: 0;
  li:first-child {
    color: #000;
  }
`;
const Lang = styled.ul`
  @media (max-width: 767px) {
    margin-top: 80px !important;

    li:last-child {
      margin-bottom: 0;
    }
  }

  li:first-child {
    color: #000;
  }
`;

const Clear = styled.div`
  clear: both;
`;

const Search = styled.div`
  display: inline-block;
  margin-top: -10px;
  width: 0px;
  position: absolute;
  right: 0;

  .active {
    width: 300px;
    opacity: 1;

    animation: animate 0.5s;

    @keyframes animate {
      from {
        width: 0%;
        opacity: 0;
      }
      to {
        width: 300px;
        opacity: 1;
      }
    }
  }
  @media (min-width: 1440px) {
    right: 70px;
  }
  @media (max-width: 767px) {
    display: block;
    height: 33px;
    width: 300px;
    margin-top: 80px;
    border: 1px solid #ccc;
    position: relative;
    animation: animate 0s;

    @keyframes animate {
      from {
        opacity: 1;
      }
      to {
        opacity: 1;
      }
    }
  }
`;

const Input = styled.input`
  display: inline;
  float: right;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  box-sizing: border-box;
  width: 0%;
  height: 30px;
  padding: 10px;
  padding-right: 30px;
  border: 1px solid #ccc;
  opacity: 0;
  letter-spacing: 0.05em;
  font-size: 12px;

  @media (max-width: 767px) {
    height: 31px;
    line-height: 31px;
    margin: 0;
    padding: 0;
    border: 0;
    width: 190px !important;
    letter-spacing: 0.05em;
    padding: 5px 10px;
    border: 0;
    -webkit-appearance: none;
    border-radius: 0;
    opacity: 1;
    float: none;
  }

  :focus {
    outline: none;
  }

  ::placeholder,
  ::-webkit-input-placeholder {
    color: #ccc;
  }
  :-ms-input-placeholder {
    color: #ccc;
  }
`;
const SearchIcon = styled.div`
  display: inline;
  float: left;
  position: absolute;
  right: 0;
  top: 2px;
  box-sizing: border-box;
  width: 30px;
  height: 30px;
  background-image: url(/search.svg);
  background-size: 12px 12px;
  background-position: 8px 8px;
  background-repeat: no-repeat;
`;
const ClearIcon = styled.div`
  display: inline-block;
  box-sizing: border-box;
  width: 30px;
  height: 30px;
  background-image: url(/clear.svg);
  background-size: 12px 12px;
  background-position: 8px 8px;
  background-repeat: no-repeat;
  position: absolute;
  left: 181px;
  top: 2px;
`;
const SearchButton = styled.div`
  color: #fff;
  text-transform: uppercase;
  display: inline-block;
  line-height: 33px;
  padding: 0 15px;
  letter-spacing: 0.05em;
  background-color: #ccc;
  margin-left: 30px;
`;

const MenuIcon = styled.div`
  height: 25px;
  width: 27px;
  background-repeat: no-repeat;
  background-position: 0 0;
  background-size: 27px 50px;
  background-image: url(/menu.svg);
  position: absolute;
  right: 28px;
  top: 0px;
  z-index: 200;

  :hover {
    background-position: 0 -25px;
  }
`;
const CloseIcon = styled.div`
  height: 25px;
  width: 27px;
  background-repeat: no-repeat;
  background-position: 0 0;
  background-size: 27px 50px;
  background-image: url(/close.svg);
  position: absolute;
  right: 28px;
  top: 0px;
  z-index: 200;

  :hover {
    background-position: 0 -25px;
  }
`;
export default Header;
