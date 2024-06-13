export const getValuesFromEnum = (
  enumObject: Record<string, string>
): string[] => {
  return Object.values(enumObject)
}

export const getKeysFromEnum = (
  enumObject: Record<string, string>
): string[] => {
  return Object.keys(enumObject)
}

export const getEnumMapping = (
  enumObject: Record<string, string>
): Record<string, string> => {
  const mapping: Record<string, string> = {}
  for (const key of Object.keys(enumObject)) {
    mapping[key] = enumObject[key]
  }
  return mapping
}
