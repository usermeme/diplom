import * as React from "react";
import { Box, Card, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 20,
    marginTop: theme.spacing(2),
    marginBottom: "1em",
  },
}));

const Dashboard = () => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <Box display="flex">
        <Box flex="1">
          <Typography variant="h5" component="h2" gutterBottom>
            Diplom
          </Typography>
          <Box maxWidth="40em">
            <Typography variant="body1" component="p" gutterBottom>
              Text
            </Typography>
          </Box>
        </Box>
      </Box>
    </Card>
  );
};

export default Dashboard;
