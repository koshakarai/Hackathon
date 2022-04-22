FROM python:3.9.5

ENV PYTHONUNBUFFERED=1
WORKDIR /app/api
RUN apt update
RUN apt install -y --assume-yes python3-dev libpq-dev build-essential python3-pip
RUN apt-get install libgeos-dev -y
COPY ../chat ./app/chat/
RUN pip install --upgrade pip && pip install -r app/chat/requirements.txt

#Так долнго ставится фронт. Что бы без фронта обновить билд:  docker-compose build --no-cache backend потом в readme запишу)