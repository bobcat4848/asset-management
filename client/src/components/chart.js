import { Chart } from "react-google-charts";
import * as React from "react";


const PieChart = () => {
  return (
<Chart
  width={'500px'}
  height={'300px'}
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