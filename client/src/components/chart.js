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
const BarChart = () => {
    return (
<Chart
  width={'600px'}
  height={'300px'}
  chartType="Bar"
  loader={<div>Loading Chart</div>}
  data={[
    ['Month', 'Users', 'Items Checked Out'],
    ['July', 1000, 400],
    ['August', 1170, 460],
    ['October', 660, 1120],
    ['Novemeber', 1030, 540],
  ]}
  options={{
    // Material design options
    chart: {
      title: 'Items',
      subtitle: 'CheckedOut, CheckedIn, and ItemAmount: 2020-2021',
    },
  }}
  // For tests
  rootProps={{ 'data-testid': '2' }}
/>
    );
  };
  const Charts = () => {
    return (<div><PieChart /><br /><BarChart /></div>

    );
  };
export default Charts;