
import { AppBar, Toolbar, Typography, Button, Stack } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar  style={{ backgroundColor: blueGrey[900] }}> 
        <Toolbar color='error'>
          <Typography variant='h4' color='black' 
           sx={{ 
            color: 'khaki', 
            fontFamily: 'Georgia, serif', // Change to any preferred font
            flexGrow: 1
          }}
          
          >LibraTrack
        </Typography>
        <Stack direction="row" spacing={2}>
          <Button color="inherit" component={Link} to="/">Home</Button>
          <Button color="inherit" component={Link} to="/">Login</Button>
          <Button color="inherit" component={Link} to="/add">Add Book</Button>
          <Button color="inherit" component={Link} to="/view">View Books</Button>
          <Button color="inherit" component={Link} to="/borrow">Borrow Book</Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
