import React,{ useState } from 'react';
import './App.css';



function App() {
  let[users,setUser]=useState([]);
  const loadUsers= async()=>{

  await fetch('https://reqres.in/api/users?page=1')
  .then(response => response.json())
  .then(data => {
    const newDataObject = { data };
    if (Array.isArray(newDataObject.data.data)) {
      const newDataArray = newDataObject.data.data.map(({ id, first_name, last_name,email,avatar }) => ({ id, first_name, last_name,email,avatar }));
    
      console.log(newDataArray);
      setUser(newDataArray);
      console.log(users);
    } else {
      console.error('The "data" property is not an array.');
    }
   
    
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });

 
  
  }
  return (
    <div className="App">
      <h1>USERS CARD</h1>
      <button onClick={loadUsers}>Get data</button>
      <h2>Users:</h2>
      <ul className='list'>
          {users.map(({ id, first_name, last_name ,email,avatar })=>(
          <li key={id}>
                    <img src={avatar} alt="error in loading image" /><br />
                    Name: {`${first_name} ${last_name}`} <br />
                    Email: {email} <br />
                    
              </li>
        ))}
        {console.log(setUser)};
      </ul>
    </div>
  );
}

export default App;
