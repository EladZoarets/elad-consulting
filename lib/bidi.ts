export function hasHebrew(text: string): boolean {
  return /[\u0590-\u05FF]/.test(text);
}
