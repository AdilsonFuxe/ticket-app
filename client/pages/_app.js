import 'bootstrap/dist/css/bootstrap.css';
import { buildClient } from '../api';
import { Header } from '../components';

const AppComponent = ({ Component, pageProps, currentUser }) => {
  return (
    <div>
      <Header currentUser={currentUser} />
      <Component {...pageProps} />;
    </div>
  );
};

AppComponent.getInitialProps = async (appContext) => {
  try {
    const client = buildClient(appContext.ctx);
    const { data } = await client.get('/api/users/me');
    let pageProps = {};
    if (appContext.Component.getInitialProps) {
      pageProps = await appContext.Component.getInitialProps(appContext.ctx);
    }
    return {
      pageProps,
      ...data,
    };
  } catch (error) {}

  return {};
};

export default AppComponent;
