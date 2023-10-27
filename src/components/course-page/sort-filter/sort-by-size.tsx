"use client"


import { cn } from "@/lib/utils";

import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Icons } from "@/components/utils/icons";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { courses } from "@/dict/lobby/courses.dict";
import { CourseMidCard } from "../course-mid-card";
import {type Locale } from "#/i18n.config";
import { CourseFullCard } from "../course-full-card";

export const SortBySize = ({lang}:{lang:Locale}) => {
  return (
    <Tabs defaultValue="grid">
    <TabsList className="w-full">
     
          <TabsTrigger value="grid"><Icons.layoutGrid/></TabsTrigger>
          <TabsTrigger value="list"><Icons.layoutList/></TabsTrigger>
        
    </TabsList>
    <TabsContent value="grid">
      {courses.map((item)=>{
        return(<CourseMidCard key={item.id} item={item} lang={lang}/>)
      })}
    </TabsContent>
    <TabsContent value="list">
      {courses.map((item)=>{
        return(<CourseFullCard key={item.id} item={item} lang={lang}/>)
      })}
    </TabsContent>
    </Tabs>
  );
};
