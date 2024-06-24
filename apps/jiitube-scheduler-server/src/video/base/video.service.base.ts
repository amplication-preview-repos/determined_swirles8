/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  Video as PrismaVideo,
  Schedule as PrismaSchedule,
  VideoDetails as PrismaVideoDetails,
} from "@prisma/client";

import { VideoDto } from "../VideoDto";
import { ExcelFileDto } from "../ExcelFileDto";
import { UpdateVideoDetailsDto } from "../UpdateVideoDetailsDto";
import { UpdateResultDto } from "../UpdateResultDto";
import { UploadExcelFileDto } from "../UploadExcelFileDto";
import { UploadResultDto } from "../UploadResultDto";

export class VideoServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.VideoCountArgs, "select">): Promise<number> {
    return this.prisma.video.count(args);
  }

  async videos(args: Prisma.VideoFindManyArgs): Promise<PrismaVideo[]> {
    return this.prisma.video.findMany(args);
  }
  async video(args: Prisma.VideoFindUniqueArgs): Promise<PrismaVideo | null> {
    return this.prisma.video.findUnique(args);
  }
  async createVideo(args: Prisma.VideoCreateArgs): Promise<PrismaVideo> {
    return this.prisma.video.create(args);
  }
  async updateVideo(args: Prisma.VideoUpdateArgs): Promise<PrismaVideo> {
    return this.prisma.video.update(args);
  }
  async deleteVideo(args: Prisma.VideoDeleteArgs): Promise<PrismaVideo> {
    return this.prisma.video.delete(args);
  }

  async findSchedules(
    parentId: string,
    args: Prisma.ScheduleFindManyArgs
  ): Promise<PrismaSchedule[]> {
    return this.prisma.video
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .schedules(args);
  }

  async findVideoDetailsItems(
    parentId: string,
    args: Prisma.VideoDetailsFindManyArgs
  ): Promise<PrismaVideoDetails[]> {
    return this.prisma.video
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .videoDetailsItems(args);
  }
  async DownloadExcelFile(args: VideoDto): Promise<ExcelFileDto> {
    throw new Error("Not implemented");
  }
  async FetchYouTubeVideos(args: VideoDto): Promise<VideoDto[]> {
    throw new Error("Not implemented");
  }
  async UpdateVideoDetailsViaExcelFile(
    args: UpdateVideoDetailsDto
  ): Promise<UpdateResultDto> {
    throw new Error("Not implemented");
  }
  async UploadExcelFile(args: UploadExcelFileDto): Promise<UploadResultDto> {
    throw new Error("Not implemented");
  }
}
