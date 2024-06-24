import { VideoWhereUniqueInput } from "../video/VideoWhereUniqueInput";

export type VideoDetailsUpdateInput = {
  duration?: number | null;
  language?: string | null;
  tags?: string | null;
  video?: VideoWhereUniqueInput | null;
};
