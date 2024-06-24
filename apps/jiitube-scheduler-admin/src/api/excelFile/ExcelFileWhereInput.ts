import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type ExcelFileWhereInput = {
  filePath?: StringNullableFilter;
  id?: StringFilter;
  uploadedAt?: DateTimeNullableFilter;
};
