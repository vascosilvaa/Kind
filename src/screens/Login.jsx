import React from 'react'
import logo from './../assets/imgs/logo.svg'
import morty from './../assets/imgs/morty.png'
import rick from './../assets/imgs/rick.png'
import pixelscamp from './../assets/imgs/pixelscamp.svg'
import { Link } from 'react-router-dom'

const Login = ({ userLogged, setUserLogged }) => (
  <>
    <div className="Login-page">
      <header>
        <div className="Login-page__logo">
          <img src={logo} alt="kind logo" />
          <h1>Join the chat with one of the accounts below, be kind!</h1>
        </div>
      </header>
      <main>
        <Link
          className="card card--first"
          to={'/chat/conversations/cjtjfsfpl0svk0195v3d10iw8'}
          onClick={() => setUserLogged('cjtjfgpq90riq0104flsd68n8')}
        >
          <Avatar image={morty} />
          <p>Morty</p>
          <button>Join chat</button>
        </Link>
        <Link
          className="card"
          to={'/chat/conversations/cjtjfsfpl0svk0195v3d10iw8'}
          onClick={() => setUserLogged('cjtjf7f8g0q790141ugksvlw3')}
        >
          <Avatar image={rick} />
          <p>Rick</p>
          <button>Join chat</button>
        </Link>
      </main>
      <footer>
        <img src={pixelscamp} alt="pixel camps" />
      </footer>
    </div>
    <div className="Login-page__background" />
  </>
)

const Avatar = ({ children, image }) => (
  <div className="Login-page__avatar">
    <img src={image} alt="avatar" />
  </div>
)

export default Login
