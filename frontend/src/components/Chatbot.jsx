import React, { useState } from 'react';
import axios from 'axios';

export default function Chatbot() {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) {
      setResponse("Error: Prompt is required");
      return;
    }

    setLoading(true);
    try {
      const res = await axios.post('/api/ai', { prompt: input });
      setResponse(res.data.response);
    } catch (error) {
      console.error("Error:", error);
      if (error.response) {
        // Server responded with a status code outside 2xx
        setResponse(`Error: ${error.response.status} - ${error.response.data.error || 'Unknown error'}`);
      } else if (error.request) {
        // No response received from the server
        setResponse("Error: No response received from the server.");
      } else {
        // Something went wrong in setting up the request
        setResponse(`Error: ${error.message}`);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="chatbot">
      <textarea
        placeholder="Ask about the news..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleSend} disabled={loading}>
        {loading ? "Loading..." : "Send"}
      </button>
      {response && <div className="response">{response}</div>}
    </div>
  );
}