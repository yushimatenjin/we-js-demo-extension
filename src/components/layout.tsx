import React from "react";
import Header from "./header";
import styled from 'styled-components'

const Container = styled.div`
    flex:1;
    background-color: red;

`
const Layout = props => {
  return (
    <Container>
      <Header />
      {props.children}
    </Container>
  );
};

export default Layout;
