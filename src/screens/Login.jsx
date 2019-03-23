import React from 'react';
import LogoAnimated from './../components/LogoAnimated'
import { Link } from 'react-router-dom';

const Login = ({ userLogged, setUserLogged }) => (
    <div className="Login-page">
        <Link className="card" to={'/chat/conversations/cjtktzui30k6l0106tikpswo8'} onClick={() => setUserLogged('cjtjfgpq90riq0104flsd68n8')}>
            Henrique Silva
        </Link>
        <Link className="card" to={'/chat/conversations/cjtktzui30k6l0106tikpswo8'} onClick={() => setUserLogged('cjtjf7f8g0q790141ugksvlw3')}>
            Vasco Silva
        </Link>
    </div>
)

export default Login;