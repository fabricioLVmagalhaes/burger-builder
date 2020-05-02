import React from 'react'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NaviationItems/NavigationItems'
import styles from './SideDrawer.module.css'

const sideDrawer = props => {
  return (
    <div className={styles.SideDrawer}>
      <Logo />
      <nav>
        <NavigationItems />
      </nav>
    </div>
  )
}

export default sideDrawer
