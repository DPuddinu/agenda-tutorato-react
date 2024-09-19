import { InputComponent } from '@/components/input-component/input-component';
import { Link } from 'react-router-dom';
import placeholder from '../../assets/placeholder.svg';
import Button from '../../components/button/button.tsx';
import styles from './landing.module.css';

export const LandingPageComponent = () => {
  return (
    <div className="flex flex-col min-h">
      <header className="h-14 flex items-center px-6">
        <nav className={`flex text-sm grow justify-between ${styles.nav}`}>
          <Link to="/home" className="flex items-center justify-center">
            <CalendarIcon />
          </Link>
          <div className="flex justify-end grow gap-6 items-center">
            <a href="#features" className="text-sm font-medium">
              Features
            </a>
            <a href="#about_us" className="text-sm font-medium">
              About
            </a>
            <a href="#contact" className="text-sm font-medium">
              Contact
            </a>
          </div>
        </nav>
      </header>
      <main>
        <section className={`w-full py-48 ${styles.mainSection}`} id="main-section">
          <div className={styles.container}>
            <div className={`flex ${styles.mainDiv}`} id="main-div">
              <div className="flex flex-col justify-center">
                <div className="flex flex-col">
                  <h1 className="text-title font-bold">Agenda</h1>
                  <p className={`text-muted-foreground py-4 ${styles.p}`}>
                    Manage your appointments with ease using our powerful appointment management system.
                  </p>
                </div>
                <div className="gap-3 flex flex-row py-3">
                  <Link
                    to="/register"
                    className={`inline-flex h-10 items-center justify-center ${styles.primary} rounded px-8 ${styles.linkBtn}`}>
                    Sign Up
                  </Link>
                  <Link
                    to="/login"
                    className={`inline-flex h-10 items-center justify-center ${styles.borderPrimary} rounded px-8 ${styles.linkBtn}`}>
                    Sign In
                  </Link>
                </div>
              </div>
              <div>
                <img src={placeholder} width="550" height="310" alt="Hero" />
              </div>
            </div>
          </div>
        </section>
        <section className={`flex flex-row py-48 muted ${styles.secondSection}`} id="second-section">
          <div id="features" className="container px-4 px-6">
            <div className="flex flex-col items-center justify-center">
              <div className="flex flex-col text-center justify-center">
                <div className="flex muted px-3 py-2 text-sm justify-center items-align">Key Features</div>
                <h2 className={`text-title font-bold ${styles.h2}`}>Manage Your Appointments with Ease</h2>
                <p className={`text-muted-foreground ${styles.p}`}>
                  Our appointment management system provides a range of features to help you streamline your scheduling
                  and communication with clients.
                </p>
              </div>
            </div>
            <div className={`flex items-center gap-6 py-12 ${styles.secondDiv}`} id="second-div">
              <div className="flex flex-col justify-center">
                <ul className="list-none line-height-28">
                  <li>
                    <div className="gap-1">
                      <h3 className={`font-bold ${styles.h3}`}>Calendar View</h3>
                      <p className={`text-muted-foreground ${styles.p}`}>
                        Easily view and manage your appointments in a user-friendly calendar interface.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="gap-1">
                      <h3 className={`font-bold ${styles.h3}`}>Automated Reminders</h3>
                      <p className={`text-muted-foreground ${styles.p}`}>
                        Set up automated reminders to ensure your clients never miss an appointment.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="gap-1">
                      <h3 className={`font-bold ${styles.h3}`}>Reporting</h3>
                      <p className={`text-muted-foreground ${styles.p}`}>
                        Generate detailed reports to track your appointment history and client engagement.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <img src={placeholder} width="550" height="310" alt="Calendar" />
            </div>
          </div>
        </section>
        <section className="w-full py-8" id="about_us">
          <div className={`container gap-6 justify-center items-center ${styles.container}`}>
            <div className="flex flex-col justify-center items-center">
              <h2 className={`flex flex-col text-title font-bold py-5 items-center ${styles.h2}`}>About us!</h2>
              <p className={`text-muted-foreground ${styles.p}`}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et asperiores voluptatem modi excepturi, rerum
                sed, reiciendis, optio dolorem cupiditate aliquid laudantium enim eligendi repellendus nulla incidunt
                iusto? Amet, voluptatem natus.
              </p>
            </div>
            <div className="flex justify-center py-6 gap-2">
              <Link
                to="#"
                className={`inline-flex h-10 items-center justify-center ${styles.borderPrimary} rounded px-8 ${styles.linkBtn}`}>
                Learn More
              </Link>
            </div>
          </div>
        </section>
        <section className="w-full py-8 border-t" id="contact">
          <div className={`container flex flex-col items-center justify-center gap-4 text-center ${styles.container}`}>
            <div className="flex flex-col items-center">
              <h2 className={`text-title font-bold py-3 ${styles.h2}`}>Ready to Simplify Your Appointments?</h2>
              <p className={`text-muted-foreground py-4 ${styles.p}`}>
                Sign up for our appointment management system and start managing your appointments with ease.
              </p>
            </div>
            <div className="flex flex-col items-center w-full">
              <form className="gap-4">
                <InputComponent variant="primary" type="email" placeholder="Enter your email" />
                <Button
                  variant="primary"
                  className={`inline-flex h-10 items-center justify-center rounded px-8 ${styles.primary} ${styles.linkBtn}`}
                  type="submit">
                  Sign Up
                </Button>
              </form>
              <p className={`text-xs text-muted-foreground ${styles.p}`}>
                Sign up to get started.{' '}
                <Link to="#" className="underline">
                  Terms &amp; Conditions
                </Link>
              </p>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex gap-2 py-6 items-center px-6">
        <p className={`text-sm text-muted-foreground ${styles.p}`}>&copy; 2024 Your Company. All rights reserved.</p>
        <nav className={`flex gap-4 text-sm ${styles.nav}`}>
          <Link to="#" className="">
            Privacy Policy
          </Link>
          <Link to="#" className="">
            Terms of Service
          </Link>
        </nav>
      </footer>
    </div>
  );
};

const CalendarIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    className="size-9">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
    />
  </svg>
);
