import Link from 'next/link';
import { useRouter } from "next/router";

import Logo from './logo';
import classes from './main-navigation.module.css';

function MainNavigation() {
  const router = useRouter();
  const currentRoute = router.pathname

  return (
    <header className={classes.header}>
      <Link href='/'>
        <a>
          <Logo />
        </a>
      </Link>
      <nav>
        <ul>
        

        <li >
            <Link  href='/'>
              <a className={currentRoute  == "/" ? classes.active : ""}>Home</a>
              </Link>
          </li>
          <li >
            <Link  href='/about'>
              <a className={currentRoute  == "/about" ? classes.active : ""}>About</a>
              </Link>
          </li>
          <li>
            <Link href='/goal'>
              <a  className={router.pathname == "/goal" ? classes.active : ""}>Goal</a>
              </Link>
          </li>
          <li>
            <Link href='/services'>
              <a  className={router.pathname == "/services" ? classes.active : ""}>Services</a>
              </Link>
          </li>

          {/* <li>
            <Link href='/offers'>
              <a  className={router.pathname == "/offers" ? classes.active : ""}>Offers</a>
              </Link>
          </li> */}
            <li>
            <Link href='/whatWeDo'>
              <a  className={router.pathname == "/whatWeDo" ? classes.active : ""}>What We Do</a>
              </Link>
          </li>
          <li>
        <Link href='/blog'>
              <a  className={router.pathname == "/blog" ? classes.active : ""}>Blog</a>
              </Link>
          </li>

          <li>
            <Link href='/hireTalents'>
              <a  className={router.pathname == "/hireTalents" ? "active" : "nonActive"}>Hire Talents</a>
              </Link>
          </li>

          <li>
            <Link href='/jobSeekers'>
              <a  className={router.pathname == "/jobSeekers" ? "active" : "nonActive"}>Job Seekers</a>
              </Link>
          </li>

        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
