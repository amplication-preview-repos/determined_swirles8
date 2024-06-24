import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { ExcelFileResolverBase } from "./base/excelFile.resolver.base";
import { ExcelFile } from "./base/ExcelFile";
import { ExcelFileService } from "./excelFile.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ExcelFile)
export class ExcelFileResolver extends ExcelFileResolverBase {
  constructor(
    protected readonly service: ExcelFileService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
