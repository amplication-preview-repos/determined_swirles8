import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { VIDEO_TITLE_FIELD } from "../video/VideoTitle";

export const VideoDetailsList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"VideoDetailsItems"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="duration" source="duration" />
        <TextField label="ID" source="id" />
        <TextField label="language" source="language" />
        <TextField label="tags" source="tags" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="Video" source="video.id" reference="Video">
          <TextField source={VIDEO_TITLE_FIELD} />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};
