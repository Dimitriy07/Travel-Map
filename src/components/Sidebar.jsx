import { Outlet } from "react-router-dom";
import AppNav from "./AppNav";
import Logo from "./Logo";
import styles from "./Sidebar.module.css";

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />
      {/* Outlet is prebuilt component as {children} for props which is looking for and nested routs inside parent route and match it with url */}
      <Outlet />

      <footer className={styles.footer}>
        <p className={styles.copyright}>
          &copy; Copyright {new Date().getFullYear()} by MTL
        </p>
      </footer>
    </div>
  );
}

export default Sidebar;
