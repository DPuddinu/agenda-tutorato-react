import styles from '@/styles/common.module.css';

export const LoginPage = () => (
    <div className={`${styles['container']} ${styles['form-box']}`}>
        <form id="loginForm" className={`${styles} ${styles['flex-col']} ${styles['gap-5']} `}>
            <h2>Login</h2>
            <p className={`${styles['py-5']}`}>Enter your email and password to access your account.</p>
            <div className={`${styles.flex} ${styles['flex-col']} ${styles['items-baseline']} ${styles['gap-2']} `}>
                <label htmlFor="email" ><strong>Email</strong></label>
                <input min="3" max="10" id="email" type="email" placeholder="example@email.com" className={styles['width-auto']} />
                <span id="errorUser" className={styles.error}></span>
                <label htmlFor="password" className={`${styles.flex} ${styles['gap-2']}`}><strong>Password</strong></label>
                <input min="5" id="password" type="password" className={styles['width-auto']}/>
            </div>
            <span id="errorPass" className={styles.error}></span>
            <button type="submit">Sign in</button>
            <div className={ `${styles.flex  } ${styles['flex-col']}  ${styles['signin']} ${styles['items-center']} ${styles['justify-center']} ${styles['border-t-1']} ${styles['pt-1']} `}>
                <p>Don't have an account? <a href="register.html" className={styles['font-color-link']}>Register</a>.</p>
            </div>
        </form>
    </div>
);
