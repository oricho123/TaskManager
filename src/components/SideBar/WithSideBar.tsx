// @flow
import React from 'react'
import styles from './styles.module.css'
import { SideBar } from './SideBar'

export function WithSideBar({ children, style }: React.ComponentProps<'div'>) {
  return (
    <div style={style} className={styles['page-wrapper']}>
      <SideBar />
      {children}
    </div>
  )
}
