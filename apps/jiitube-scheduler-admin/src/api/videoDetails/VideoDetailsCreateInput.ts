import { VideoWhereUniqueInput } from "../video/VideoWhereUniqueInput";

export type VideoDetailsCreateInput = {
  duration?: number | null;
  language?: string | null;
  tags?: string | null;
  video?: VideoWhereUniqueInput | null;
};
