import json
import datetime
import glob, os

converted = []

pk = 1


os.chdir(".")

for f in sorted(glob.glob("*.json")):
	# print(f)

	with open(f) as f:
		data = json.load(f)

		for item in data:

			date_obj = datetime.datetime.strptime(item['date'], '%m/%d/%y')
			formated_date = datetime.datetime.strftime(date_obj, '%Y-%m-%d')
			item['date'] = formated_date

			print(formated_date)

			del item["time"]
			new_obj = {
				'model' : 'leads.weight',
				'pk' : pk,
				'fields' : item,
		 	}

			pk = pk + 1

			converted.append(new_obj)



with open("../weight.json", 'w') as f:
	json.dump(converted, f)

