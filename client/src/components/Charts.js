import { BarChart } from "../components/BarChart";
import { PieChart } from "../components/PieChart";
import * as React from "react";

const Charts = () => {
    return (
      <div style={{display: 'flex', flexFlow: 'row wrap', justifyContent: 'center', paddingTop: '25px'}}>
        <BarChart style={{width: '50%'}}/>
        <PieChart style={{width: '50%'}}/>
      </div>
    )
};

export default Charts;