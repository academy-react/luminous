export interface SignInFormProps {
  title: {
    fa: string;
    en: string;
  };
  username: {
    fa: string;
    en: string;
  };
  password: {
    fa: string;
    en: string;
  };
  button: {
    fa: string;
    en: string;
  };
  remember: {
    fa: string;
    en: string;
  };
  forgot: {
    fa: string;
    en: string;
  };
  question: {
    fa: string;
    en: string;
  };
  link: {
    fa: string;
    en: string;
  };
}

export const signInForm: SignInFormProps = {
  title: {
    fa: "ورود",
    en: "Sign In",
  },
  username: {
    fa: "نام‌ کاربری",
    en: "Username",
  },
  password: {
    fa: "رمز عبور",
    en: "Password",
  },
  button: {
    fa: "ورود",
    en: "Sign In",
  },
  remember: {
    fa: "مرا به خاطر بسپار",
    en: "Remember me",
  },
  forgot: {
    fa: "رمز عبور خود را فراموش کرده‌اید؟",
    en: "Forgot password?",
  },
  question: {
    fa: "حساب کاربری ندارید؟",
    en: "Don't have an account?",
  },
  link: {
    fa: "ثبت‌نام",
    en: "Sign Up",
  },
};
