import {type Locale } from "#/i18n.config";
import { cn } from "@/lib/utils";
import { Tabs, TabsContent} from "../ui/tabs"
type TabContentProps={
  value:{[key in Locale]: string;}
  title:{[key in Locale]: string}
  className:string;
  lang: Locale;
}
export const TabContent =({lang, value, title, className}:TabContentProps)=>{
  return(
      <Tabs>     
      <TabsContent
        value={value[lang]}
        className={cn("",className)}
      >
        {title[lang]}
      </TabsContent>
      </Tabs>
  )
} 