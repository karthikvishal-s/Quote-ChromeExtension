const quotes = [
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "Don't watch the clock; do what it does. Keep going.",
    "Believe you can and you're halfway there.",
    "Push yourself, because no one else is going to do it for you."
  ];
  
  document.getElementById("quote").innerText =
    quotes[Math.floor(Math.random() * quotes.length)];
  