# Vite + Vitest + RTL

- Criar Vite App com `React` e `Typescript + SWC`

- Instalar todas as bibliotecas abaixo como dependências de desenvolvimento.

```powershell
npm i -D @testing-library/react @testing-library/jest-dom @vitest/ui vitest jsdom
```

- Adicionar script no `package.json`

```tsx
"scripts": {
	...
	"test": "vitest --watch --ui"
}
```

- Criar `src/tests/setup.ts`

```tsx
import '@testing-library/jest-dom';
```

- Adicionar no `vite.config.ts`:

```tsx

// ============= Adicionar no topo do arquivo ===========
/// <reference types="vitest" />
// ============= Adicionar no topo do arquivo ===========

export default defineConfig({
  ...
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/tests/setup.ts',
    css: true
  }
})
```

- Adicionar ao `tsconfig.json`:

```tsx
{
	"compilerOptions": {
		...
		"types": ["vitest/globals"]
	}
	"include": [..., "src/tests/setup.ts"]
	...
}
```

- Adicionar um arquivo de teste como `src/App.tsx` e `/src/App.test.tsx`:

```tsx
import "./App.css";

function App() {
  return <>learn react</>;
}

export default App;
```

```tsx
import { render, screen } from "@testing-library/react";
import App from "./App";

test("App contains correct heading", () => {
  render(<App />);
  const headingElement = screen.getByText(/learn react/);
  expect(headingElement).toBeInTheDocument();
});
```
