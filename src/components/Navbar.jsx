
import { AppBar, Toolbar, Typography, Button, Stack } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Library System
        </Typography>
        <Stack direction="row" spacing={2}>
          <Button color="inherit" component={Link} to="/">Home</Button>
          <Button color="inherit" component={Link} to="/add">Add Book</Button>
          <Button color="inherit" component={Link} to="/view">View Books</Button>
          <Button color="inherit" component={Link} to="/borrow">Borrow Book</Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
