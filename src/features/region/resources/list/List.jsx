import * as React from "react";
import {
  List, Datagrid, TextField, ShowButton,
} from "react-admin";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  root: { paddingTop: "1rem" },
}));

const RegionList = (props) => {
  const classes = useStyles();

  return (
    <List
      {...props}
      hasShow
      pagination={false}
      actions={false}
      bulkActionButtons={false}
      className={classes.root}
    >
      <Datagrid>
        <TextField source="id" label="Region" />
        <TextField source="name" label="Name" />
        <ShowButton />
      </Datagrid>
    </List>
  );
};

export default RegionList;
