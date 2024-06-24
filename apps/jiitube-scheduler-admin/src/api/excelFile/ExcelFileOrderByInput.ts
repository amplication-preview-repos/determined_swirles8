import { SortOrder } from "../../util/SortOrder";

export type ExcelFileOrderByInput = {
  createdAt?: SortOrder;
  filePath?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
  uploadedAt?: SortOrder;
};
