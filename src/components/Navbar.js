import React, { useState } from 'react'
import logo from '../w-farsi-1.png'

// CSS
import styles from './Navbar.module.css'

const Navbar = () => {
    const [isShown, setIsShown] = useState(false)
  return (
    <>
    <div className={styles.container}>
        <div className={styles.image}>
            <img src={logo} alt="logo" />
        </div>
        <div className={styles.listItems}>
            <ul>
                <li ><a href='#'>صفحه اصلی</a></li>
                <li
                onFocus={() => setIsShown(true)}
                onBlur={() => setIsShown(false)}
                >
                    <a href='#'>خدمات ما</a>
                    
                </li>
                <li><a href='#'>مقالات آموزشی</a></li>
                <li><a href='#'>طراحی سایت</a></li>
                <li><a href='#'>seo</a></li>
                <li><a href='#'>دپارتمان آموزش</a></li>
                <li><a href='#'>تماس با ما</a></li>
            </ul>
        </div>
    </div>
    <div className={isShown? styles.khadamatOn : styles.khadamatOff}>
                        <div>
                            <ul>
                                <li><a href='#'>طراحی سایت</a></li>
                                <li><a href='#'>طراحی سایت</a></li>
                                <li><a href='#'>طراحی سایت</a></li>
                            </ul>
                        </div>
                        <div>
                            <ul>
                                <li><a href='#'>طراحی سایت</a></li>
                                <li><a href='#'>طراحی سایت</a></li>
                                <li><a href='#'>طراحی سایت</a></li>
                            </ul>
                            </div>
                        <div>
                            <ul>
                                <li><a href='#'>طراحی سایت</a></li>
                                <li><a href='#'>طراحی سایت</a></li>
                                <li><a href='#'>طراحی سایت</a></li>
                            </ul>
                            </div>
                    </div>
    </>
  )
}

export default Navbar