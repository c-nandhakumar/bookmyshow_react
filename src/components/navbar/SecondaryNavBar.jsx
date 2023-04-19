import React from "react";
import styles from "../navbar/navbar.module.css"
function SecondaryNavBar(){
   
    return (
    <div className={styles.secondarynavparent}>

    
    <div className = {` ${styles.secondarynavbar}`}>
        <div className={styles.firstboxdiv}>
         <p>Movies</p>
         <p>Stream</p>
         <p>Events</p>
         <p>Plays</p>
         <p>Sports</p>
         <p>Activites</p>
         <p>Buzz</p>
        </div>
        <div className={styles.secondboxdiv}>
        <p>ListYouShow</p>
         <p>Corporates</p>
         <p>Offers</p>
         <p>Gift Cards</p>
        
        </div>
        </div>
    </div>);
}

export default SecondaryNavBar;