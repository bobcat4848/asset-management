import { Chart } from "react-google-charts";
import * as React from "react";

export const PieChart = () => {
  return (
    <Chart
      width={'300px'}
      height={'200px'}
      chartType="PieChart"
      loader={<div>Loading Chart</div>}
      data={[
        ['Item', 'Amount Left'],
        ['Items available', 110],
        ['Items checked out', 80],
      ]}
      options={{
        title: 'Items Available vs Items checked out',
      }}
      rootProps={{ 'data-testid': '1' }}
    />
      );
    };

export default PieChart;