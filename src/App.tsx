import { store } from './store'
import RouterView from './routes'
import { ConfigProvider } from 'antd'
import { Provider } from 'react-redux'
import { configProviderProps } from './config'
import { BrowserRouter } from 'react-router-dom'

const App: React.FC = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <ConfigProvider
                    {...configProviderProps}
                >
                    <RouterView />
                </ConfigProvider>
            </BrowserRouter>
        </Provider>

    )
}

export default App;
