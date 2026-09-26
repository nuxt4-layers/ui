import { describe, expect, it } from 'vitest'
import { validateUiTheme } from '../app/utils/theme'

describe('validateUiTheme', () => {
  it('accepts semantic UI token overrides', () => {
    const theme = validateUiTheme({
      id: 'calm',
      label: 'Calm',
      mode: 'dark',
      tokens: { '--ui-fill-page': '#111827' },
    })

    expect(theme.id).toBe('calm')
  })

  it.each([
    ['--other-token', '#fff'],
    ['--ui-fill-page', 'red; background: url(https://example.invalid)'],
    ['--ui-fill-page', '@import "bad.css"'],
  ])('rejects unsafe token input %s', (name, value) => {
    expect(() => validateUiTheme({
      id: 'unsafe',
      label: 'Unsafe',
      mode: 'light',
      tokens: { [name]: value },
    })).toThrow(TypeError)
  })
})
