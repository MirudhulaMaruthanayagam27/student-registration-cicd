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

The files in `src/environments/` are **generated, never committed**.
They are in `.gitignore`. A fresh clone has no environments folder at all.

`generate-env.js` creates both files, and it runs automatically:

| You run | What runs first | Which file Angular uses | apiUrl |
|---|---|---|---|
| `npm start` | `prestart` -> generate-env | `environment.ts` | `http://localhost:3000` |
| `npm run build` | generate-env | `environment.production.ts` | from `API_URL` |

The swap for production builds is done by `fileReplacements` in `angular.json`.

```
GitHub Secret  ->  env variable  ->  generate-env.js  ->  environment.production.ts  ->  ng build
```

If `API_URL` is not set, generate-env.js falls back to `http://localhost:3000`,
so a locally-built `dist/` is never a real production artifact. Only the
GitHub Actions build is.

## Branches

```
main            <- released code
  ^
development     <- integrated + tested code
  ^
feature/student-registration   <- current work
```
