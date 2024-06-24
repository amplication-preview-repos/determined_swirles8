import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { VideoDetailsService } from "./videoDetails.service";
import { VideoDetailsControllerBase } from "./base/videoDetails.controller.base";

@swagger.ApiTags("videoDetails")
@common.Controller("videoDetails")
export class VideoDetailsController extends VideoDetailsControllerBase {
  constructor(
    protected readonly service: VideoDetailsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
