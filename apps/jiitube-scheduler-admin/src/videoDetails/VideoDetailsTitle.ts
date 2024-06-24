import { VideoDetails as TVideoDetails } from "../api/videoDetails/VideoDetails";

export const VIDEODETAILS_TITLE_FIELD = "language";

export const VideoDetailsTitle = (record: TVideoDetails): string => {
  return record.language?.toString() || String(record.id);
};
