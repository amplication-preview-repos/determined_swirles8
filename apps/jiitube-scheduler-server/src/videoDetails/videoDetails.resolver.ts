import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { VideoDetailsResolverBase } from "./base/videoDetails.resolver.base";
import { VideoDetails } from "./base/VideoDetails";
import { VideoDetailsService } from "./videoDetails.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => VideoDetails)
export class VideoDetailsResolver extends VideoDetailsResolverBase {
  constructor(
    protected readonly service: VideoDetailsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
