// @flow
import React from 'react';
import styles from "./styles.module.css"
import {SideBarItem} from "./SideBarItem/SideBarItem";
import {faComment} from '@fortawesome/free-solid-svg-icons'


export function SideBar() {
    return (
        <div className={styles['sidebar-wrapper']}>
            <SideBarItem icon={faComment} label={'chat'}/>
        </div>
    );
}

