import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ExcelFileServiceBase } from "./base/excelFile.service.base";

@Injectable()
export class ExcelFileService extends ExcelFileServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
