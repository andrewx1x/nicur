# NICUR Static Site

Официальный статический сайт на Astro. Контент хранится в `src/content/pages/*.json`.

## Установка зависимостей

```bash
npm install
```

## Локальный запуск

```bash
npm run dev
```

### Пароль на весь сайт

Сайт поддерживает парольную защиту через переменную окружения `SITE_PASSWORD`.

- Локально: создайте файл `.env` в корне проекта и добавьте строку `SITE_PASSWORD=ваш_пароль`.
- GitHub Pages: добавьте секрет репозитория `SITE_PASSWORD` (Settings -> Secrets and variables -> Actions -> New repository secret).
- Если `SITE_PASSWORD` не задан, парольная защита отключена.

## Сборка

```bash
npm run build
```

Собранные статические файлы находятся в папке `dist/`.

## Деплой на GitHub Pages (опционально)

1. Включите GitHub Pages для репозитория.
2. Установите Source: GitHub Actions.
3. Запушьте изменения — workflow соберет проект и опубликует `dist/`.

## Перенос на любой статический хостинг

1. Выполните `npm run build`.
2. Загрузите содержимое `dist/` на хостинг (S3, Netlify, Vercel static, обычный FTP).

## Структура

- `src/content/pages` — весь текст и структура страниц.
- `src/components` — UI-компоненты.
- `src/layouts/BaseLayout.astro` — общий макет.
- `public/` — favicon, og-image, robots.txt, sitemap.xml.
