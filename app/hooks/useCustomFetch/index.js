import React, {useEffect, useState} from 'react';

export const useCustomFetch = (url, options) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await fetch(url, options);
      const json = await res.json();
      setResponse(json);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  return {response, error, loading};
};
