import {type Locale } from "#/i18n.config";

export interface CourseCategoryProps{
    title:{[key in Locale]:string;}
    id:string;
  }
  export const CourseCategory:CourseCategoryProps[]=[
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