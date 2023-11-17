export interface Course {
    teacherName: string;
    classRoomName: string;
    typeName: string;
    statusName: string;
    levelName: string;
    cost: string;
    likeCount: number;
    commandCount: number;
    userIsLiked: boolean;
    userFavorite: number;
    tumbImageAddress: string | null;
    // lastUpdate: string().refine((value) => {
    //   return new Date(value).getTime() > 0;
    // });
    courseId: string;
   }