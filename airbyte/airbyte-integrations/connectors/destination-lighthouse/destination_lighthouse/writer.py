
import csv
from typing import Mapping
from airbyte_cdk import AirbyteLogger
from nodejs import node

logger = AirbyteLogger()


class ApiWriter():
    def __init__(self, api_key: str, public_key: str, private_key: str):
        self.api_key = api_key
        self.public_key = public_key
        self.private_key = private_key
        self.records = []

    def add_to_buffer(self, record: Mapping):
        self.records.append(record)

    def upload_file(self):
        file = self.create_temp_csv(
            file_name='upload',
            json_data=self.records
        )

        return_value = node.run([
            '/airbyte/integration_code/destination_lighthouse/lighthouse-upload.js',
            self.api_key,
            self.public_key,
            self.private_key,
            file
        ])

        return return_value

    def create_temp_csv(self, file_name: str, json_data) -> str:
        with open(file_name + '.csv', 'w', newline='') as csv_file:
            writer = csv.DictWriter(csv_file, json_data[0].keys())
            writer.writeheader()

            # Write the JSON data to the CSV file
            for row in json_data:
                writer.writerow(row)

        return file_name + '.csv'
