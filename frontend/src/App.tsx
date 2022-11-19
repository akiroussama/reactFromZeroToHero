import { useState } from 'react'
import './App.css'
import LoginForm from './components/LoginForm'
import Welcome from './components/Welcome'

function App() {
    const [errorMessage, setErrorMessage] = useState('');
    const [isAuthed, setIsAuthed] = useState(false);
    const [username, setUsername] = useState('');
    const handleLogin = ({ username, password }: { username: string; password: string }) => {
        if (username === 'admin' && password === 'admin') {
            setIsAuthed(true);
        } else {
            setErrorMessage('Invalid username or password');
        }
    };
 
    return (
    <div className="lg:container lg mx-auto m-10">
      {isAuthed ? (
    <Welcome
          username={username}
          onLogout={() => {
            setIsAuthed(false);
            setUsername('');
          }}
        />
        ) : (
      <LoginForm onLogin={handleLogin} errorMessage={errorMessage}></LoginForm>
        )}
    </div>
  )
}

export default App
