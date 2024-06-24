import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { VideoDetailsServiceBase } from "./base/videoDetails.service.base";

@Injectable()
export class VideoDetailsService extends VideoDetailsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
