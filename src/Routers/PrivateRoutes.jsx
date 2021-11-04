import {Route, Redirect} from 'react-router-dom'
import UseAuth from '../Auth/UseAuth'


const PrivateRoutes = ({component: Component, ...rest}) => {
    const auth = UseAuth()
    return (
        <Route {...rest} >{auth.isLogged() ? <Component /> : <Redirect exact to="/login"/>}</Route> 
    )
}

export default PrivateRoutes