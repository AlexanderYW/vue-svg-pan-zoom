
import { app } from "@storybook/vue3";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  statuses: {
    wonky: '#8b008b',
    perfect: '#2e8b57',
    'WIP, but works': '#2e8b57',
    draft: '#a3a3a3',
    'run away': '#dc143c',
  }
}