import * as React from 'react'
import { ComponentProps } from 'react'
import styles from './styles.module.css'

export interface ThemedTextInputProps extends ComponentProps<'input'> {
  id: string
  label: string
  fullWidth?: boolean | undefined
}

export const ThemedCheckBox = ({ id, label, ...props }: ThemedTextInputProps) => {
  return (
    <div className={styles['checkbox-wrapper']}>
      <input className={styles['checkbox']} id={id} type='checkbox' {...props} />
      <label className={styles['label']} htmlFor={id}>
        <span>
          <svg width='12px' height='10px' viewBox='0 0 12 10'>
            <polyline points='1.5 6 4.5 9 10.5 1'></polyline>
          </svg>
        </span>
        <span>{label}</span>
      </label>
    </div>
  )
}
