import React from "react";
import ReactDOM from "react-dom";
import DataProvider from "./DataProvider";
import Table from "./Table";
import APlot from "./PlotlyStuff";
import TopBar from './TopBar';


const App = () => (
<div>
<TopBar/>
  <DataProvider endpoint="api/weight/" 
                render={data => <APlot data={data} />} />
        
</div>
);

const wrapper = document.getElementById("app");

wrapper ? ReactDOM.render(<App />, wrapper) : null;