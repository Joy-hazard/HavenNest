document.addEventListener('DOMContentLoaded', () => {
    const chatbotButton = document.getElementById('chatbotButton');
    const chatbotCanvas = document.getElementById('chatbotCanvas');
    const closeChatbot = document.getElementById('closeChatbot');
    const sendMessageButton = document.getElementById('sendMessage');
    const chatWindow = document.getElementById('chatWindow');
    const userMessageInput = document.getElementById('userMessage');

    let messages = [
      { sender: 'bot', text: 'Hi! How can I assist you today?' }
    ];

    const renderMessages = () => {
      chatWindow.innerHTML = '';
      messages.forEach((msg) => {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('chat-message', msg.sender === 'bot' ? 'bot-message' : 'user-message');
        messageDiv.textContent = msg.text;
        chatWindow.appendChild(messageDiv);
      });
      chatWindow.scrollTop = chatWindow.scrollHeight;
    };

    const handleSendMessage = () => {
      const userMessage = userMessageInput.value;
      if (userMessage.trim()) {
        messages.push({ sender: 'user', text: userMessage });
        renderMessages();

        setTimeout(() => {
          const botResponse = getBotResponse(userMessage);
          messages.push({ sender: 'bot', text: botResponse });
          renderMessages();
        }, 1000);
      }
      userMessageInput.value = '';
    };

    const getBotResponse = (message) => {
      if (message.toLowerCase().includes('vaccine')) {
        return 'You can apply for a property by navigating to the "Contact Us" page.';
      } else {
        return "I'm here to assist you with property-related information.";
      }
    };

    chatbotButton.addEventListener('click', () => {
      chatbotCanvas.style.display = 'flex';
    });

    closeChatbot.addEventListener('click', () => {
      chatbotCanvas.style.display = 'none';
    });

    sendMessageButton.addEventListener('click', handleSendMessage);

    // Handle enter key for sending messages
    userMessageInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        handleSendMessage();
      }
    });

    // Initial render
    renderMessages();
  });
