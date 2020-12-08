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
Необходимые переменные окружения для development разработки находятся в .env.development
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

### Production
Установить переменные окружения для production: по-умолчанию .env.production, либо любой другой удобный способ

По дефолту запускает по очередности 2 скрипта из файла package.json
```
npm run build
```
и
```
npm run start
```

### Environment variables

* In develop mode uses .env.development
* In production mode uses .env.production

Variables for VueJs app should have prefix VUE_APP_
