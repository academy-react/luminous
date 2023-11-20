import Image from "next/image";

import { Button } from "@/components/elements/ui";

import { getCourseCommentReplies } from "@/core/services/api";
import { type CourseCommentType } from "@/core/validators/api";

import { type Locale } from "#/i18n.config";

type CommentProps = {
  lang: Locale;
  comment: CourseCommentType;
};

export const Comment = async ({ lang, comment }: CommentProps) => {
  const replies =
    comment.acceptReplysCount > 0
      ? await getCourseCommentReplies(comment.courseId, comment.id)
      : [];

  return (
    <div className="rounded-2xl bg-gray-100 p-5">
      <div className="flex items-start gap-x-5">
        <UserAvatar
          avatar={"/images/dev/person-avatar.jpg"}
          userType={"student"}
        />
        <div className="w-full">
          <UserInfo name={comment.author} date={comment.insertDate} />
          <CommentText text={comment.describe} />
          {replies.length > 0 && (
            <section className="mt-7 space-y-4">
              {replies.map((reply, index) => (
                <Reply key={index} lang={lang} reply={reply} />
              ))}
            </section>
          )}
        </div>
      </div>
    </div>
  );
};

const Reply = ({
  lang: _lang,
  reply,
}: {
  lang: Locale;
  reply: CourseCommentType;
}) => {
  return (
    <div className="rounded-2xl bg-gray-200 p-5">
      <div className="flex items-start gap-x-5">
        <UserAvatar
          avatar={"/images/dev/person-avatar.jpg"}
          userType={"student"}
        />
        <div className="w-full">
          <UserInfo name={reply.author} date={reply.insertDate} />
          <CommentText text={reply.describe} />
        </div>
      </div>
    </div>
  );
};

const UserAvatar = ({
  avatar,
  userType,
}: {
  avatar: string;
  userType: string;
}) => {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="relative h-16 w-16">
        <Image
          src={avatar}
          fill
          alt="user-avatar"
          className="rounded-full object-cover"
        />
      </div>
      <span className="rounded-md bg-green-500 px-1.5 py-0.5 text-center text-xs text-white">
        {userType}
      </span>
    </div>
  );
};

const UserInfo = ({ name, date }: { name: string; date: string }) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-col gap-1">
        <span className="text-xl font-medium">{name}</span>
        <span className="text-xs">{date}</span>
      </div>
      <Button>reply</Button>
    </div>
  );
};

const CommentText = ({ text }: { text: string }) => {
  return <p className="mt-3.5">{text}</p>;
};
