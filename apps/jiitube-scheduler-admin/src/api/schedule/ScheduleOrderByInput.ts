import { SortOrder } from "../../util/SortOrder";

export type ScheduleOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  publishDate?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
  videoId?: SortOrder;
};
