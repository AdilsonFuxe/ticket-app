import { useEffect } from 'react';
import Router from 'next/router';
import { useRequest } from '../../hooks';

const Signout = () => {
  const { doRequest } = useRequest({
    url: '/api/users/signout',
    method: 'post',
    body: {},
    onSuccess: () => Router.push('/'),
  });

  useEffect(() => {
    doRequest();
  }, []);
  return <dir>Signing you out...</dir>;
};
export default Signout;
