import { theme } from './theme';

export function initDesignSystem() {
  const root = document.documentElement;
  
  // Inject Colors
  Object.entries(theme.colors).forEach(([key, value]) => {
    root.style.setProperty(`--${key}`, value);
  });
  
  // We can also inject other tokens if needed, but for Tailwind v4 we will map colors in CSS
  // and mostly use standard utility classes or extend them if requested.
  // The user explicitly requested colors to be CSS variables like --primary.
}
