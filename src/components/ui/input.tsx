import * as React from "react";

import { Eye, EyeOff, type LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";

import { type Locale } from "#/i18n.config";

import { FormLabel, useFormField } from "./form";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          // "border-input placeholder:text-muted-foreground focus-visible:ring-ring flex h-9 w-full rounded-md border bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-1 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export interface AnimatedInputProps extends InputProps {
  lang: Locale;
  Icon: LucideIcon;
  label: string;
}

const AnimatedInput = React.forwardRef<HTMLInputElement, AnimatedInputProps>(
  ({ lang, Icon, label, ...props }, ref) => {
    const { error } = useFormField();
    const [isFocused, setIsFocus] = React.useState(false);

    return (
      <div className="h-10">
        <div className="group relative h-full w-full min-w-[200px]">
          <div
            className={cn(
              "absolute top-[42%] grid h-5 w-5 -translate-y-2/4 place-items-center",
              lang === "en" ? "right-3" : "left-3",
              isFocused
                ? error
                  ? "text-red-500"
                  : "text-blue-500"
                : "text-gray-500"
            )}
          >
            <Icon aria-hidden="true" />
          </div>
          <Input
            placeholder=" "
            className={cn(
              "peer h-full w-full rounded-[7px] border border-gray-200 border-t-transparent bg-transparent px-3 py-2.5 !pr-9 font-sans text-sm font-normal text-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-gray-200 disabled:border-0 disabled:bg-gray-50",
              error
                ? "focus:border-2 focus:border-red-500 focus:border-t-transparent focus:outline-0"
                : "focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0"
            )}
            {...props}
            ref={ref}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
          />
          <FormLabel
            className={cn(
              "pointer-events-none absolute -top-1.5 left-0 flex h-full w-full select-none text-[11px] font-normal leading-tight text-gray-400 transition-all before:pointer-events-none before:me-1 before:mt-[6.5px] before:box-border before:block before:h-1.5 before:w-2.5 before:border-s before:border-t before:border-gray-200 before:transition-all after:pointer-events-none after:ms-1 after:mt-[6.5px] after:box-border after:block after:h-1.5 after:w-2.5 after:grow after:border-e after:border-t after:border-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight  peer-focus:before:border-s-2 peer-focus:before:border-t-2 peer-focus:after:border-e-2 peer-focus:after:border-t-2 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-gray-500",
              lang === "en"
                ? "before:rounded-tl-md after:rounded-tr-md"
                : "before:rounded-tr-md after:rounded-tl-md",
              error
                ? "peer-focus:text-red-500 peer-focus:before:border-red-500  peer-focus:after:border-red-500"
                : "peer-focus:text-blue-500 peer-focus:before:border-blue-500  peer-focus:after:border-blue-500"
            )}
          >
            {label}
          </FormLabel>
        </div>
      </div>
    );
  }
);
AnimatedInput.displayName = "AnimatedInput";

const AnimatedPasswordInput = React.forwardRef<
  HTMLInputElement,
  AnimatedInputProps
>(({ lang, label, ...props }, ref) => {
  const { error } = useFormField();
  const [isFocused, setIsFocus] = React.useState(false);
  const [showPassword, setShowPassword] = React.useState(false);

  return (
    <div className="h-10">
      <div className="group relative h-full w-full min-w-[200px]">
        <div
          className={cn(
            "absolute top-[42%] grid h-5 w-5 -translate-y-2/4 place-items-center",
            lang === "en" ? "right-3" : "left-3",
            isFocused
              ? error
                ? "text-red-500"
                : "text-blue-500"
              : "text-gray-500"
          )}
          onClick={() => setShowPassword((prev) => !prev)}
        >
          {showPassword ? (
            <EyeOff aria-hidden="true" />
          ) : (
            <Eye aria-hidden="true" />
          )}
          <span className="sr-only">
            {showPassword ? "Hide password" : "Show password"}
          </span>
        </div>
        <Input
          placeholder=" "
          type={showPassword ? "text" : "password"}
          className={cn(
            "peer h-full w-full rounded-[7px] border border-gray-200 border-t-transparent bg-transparent px-3 py-2.5 !ps-9 font-sans text-sm font-normal text-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-gray-200 disabled:border-0 disabled:bg-gray-50",
            error
              ? "focus:border-2 focus:border-red-500 focus:border-t-transparent focus:outline-0"
              : "focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0"
          )}
          {...props}
          ref={ref}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
        />
        <FormLabel
          className={cn(
            "pointer-events-none absolute -top-1.5 left-0 flex h-full w-full select-none text-[11px] font-normal leading-tight text-gray-400 transition-all before:pointer-events-none before:me-1 before:mt-[6.5px] before:box-border before:block before:h-1.5 before:w-2.5 before:border-s before:border-t before:border-gray-200 before:transition-all after:pointer-events-none after:ms-1 after:mt-[6.5px] after:box-border after:block after:h-1.5 after:w-2.5 after:grow after:border-e after:border-t after:border-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight  peer-focus:before:border-s-2 peer-focus:before:border-t-2 peer-focus:after:border-e-2 peer-focus:after:border-t-2 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-gray-500",
            lang === "en"
              ? "before:rounded-tl-md after:rounded-tr-md"
              : "before:rounded-tr-md after:rounded-tl-md",
            error
              ? "peer-focus:text-red-500 peer-focus:before:border-red-500  peer-focus:after:border-red-500"
              : "peer-focus:text-blue-500 peer-focus:before:border-blue-500  peer-focus:after:border-blue-500"
          )}
        >
          {label}
        </FormLabel>
      </div>
    </div>
  );
});
AnimatedPasswordInput.displayName = "AnimatedPasswordInput";

export { Input, AnimatedInput, AnimatedPasswordInput };
