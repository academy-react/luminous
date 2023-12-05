"use client";

import { useState } from "react";

import { TitleBox } from "@/components/pages/lobby";
import {
  TeacherFullCard,
  TeacherMiniCard,
} from "@/components/pages/lobby/teachers/teacher-card";

import { teachersTitleBoxDict } from "@/dict/pages/lobby.dict";

import { type TeacherListType } from "@/core/validators/api";

import { type Locale } from "#/i18n.config";

export const TeachersSection = ({
  lang,
  data,
}: {
  lang: Locale;
  data: TeacherListType;
}) => {
  const [shownTeacher, setShownTeacher] = useState(data[0]);
  const restTeachers = data.filter(
    (teacher) => teacher.fullName !== shownTeacher?.fullName
  );

  return (
    <section className="container flex w-full flex-col items-center gap-10">
      <TitleBox
        lang={lang}
        title={teachersTitleBoxDict.title}
        desc={teachersTitleBoxDict.subtitle}
      />
      {shownTeacher && <TeacherFullCard lang={lang} data={shownTeacher} />}
      <div className="grid gap-4 md:grid-flow-col md:grid-cols-1">
        {restTeachers.slice(1, 5).map((teacher, index) => (
          <TeacherMiniCard key={index} lang={lang} data={teacher} />
        ))}
      </div>
    </section>
  );
};
