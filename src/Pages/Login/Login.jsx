import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
import UseAuth from '../../Auth/UseAuth';
import Logo from '../../resources/img/Logo_TitaMediaNublack320.png';
import { useHistory } from 'react-router';


const Login = () => {
    const aurh = UseAuth();
    const hystory = useHistory();

    const successfulUser = {
        username: '',
        avatar: ''
    }
    
    const onFailure = (response) => {
        console.log('Fallo')
    }

    const responseFacebook = (response) => {
        console.log(response);
        aurh.Login(response);
        hystory.push('/');
    }
    const responseGoogle = (response) => {
        const nt = response.nt;
        const nameUser = nt.Se;
        const urlImgAvatar = nt.oK;

        successfulUser.username=nameUser;
        successfulUser.avatar=urlImgAvatar;

        console.log(successfulUser);
        aurh.Login(successfulUser);
        hystory.push('/');

    }
    

    return (
        <section className="loginPage">
            <div className="contentLogon">
                <img className="logo" alt="Logo Tita Media" src={Logo} />
                <div className="contTitle">
                    <h1 className="title">Iniciar sesión</h1>
                    <p className="textBox">Puedes ingresar con tu cuenta de facebook o google.</p>
                </div>
                <div className="contBtnLogin">
                    <FacebookLogin
                        appId="266444802102250"
                        autoLoad={false}
                        fields="name,email,picture"
                        callback={responseFacebook}
                        cssClass="btnGeneral facebook"
                        textButton="Facebook"
                        onFailure={onFailure}
                    />
                    <GoogleLogin 
                        clientId="143815869885-aqert2covg58r7dhn08j2s2hiuqsfue3.apps.googleusercontent.com"
                        render={renderProps => (
                            <button onClick={renderProps.onClick} className="btnGeneral google" disabled={renderProps.disabled}>Google</button>
                          )}
                        onSuccess={responseGoogle}
                        icon={false}
                        cookiePolicy={'single_host_origin'}
                        onFailure={onFailure}
                    />
                    
                </div>
            </div>
        </section>


    )
}

export default Login