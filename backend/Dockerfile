FROM python:3.9.5

ENV PYTHONUNBUFFERED=1
WORKDIR /app/api
COPY requirements.txt ./
RUN pip install --upgrade pip && pip install -r requirements.txt
COPY . ./

