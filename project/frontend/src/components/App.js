import React from "react";
import ReactDOM from "react-dom";
import DataProvider from "./DataProvider";
import Table from "./Table";
import WeightTable from "./Table";
import APlot from "./PlotlyStuff";
// import AForm from "./Form";

const App = () => (
<div>
  <DataProvider endpoint="api/lead/" 
                render={data => <Table data={data} />} />
                

  <DataProvider endpoint="api/weight/" 
                render={data => <APlot data={data} />} />
                
</div>
);

const wrapper = document.getElementById("app");

wrapper ? ReactDOM.render(<App />, wrapper) : null;