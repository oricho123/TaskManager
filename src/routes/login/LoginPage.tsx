import React, { useContext } from 'react'
import defaultBannerImage from './assets/bg.jpeg'
import styles from './styles.module.css'
import LoginForm from './Components/LoginForm'
import { AuthContext } from '../../context/AuthContext'
import { useNavigate } from 'react-router-dom'

const fakeAuth = (formData: FormData) => {
  console.log(formData.get('password'))
  return new Promise<string>((resolve) => {
    setTimeout(() => resolve('2342f2f1d131rf12'), 250)
  })
}

const LoginPage = () => {
  const { setToken } = useContext(AuthContext)
  const navigate = useNavigate()

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const token = await fakeAuth(formData)

    if (formData.get('remember_me')) setToken(token)
    else setToken(token, 0)
    navigate('/')
  }

  return (
    <div className={styles['login-page']}>
      <aside style={{ backgroundImage: `url(${defaultBannerImage})` }} />
      <main>
        <LoginForm onSubmit={handleLogin} />
      </main>
    </div>
  )
}

export default LoginPage
