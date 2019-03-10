import React from "react";
import ReactDOM from "react-dom";
import DataProvider from "./DataProvider";
import Table from "./Table";
import APlot from "./PlotlyStuff";
import TopBar from './TopBar';
import Typography from '@material-ui/core/Typography';

const introText = "This app processes a data export from Fitbit and " + 
"presents it using the Plotly graphing tool. "

const dateText = "Data collection started on the 1st of January 2019 with the intention of tracking changes in weight over the coming months. "

const scaleText = "Data was collected using the Fitbit Aria2 scales and processed using Python scripts. "


const all = introText + dateText + scaleText
const App = () => (
<div>
	<TopBar/>
	<div style={{display:'flex', flexDirection:'column', alignItems:'flex-center'}}>

		<div style={{alignSelf: 'center'}}>
			<Typography variant="title" style={{color:'gray'}}>Changes in weight over time</Typography>
		</div>


		<div style={{alignSelf: 'center', maxWidth:'600px', width:'100%'}}>
			<DataProvider 
	 	 		endpoint="api/weight/" 
	        	render={data => <APlot data={data} />}
	      	/>
		</div>

		<div style={{alignSelf: 'center', maxWidth:'600px'}}>
			<Typography variant="body1">{all}</Typography>

		</div>

        
	</div>
</div>
);

const wrapper = document.getElementById("app");

wrapper ? ReactDOM.render(<App />, wrapper) : null;