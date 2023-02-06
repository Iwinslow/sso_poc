
import { useEffect, useState } from 'react';
import './App.css'

function App1() {

  const [cookieExists, setCookieExists] = useState(false)
  const [cookie, setCookie] = useState("")


  useEffect(()=>{
    const value = `; ${document.cookie}`;
    window.parent.postMessage(
      {token:value}, 
       "http://127.0.0.1:5500/"
   ); 
    console.log("TOKEN localstorage", localStorage.getItem("token"))
    console.log("TOKEN cookie", document.cookie)
   
    if (document.cookie && cookie==="") {
      setCookieExists(true)
      setCookie(document.cookie)
    }
  },[cookie]);

  const setTokenCookie = ()=>{
    document.cookie = `token_key_d1=tokenD1; SameSite=None; Secure`;
    //document.cookie = `token_key_d1=tokenD1; Secure`;
    localStorage.setItem("token", `token_key_d1=tokenD1`)
    setCookieExists(true)
  }
  

  return (
    <div className="App">
      <div>DOMAIN 1</div>
     <div>
      {
        cookieExists?(
          <div>Cookie ya aplicada</div>
        ):(
          <button onClick={setTokenCookie}> Set Token Cookie </button>
        )
      }
      
     </div>
    </div>
  )
}

export default App1
