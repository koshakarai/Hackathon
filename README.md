Проект команды Prometheus для шестого открытого IT чемпионата (Хакатон) 

для запуска приложения испульзуйте Docker:
из корневой папки проекта (где находиться файл docker-compose.yml)
- docker-compose build (если еще не билдили)
- docker-compose up

для остановки контейнеров:
- docker-compose down

для того что бы обновить билд:
- docker-compose build --no-cache 

для того что бы перебилдить отдельный контейнер:
- docker-compose build --no-cache backend
- docker-compose build --no-cache frontend