import Head from 'next/head';
import styled from 'styled-components';

const Home = () => {
  return (
    <HomeWrapper>
      <Head>
        <title>買い物リスト</title>
      </Head>
      <h1>ようこそ！</h1>
      <h2>追加で商品を追加、リストで追加した商品の一覧が見られます</h2>
    </HomeWrapper>
  );
};

export default Home;

const HomeWrapper = styled.div`
  grid-area: component;
`
