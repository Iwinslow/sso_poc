import { useState, useEffect } from 'react';
import './App.css';

function App2() {
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);

  //LISTENER TO RECEIBE TOKEN FROM D1
  window.addEventListener('message', function (event) {
    console.log(event.data.token);
    setToken(event.data.token);
    document.cookie = `token_key_d2=${event.data.token}; Secure`;
    setLoading(false);
  });

  useEffect(() => {
    const tokenFromCookies = document.cookie.split(';')[0].split('=')[1];

    if (!tokenFromCookies) {
      setTimeout(() => {
        window.location.replace(
          'http://localhost:7700/application?applicationId=1'
        );
      }, 3000);
    }
  }, []);

  return (
    <div className="App">
      <div>DOMAIN 2</div>
      {loading ? (
        <>
          <iframe
            src="http://localhost:7700/"
            style={{ display: 'none' }}
          ></iframe>
          <div>Loading ...</div>
        </>
      ) : token ? (
        <>
          <div>ALREADY LOGGED</div>
        </>
      ) : (
        <>
          <div>YOU ARE NOT LOGGED! will be redirect to login</div>
        </>
      )}
    </div>
  );
}

export default App2;
