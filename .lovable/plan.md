# Improve Lighthouse performance and best practices

## Goal
Reduce homepage loading and main-thread blocking while preserving the current design, navigation, ads, analytics, and SEO.

## Changes
- Load advertising and analytics only after user interaction or a longer idle delay, preventing them from competing with the first screen.
- Reduce startup JavaScript by deferring authentication, notifications, menus, and other nonessential interface code until needed.
- split the oversized route registry so the homepage parses less routing code at startup.
- Prioritize only the first visible destination image and keep all later images lazy-loaded.
- Remove redundant hidden crawler content because the existing static-page generation already outputs indexable content.
- Improve safe external-link behavior and address Lighthouse best-practice warnings found during verification.

## Validation
- Run the production build.
- Test the homepage at desktop and mobile sizes.
- Check console errors, layout stability, loaded resources, and a local Lighthouse report.

## Note
A consistent 100 score cannot be guaranteed on every run because Lighthouse varies by device, network, browser extensions, hosting response time, and Google ad scripts. The implementation will target the site-controlled causes and preserve monetization.
