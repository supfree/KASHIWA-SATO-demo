import React, { useState, useEffect } from "react";
import styled from "styled-components";

export type EffectProps = {
  str: String;
  enable: boolean;
  callback: () => void;
  display?: string;
};

const randomString = (len: number) => {
  let strVals = "ABCDEFGHJKMNPQRSTWXYZ";
  let maxLen = strVals.length;
  let randomStr = "";
  for (var i = 0; i < len; i++) {
    randomStr += strVals.charAt(Math.floor(Math.random() * maxLen));
  }
  return randomStr;
};

export const Effect: React.FC<EffectProps> = ({
  str,
  enable,
  callback,
  display = "inline-block",
}): JSX.Element => {
  const [tempStr, setTempStr] = useState<String>("");
  useEffect(() => {
    if (tempStr.length < str.length && enable) {
      setTimeout(() => {
        setTempStr(randomString(tempStr.length + 1));
      }, 200 / str.length);
    } else {
      callback();
      setTempStr("");
    }
    // eslint-disable-next-line
  }, [enable, tempStr]);

  return (
    <Container style={{ display: display }}>
      {display === "inline" ? (
        <span style={{ display: enable ? "none" : "inline" }}>{str}</span>
      ) : (
        <div style={{ visibility: enable ? "hidden" : "visible" }}>{str}</div>
      )}

      <Temp
        style={{
          display: enable ? "block" : "none",
          marginTop: display === "inline" ? "2px" : "",
        }}
      >
        {tempStr}
      </Temp>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
`;
const Temp = styled.div`
  position: absolute;
  top: 0;
  left: 0;
`;

export default Effect;
