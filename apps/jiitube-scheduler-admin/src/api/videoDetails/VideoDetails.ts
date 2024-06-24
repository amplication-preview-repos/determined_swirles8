import { Video } from "../video/Video";

export type VideoDetails = {
  createdAt: Date;
  duration: number | null;
  id: string;
  language: string | null;
  tags: string | null;
  updatedAt: Date;
  video?: Video | null;
};
