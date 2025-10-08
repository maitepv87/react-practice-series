# Onboarding Notes – API Integration

This module demonstrates how to integrate multiple protocols in React with editorial clarity.

## How to add a new provider

1. Create the file inside `providers/` under the appropriate protocol folder
2. Export the function in `providers/index.ts`
3. Add the case to `integrationRouter.ts`
4. Add the option to `ProviderSelector.tsx`

## How to handle editorial errors

- Use clear and empathetic messages (`Could not retrieve...`)
- Avoid exposing technical errors to the end user
- Use `try/catch` in every provider

## How to scale

- Authentication: add headers like `Authorization: Bearer ...`
- Pagination: use `page`, `limit`, `offset` in REST or GraphQL
- Multiple responses: transform arrays into readable lists

## Recommendations

- Maintain modularity by protocol
- Document each provider with clarity
- Use this module as a foundation for interviews or technical onboarding
