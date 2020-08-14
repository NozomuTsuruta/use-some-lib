import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const Header = () => {
  return (
    <HeaderContainer>
      <Link href='/'>
        <StyledA>
          <StyledH1>買い物リスト</StyledH1>
        </StyledA>
      </Link>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.div`
  grid-area: header;
  background: black;
`;

const StyledA = styled.a`
  text-decoration: none;
  color: white;
`;

const StyledH1 = styled.h1`
  text-align: center;
  line-height: 150px;
  margin: 0;
`;
