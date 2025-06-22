import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import "./ContentLayout.css"; 

export default function ContentLayout({ children }) {
  return (
    <Box className="content-layout">
      <Paper elevation={3} sx={{ p: 4 }}>
        {children}
      </Paper>
    </Box>
  );
}
