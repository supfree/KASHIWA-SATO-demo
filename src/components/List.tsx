import React from "react";
import { ThemeProvider } from "styled-components";
import { Container, Row } from "react-awesome-styled-grid";
import { Item } from "./Item";
import { ItemType } from "../data/data";
const customConf = {
  mediaQuery: "only screen",
  columns: {
    xs: 30,
    sm: 30,
    md: 30,
    lg: 30,
    xl: 30,
  },
  gutterWidth: {
    xs: 1,
    sm: 1,
    md: 4,
    lg: 4,
    xl: 4,
  },
  paddingWidth: {
    xs: 0,
    sm: 1,
    md: 1,
    lg: 5,
    xl: 5,
  },
  container: {
    xs: "full",
    sm: "full",
    md: "full",
    lg: "full",
    xl: "full",
  },
  breakpoints: {
    xs: 1,
    sm: 48,
    md: 64,
    lg: 90,
    xl: 120,
  },
};
export type ListProps = {
  list: ItemType[];
};
export const List: React.FC<ListProps> = ({ list }): JSX.Element => {
  return (
    <ThemeProvider theme={{ awesomegrid: customConf }}>
      <Container>
        <Row>
          {list.map((item, index) => (
            <Item item={item} key={index} />
          ))}
        </Row>
      </Container>
    </ThemeProvider>
  );
};

export default List;
