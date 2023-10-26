import {type Locale } from "#/i18n.config";

export interface CourseCategoryProps{
    title:{[key in Locale]:string;}
    id:number;
  }
  export const CourseCategory:CourseCategoryProps[]=[
    {
      id:1,
      title:{
        fa:"فرانت اند",
        en:"front end",
      }
    },
    {
      id:2,
      title:{
        fa:"بک اند",
        en:"back end",
      }
    },
    {
      id:3,
      title:{
        fa:"هوش مصنوعی",
        en:"Artificial intelligence",
      }
    },
    {
      id:4,
      title:{
        fa:"دیتابیس",
        en:"database",
      }
    },
    {
      id:5,
      title:{
        fa:"امنیت",
        en:"security",
      }
    }, 
     {
      id:6,
      title:{
        fa:"تولید محتوا",
        en:"Content production",
      }
    },
  ]