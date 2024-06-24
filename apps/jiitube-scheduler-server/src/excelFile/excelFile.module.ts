import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ExcelFileModuleBase } from "./base/excelFile.module.base";
import { ExcelFileService } from "./excelFile.service";
import { ExcelFileController } from "./excelFile.controller";
import { ExcelFileResolver } from "./excelFile.resolver";

@Module({
  imports: [ExcelFileModuleBase, forwardRef(() => AuthModule)],
  controllers: [ExcelFileController],
  providers: [ExcelFileService, ExcelFileResolver],
  exports: [ExcelFileService],
})
export class ExcelFileModule {}
