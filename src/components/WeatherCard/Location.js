import React from "react";

import styled from '@emotion/styled';

const Location = (props) => {

  const Container = styled.div`
  `

  const City = styled.h1`
    margin: 20px auto 5px;
  `

  const Country = styled.h3`
    margin-top: 0;
    text-align:center;
  `

  return (
    <Container>
      <City>Sydney</City>
      <Country>AU</Country>
    </Container>
  );
};

export default Location;
