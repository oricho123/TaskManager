import * as React from 'react';
import {ComponentProps} from 'react';
import styles from "./styles.module.css"
import {LoadingDots} from "../loading/dots/LoadingDots";

export interface ThemedButtonProps extends ComponentProps<"button"> {
    isLoading?: boolean | undefined;
}

export const ThemedButton = ({children, isLoading, ...props}: ThemedButtonProps) => {
    return (
        <button disabled={isLoading}
                className={`${styles['themed-button']} ${isLoading ? styles['loading'] : ''}`} {...props}>
            <div className={styles["text"]}>{children}</div>
            <LoadingDots id={styles['loading-dots']}/>
        </button>);
};