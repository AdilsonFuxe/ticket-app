import axios from 'axios';
import { useState } from 'react';

export const useRequest = ({ url, method, body, onSuccess }) => {
  const [errorObject, setErrorObject] = useState(null);

  const doRequest = async () => {
    try {
      setErrorObject(null);
      const response = await axios[method](url, body);
      if (onSuccess) {
        onSuccess(response.data);
      }
      return response.data;
    } catch (error) {
      setErrorObject(
        <div className="alert alert-danger">
          <h4>Ooops....</h4>
          {error.response.data.error}
        </div>
      );
    }
  };
  return { doRequest, error: errorObject };
};
