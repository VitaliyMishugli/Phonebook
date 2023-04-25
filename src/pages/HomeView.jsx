import {Typography, Paper } from '@mui/material';

const HomeView = () => {
  return (
    <Paper sx={{
      padding: '20px',
      margin: '20px auto',
      width: '800px',
      backgroundColor: 'secondary.main',

    }}>
      <Typography variant='h3' sx={{minWidth: '200px'}}>
        Hi!
        You can use this service to store and search your personal contacts. Enjoy your job!
      </Typography>
    </Paper>
  )
}

export default HomeView;