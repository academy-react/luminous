import { type Locale } from "#/i18n.config";

export interface HeroDictProps {
  title: {
    [key in Locale]: string;
  };
  description: {
    [key in Locale]: string;
  };
  button: {
    [key in Locale]: string;
  };
}

export const heroDict: HeroDictProps = {
  title: {
    fa: "پژوهشگاه سپهر",
    en: "Sepehr Institute",
  },
  description: {
    fa: "پژوهشگاه سپهر با هدف تولید و انتشار محتوای با کیفیت آموزشی و همچنین آشنایی جامعه با فضای کسب‌و‌کار در فضای مجازی ایجاد شده و امید داریم بتوانیم با راه‌کار‌های نوین و استفاده از پتانسیل فضای مجازی ایجاد فرصت کنیم برای افرادی که خواهان پیشرفت خود و کشورشان هستند",
    en: "Sepehr Institute was established with the aim of producing and publishing quality educational content as well as introducing the community to the business opportunities in the virtual space, and we hope that through innovative solutions and use of the potential of the virtual space, we can create opportunities for people who want to advance themselves and their country",
  },
  button: {
    fa: "شروع یادگیری",
    en: "Start Learning",
  },
};
