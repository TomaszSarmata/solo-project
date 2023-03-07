export default function handler(req, res) {
  const books = [
    {
      title: "Games of Thrones",
      author: "George RR Martin",
    },
    {
      title: "Atomic Habits",
      author: "James Clear",
    },
    {
      title: "Born a Crime",
      author: "Trevor Noah",
    },
  ];

  setTimeout(() => {
    res.json(books);
  }, 3000);
}
