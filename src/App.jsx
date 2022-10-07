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
  axios.post(URL, data)
    .then(res =>{
      console.log(res.data)
      getAllUsers()
    })
    .catch(err => console.log(err))
}

//Para eliminar un usuario específico

const deleteUserById = id => {
  const URL = `${baseURL}/users/${id}/`
  axios.delete(URL)
    .then(res => {
      console.log(res.data)
      getAllUsers()
    })
    .catch(err => console.log(err))
}

//Para actualizar un usuario en específico
const updateUserById = id => {
  const URL = `${baseURL}/users/${id}/`
  axios.patch(URL, id)
    .then(res => {
      console.log(res.data)
      getAllUsers()
    })
    .catch(err => console.log(err))
}
  
  

  return (
    <div className="App">
      <h1>Users CRUD</h1>
      <FormUsers
        createNewUser={createNewUser}
        updateInfo={updateInfo}
        updateUserById={updateUserById}
        setUpdateInfo={setUpdateInfo}
      />
      {
        users?.map(user =>(
          <UserCard 
            key={user.id}
            user={user}
            deleteUserById={deleteUserById}
            setUpdateInfo={setUpdateInfo}
          />
        ))
      }
    </div>
  )
}

export default App
