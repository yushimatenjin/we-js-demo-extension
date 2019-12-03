import React from "react";
import Link from "next/link";
import Routes from "../constants/Routes";
import styled from "styled-components";

const Container = styled.header`
    display:grid;
    justify-content:center;
    background-color: #474747;

`;

const List = styled.ul`
  list-style-type: none;
  
`;

const ListItem = styled.li`
  display: inline-block;
  padding-left:2rem;
  padding-right:2rem;
  background-color: #858585;

`;
const Header = () => {
  return (
    <Container style={{
        width: 500
    }}>
      <List>
        <ListItem>
          <Link href={Routes().index}>
            <a>メインへ</a>
          </Link>
        </ListItem>
        <ListItem>
          <Link href={Routes().sub}>
            <a>サブへ</a>
          </Link>
        </ListItem>
      </List>
    </Container>
  );
};

export default Header;
