import React from 'react'
import styles from"./Header.module.css"
import icon_logo from "../assets/logo.png";


function Header() {
  return (
    <div className={styles.ContainerHeader}>
        <div className='logotype'>Weather App <img src={icon_logo} alt="few clouds" /></div>

        <h2>Weather app es una herramienta que brinda el estado del clima en tiempo real de cualquier parte del mundo 🌍. Ahorrate el tiempo ingresando tu ciudad aqui 👇🏼</h2>
    </div>
  )
}

export default Header