import React from 'react'
import { Link } from 'react-router-dom'
import styles from './header.module.css'
// import logo from '../../../public/images/logo.png'

const Header = () => {
    return (
        
            <div className={styles.header}>
                <div className={styles.logo}>
                    <img src={'/images/logo.png'} styles={{ width:'265', height:'137'}} />
                </div>
                <div className={styles.navbar}>
                    <nav>
                        <ul>
                            <li>
                                <Link to='#'>About</Link>
                            </li>
                            <li>
                                <Link to='#'>Portfolio</Link>
                            </li>
                            <li>
                                <Link>Contact</Link>
                            </li>
                            <li>
                                <Link><button>Get Started</button></Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
            
    )
}

export default Header