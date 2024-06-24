import { ExcelFile as TExcelFile } from "../api/excelFile/ExcelFile";

export const EXCELFILE_TITLE_FIELD = "filePath";

export const ExcelFileTitle = (record: TExcelFile): string => {
  return record.filePath?.toString() || String(record.id);
};
