import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import highcharts from "highcharts/modules/exporting";

//load HC exporting module
if (typeof Highcharts === "object") {
  highcharts(Highcharts);
}

interface TotalGoalsBarProps {
  data: any;
}

export const TotalGoalsBar = (data: TotalGoalsBarProps) => {
  const chartOptions = {
    chart: {
      type: "bar",
      //   height: chartHeight,
    },
    title: {
      text: "",
    },
    subtitle: {
      text: "",
    },
    tooltip: {
      //   valueSuffix: " " + toolTipValueSuffix,
    },
    legend: {
      layout: "vertical",
      align: "right",
      verticalAlign: "middle",
      y: 20, // padding top
      itemStyle: {
        fontWeight: "normal",
      },
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
    xAxis: {
      categories: ["Africa", "America", "Asia", "Europe", "Oceania"],
      title: {
        text: "Title",
        style: {
          fontWeight: "bold",
        },
      },
      scalable: true,
    },
    yAxis: {
      min: 0,
      title: {
        text: [],
        style: {
          fontWeight: "bold",
        },
      },
    },
    plotOptions: {
      series: {
        allowPointSelect: true,
        cursor: "pointer",
        showInLegend: true,
        dataLabels: {
          enabled: true,
        },
      },
    },
    series: [
      {
        name: "Year 1990",
        data: [631, 727, 3202, 721, 26],
      },
    ],
    credits: {
      enabled: false,
    },
  };

  return <HighchartsReact highcharts={Highcharts} options={chartOptions} />;
};
