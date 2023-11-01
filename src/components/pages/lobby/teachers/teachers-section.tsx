"use client";

import { useState } from "react";

import { TitleBox } from "@/components/pages/lobby";
import {
  TeacherFullCard,
  TeacherMiniCard,
} from "@/components/pages/lobby/teachers/teacher-card";

import { teachersDict } from "@/dict/dev";
import { teachersTitleBoxDict } from "@/dict/pages/lobby.dict";

import { type Locale } from "#/i18n.config";

export const TeachersSection = ({ lang }: { lang: Locale }) => {
  const [shownTeacher, setShownTeacher] = useState(teachersDict[0]);

  const restTeachers = teachersDict.filter(
    (teacher) => teacher.fullName[lang] !== shownTeacher?.fullName[lang]
  );

  return (
    <section className="container flex w-full flex-col items-center gap-10">
      <TitleBox
        lang={lang}
        title={teachersTitleBoxDict.title}
        desc={teachersTitleBoxDict.subtitle}
      />
      {shownTeacher && (
        <TeacherFullCard
          lang={lang}
          image={shownTeacher.image}
          fullName={shownTeacher.fullName}
          position={shownTeacher.position}
          description={shownTeacher.description}
        />
      )}
      <div className="grid gap-4 md:grid-flow-col md:grid-cols-1">
        {restTeachers.map((teacher) => (
          <TeacherMiniCard
            key={teacher.fullName[lang]}
            lang={lang}
            image={teacher.image}
            fullName={teacher.fullName}
            position={teacher.position}
            description={teacher.description}
          />
        ))}
      </div>
    </section>
  );
};