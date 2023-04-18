export const formatDate = (value: string) => {
  const [year, month, day] = value.split('-');

  return `${day}/${month}/${year}`
}