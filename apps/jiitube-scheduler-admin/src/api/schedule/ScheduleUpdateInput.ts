import { VideoWhereUniqueInput } from "../video/VideoWhereUniqueInput";

export type ScheduleUpdateInput = {
  publishDate?: Date | null;
  status?: "Option1" | null;
  video?: VideoWhereUniqueInput | null;
};
