import React from "react";
import Image from "next/image";
import Link from "next/link";

import { BsSearch } from "react-icons/bs";

import { menuOptions } from "@/dict/lobby/header.dict";

import type { Locale } from "#/i18n.config";

import LoginBtn from "./login-btn";

const Navbar = ({ lang }: { lang: Locale }) => {
  return (
    <>
      <nav className=" mx-auto flex  h-[80px] w-11/12  items-center justify-center border-gray-200 bg-transparent dark:bg-gray-900 ">
        <div className="flex basis-1/2 justify-start">
          <div className=" flex items-center justify-between">
            <Image src="/images/logo.svg" width={20} height={20} alt="p" />
          </div>

          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="mt-4 flex flex-col rounded-lg  bg-transparent p-4 font-medium dark:border-gray-700 dark:bg-gray-800 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-transparent md:p-0 md:dark:bg-gray-900">
              {menuOptions.map((item) => {
                console.log("title : " + item.title[lang]);
                console.log("href : " + item.href);
                return (
                  <li key={item.id}>
                    <Link
                      href={item.href}
                      className=" block py-2 pl-3  pr-4 text-xl font-bold text-purple-text dark:text-white-primary md:bg-transparent md:p-0  md:dark:text-purple-text"
                      aria-current="page"
                    >
                      {"خانه"}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        {/* login register button and hambergery menu */}
        <div className="flex basis-1/2 justify-end">
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
          <div className=" hidden items-center justify-start gap-2 justify-self-end  md:flex">
            <div className="bg-purple-btn rounded-xl px-2 py-2 text-purple-text transition hover:bg-white-primary">
              <BsSearch />
            </div>
            <LoginBtn />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
