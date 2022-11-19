import { useState } from 'react'
import './App.css'
import LoginForm from './components/LoginForm'

function App() {
    const [errorMessage, setErrorMessage] = useState('');
  const handleLogin = ({ username, password }: { username: string; password: string }) => {
    console.log('username', username)
  };
    return (
    <div className="lg:container lg mx-auto m-10">
      <LoginForm onLogin={handleLogin} errorMessage={errorMessage}></LoginForm>
     
    </div>
  )
}

export default App
