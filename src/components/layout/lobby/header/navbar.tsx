import React from "react";
import Image from "next/image";
import Link from "next/link";

import { BsSearch } from "react-icons/bs";

import { menuOptions } from "@/dict/lobby/header.dict";

import LoginBtn from "./login-btn";

const Navbar = () => {
  return (
    <>
      <nav className="z-10 flex  h-[80px] items-center  justify-between border-gray-200 bg-transparent dark:bg-gray-900 ">
        <div className="flex max-w-screen-xl flex-wrap items-center justify-start p-4 ">
          <div className="ml-4 flex items-center  ">
            <Image
              src="/favicon_io/favicon.ico"
              width={20}
              height="20"
              alt="p"
            />
            <div className="flex self-start whitespace-nowrap text-2xl font-semibold dark:text-white-primary">
              آکادمی بحر
            </div>
          </div>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="h-5 w-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 font-medium dark:border-gray-700 dark:bg-gray-800 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white-primary md:p-0 md:dark:bg-gray-900">
              {menuOptions.map((item) => {
                return (
                  <li key={item.id}>
                    <Link
                      href={item.href}
                      className="block rounded bg-blue-700 py-2 pl-3 pr-4 text-white-primary dark:text-white-primary md:bg-transparent md:p-0 md:text-blue-700 md:dark:text-blue-500"
                      aria-current="page"
                      // title={lang === "en" ? item.title.en : item.title.fa}
                    />
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* login register button */}
        <div className="flex min-h-screen items-center justify-end  justify-self-end">
          <BsSearch />

          <LoginBtn />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
