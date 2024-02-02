import React, { FC, FormEventHandler, useState } from 'react'
import { ThemedButton } from '../../../components/buttons/ThemedButton'
import './styles.module.css'
import { ThemedTextInput } from '../../../components/input/text/ThemedTextInput'
import { ThemedCheckBox } from '../../../components/input/checkbox/ThemedCheckBox'

interface LoginProps {
  onSubmit: FormEventHandler<HTMLFormElement>
}

const LoginForm: FC<LoginProps> = (props) => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const handleOnSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    setIsLoading(true)
    await props.onSubmit(event)
    setIsLoading(false)
  }

  return (
    <form onSubmit={handleOnSubmit}>
      <header>
        <h1>Hello</h1>
      </header>
      <ThemedTextInput required fullWidth placeholder='Username' name='username' id='username' />
      <ThemedTextInput required fullWidth placeholder='Password' name='password' id='password' />
      <ThemedCheckBox label='Remember me' id='remember_me' name='remember_me' />
      <ThemedButton isLoading={isLoading} type='submit'>
        Authenticate
      </ThemedButton>
      <section>
        <a href='tempurl'>Can't remember username?</a>
        <a href='tempurl'>New to this site?</a>
      </section>
    </form>
  )
}

export default LoginForm
