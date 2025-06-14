import { gql, useQuery } from '@apollo/client';
import { Typography, Paper } from '@mui/material';

const GET_AUTHORS = gql`
  query {
    authors {
      id
      name
    }
  }
`;

export default function Authors() {
  const { data, loading, error } = useQuery(GET_AUTHORS);

  if (loading) return <p>Loading authors...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <Paper className="p-4 my-4">
      <Typography variant="h5" gutterBottom>Authors</Typography>
      <ul className="list-disc list-inside">
        {data.authors.map((author) => (
          <li key={author.id}>{author.name}</li>
        ))}
      </ul>
    </Paper>
  );
}
