// @flow
import React from 'react';
import styles from "./styles.module.css"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {IconDefinition} from '@fortawesome/free-solid-svg-icons'

type SideBarItemProps = {
    icon: IconDefinition;
    label: string;
    isActive?: boolean;
    isOpen?: boolean;
}

export function SideBarItem({label, icon, isActive = false, isOpen = true}: SideBarItemProps) {
    const buttonClasses = `${styles['item-wrapper']} ${isActive ? styles['active'] : ''}`
    const labelClasses = `${styles['item-label']} ${isOpen ? styles['open'] : ''}`
    return (
        <button className={buttonClasses}>
            <FontAwesomeIcon icon={icon}/>
            <div className={labelClasses}>{label}</div>
        </button>
    );
}
