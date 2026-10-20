# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Deploying to a shared host

The `Deploy to shared host` GitHub Actions workflow runs on pushes to `main` and can also be started manually from the Actions tab. It installs the locked dependencies, builds the production site, and uploads `dist/` to the host over FTPS.

Add these repository secrets under **Settings → Secrets and variables → Actions**:

- `FTP_SERVER`: FTP/FTPS hostname, without a protocol prefix.
- `FTP_USERNAME`: FTP account username.
- `FTP_PASSWORD`: FTP account password.
- `FTP_SERVER_DIR`: destination directory for the site, including a trailing slash (for example, `/public_html/`).

The host must support explicit FTPS. Use a dedicated FTP account restricted to the site directory. If the host does not support FTPS, enable the plain FTP protocol in the workflow only after accounting for the fact that FTP does not encrypt credentials or data.
