import { Chart } from "react-google-charts";
import * as React from "react";


const PieChart = () => {
  return (
<Chart
  width={'400px'}
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

  const Charts = () => {
    return (<div style={{position: 'absolute', left: '30%', top: '20%',width: '50%'}}><span class="border border-primary"><PieChart /></span></div>
    );
  };
export default Charts;