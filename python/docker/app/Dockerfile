# Set base image (host OS)
FROM python:3.8

# Set then working directory in the container
WORKDIR /code

#Copy the depedencies file to the working directory
COPY requirements.txt .

# Install depdencies
RUN pip install -r requirements.txt

# Copy the content of the local src directory to the working directory
COPY src/ .

#Command to run on container start
CMD [ "python", "./server.py"]
