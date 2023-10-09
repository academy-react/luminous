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

export interface FirstSignUpFormProps {
  title: {
    fa: string;
    en: string;
  };
  phone: {
    fa: string;
    en: string;
  };
  button: {
    fa: string;
    en: string;
  };
  link: {
    fa: string;
    en: string;
  };
}

export const firstSignUpForm: FirstSignUpFormProps = {
  title: {
    fa: "ثبت‌نام",
    en: "Sign Up",
  },
  phone: {
    fa: "شماره همراه",
    en: "Phone Number",
  },
  button: {
    fa: "ارسال کد تایید",
    en: "Sending Confirmation Code",
  },
  link: {
    fa: "ورود به حساب کاربری",
    en: "Sign In",
  },
};

export interface SecondSignUpFormProps {
  title: {
    fa: string;
    en: string;
  };
  code: {
    fa: string;
    en: string;
  };
  button: {
    fa: string;
    en: string;
  };
}

export const secondSignUpForm: SecondSignUpFormProps = {
  title: {
    fa: "ثبت‌نام",
    en: "Sign Up",
  },
  code: {
    fa: "کد تایید",
    en: "Confirmation Code",
  },
  button: {
    fa: "تایید",
    en: "Confirm",
  },
};

export interface ThirdSignUpFormProps {
  title: {
    fa: string;
    en: string;
  };
  email: {
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
}

export const thirdSignUpForm: ThirdSignUpFormProps = {
  title: {
    fa: "ثبت‌نام",
    en: "Sign Up",
  },
  email: {
    fa: "ایمیل",
    en: "Email",
  },
  password: {
    fa: "رمز عبور",
    en: "Password",
  },
  button: {
    fa: "ثبت‌نام",
    en: "Sign Up",
  },
};
