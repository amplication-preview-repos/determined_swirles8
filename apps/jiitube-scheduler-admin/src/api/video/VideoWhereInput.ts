import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ScheduleListRelationFilter } from "../schedule/ScheduleListRelationFilter";
import { VideoDetailsListRelationFilter } from "../videoDetails/VideoDetailsListRelationFilter";

export type VideoWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  schedules?: ScheduleListRelationFilter;
  title?: StringNullableFilter;
  videoDetailsItems?: VideoDetailsListRelationFilter;
  videoId?: StringNullableFilter;
};
