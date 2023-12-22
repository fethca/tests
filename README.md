# Fethcat tests

## Usage

Install package:

```bash
yarn add @fethcat/tests
```

Define test config:

```typescript
import { defineTestConfig } from '@fethcat/tests'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: defineTestConfig(),
})
```

Define custom test config:

```typescript
import { defineTestConfig } from '@fethcat/tests'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: defineTestConfig({
    setupFiles: [],
  }),
})
```

Available configurations: https://vitest.dev/config/
