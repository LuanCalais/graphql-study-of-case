import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export default function NotFound() {
  return (
    <Box sx={{ textAlign: "center", mt: 10 }}>
      <Typography variant="h2" color="error">
        404
      </Typography>
      <Typography variant="h5">Página não encontrada</Typography>
    </Box>
  );
}
