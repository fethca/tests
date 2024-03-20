import { InlineConfig } from 'vitest'

export function defineTestConfig(config: Partial<InlineConfig> = {}): InlineConfig {
  return {
    globals: true,
    clearMocks: true,
    mockReset: true,
    restoreMocks: true,
    include: ['tests/**/*.test.ts*'],
    exclude: ['tests/**/*.snap'],
    coverage: {
      provider: 'v8',
      include: ['src/**'],
      exclude: ['**/mocks.ts', '**/index.ts'],
    },
    ...config,
  }
}
