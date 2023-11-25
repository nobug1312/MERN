import { Experimental_CssVarsProvider as CssVarsProvider } from '@mui/material/styles'
import ReactDOM from 'react-dom/client'
import App from '~/App.jsx'
import theme from '~/theme'
import { CssBaseline } from '@mui/material'

ReactDOM.createRoot(document.getElementById('root')).render(
    <>
        <CssVarsProvider theme={theme}>
            <CssBaseline>
                <App />
            </CssBaseline>
        </CssVarsProvider>
    </>
)
