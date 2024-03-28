import React from "react";
import styled from "styled-components";
import logo from "../../data/assets/minicook_logo.svg";
import { footerInfo } from "./data/data";

const Footer = () => {
  const openPage = (e: React.MouseEvent<HTMLDivElement>) => {
    const page = e.currentTarget.dataset.id;
    window.open(page);
  };

  return (
    <FooterWrapper>
      <div className='footer__logo'>
        <img src={logo} width={80} height={80} alt='미니쿡로고'></img>
      </div>
      <div className='footer__userinfo'>
        {footerInfo.map(({ icon, link }, i) => (
          <div
            className='footer__useritem'
            key={i}
            data-id={link}
            onClick={(e) => openPage(e)}>
            {icon}
          </div>
        ))}
      </div>
      <div className='footer__line'>
        <hr />
      </div>
      <div className='footer__text'>
        Copyright ⓒ OhHaNeul co.,Ltd All Rights Reserved.
      </div>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 5rem;

  background-color: #e4e1dc;

  .footer__userinfo{
    display: flex;
    width: 130px;
    padding: 15px 0 5px 0;
    cursor: pointer;
  }
  
  .footer__useritem{
    display: flex;
    width: 130px;
    height: 30px;
    justify-content: space-between;

    > svg { 
      padding: 5px 5px;
      margin-right: 10px;

      font-size:37px;
      fill: white;
      background-color: #aa9884;
      border-radius:20px;
    }
  }
  .footer__line{
    height:2px;
    width: 70%;
    margin-top: 20px;
    background-color: #d3bea7;
  }
  .footer__text{
    color:#9b7d5d;
  }
`;
export default Footer;
