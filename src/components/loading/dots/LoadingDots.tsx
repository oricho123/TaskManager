import * as React from 'react';
import {ComponentProps} from 'react';
import styles from "./styles.module.css"


export const LoadingDots = ({...props}: ComponentProps<"div">) => {
    return <div className={styles["dot-flashing"]} {...props}/>;
};