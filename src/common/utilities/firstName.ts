export function firstName(fullName: string): string {
  if (!fullName) {
    return '';
  }

  return fullName.split(' ')[0];
}
