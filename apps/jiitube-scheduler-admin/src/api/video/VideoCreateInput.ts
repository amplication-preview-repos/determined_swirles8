import { ScheduleCreateNestedManyWithoutVideosInput } from "./ScheduleCreateNestedManyWithoutVideosInput";
import { VideoDetailsCreateNestedManyWithoutVideosInput } from "./VideoDetailsCreateNestedManyWithoutVideosInput";

export type VideoCreateInput = {
  description?: string | null;
  schedules?: ScheduleCreateNestedManyWithoutVideosInput;
  title?: string | null;
  videoDetailsItems?: VideoDetailsCreateNestedManyWithoutVideosInput;
  videoId?: string | null;
};
