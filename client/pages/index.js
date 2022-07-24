import { buildClient } from '../api';

const LandingPage = ({ currentUser }) => {
  if (currentUser) {
    console.log(currentUser);
    return (
      <>
        <br />
        <h1>YOU ARE SIGN IN</h1>
      </>
    );
  }
  return <h1>Landing Page1</h1>;
};

LandingPage.getInitialProps = async (constext) => {
  const client = buildClient(constext);
  const { data } = await client.get('/api/users/me');
  return data;
};

export default LandingPage;
