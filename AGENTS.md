# Repository Guidelines

## Project Structure & Module Organization
- Laravel app: `app/` (models, services, Filament resources, Livewire), routes in `routes/`, views/assets in `resources/`, public output in `public/`, config in `config/`, cache/storage in `storage/`.
- Frontend tooling: Vite/Tailwind config in `vite.config.js`, `tailwind.config.js`, `postcss.config.js`.
- Tests: PHPUnit in `tests/Unit` and `tests/Feature`. Environment template: `.env.example`.

## Build, Test, and Development Commands
- Install: `composer install` and `npm ci`.
- Run dev: `npm run dev` (Vite) and `php artisan serve` (Laravel).
- Production build: `npm run build`.
- Tests: `vendor/bin/phpunit` or `php ./phpunit.phar`.

## Coding Style & Naming Conventions
- Indentation: 4 spaces, LF endings per `.editorconfig`.
- PHP: PSR-12; classes `StudlyCase` (e.g., `UserResource.php`), methods/variables `camelCase`.
- Laravel: Eloquent models singular `StudlyCase` in `app/Models`; tables snake_case plural.
- JS/CSS: Follow project conventions; keep source under `resources/` and exclude built assets from commits.

## Testing Guidelines
- Place tests under `tests/Feature/*Test.php` and `tests/Unit/*Test.php`.
- Name files `SomethingTest.php`; use PHPUnit assertions; keep tests deterministic.
- Run locally with `vendor/bin/phpunit`. Cover critical services, controllers, and Livewire components.

## Commit & Pull Request Guidelines
- Commits: concise, present-tense (e.g., "add testimonials"), group related changes. Non-English short summaries are acceptable.
- PRs: include clear description, linked issues, steps to reproduce, and screenshots for UI changes. Add testing notes.

## Security & Configuration Tips
- Never commit secrets; copy `.env.example` to `.env` and update keys.
- After config changes, run `php artisan config:cache` and `php artisan route:cache`.

## Agent-Specific Instructions
- Respect `.editorconfig` and keep changes minimal and focused.
- Follow file organization patterns (e.g., `app/Filament/Resources`, `app/Http/Livewire`).
- Avoid modifying unrelated files; update docs/tests when behavior changes.
