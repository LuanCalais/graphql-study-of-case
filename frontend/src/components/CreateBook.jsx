import { gql, useMutation, useQuery } from "@apollo/client";
import { TextField, Button, MenuItem, Paper, Typography } from "@mui/material";
import { useState } from "react";

const CREATE_BOOK = gql`
  mutation CreateBook($title: String!, $authorId: Int!) {
    createBook(title: $title, authorId: $authorId) {
      id
      title
    }
  }
`;

const GET_AUTHORS = gql`
  query {
    authors {
      id
      name
    }
  }
`;

export default function CreateBook() {
  const [title, setTitle] = useState("");
  const [authorId, setAuthorId] = useState("");
  const [createBook] = useMutation(CREATE_BOOK, {
    refetchQueries: ["GetBooks"],
  });
  const { data } = useQuery(GET_AUTHORS);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createBook({ variables: { title, authorId: parseInt(authorId) } });
    alert("Book created!");
    setTitle("");
    setAuthorId("");
  };

  return (
    <Paper className="p-4 my-4">
      <Typography variant="h5" gutterBottom>
        Add Book
      </Typography>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <TextField
          label="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <TextField
          select
          label="Author"
          value={authorId}
          onChange={(e) => setAuthorId(e.target.value)}
          required
        >
          {data?.authors.map((a) => (
            <MenuItem key={a.id} value={a.id}>
              {a.name}
            </MenuItem>
          ))}
        </TextField>
        <Button variant="contained" type="submit">
          Create
        </Button>
      </form>
    </Paper>
  );
}
