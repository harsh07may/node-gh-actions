# GitHub Actions for Node.js Application

This repository contains a simple Node.js application and GitHub Actions workflows for CI/CD.

- Pull Requests will trigger the `code-review` workflow.

- Push to `main` branch will trigger the `build-deploy` workflow to build and deploy Application.

- Push to `release` branch will trigger the `release` workflow to publish image to Github Packages.

```bash
docker pull ghcr.io/harsh07may/node-gh-actions:release
docker images
docker run -d -i -t -p 3000:3000 ghcr.io/harsh07may/node-gh-actions
docker ps -a
```
