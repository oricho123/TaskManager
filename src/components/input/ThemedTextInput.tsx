import * as React from 'react';
import {ComponentProps} from 'react';
import styles from "./styles.module.css"

export interface ThemedTextInputProps extends ComponentProps<"input"> {
    id: string,
    placeholder: string
}

export const ThemedTextInput = ({children, id, placeholder, ...props}: ThemedTextInputProps) => {

    return (
        <div className={styles["input-group"]}>
            <input type="input" id={id} className={styles["field"]} placeholder={placeholder} {...props}/>
            <label htmlFor={id} className={styles["label"]}>{placeholder}</label>
        </div>
    )
};