export const formatDate = (date) => {
  const formattedDate = new Date(date);

  if (formattedDate)
    return formattedDate.toLocaleDateString("pt-BR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
};
