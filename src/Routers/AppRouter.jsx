import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import PrivateRoute from './PrivateRoutes';
import Login from '../Pages/Login';
import Index from '../Pages/Index';
import Error from '../Pages/Error';
import NavBar from '../components/NavBar';
import PublicRoutes from './PublicRoutes';

export default function AppRouter() {
    return (
        <Router>
            <NavBar />
            <Switch>
                <PublicRoutes exact path="/login" component={Login} />
                <PrivateRoute exact path="/" component={Index} />
                <Route path="*" component={Error} />
            </Switch>
        </Router>
    )
}