import * as React from 'react';
import {ComponentProps} from 'react';
import styles from "./styles.module.css"

export interface ThemedTextInputProps extends ComponentProps<"input"> {
    id: string;
    placeholder: string;
    fullWidth?: boolean | undefined;
}


export const ThemedTextInput = ({id, placeholder, fullWidth, ...props}: ThemedTextInputProps) => {
    const groupClasses = `${styles['input-group']} ${fullWidth ? styles['full-width'] : null}`
    return (
        <div className={groupClasses}>
            <input type="input" id={id} className={styles["field"]} placeholder={placeholder} {...props}/>
            <label htmlFor={id} className={styles["label"]}>{placeholder}</label>
        </div>
    )
};