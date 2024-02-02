import * as React from 'react'
import { ComponentProps } from 'react'
import styles from './styles.module.css'

export interface ThemedTextInputProps extends ComponentProps<'input'> {
  id: string
  placeholder: string
  fullWidth?: boolean | undefined
}

export const ThemedTextInput = ({ id, placeholder, fullWidth, ...props }: ThemedTextInputProps) => {
  const groupClasses = `${styles['input-group']} ${fullWidth ? styles['full-width'] : null}`

  const addErrorClasses = (event: React.FormEvent<HTMLInputElement>) => {
    event.preventDefault()
    event.currentTarget.classList.add(styles['error'], styles['error-animate'])
  }
  const removeError = (event: React.FormEvent<HTMLInputElement>) => {
    event.currentTarget.classList.remove(styles['error'])
  }
  const removeAnimation = (event: React.AnimationEvent<HTMLDivElement>) => {
    event.currentTarget.classList.remove(styles['error-animate'])
  }

  return (
    <div
      className={groupClasses}
      onAnimationEnd={removeAnimation}
      onInput={removeError}
      onInvalid={addErrorClasses}
    >
      <input
        type='input'
        id={id}
        className={styles['field']}
        placeholder={placeholder}
        {...props}
      />
      <label htmlFor={id} className={styles['label']}>
        {placeholder}
      </label>
    </div>
  )
}
