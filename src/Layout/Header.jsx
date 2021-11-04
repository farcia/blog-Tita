import Logo from '../resources/img/Logo_TitaMediaNublack320.png';
import UseAuth from "../Auth/UseAuth"

export default function Header() {
    const auth = UseAuth();
    
    return (
        <>
            {auth.isLogged() && (
                <header className="header">
                    <div className="contLogo">
                        <img className="logo" alt="Logo Tita Media" src={Logo} />
                    </div>
                    <div className="contUserData">
                        <div className="userName">
                            <span>{auth.user.username}</span>
                        </div>
                        <div className="userAvatar">
                        <img className="logo" alt="Logo Tita Media" src={auth.user.avatar} />

                        </div>
                    </div>
                </header>
            )}
        </>
    )
}
