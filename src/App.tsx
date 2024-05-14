import RouterView from './routes'
import { ConfigProvider } from 'antd'
import { configProviderProps } from './config'
import { BrowserRouter } from 'react-router-dom'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ConfigProvider
        {...configProviderProps}
      >
        <RouterView />
      </ConfigProvider>
    </BrowserRouter>
  )
}

export default App;
