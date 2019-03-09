import React from "react";
import ReactDOM from "react-dom";
import DataProvider from "./DataProvider";
import Table from "./Table";
import APlot from "./PlotlyStuff";
import TopBar from './TopBar';
import Typography from '@material-ui/core/Typography';

const App = () => (
<div>
	<TopBar/>
	<Typography>Typography</Typography>
 	 <DataProvider 
 	 	endpoint="api/weight/" 
        render={data => <APlot data={data} />}
      />
        
</div>
);

const wrapper = document.getElementById("app");

wrapper ? ReactDOM.render(<App />, wrapper) : null;