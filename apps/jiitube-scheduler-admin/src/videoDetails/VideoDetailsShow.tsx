import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import { VIDEO_TITLE_FIELD } from "../video/VideoTitle";

export const VideoDetailsShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="duration" source="duration" />
        <TextField label="ID" source="id" />
        <TextField label="language" source="language" />
        <TextField label="tags" source="tags" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="Video" source="video.id" reference="Video">
          <TextField source={VIDEO_TITLE_FIELD} />
        </ReferenceField>
      </SimpleShowLayout>
    </Show>
  );
};
