import express from "express";

const app = express();
const port = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.send("Server is ready");
});

app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      title: "Programmer Humor",
      content:
        "Why do programmers prefer dark mode? Because light attracts bugs!",
    },
    {
      id: 2,
      title: "Database Pun",
      content:
        "Why did the SQL query go to therapy? It had too many inner joins!",
    },
    {
      id: 3,
      title: "JavaScript Joke",
      content:
        "Why did the JavaScript developer go broke? Because he kept using 'var' instead of 'let'!",
    },
    {
      id: 4,
      title: "Computer Joke",
      content: "Why did the computer get cold? It forgot to close its Windows!",
    },
    {
      id: 5,
      title: "Bug Fixing",
      content:
        "Debugging: Being the detective in a crime movie where you are also the murderer.",
    },
    {
      id: 6,
      title: "Frontend Developer Life",
      content:
        "CSS is like a relationship — sometimes it works, sometimes it doesn’t, and you never know why.",
    },
    {
      id: 7,
      title: "AI Joke",
      content: "Why did the AI cross the road? To optimize the other side!",
    },
    {
      id: 8,
      title: "Password Joke",
      content:
        "I changed my password to 'incorrect'. So whenever I forget, the computer reminds me — 'Your password is incorrect.'",
    },
  ];
  res.send(jokes);
});

app.listen(port, () => {
  console.log(`server listen at port ${port}`);
});
