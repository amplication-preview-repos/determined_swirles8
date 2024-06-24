import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { VideoWhereUniqueInput } from "../video/VideoWhereUniqueInput";

export type VideoDetailsWhereInput = {
  duration?: IntNullableFilter;
  id?: StringFilter;
  language?: StringNullableFilter;
  tags?: StringNullableFilter;
  video?: VideoWhereUniqueInput;
};
