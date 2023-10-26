import {type Locale } from "#/i18n.config";

export interface CourseCategoryProps{
    title:{[key in Locale]:string;}
    id:string;
  }
  export const courseCategory:CourseCategoryProps[]=[
    {
      id:"r1",
      title:{
        fa:"فرانت اند",
        en:"front end",
      }
    },
    {
      id:"r2",
      title:{
        fa:"بک اند",
        en:"back end",
      }
    },
    {
      id:"r3",
      title:{
        fa:"هوش مصنوعی",
        en:"Artificial intelligence",
      }
    },
    {
      id:"r4",
      title:{
        fa:"دیتابیس",
        en:"database",
      }
    },
    {
      id:"r5",
      title:{
        fa:"امنیت",
        en:"security",
      }
    }, 
     {
      id:"r6",
      title:{
        fa:"تولید محتوا",
        en:"Content production",
      }
    },
  ]

  export interface SortTitleProps{
    id:string;
    title:{[key in Locale]:string;}
    value:{[key in Locale]:string;}
  }
  export const sortTitle:SortTitleProps[]=[
    {
      id:"r1",
      title:{
        fa:"همه ی دوره ها",
        en:"all courses",
        },
        value:{
        fa:"همه ی دوره ها",
        en:"All courses",
        },
    },
    {
      id:"r2",
      title:{
        fa:"پر بازدید ترین",
        en:"The most popular",
        },
        value:{
          fa:"پر بازدید ترین",
          en:"The most popular",
          },
    },
    {
      id:"r3",
      title:{
        fa:"جدیدترین",
        en:"The newest",
        },
        value:{
          fa:"جدیدترین",
          en:"The newest",
          },
    }, 
  ]