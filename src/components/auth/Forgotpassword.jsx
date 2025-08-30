import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import OutlinedInput from '@mui/material/OutlinedInput';

function ForgotPassword({ open, handleClose }) {
  const [email, setEmail] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const [message, setMessage] = React.useState('');

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setMessage('');
    try {
      // Check if user exists in local db.json
      const response = await fetch(`http://localhost:4000/users?email=${email}`);
      const usersByEmail = await response.json();
      const response2 = await fetch(`http://localhost:4000/users?username=${email}`);
      const usersByUsername = await response2.json();
      const user = usersByEmail[0] || usersByUsername[0];
      if (user) {
        // Simulate reset request
        await fetch('http://localhost:4000/resetRequests', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ userId: user.id, email: user.email, username: user.username, requestedAt: new Date().toISOString() })
        });
        setMessage('A reset link will be sent to your email.');
      } else {
        setMessage('No user found with that email or user ID.');
      }
    } catch (error) {
      setMessage('Error: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      slotProps={{
        paper: {
          component: 'form',
          onSubmit: handleSubmit,
          sx: { backgroundImage: 'none' },
        },
      }}
    >
      <DialogTitle>Reset password</DialogTitle>
      <DialogContent
        sx={{ display: 'flex', flexDirection: 'column', gap: 2, width: '100%' }}
      >
        <DialogContentText>
          Enter your account&apos;s email address or user ID, and we&apos;ll send you a link
          to reset your password.
        </DialogContentText>
        <OutlinedInput
          autoFocus
          required
          margin="dense"
          id="email"
          name="email"
          placeholder="Email address or User ID"
          type="text"
          fullWidth
          value={email}
          onChange={handleChange}
        />
        {message && <DialogContentText color="error">{message}</DialogContentText>}
      </DialogContent>
      <DialogActions sx={{ pb: 3, px: 3 }}>
        <Button onClick={handleClose} disabled={loading}>
          Cancel
        </Button>
        <Button variant="contained" type="submit" disabled={loading}>
          {loading ? 'Sending...' : 'Continue'}
        </Button>
      </DialogActions>
    </Dialog>
  );
}

ForgotPassword.propTypes = {
  handleClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

export default ForgotPassword;
