# lapopo
Poker Planning

### Для корректной работы приложения должен быть установлен redis

```angular2html
brew install redis
```

## Project setup
```
npm install
```

### Локальный запуск и горячая перезагрузка клиентской части проекта и API сервера
```
npm run serve
```
Запуск серверной части

```angular2html
redis-server
```
в другом терминале
```
npm run dev
```

### Run your unit tests
```
npm run test:unit
```

### Lints and fixes files
```
npm run lint
```

### Heroku
Heroku по дефолту запускает по очередности 2 скрипта из файла package.json
```
npm run build
```
и
```
npm run start
```

###Production
`https://lapopo-v1.herokuapp.com/`

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
