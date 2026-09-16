export function getImg(input: string | undefined | null, fallback = '/images/cropped-Back-to-Nature-logo.png'): string {
  if (!input) return fallback;
  if (input.startsWith('http://') || input.startsWith('https://')) {
    if (!input.includes('backtonature.cy')) return input;
  }
  const cleanPath = input.split('?')[0].split('#')[0];
  const parts = cleanPath.split(/[/\\]/);
  const filename = parts[parts.length - 1];
  return filename ? `/images/${filename}` : fallback;
}
