export const fetchHygraphQuery = async <T>(
  query: string,
  revalidate?: number
): Promise<T> => {
  const url = process.env.HYGRAPH_URL ?? '';
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${process.env.HYGRAPH_TOKEN}`,
    },
    body: JSON.stringify({
      query,
      next: { revalidate },
    }),
  });

  const { data } = await response.json();

  return data;
};
