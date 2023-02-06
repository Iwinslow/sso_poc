
import { useEffect, useState } from 'react';
import './App.css'

function App1() {

  const [token, setToken] = useState(null)


  useEffect(()=>{
    if (document.cookie && !token) {
      //get token from cookies
      const tokenFromCookies = document.cookie[0].split(";")[0].split("=")[1]
      setToken(tokenFromCookies)
      //send it to application
      if(window.parent[0]){
        //control ancestorOrigins[0] === http://127.0.0.1:5500/ (application d2)
        window.parent[0].location.ancestorOrigins[0]==="http://127.0.0.1:5500"&&window.parent.postMessage(
          {token:tokenFromCookies}, 
           "http://127.0.0.1:5500/"
       ); 
        
      }
      
    }
  },[]);

  const setTokenCookie = ()=>{
    document.cookie = "token_key_d1=tokenD1; SameSite=None; Secure";
    //document.cookie = `token_key_d1=tokenD1; Secure`;
    //localStorage.setItem("token", `token_key_d1=tokenD1`)
    setToken("tokenD1")
  }
  

  return (
    <div className="App">
      <div>DOMAIN 1</div>
     <div>
      {
        token?(
          <div>ALREADY LOGGED</div>
        ):(
          <button onClick={setTokenCookie}> LOGIN </button>
        )
      }
      
     </div>
    </div>
  )
}

export default App1
