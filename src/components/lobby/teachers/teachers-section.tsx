"use client";

import { useState } from "react";

import { teachersTitleBox } from "@/dict/lobby/lobby-title-box.dict";
import { teachersDict } from "@/dict/lobby/teachers.dict";

import {TitleBox} from "@/components/lobby/title-box";

import { type Locale } from "#/i18n.config";

import { TeacherFullCard, TeacherMiniCard } from "./teacher-card";

export const TeachersSection = ({ lang }: { lang: Locale }) => {
  const [shownTeacher, setShownTeacher] = useState(teachersDict[0]);

  const restTeachers = teachersDict.filter(
    (teacher) => teacher.fullName[lang] !== shownTeacher?.fullName[lang]
  );

  return (
    <section className="container flex w-full flex-col items-center gap-10">
      <TitleBox
        lang={lang}
        title={teachersTitleBox.title}
        desc={teachersTitleBox.subtitle}
      />
      {shownTeacher && (
        <TeacherFullCard
          lang={lang}
          image={shownTeacher.image}
          fullName={shownTeacher.fullName}
          position={shownTeacher.position}
          description={shownTeacher.description}
          onClick={() => setShownTeacher(shownTeacher)}
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
            onClick={() => setShownTeacher(teacher)}
          />
        ))}
      </div>
    </section>
  );
};
