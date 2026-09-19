# Student Registration

A deliberately simple Angular 20 app used to learn **Git, GitHub, Pull Requests,
GitHub Secrets, GitHub Actions, CI and deployment**.

The app itself is small on purpose. The CI/CD around it is the point.

## Two separate things

| | Angular application | JSON Server API |
|---|---|---|
| Command | `npm start` | `npm run api` |
| URL | http://localhost:4200 | http://localhost:3000 |
| Job | Draws the screen in the browser | Stores the data |
| Data | Keeps none | Reads/writes `db.json` |

They are two separate programs. Both must be running.

## Run it locally

Terminal 1:

```powershell
npm run api
```

Terminal 2:

```powershell
npm start
```

Then open http://localhost:4200

## Production build

```powershell
npm run build
```

This runs `generate-env.js` first, then `ng build`.
Output goes to `dist/student-registration/browser/`.

## Environments

| File | Used by | apiUrl |
|---|---|---|
| `src/environments/environment.ts` | `npm start` (development) | `http://localhost:3000` |
| `src/environments/environment.production.ts` | `npm run build` (production) | supplied by `generate-env.js` |

`generate-env.js` reads `API_URL` and `APP_ENV` from environment variables and
writes `environment.production.ts`. In GitHub Actions those values come from
GitHub Secrets.

## Branches

```
main            <- released code
  ^
development     <- integrated + tested code
  ^
feature/student-registration   <- current work
```
