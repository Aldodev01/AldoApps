import './Login.css'
import { auth, provider } from '../../config/firebase'
import { actionTypes } from '../../config/reducer'
import { useStateValue } from '../../config/stateProvider'
import loginKiri from '../../assets/loginKiri.svg'
import loginOrang from '../../assets/loginOrang.svg'
import loginBrand from '../../assets/loginBrand.svg'
import { useState } from 'react'

function Login() {

    const [ {}, dispatch ] = useStateValue()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    const signIn = () => {
        auth.signInWithPopup(provider)
            .then((result) => {
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user,
                })
            })
            .catch((error) => alert(error.message))
    }

    const logIn = (e) => {
        e.preventDefault()

        auth
        .signInWithEmailAndPassword(email, password)
        .catch((error) => alert(error.message))

    }

    return (
        <main className="login">
            <div className="loginHeader">

                <div className="loginLeft">
                    <img src={loginOrang} alt="loginOrang" className="loginOrang"/>
                    <img src={loginKiri} alt="loginKiri" className="loginKiri"/>
                </div>

                <div className="loginRight">
                    <img src={loginBrand} alt="loginBrand" className="loginBrand"/>
                        <form className="loginForm">
                            <input 
                                type="text"
                                placeholder="Email Address"
                                className="loginEmail"
                                onChange={ e => setEmail(e.target.value)}
                            />
                            <input 
                                type="password"
                                placeholder="Password"
                                className="loginPassword"
                                onChange={e => setPassword(e.target.value)}
                            />

                            <button className="loginContinue" onClick={logIn} >
                                CONTINUE
                            </button>
                        </form>

                        <div className="loginOr">
                            <h2>OR SIGN IN WITH</h2>
                            <button className="loginGoogle" onClick={signIn}>
                                <i className="fab fa-google"></i>
                                Sign In With Google
                            </button>
                        </div>
                </div>

            </div>
        </main>
    )
}

export default Login