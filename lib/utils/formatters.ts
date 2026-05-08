export function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(' ');
}

export function clampPercent(value: number) {
  return Math.max(0, Math.min(100, value));
}
