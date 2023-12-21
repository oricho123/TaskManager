// @flow
import React from 'react';
import styles from "./styles.module.css"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {IconDefinition} from '@fortawesome/free-solid-svg-icons'

type SideBarItemProps = {
    icon: IconDefinition;
    label: string;
}

export function SideBarItem({label, icon}: SideBarItemProps) {
    return (
        <button className={styles['item-wrapper']}>
            <FontAwesomeIcon icon={icon}/>
            <div className={styles['item-label']}>{label}</div>
        </button>
    );
}
