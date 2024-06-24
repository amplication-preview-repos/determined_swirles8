import { VideoDetailsWhereInput } from "./VideoDetailsWhereInput";
import { VideoDetailsOrderByInput } from "./VideoDetailsOrderByInput";

export type VideoDetailsFindManyArgs = {
  where?: VideoDetailsWhereInput;
  orderBy?: Array<VideoDetailsOrderByInput>;
  skip?: number;
  take?: number;
};
