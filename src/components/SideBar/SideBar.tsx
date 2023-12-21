// @flow
import React from 'react';
import styles from "./styles.module.css"
import {SideBarItem} from "./SideBarItem/SideBarItem";
import {faComment} from '@fortawesome/free-solid-svg-icons'


export function SideBar() {
    return (
        <div className={styles['sidebar-wrapper']}>
            <div id={styles['top-items']}>
                <SideBarItem icon={faComment} label={'chat'}/>
                <SideBarItem icon={faComment} label={'chat'}/>
                <SideBarItem icon={faComment} label={'chat'}/>
            </div>
            <div id={styles['bottom-items']}>
                <SideBarItem icon={faComment} label={'chat'}/>
            </div>

        </div>
    );
}

