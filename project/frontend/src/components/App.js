import React from "react";
import ReactDOM from "react-dom";
import DataProvider from "./DataProvider";
import Table from "./Table";
import APlot from "./PlotlyStuff";
import TopBar from './TopBar';
import Typography from '@material-ui/core/Typography';

const introText = "This app processes a data export from Fitbit and " + 
"presents it using the Plotly graphing tool."

const dateText = "I started cutting on 1st January 2019 with the intention of hitting 72kg by " + 
"7th April 2019."

const scaleText = "Weight was collected using the Fitbit Aria2 scales."

const doubleWeigh = "Sometimes I weighed myself twice in one day." 

const App = () => (
<div>
	<TopBar/>
	<div style={{display:'flex', flexDirection:'column', justifyContent:'cent'}}>

		<div style={{alignSelf: 'center'}}>
			<DataProvider 
	 	 		endpoint="api/weight/" 
	        	render={data => <APlot data={data} />}
	      	/>
		</div>

		<div style={{alignSelf: 'center'}}>
			<Typography>{introText}</Typography>
			<Typography>{dateText}</Typography>
			<Typography>{scaleText}</Typography>
			<Typography>{doubleWeigh}</Typography>
		</div>

        
	</div>
</div>
);

const wrapper = document.getElementById("app");

wrapper ? ReactDOM.render(<App />, wrapper) : null;