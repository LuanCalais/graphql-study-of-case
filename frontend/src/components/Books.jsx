import { gql, useQuery } from '@apollo/client';
import { Typography, Paper } from '@mui/material';

const GET_BOOKS = gql`
  query {
    books {
      id
      title
      author {
        name
      }
    }
  }
`;

export default function Books() {
  const { data, loading, error } = useQuery(GET_BOOKS);

  if (loading) return <p>Loading books...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <Paper className="p-4 my-4">
      <Typography variant="h5" gutterBottom>Books</Typography>
      <ul className="list-disc list-inside">
        {data.books.map((book) => (
          <li key={book.id}>
            "{book.title}" by {book.author.name}
          </li>
        ))}
      </ul>
    </Paper>
  );
}
