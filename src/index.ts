import { UserConfig } from 'vitest/config'

export function defineTestConfig(config: Partial<UserConfig['test']> = {}): UserConfig['test'] {
  return {
    globals: true,
    clearMocks: true,
    mockReset: true,
    restoreMocks: true,
    include: ['tests/**/*.test.ts*'],
    exclude: ['tests/**/*.snap'],
    coverage: {
      provider: 'v8',
      exclude: ['**/mocks.ts', '**/index.ts', 'tests/**', 'types/**'],
    },
    ...config,
  }
}
