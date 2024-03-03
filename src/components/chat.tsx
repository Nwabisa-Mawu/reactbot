/* eslint-disable */
import React, { useState } from 'react';
import OpenAI from "openai";
import { TextField, Button, Container, Grid } from '@mui/material';
import Message from './message';

/**
 * used by the api openai class to initialise the openai client with
 * the api key.
 */
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
    dangerouslyAllowBrowser: true
  });

const Chat: React.FC = () => {
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState<string>('');

  const handleSendMessage = () => {
    setMessages([...messages, input]);
    setInput('');
    // Add logic to handle chatbot response here
  };

  return (
    <Container>
      <Grid container direction="column" spacing={2}>
        <Grid item>
          {messages.map((message, index) => (
            <Message key={index} text={message} isUser={index % 2 === 0} />
          ))}
        </Grid>
        <Grid item>
          <TextField
            label="Type your message"
            variant="outlined"
            fullWidth
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </Grid>
        <Grid item>
          <Button variant="contained" color="primary" onClick={handleSendMessage}>
            Send
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Chat;