import { ExcelFileWhereInput } from "./ExcelFileWhereInput";
import { ExcelFileOrderByInput } from "./ExcelFileOrderByInput";

export type ExcelFileFindManyArgs = {
  where?: ExcelFileWhereInput;
  orderBy?: Array<ExcelFileOrderByInput>;
  skip?: number;
  take?: number;
};
