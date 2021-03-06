import React from 'react'
import Card from '../card/Card'
import styles from './portfolio.module.css'

const Portfolio = () => {

    
    return (
        <div className={styles.portfolio}>
            <div className='container'>
                <div className={styles.portfolio_wrapper}>
                    <div className={styles.portfolio_content}>
                        <h3>Portfolio</h3>
                        <p>___________________________________</p>
                    </div>
                    <div className={styles.portfolio_btn}>
                        <button>a</button><button>b</button>
                    </div>
                </div>
                <div className={styles.portfolio_nav}>
                    <ul>
                        <li>
                            <button> All</button>
                            {/* <button class="tablinks" onclick="openCity(event, 'London')">London</button> */}
                        </li>
                        <li>
                            <button> Logo</button>
                        </li>
                        <li>
                            <button> Webistes</button>
                        </li>
                        <li>
                            <button> Mobile Apps</button>
                        </li>
                    </ul>
                </div>
                <di id='all' className='tabcontent'>
                    <div className={styles.cards}>
                        <Card img='/images/abad.png'/>
                        <Card img='/images/bane.png'/>
                        <Card img='/images/apri.png'/>
                    </div>  
                    <div className={styles.cards}>
                        <Card img='/images/v1.png'/>
                        <Card img='/images/nalie.png'/>
                        <Card img='/images/bane.png'/>
                    </div> 
                </di> 
            </div>
        </div>
    )
}

export default Portfolio
