import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import FormUsers from './components/FormUsers'
import UserCard from './components/UserCard'

const baseURL = 'https://users-crud1.herokuapp.com'


function App() {

  const [users, setUsers] = useState()
  //Para actualizar la información del User   
  const [updateInfo, setUpdateInfo] = useState()

//para hacer el get de todos los users
  const getAllUsers = () => {
    const URL = `${baseURL}/users/`
    axios.get(URL)
      .then(res => setUsers(res.data))
      .catch(err => console.log(err))
  }

  useEffect(() => {
    getAllUsers()
  
  }, [])

//Para crear un nuevo usuario

const createNewUser = data => {
  const URL = `${baseURL}/users/`
  axios.post()
    .then(res =>{
      console.log(res.data)
      getAllUsers()
    })
    .catch(err => console.log(err))
}

//Para eliminar un usuario específico

const deleteUserById = () => {
  const URL = `${baseURL}/user/${id}/`
  axios.delete()
    .then(res => {
      console.log(res.data)
      getAllUsers()
    })
    .catch(err => console.log(err))
}

//Para actualizar un usuario en específico
const updateUseById = (id) => {
  const URL = `${baseURL}/users/${id}/`
  axios.patch(URL, data)
    .then(res => {
      console.log(res.data)
      getAllUsers()
    })
    .catch(err => console.log(err))
}
  
  

  return (
    <div className="App">
      <h1>Users</h1>
      <FormUsers
        createNewUser={createNewUser}
        updateInfo={updateInfo}
        updateUseById={updateUseById}
        setUpdateInfo={setUpdateInfo}
      />
      {
        users?.map(user =>(
          <UserCard 
            key={user.id}
            user={user}
            deleteUserById={deleteUserById}
            setupdateinfo={setupdateinfo}
          />
        ))
      }
    </div>
  )
}

export default App
