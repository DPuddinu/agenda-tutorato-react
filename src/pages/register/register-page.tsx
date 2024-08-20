import '@/styles/common.css'

export const RegisterPage = () => (
    <div className="container form-box">
      <form
        id="registerForm"
        className="flex-col gap-5"
      >
        <h2>Register</h2>
        <p className="py-5">Enter your email and password to create your account.</p>
        <div className="flex flex-col items-baseline gap-2">
          <label htmlFor="email"><strong>Email</strong></label>
          <input
            id="email"
            type="email"
            placeholder="example@email.com"
            className="width-auto"
          />
          <span id="errorUser" className="error"></span>
        </div>
        <div className="flex flex-col items-baseline gap-2">
          <label htmlFor="password"><strong>Password</strong></label>
          <input
            id="password"
            type="password"
            className="width-auto"
          />
          <span id="errorPass" className="error"></span>
        </div>
        <div className="flex flex-col items-baseline gap-2">
          <label htmlFor="confirmPassword"><strong>Confirm Password</strong></label>
          <input
            id="confirmPassword"
            type="password"
            className="width-auto"
          />
          <span id="errorConfirmPass" className="error"></span>
        </div>
        <button type="submit">Sign up</button>
        <div className="flex flex-col signin items-center justify-center border-t-1 pt-1">
          <p>Have an account? <a href="/login" className="font-color-link">Login</a>.</p>
        </div>
      </form>
    </div>
  );
