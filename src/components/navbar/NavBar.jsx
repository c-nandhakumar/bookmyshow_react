import React, { useEffect } from "react";
import styles from "../navbar/navbar.module.css";
import SearchComponent, { BookMyShowSvg , DropDownButton, SignInButton, HamburgerComponent , UseAppButton , SearchIcon, TitleComponent, LocationButton} from "./SearchComponent";
export default function NavBar() {
  useEffect(() => {
    console.log("Mounted");
    return console.log("Unmounted");
  }, []);
  console.log("Rendering NavBar ...");
  return (
    <div className={styles.parent}>
      <div className={styles.navbar}>
        <div className={styles.firstboxdiv}>
        <BookMyShowSvg />
        <SearchComponent />
        <TitleComponent/>
        <LocationButton/>
        </div>
        <div className={styles.secondboxdiv}>
        <DropDownButton/>
        <SignInButton/>
        <HamburgerComponent/>
        <UseAppButton/>
        <SearchIcon/>
        </div>
      </div>
    </div>
  );
}
