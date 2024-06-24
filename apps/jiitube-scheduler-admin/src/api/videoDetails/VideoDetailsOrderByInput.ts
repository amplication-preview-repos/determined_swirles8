import { SortOrder } from "../../util/SortOrder";

export type VideoDetailsOrderByInput = {
  createdAt?: SortOrder;
  duration?: SortOrder;
  id?: SortOrder;
  language?: SortOrder;
  tags?: SortOrder;
  updatedAt?: SortOrder;
  videoId?: SortOrder;
};
