export const createIDFromName = (name: string) => {
  return name.toLowerCase().replace(" ", "-");
};
