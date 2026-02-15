# Project Structure

## Workspace layout

| Package        | Description                            |
| -------------- | -------------------------------------- |
| `libs/api-model` | Data transfer objects and shared utils |
| `libs/simpl`     | Shared library                         |
| `apps/api`       | REST API backend (Fastify)             |
| `apps/www`       | Main site (Angular Universal SSR)      |
| `apps/adm`       | Admin panel (Angular SPA)              |
| `tests`          | Test container, runs integration tests |

## Tech stack

- [TypeScript](https://www.typescriptlang.org/docs/home.html)
- [Angular](https://angular.io/docs)
- [Fastify](https://fastify.io)
- [Jest](https://jestjs.io/docs/)
- [ToneJS](https://tonejs.github.io/)
- [MIDI.js](https://galactic.ink/midi-js/)
- [HTML5 / WebAudio API](http://www.w3.org/TR/webaudio/)
