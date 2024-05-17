import './css'
import './webwoker'
import App from './App'
import ReactDOM from 'react-dom/client'
import http from 'axios'

http.post('/api/oauth/login/', {
    username: 'admin',
    password: 'adm@HZ123456'
}).then(r => {
    localStorage.setItem('token', r.data.data.token)

}).finally(() => {
    ReactDOM.createRoot(document.getElementById('root')!).render(<App />)
})

