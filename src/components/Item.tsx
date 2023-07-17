import React, { useState } from "react";
import styled from "styled-components";
import { Col, Hidden } from "react-awesome-styled-grid";
import { ItemType } from "../data/data";
import Effect from "./Effect";

export const Item: React.FC<{ item: ItemType }> = ({ item }): JSX.Element => {
  const [isEffect, setIsEffect] = useState<boolean>(false);
  const disableEffect = () => setIsEffect(false);

  return (
    <Col xs={30} sm={15} md={10} lg={7.5} xl={6}>
      <Wrapper onMouseEnter={() => setIsEffect(true)}>
        <Image src={"https://kashiwasato.com" + item.imgage} />
        <Name>
          <Effect
            str={item.title.toUpperCase()}
            enable={isEffect}
            callback={disableEffect}
          />
        </Name>
        <Desc>
          {item.credits.map((credit, index) => {
            return index < 4 ? (
              <p key={index}>
                {credit.title}: {credit.name}
              </p>
            ) : (
              ""
            );
          })}
          <div
            className="desc"
            dangerouslySetInnerHTML={{ __html: item.desc as string }}
          />
        </Desc>
        <More>
          <Hidden xs>
            READ MORE
            <Plus>+</Plus>
          </Hidden>
        </More>
      </Wrapper>
    </Col>
  );
};

const Wrapper = styled.div`
  width:100%:
`;
const Image = styled.img`
  width: 100%;
  height: auto;
  background: #eee;
  -webkit-filter: brightness(0.98);
  filter: brightness(0.98);
`;

const Name = styled.div`
  font-size: 15px;
  margin: 23px 0 14px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 1.6em;
  @media (max-width: 767px) {
    margin: 24px 25px 17px 25px;
    font-size: 18px;
  }
`;

const Desc = styled.div`
  @media (max-width: 767px) {
    margin: 0 26px;
  }

  p {
    line-height: 1.6em;
    font-size: 12px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-top: 0;
    margin-bottom: 0;
    font-family: "HelveticaNeueW01-45Ligh", Helvetica, Arial, Verdana,
      "Noto Sans Japanese", "Noto Sans SC", "ヒラギノ角ゴ Pro W3",
      "Hiragino Kaku Gothic Pro", "メイリオ", Meiryo, Osaka, "ＭＳ Ｐゴシック",
      "MS PGothic", sans-serif;
    letter-spacing: 0.05em;
  }

  .desc {
    display: none;
    @media (max-width: 767px) {
      display: block;
    }
  }
`;

const More = styled.div`
  opacity: 0.8;
  letter-spacing: 0.1em;
  font-size: 12px;
  margin-top: 20px;
  margin-bottom: 30px;

  @media (max-width: 767px) {
    margin-bottom: 0;
  }
`;
const Plus = styled.span`
  font-size: 12px;
  margin-left: 5px;
`;

export default Item;
