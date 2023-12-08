const MAX_PREVIEW_LENGTH = 35

export const setEllipsis = (
  text: string,
  maxLength: number = MAX_PREVIEW_LENGTH
): string =>
  text?.length > maxLength ? text.substring(0, maxLength) + '...' : text
