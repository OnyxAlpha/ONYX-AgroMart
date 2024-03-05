import React from 'react'
import styles from './index.module.css'

export const UserDetails = () => {
  return (
    <>
        <section>
            <div className={styles.profileSection}>
                <div>
                   <input type="file"/>
                </div>
                <div>
                    <h2>Name: Full Name</h2>
                    <h4>Email</h4>
                </div>
            </div>
        </section>
    </>
  )
}
