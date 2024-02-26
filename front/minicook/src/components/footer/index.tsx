import React from "react";
import styled from "styled-components";
import logo from "../../data/assets/minicook_logo.svg";
import info from "./data/data";

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
      <div className='footer__userinfo cursor-pointer'>
        {info.map(({ icon, link }) => (
          <div className='footer__useritem' data-id={link} onClick={(e) => openPage(e)}>
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 17rem;
  width: 100%;
  line-height: 5rem;
  background-color: #e4e1dc;

  .footer__userinfo{
    display: flex;
    width: 8rem;
    padding: 15px 0 5px 0;
  }
  
  .footer__useritem{
    height: 30px;
    display: flex;
    justify-content: space-between;
    width: 8rem;

    > svg { 
      margin-right: 10px;
      font-size:37px;
      fill: white;
      background-color: #aa9884;
      padding: 5px 5px;
      border-radius:20px;
    }
  }
  .footer__line{
    margin-top: 1.5rem;
    height:2px;
    width: 70%;
    background-color: #d3bea7;
  }
  .footer__text{
    height: 5rem;
    color:#9b7d5d;
  }
`;
export default Footer;
