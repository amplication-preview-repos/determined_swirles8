import { ScheduleUpdateManyWithoutVideosInput } from "./ScheduleUpdateManyWithoutVideosInput";
import { VideoDetailsUpdateManyWithoutVideosInput } from "./VideoDetailsUpdateManyWithoutVideosInput";

export type VideoUpdateInput = {
  description?: string | null;
  schedules?: ScheduleUpdateManyWithoutVideosInput;
  title?: string | null;
  videoDetailsItems?: VideoDetailsUpdateManyWithoutVideosInput;
  videoId?: string | null;
};
