// @flow
import React, {useState} from 'react';
import styles from "./styles.module.css"
import {SideBarItem} from "./SideBarItem/SideBarItem";
import {faAngleRight, faComment} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export function SideBar() {
    const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true)
    const toggleSideBarLabels = () => {
        setIsSidebarOpen((prevValue) => !prevValue)
    }

    const sideBarToggleButtonClasses = `${styles['sidebar-toggle']} ${isSidebarOpen ? styles['toggled'] : ''}`
    return (
        <div className={styles['sidebar-wrapper']}>
            <button onClick={toggleSideBarLabels} className={sideBarToggleButtonClasses}>
                <FontAwesomeIcon icon={faAngleRight}/>
            </button>
            <div id={styles['top-items']}>
                <SideBarItem isOpen={isSidebarOpen} isActive icon={faComment} label={'chat'}/>
                <SideBarItem isOpen={isSidebarOpen} icon={faComment} label={'chat'}/>
                <SideBarItem isOpen={isSidebarOpen} icon={faComment} label={'chat'}/>
            </div>
            <div id={styles['bottom-items']}>
                <SideBarItem isOpen={isSidebarOpen} icon={faComment} label={'chat'}/>
            </div>

        </div>
    );
}

