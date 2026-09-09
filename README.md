# Birdseye Website Prototype 2

An independent copy of Prototype 1 with a revised homepage combining the existing drone film and all four Birdseye solution areas.

- Prototype 1 remains at https://michaelschlunegger-creator.github.io/BirdseyeWebsite/
- Prototype 2 is deployed separately using this repository's GitHub Pages workflow.
- Baseline tag: `prototype-1-baseline`
- Design direction and change record: [Prototype 2 notes](PROTOTYPE2_NOTES.md)

## GitHub Pages build

Use Node.js 22, install dependencies with `npm install`, then run `npm run build:github` with `GITHUB_ACTIONS=true`, `GITHUB_REPOSITORY=michaelschlunegger-creator/BirdseyeWebsite-Proto2` and `NEXT_PUBLIC_BASE_PATH=/BirdseyeWebsite-Proto2`. The static output is `out/`.

The workflow checks the exported routes, local asset paths and video before deployment. Enable GitHub Pages with **GitHub Actions** as the publishing source.

This is a design prototype. The inherited enquiry form does not deliver enquiries; the content review log remains open.
