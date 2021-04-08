import * as React from "react";
import { Show, SimpleShowLayout } from "react-admin";
import * as charts from "react-chartjs-2";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  chart: { maxWidth: "500px" },
}));

const ContentShow = (props) => {
  const classes = useStyles();

  return (
    <SimpleShowLayout {...props}>
      <div className={classes.chart}>
        {props.record.charts?.map((chart) => (
          <React.Fragment key={chart.id}>
            <div>
              {chart.title}
            </div>
            {React.createElement(charts[chart.type], { data: chart.data })}
          </React.Fragment>
        ))}
      </div>
    </SimpleShowLayout>
  );
};

const RegionShow = (props) => (
  <Show {...props}><ContentShow /></Show>
);

export default RegionShow;
