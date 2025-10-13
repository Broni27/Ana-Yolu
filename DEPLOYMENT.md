# 🚀 Руководство по развертыванию

## Netlify

### Метод 1: Netlify CLI

1. Установите Netlify CLI:
```bash
npm install -g netlify-cli
```

2. Войдите в Netlify:
```bash
netlify login
```

3. Инициализируйте проект:
```bash
netlify init
```

4. Деплой:
```bash
netlify deploy --prod
```

### Метод 2: Netlify Dashboard

1. Зайдите на [netlify.com](https://netlify.com)
2. Нажмите "Add new site" → "Import an existing project"
3. Подключите ваш Git репозиторий
4. Настройки сборки уже настроены в `netlify.toml`
5. Нажмите "Deploy site"

## Vercel

### Метод 1: Vercel CLI

1. Установите Vercel CLI:
```bash
npm install -g vercel
```

2. Деплой:
```bash
vercel
```

3. Для продакшен деплоя:
```bash
vercel --prod
```

### Метод 2: Vercel Dashboard

1. Зайдите на [vercel.com](https://vercel.com)
2. Нажмите "Add New..." → "Project"
3. Импортируйте ваш Git репозиторий
4. Настройки уже в `vercel.json`
5. Нажмите "Deploy"

## GitHub Pages

1. Установите gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Добавьте в `package.json`:
```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  },
  "homepage": "https://yourusername.github.io/ana-yolu-clinic"
}
```

3. Добавьте в `vite.config.ts`:
```typescript
export default defineConfig({
  base: '/ana-yolu-clinic/',
  // ...
})
```

4. Деплой:
```bash
npm run deploy
```

## Firebase Hosting

1. Установите Firebase CLI:
```bash
npm install -g firebase-tools
```

2. Войдите в Firebase:
```bash
firebase login
```

3. Инициализируйте проект:
```bash
firebase init hosting
```

4. Выберите:
   - Public directory: `dist`
   - Single-page app: `yes`
   - Set up automatic builds: `no`

5. Соберите проект:
```bash
npm run build
```

6. Деплой:
```bash
firebase deploy
```

## Cloudflare Pages

1. Зайдите в [Cloudflare Dashboard](https://dash.cloudflare.com)
2. Перейдите в Pages
3. Нажмите "Create a project"
4. Подключите Git репозиторий
5. Настройки сборки:
   - Build command: `npm run build`
   - Build output directory: `dist`
   - Node version: `18`
6. Нажмите "Save and Deploy"

## AWS Amplify

1. Зайдите в [AWS Amplify Console](https://console.aws.amazon.com/amplify)
2. Нажмите "New app" → "Host web app"
3. Подключите Git репозиторий
4. Настройки сборки:
   - Build command: `npm run build`
   - Build output directory: `dist`
5. Нажмите "Save and deploy"

## Переменные окружения

Для продакшена создайте файл `.env.production`:

```env
VITE_APP_URL=https://yourdomain.com
VITE_CONTACT_EMAIL=info@anayolu.az
VITE_CONTACT_PHONE=+994XXXXXXXXX
```

В панели хостинга добавьте эти переменные в настройках окружения.

## Кастомный домен

### Netlify
1. Перейдите в Site settings → Domain management
2. Нажмите "Add custom domain"
3. Следуйте инструкциям для настройки DNS

### Vercel
1. Перейдите в Project Settings → Domains
2. Добавьте свой домен
3. Настройте DNS записи

## SSL/TLS

Все перечисленные платформы автоматически предоставляют бесплатные SSL сертификаты.

## Производительность

После деплоя:
- ✅ Проверьте сайт с помощью [Google PageSpeed Insights](https://pagespeed.web.dev/)
- ✅ Проверьте адаптивность с помощью [Mobile-Friendly Test](https://search.google.com/test/mobile-friendly)
- ✅ Проверьте доступность с помощью [WAVE](https://wave.webaim.org/)

## Мониторинг

Рекомендуемые инструменты:
- **Google Analytics** - для аналитики посетителей
- **Sentry** - для отслеживания ошибок
- **Vercel Analytics** или **Netlify Analytics** - встроенная аналитика

## CI/CD

Все платформы автоматически пересобирают сайт при пуше в основную ветку Git.

Для настройки CI/CD для тестирования создайте `.github/workflows/test.yml`:

```yaml
name: Test

on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run lint
      - run: npm run build
```

## Поддержка

Если возникли проблемы с деплоем, обратитесь к документации выбранной платформы или к разработчику.

