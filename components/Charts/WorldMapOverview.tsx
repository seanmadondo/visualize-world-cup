import React from "react";
import HighchartsReact from "highcharts-react-official";
import highcharts from "highcharts/modules/exporting";
import * as Highcharts from "highcharts";
import mapDataWorld from "@highcharts/map-collection/custom/world.geo.json";
import HighchartsMap from "highcharts/modules/map";

//load HC exporting module
if (typeof Highcharts === "object") {
  HighchartsMap(Highcharts);
  highcharts(Highcharts);
}

interface WorldMapOverviewProps {
  data: any;
}

const mapseries: Highcharts.SeriesMapOptions[] = [
  {
    type: "map",
    name: "Population 2016",
    // joinBy: ["iso-a3", "code3"],
    data: mapDataWorld.features,
    // tooltip: {
    //   pointFormat: "{point.properties.hc-a2}: {point.z} thousands",
    // },
  },
];

export const WorldMapOverview = (data: WorldMapOverviewProps) => {
  const chartOptions = {
    chart: {
      backgroundColor: null,
      width: "1000",
    },
    title: {
      text: "",
    },
    subtitle: {
      text: "",
    },
    legend: {
      enabled: false,
    },
    exporting: {
      enabled: true,
      buttons: {
        contextButton: {
          menuItems: [
            "viewFullscreen",
            "printChart",
            "downloadPNG",
            "downloadJPEG",
            "downloadSVG",
          ],
        },
      },
    },
    scrollbars: {
      enabled: true,
    },

    mapNavigation: {
      enabled: true,
      buttonOptions: {
        verticalAlign: "bottom",
      },
    },
    series: mapseries,
    credits: {
      enabled: false,
    },
  };

  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={chartOptions}
      constructorType={"mapChart"}
    />
  );
};
