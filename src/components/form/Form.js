import React from 'react'
import styles from './form.module.css'

const Form = () => {
    return (
        <div className={styles.form}>
            <div className='container'>
                
            
            <form className={styles.form_style}>
            <div className={styles.vl}></div>
                <h1> Lets Make Something<br/>Great Together</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt<br/>
                ut labore et t enim ad minim veniam, quis nostrud exercitation.</p>
<ul>
<li>
    <input type="text" name="field1" className={styles.field_style}  placeholder="Name" />
    <input type="email" name="field2" className={styles.field_style} placeholder="Email" />

</li>
<li>
    <input type="text" name="field3" className={styles.field_style} placeholder="Phone" />
    <input type="url" name="field4" className={styles.field_style} placeholder="Budget" />
</li>
{/* <li>
<input type="text" name="field3" class="field-style field-full align-none" placeholder="Subject" />
</li> */}
<li>
<textarea name="field5" class={styles.field_msg} placeholder="Message"></textarea>
</li>
<li>
</li>
</ul>
<input className={styles.form_btn} type="submit" value="Hire Me" />
</form>

            </div>
            
        </div>
    )
}

export default Form;
