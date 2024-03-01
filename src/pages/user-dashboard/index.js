import React from "react";
import { UserDetails } from "./user-details/user-details";
import { UserItems } from "./user-items/user-items";
import styles from "./userdashboard.module.css"
import Navbar from "../navbar";

export const UserDashboard = () => {
  return (
    <>
    <Navbar />
    <div className={styles.dashboard}>
    <UserDetails />
    <UserItems />
    </div>
    </>
  )
};
