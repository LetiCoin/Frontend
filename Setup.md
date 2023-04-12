# Installing and configuring the frontend server. Установка и настройка фронтэнд-сервера

## Копирование проекта

Склонируй репозиторий в папку проекта

```bash
git clone https://github.com/LetiCoin/Frontend.git
```

Перейди в созданную папку

```bash
cd Frontend/
```

## Установка nodejs и npm

### Простой способ

Установка через пакетный менеджер:

```bash
sudo apt-get install npm
```

### Используя nvm

NVM — Node Version Manager, позволяет быстро устанавливать и использовать разные версии nodejs.
[Подробная инструкция по использованию](https://github.com/nvm-sh/nvm#installing-and-updating)

Другие способы установки nodejs и npm смотри [тут](https://nodejs.org/en/download)

## Установка yarn

yarn - менеджер npm пакетов, работает быстрее, чем стандартный npm

```bash
npm install --global yarn
```

<!-- TODO перейти на вторую версии yarn -->

## Установка зависимостей проекта

```bash
yarn install 
```

## Настройка production окружения

Создай копию файла .env.template с именем .env.local

```bash
cp .env.template .env.local
```
Установи в новом файле адрес для доступа к внешнуму api и пропиши на каком ip и порту должен запускаться сервер.

Имена, начинающиеся на NEXT_PUBLIC_ в итоге будут использоваться в неизменном виде в браузере.

```bash
# Set the base API domain for the application
NEXT_PUBLIC_BASE_API_DOMAIN = http://localhost:3000

# Set the login API URL
NEXT_PUBLIC_LOGIN_API_URL = $NEXT_PUBLIC_BASE_API_DOMAIN/auth/login

# Set the register API URL
NEXT_PUBLIC_REGISTER_API_URL = $NEXT_PUBLIC_BASE_API_DOMAIN/auth/register

# Set the host and port for the frontend production environment
FRONTEND_PROD_HOST = 0.0.0.0
FRONTEND_PROD_PORT = 3000
``` 

## Сборка проекта

```bash
yarn build
```

## Запуск проекта

```bash
yarn start
```

## Copying a project

Clone the repository into the project folder

```bash
git clone https://github.com/LetiCoin/Frontend.git
```

Go to the folder you created

```bash
cd Frontend/
```

## Install nodejs and npm

### The easy way

Installing through the batch manager:

```bash
sudo apt-get install npm
```

### Using nvm

NVM - Node Version Manager, allows you to quickly install and use different versions of nodejs.
[Detailed instructions for use](https://github.com/nvm-sh/nvm#installing-and-updating)

For other ways to install nodejs and npm see [here](https://nodejs.org/en/download)

## Installing yarn

yarn is an npm package manager, faster than the standard npm

```bash
npm install --global yarn
```

## Install project dependencies

```bash
yarn install 
```

## Setting up the production environment

Create a copy of the .env.template file named .env.local

```bash
cp .env.template .env.local
```

In the new file set the address to access the external api and write on what ip and port you want the server to run.

Names beginning with NEXT_PUBLIC_ will eventually be used unchanged in the browser.

```bash
# Set the base API domain for the application
NEXT_PUBLIC_BASE_API_DOMAIN = http://localhost:3000

# Set the login API URL
NEXT_PUBLIC_LOGIN_API_URL = $NEXT_PUBLIC_BASE_API_DOMAIN/auth/login

# Set the register API URL
NEXT_PUBLIC_REGISTER_API_URL = $NEXT_PUBLIC_BASE_API_DOMAIN/auth/register

# Set the host and port for the frontend production environment
FRONTEND_PROD_HOST = 0.0.0.0
FRONTEND_PROD_PORT = 3000
```

## Build project

```bash
yarn build
```

## Start the project

```bash
yarn start
```

