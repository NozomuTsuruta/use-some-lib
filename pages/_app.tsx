import { AppProps } from 'next/app';
import '../styles/global.scss';
import { Provider } from '../redux/store';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import styled from 'styled-components';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider>
      <GridContainer>
        <Header />
        <Navigation link='form' name='追加' />
        <Navigation link='list' name='リスト' />
        <Component {...pageProps} />
      </GridContainer>
    </Provider>
  );
};

export default App;

const GridContainer = styled.div`
  display: grid;
  grid-template:
    'header     header      header'     150px
    '...        ...         ...'        2px
    'form       ...         list'       100px
    'component  component   component'  1fr
    /1fr        2px        1fr;
`;
