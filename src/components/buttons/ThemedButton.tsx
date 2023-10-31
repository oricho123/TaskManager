import * as React from 'react';
import {ComponentProps} from 'react';
import styles from "./styles.module.css"

export const ThemedButton = ({children, ...props}: ComponentProps<"button">) => {
    return <button className={styles['themed-button']} {...props}>{children}</button>;
};