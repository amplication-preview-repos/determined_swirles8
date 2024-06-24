import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { VideoDetailsModuleBase } from "./base/videoDetails.module.base";
import { VideoDetailsService } from "./videoDetails.service";
import { VideoDetailsController } from "./videoDetails.controller";
import { VideoDetailsResolver } from "./videoDetails.resolver";

@Module({
  imports: [VideoDetailsModuleBase, forwardRef(() => AuthModule)],
  controllers: [VideoDetailsController],
  providers: [VideoDetailsService, VideoDetailsResolver],
  exports: [VideoDetailsService],
})
export class VideoDetailsModule {}
