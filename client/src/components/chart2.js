import { Chart } from "react-google-charts";
import * as React from "react";

const BarChart = () => {
    return (
<Chart
  width={'300px'}
  height={'200px'}
  chartType="Bar"
  loader={<div>Loading Chart</div>}
  data={[
    ['Month', 'Users', 'Items'],
    ['July', 1000, 400],
    ['August', 1170, 460],
    ['October', 660, 1120],
    ['Novemeber', 1030, 540],
  ]}
  options={{
    // Material design options
    chart: {
      title: 'Items',
      legend: 'bottom',
    },
  }}
  // For tests
  rootProps={{ 'data-testid': '2' }}
/>
    );
  };


const Chart2 = () => {
    return (<div style={{position: 'absolute', left: '60%', top: '20%',width: '50%'}}><BarChart /></div>
    );
  };
export default Chart2;