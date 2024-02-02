// @flow
import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'
import { ThemedButton } from '../../components/buttons/ThemedButton'
import { WithSideBar } from '../../components/SideBar/WithSideBar'

interface Props {
}

export function MainPage(props: Props) {
  const { deleteToken } = useContext(AuthContext)
  const logout = () => {
    deleteToken()
  }

  return (
    <WithSideBar>
      <ThemedButton onClick={logout}>Logout</ThemedButton>
    </WithSideBar>
  )
}
