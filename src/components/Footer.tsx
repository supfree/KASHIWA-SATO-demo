import React from "react";
import styled from "styled-components";

export type FooterProps = {
  className?: string;
};

export const Footer: React.FC<FooterProps> = ({ className }): JSX.Element => {
  return (
    <Container className={className}>
      COPYRIGHT © SAMURAI INC. ALL RIGHTS RESERVED.
    </Container>
  );
};
const Container = styled.div`
  margin-left: 80px;
  margin-top: 80px;
  padding-bottom: 40px;
  font-size: 10px;
  letter-spacing: 0.05em;

  @media (max-width: 767px) {
    font-size: 10px;
    color: #ccc;
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0;
    -webkit-transform: scale(0.8, 0.8);
    transform: scale(0.8, 0.8);
    margin-left: 25px;
    margin-top: 120px;
  }
`;
export default Footer;
