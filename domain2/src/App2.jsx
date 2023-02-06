
import './App.css'

function App2() {

window.addEventListener('message', function(event) {
  console.log("EVENTO",event)
  if(event.data.event_id === 'my_cors_message'){
      console.log(event.data.data);
  }
});

// console.log("APP2 LOCALSTORAGE", localStorage.getItem("token"));

  return (
    <div className="App">
      <iframe src="http://localhost:5173/"  style={{display:'none'}}></iframe>
      <div>DOMAIN 2</div>
     
    </div>
  )
}

export default App2
