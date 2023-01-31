FROM python:3.8

# Install mysql client to apply the schema files
WORKDIR /


# install dependencies
RUN pip install pip==20.2.4
RUN pip install pandas
RUN pip install matplotlib


# copy the content of the local src directory to the working directory
COPY ./script.py ./script.py
CMD [ "python", "script.py"]