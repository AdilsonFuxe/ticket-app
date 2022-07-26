import { buildClient } from '../api';

const LandingPage = ({ currentUser }) => {
  return currentUser ? (
    <h1>You are signed in</h1>
  ) : (
    <h1>You are not signed in</h1>
  );
};

LandingPage.getInitialProps = async (context) => {
  try {
    const client = buildClient(context);
    const { data } = await client.get('/api/users/me');
    return data;
  } catch (error) {}

  return {};
};

export default LandingPage;
