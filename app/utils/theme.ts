export type UiThemeMode = 'light' | 'dark' | 'system'

export interface UiThemeDefinition {
  id: string
  label: string
  mode: UiThemeMode
  tokens?: Readonly<Record<`--ui-${string}`, string>>
}

const SAFE_TOKEN_NAME = /^--ui-[a-z0-9-]+$/
const UNSAFE_VALUE = /[;{}]|url\s*\(|@import|expression\s*\(/i

export function validateUiTheme(theme: UiThemeDefinition): UiThemeDefinition {
  if (!theme.id.trim() || !theme.label.trim()) {
    throw new TypeError('Theme id and label are required')
  }

  for (const [name, value] of Object.entries(theme.tokens ?? {})) {
    if (!SAFE_TOKEN_NAME.test(name) || !value.trim() || UNSAFE_VALUE.test(value)) {
      throw new TypeError(`Invalid UI theme token: ${name}`)
    }
  }

  return theme
}

export function applyUiTheme(
  theme: UiThemeDefinition,
  root: HTMLElement = document.documentElement,
): void {
  const valid = validateUiTheme(theme)
  root.dataset.uiTheme = valid.id
  root.style.colorScheme = valid.mode === 'system' ? 'light dark' : valid.mode

  for (const [name, value] of Object.entries(valid.tokens ?? {})) {
    root.style.setProperty(name, value)
  }
}

export function resetUiTheme(
  root: HTMLElement = document.documentElement,
): void {
  delete root.dataset.uiTheme
  root.style.removeProperty('color-scheme')

  for (const name of [...root.style]) {
    if (name.startsWith('--ui-')) root.style.removeProperty(name)
  }
}
