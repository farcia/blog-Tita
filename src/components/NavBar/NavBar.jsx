import { useHistory } from "react-router-dom"
import UseAuth from "../../Auth/UseAuth"
//import FacebookAuth from '../../Auth/FacebookAuth';

const NavBar = () => {
    const auth = UseAuth();
    return (
        <nav className="nav">
            <ul>
                {auth.isLogged() && (
                    <>
                    <li>
                        <button onClick={auth.Logout}> Logout</button>
                    </li>
                </>
                )}
            </ul>
        </nav>
    )
}
export default NavBar