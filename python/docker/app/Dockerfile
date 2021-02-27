# Set base image (host OS)
FROM python:3.8-alpine

# Set then working directory in the container
WORKDIR /code

#Copy the depedencies file to the working directory
COPY requirements.txt .

# Install depdencies
RUN pip install -r requirements.txt

# Copy the content of the local src directory to the working directory
COPY src/ .

ENV FLASK_APP server.py
#Command to run on container start
CMD flask run --host=0.0.0.0
