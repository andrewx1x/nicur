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
