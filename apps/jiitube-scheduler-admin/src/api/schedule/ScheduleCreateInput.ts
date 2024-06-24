import { VideoWhereUniqueInput } from "../video/VideoWhereUniqueInput";

export type ScheduleCreateInput = {
  publishDate?: Date | null;
  status?: "Option1" | null;
  video?: VideoWhereUniqueInput | null;
};
