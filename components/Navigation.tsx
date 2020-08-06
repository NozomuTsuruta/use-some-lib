import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const Navigation = ({ link, name }: { link: string; name: string }) => {
  return (
    <Link href={`/${link}`}>
      <NavigationContainer link={link}>{name}</NavigationContainer>
    </Link>
  );
};

export default Navigation;

const NavigationContainer = styled.a<{ link: string }>`
  grid-area: ${({ link }) => link};
  text-align: center;
  cursor: pointer;
`;
