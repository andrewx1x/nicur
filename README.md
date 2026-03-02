# NICUR Static Site

Официальный статический сайт на Astro для проекта НИЦУР.

## Возможности

- Полностью статическая сборка (`output: "static"` в `astro.config.mjs`).
- Контент страниц хранится в JSON-файлах `src/content/pages/*.json`.
- Единый рендер секций через `src/components/PageSections.astro`.
- Навигация и ссылки учитывают `base`-префикс (`/nicur`) через `src/utils/paths.ts`.
- В шаблоне задан `noindex, nofollow`, а в `public/robots.txt` стоит `Disallow: /`.

## Стек

- Node.js 20 (рекомендуется; используется в GitHub Actions workflow).
- Astro 4.13.2.
- TypeScript 5.4.5.
- npm.

## Структура репозитория

- `src/pages` - маршруты Astro-страниц.
- `src/content/pages` - JSON-контент для страниц.
- `src/components` - UI-компоненты и секции.
- `src/layouts/BaseLayout.astro` - общий layout (meta, шапка, подвал, клиентские скрипты).
- `src/config` - конфиг сайта и навигации.
- `public` - статические ассеты (изображения, `robots.txt`, `sitemap.xml`).
- `.github/workflows/build.yml` - CI/CD сборка и деплой на GitHub Pages.

## Локальный запуск

```bash
npm install
npm run dev
```

## Переменные окружения

Обязательных переменных окружения в текущем коде нет.

`SITE_PASSWORD` передаётся в шаг `Build` GitHub Actions (`.github/workflows/build.yml`), но в директории `src/` на текущий момент не используется.

## Команды

```bash
npm run dev      # локальная разработка
npm run build    # production-сборка в dist/
npm run preview  # локальный просмотр собранного dist/
```

## Архитектура

- Каждая страница в `src/pages/*.astro` импортирует соответствующий JSON из `src/content/pages` и рендерит его через `PageSections`.
- `BaseLayout` подключает глобальные стили, общую навигацию/контакты, SEO/OG-мета и JS для анимаций/карусели.
- `withBase` и `stripBase` в `src/utils/paths.ts` обеспечивают корректные URL при деплое с `base: "/nicur"`.

## Деплой

Workflow `.github/workflows/build.yml` запускается на push в `main` и вручную (`workflow_dispatch`):

1. `actions/checkout@v4`
2. `actions/setup-node@v4` (Node 20, cache npm)
3. `npm install`
4. `npm run build`
5. публикация `dist/` через `actions/upload-pages-artifact@v3` и `actions/deploy-pages@v4`

Для GitHub Pages должен быть выбран источник `GitHub Actions`.

## Troubleshooting

- Если после деплоя ломаются ссылки/ассеты, проверьте согласованность `site`/`base` в `astro.config.mjs` и использование `withBase(...)` для внутренних путей.
- Если в PowerShell видны кракозябры в русских JSON, сначала проверяйте байты: файлы проекта валидны как UTF-8, проблема может быть в отображении терминала.
