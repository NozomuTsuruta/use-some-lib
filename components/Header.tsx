import React from 'react';
import styled from 'styled-components';

const Header = () => {
  return (
    <HeaderContainer>
      <h1 style={{ textAlign: 'center' }}>買い物リスト</h1>
    </HeaderContainer>
  );
};


export default Header;

const HeaderContainer=styled.div`
  grid-area: header;
`
