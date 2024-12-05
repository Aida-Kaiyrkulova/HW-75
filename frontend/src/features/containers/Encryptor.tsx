import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks.ts';
import { RootState } from '../../app/store.ts';
import { decodeMessage, encodeMessage } from '../encryptor/encryptorThunk.ts';
import { Box, Button, CircularProgress, TextField, Typography } from '@mui/material';

const Encryptor = () => {
  const dispatch = useAppDispatch();
  const { fetchLoading, error } = useAppSelector((state: RootState) => state.encryptor);

  const [password, setPassword] = useState('');
  const [messageToEncode, setMessageToEncode] = useState('');
  const [messageToDecode, setMessageToDecode] = useState('');

  const handleEncode = () => {
    if (password && messageToEncode) {
      const requestData = { password, message: messageToEncode };
      dispatch(encodeMessage(requestData))
        .unwrap()
        .then((response) => {
          setMessageToDecode(response);
        })
        .catch(() => setMessageToDecode(''));
    }
  };

  const handleDecode = () => {
    if (password && messageToDecode) {
      const requestData = { password, message: messageToDecode };
      dispatch(decodeMessage(requestData))
        .unwrap()
        .then((response) => {
          setMessageToEncode(response);
        })
        .catch(() => setMessageToEncode(''));
    }
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 2 }}>
      <Typography variant="h4" gutterBottom>
        Encryptor App
      </Typography>

      <TextField
        label="Password"
        variant="outlined"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        fullWidth
        sx={{ marginBottom: 2 }}
      />

      <TextField
        label="Message to Encode"
        variant="outlined"
        value={messageToEncode}
        onChange={(e) => setMessageToEncode(e.target.value)}
        fullWidth
        multiline
        rows={4}
        sx={{ marginBottom: 2 }}
      />

      <Button
        variant="contained"
        onClick={handleEncode}
        sx={{ marginBottom: 2 }}
        disabled={fetchLoading || !password || !messageToEncode}
      >
        {fetchLoading ? <CircularProgress size={24} /> : 'Encrypt'}
      </Button>

      <TextField
        label="Message to Decode"
        variant="outlined"
        value={messageToDecode}
        onChange={(e) => setMessageToDecode(e.target.value)}
        fullWidth
        multiline
        rows={4}
        sx={{ marginBottom: 2 }}
      />

      <Button
        variant="contained"
        onClick={handleDecode}
        sx={{ marginBottom: 2 }}
        disabled={fetchLoading || !password || !messageToDecode}
      >
        {fetchLoading ? <CircularProgress size={24} /> : 'Decrypt'}
      </Button>

      {error && <Typography color="error">{error}</Typography>}
    </Box>
  );
};

export default Encryptor;