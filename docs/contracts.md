# UI capability contract

## Owns

The UI capability owns reusable presentation primitives, semantic presentation tokens, accessibility-safe presentation defaults, and framework-independent theme validation/application.

## Does not own

The UI capability does not own application navigation data, routes, authentication, authorization, accounts, user/profile persistence, theme persistence, or provider-specific storage.

## Semantic token grammar

The recovered Theme Manager's semantic indirection is retained and refined:

- **fill** — surfaces and backgrounds;
- **pen** — text, icons and foreground content;
- **edge** — borders, separators and focus boundaries.

Consumers MUST prefer semantic tokens over raw colour values. Tailwind or another styling framework may consume these tokens but is not part of the public architectural contract.

The token namespace also covers typography, spacing, sizing/density, radius, focus and motion. Theme customisation MUST preserve accessible presentation; arbitrary unvalidated CSS is not a supported theme contract.

## Theme boundary

A `UiThemeDefinition` contains presentation data only. Persistence, ownership and authorization belong to separate capabilities.

## Accessibility

Public primitives target WCAG 2.2 AA. Components MUST preserve semantic HTML, keyboard operation, visible focus, accessible naming where applicable, reflow and reduced-motion behaviour. Tests and acceptance criteria are required as the library grows.
