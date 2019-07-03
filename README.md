# fitbitdata

View the live app here: https://guarded-tor-60924.herokuapp.com/

At the moment this project is for my own personal use, though if you want to use it feel free! 

## Motivation

This project was started to better process and visualise the data from a [Fitbit](https://www.fitbit.com/uk/home) wearable device, as well as the Fitbit Aria2 scale, in order to more usefully analyse the data. The issue this app overcomes is the scaling presets provided by the Fitbit app.

### Vertical scaling

The vertical scale is not personalised. For example, my heart rate is always between 40 and 180, but the graph scaling goes from 0 - 220. 

### Horizontal scaling and time periods

Choosing time periods isn't particularly useful. For example, the 'view month' or 'view year' options only show calendar months rather than the previous 31 or 365 days. So if it's currently June 15th you won't be able to see the previous 31 days data at once, or the previous 365 days at once. You'll have to view June and May separately to get the data. 

## Implementation

### Data importing

The raw data is from a datadump directly from Fitbit. The json files are converted using Python 3.6 scripts to match the database tables described in `models.py`. 

From the /leads/fixtures/weight directory:

    python3 convert_weight.py
    
The output is located in the file called `fixtures/weight.json`. 

In a later version I'll be using the [Fitbit API](https://dev.fitbit.com/build/reference/web-api/).

### Database

The data is stored in an SQLite3 database. 

When the weight.json file as been imported and converted

To install data for first use, run

    python3 manage.py loaddata
    
To install new data, it's easiest to reset the database. This will come with a warning that all data will be lost:

    python3 manage.py flush
   
Then re-run loaddata. 

### Backend and API

The backend uses Django with the [Django REST framework](https://www.django-rest-framework.org/).

### Front end

The main site uses [ReactJS](https://reactjs.org/), which is loaded into the Django `index.html` template. 

The front end uses [npm](https://www.npmjs.com/) as the package manager.

### Graphing

The graphing tools for the project are from [Plotly](https://plot.ly/)

## Running the app locally

You can run the app locally and view it in your browser. 

### To build the front end:

Install the npm packages listed in `package.json` using

`npm install`

Once this has installed (may take a few minutes), run a development build of the frontend using:

`npm run dev`

### To run the server

Install the python packages in `requirements.txt`. 

`python3 manage.py runserver`

Visit http://127.0.0.1:8000/

If you make changes to the Javascript, rebuild using npm.

You may need to force refresh your browser for changes to be visible. 

### Troubleshooting

    File "manage.py", line 14
    ) from exc
         ^
    SyntaxError: invalid syntax

Use `python3` to run manage.py files not `python`
