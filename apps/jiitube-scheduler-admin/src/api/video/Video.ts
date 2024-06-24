import { Schedule } from "../schedule/Schedule";
import { VideoDetails } from "../videoDetails/VideoDetails";

export type Video = {
  createdAt: Date;
  description: string | null;
  id: string;
  schedules?: Array<Schedule>;
  title: string | null;
  updatedAt: Date;
  videoDetailsItems?: Array<VideoDetails>;
  videoId: string | null;
};
