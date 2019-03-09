# fitbitdata

At the moment this project is for my own amusement, though if you want to use it feel free! 

## Motivation

This project started because I was unhappy with some of the ways [Fitbit](https://www.fitbit.com/uk/home) was presenting my activity, sleep and heartrate data. Some of the graphs were really clunky. The scaling is not always helpful and the custom time scales aren't relative to the current day. 

### Vertical scaling

The vertical scale is always unhelpful. For example, my heart rate is always between 40 and 180, but the graph scaling goes from 0 - 220. 

### Horizontal scaling and time periods

Choosing time periods isn't partocularly useful. For example, the 'view month' or 'view year' options only show calendar months rather than the previous 31 or 365 days. So if it's currently June 15th you won't be able to see the previous 31 days data at once, or the previous 365 days at once. You'll have to view June and May separately to get the data. 

## Implementation

### Data importing

The raw data is from a datadump directly from Fitbit. The json files are converted using python scripts to match the database tables described in `models.py`. The output of Janurary and February 2019 are located in `fixtures`. 

In a later version I'll be using the [Fitbit API](https://dev.fitbit.com/build/reference/web-api/).

### Database

The data is stored in an SQLite3 databse. 

### Backend and API

The backend uses Django with the [Django REST framework](https://www.django-rest-framework.org/).

### Front end

The main site uses [ReactJS](https://reactjs.org/), which is loaded into the Django `index.html` template. 

### Graphing

The graphing tools for the project are from [Plotly](https://plot.ly/)

## Using the package


### To build the front end:

Install the packages listed in `package.json` using

`npm install`

Once this has installed (may take a few minutes), run a development build of the front end using:

`npm run dev`

### To run the server

Install the python packages in `requirements.txt`. 

'python manage.py runserver'


