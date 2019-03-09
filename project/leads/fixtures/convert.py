import json
from pprint import pprint
import datetime

converted = []

pk = 1

with open('orig.json') as f:
	data = json.load(f)

	for item in data:

		date_obj = datetime.datetime.strptime(item['date'], '%m/%d/%y')
		formated_date = datetime.datetime.strftime(date_obj, '%Y-%m-%d')
		item['date'] = formated_date

# 		time_obj = datetime.datetime.strptime(item['time'], '%m/%d/%y')
# 		formated_time = datetime.datetime.strftime(time_obj, '%Y-%m-%d')
# 		item['time'] = formated_time
		del item["time"]
		new_obj = {
			'model' : 'leads.weight',
			'pk' : pk,
			'fields' : item,
	 	}

		pk = pk + 1

		converted.append(new_obj)



with open("weight.json", 'w') as f:
	json.dump(converted, f)

