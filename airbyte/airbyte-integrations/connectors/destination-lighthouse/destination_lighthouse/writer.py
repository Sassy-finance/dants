
import csv
from typing import Mapping
from airbyte_cdk import AirbyteLogger
from nodejs import node
from datetime import datetime

logger = AirbyteLogger()


class ApiWriter():
    def __init__(
        self,
            api_key: str,
            public_key: str,
            private_key: str,
            entity: str,
            pipeline_id: str
    ):
        self.api_key = api_key
        self.public_key = public_key
        self.private_key = private_key
        self.entity = entity
        self.pipeline_id = pipeline_id
        self.records = []

    def add_to_buffer(self, record: Mapping):
        self.records = [*self.records, *record['data'][self.entity]]

    def upload_file(self):

        date = datetime.fromtimestamp(
            int(self.records[0]['timestamp'])
        ).strftime('%d%m%y')

        file = self.create_temp_csv(
            file_name='pipeline' + '-' + self.pipeline_id + '-' + date,
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
