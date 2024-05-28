import './css'
import './webwoker'
import App from './App'
import ReactDOM from 'react-dom/client'
import { http } from '@/api/http'

http.post('/oauth/login/', {
    username: 'admin',
    password: 'adm@HZ123456'
}).then(r => {
    localStorage.setItem('token', r.data.token)
    http.get('/system/tool/').then(() => {
        console.log(1)
    })
}).finally(() => {
    ReactDOM.createRoot(document.getElementById('root')!).render(<App />)
})

