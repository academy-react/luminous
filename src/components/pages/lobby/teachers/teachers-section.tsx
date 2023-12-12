import { TitleBox } from "@/components/pages/lobby";
import {
  TeacherFullCard,
  TeacherMiniCard,
} from "@/components/pages/lobby/teachers/teacher-card";

import { teachersTitleBoxDict } from "@/dict/pages/lobby.dict";

import { getAllTeacher } from "@/core/services/api";

import { type Locale } from "#/i18n.config";

export const TeachersSection = async ({ lang }: { lang: Locale }) => {
  const teacherData = await getAllTeacher();

  const shownTeacher = teacherData[0];

  return (
    <section className="container flex w-full flex-col items-center gap-10">
      <TitleBox
        lang={lang}
        title={teachersTitleBoxDict.title}
        desc={teachersTitleBoxDict.subtitle}
      />
      {shownTeacher && <TeacherFullCard lang={lang} data={shownTeacher} />}
      <div className="grid gap-4 md:grid-flow-col md:grid-cols-1">
        {teacherData.slice(1, 5).map((teacher, index) => (
          <TeacherMiniCard key={index} lang={lang} data={teacher} />
        ))}
      </div>
    </section>
  );
};
