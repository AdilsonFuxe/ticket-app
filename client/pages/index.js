import { buildClient } from '../api';

const LandingPage = ({ currentUser }) => {
  return currentUser ? (
    <h1>You are signed in</h1>
  ) : (
    <h1>You are not signed in</h1>
  );
};

LandingPage.getInitialProps = async (constext) => {
  const client = buildClient(constext);
  const { data } = await client.get('/api/users/me').catch((error) => {
    console.log(error);
    return { currentUser: null };
  });
  return data;
};

export default LandingPage;
