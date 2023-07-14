var qoutArray = [
  {
    author: "Oscar Wilde",
    quote: "Be yourself; everyone else is already taken.",
  },
  {
    author: "Marilyn Monroe",
    quote:
      "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best",
  },
  {
    author: " Albert Einstein",
    quote:
      "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
  },
  {
    author: "Frank Zappa",
    quote: "So many books, so little time.",
  },
  {
    author: "Marcus Tullius Cicero",
    quote: "A room without books is like a body without a soul.",
  },
  {
    author: "Dr. Seuss",
    quote:
      "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
  },
  {
    author: "Mae West",
    quote: "You only live once, but if you do it right, once is enough.",
  },
  {
    author: "Robert Frost",
    quote: "Beware of what you become in pursuit of what you want.",
  },
  {
    author: "J.K. Rowling, Harry Potter and the Goblet of Fire",
    quote:
      "If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.",
  },
  {
    author: "Mark Twain",
    quote: "If you tell the truth, you don't have to remember anything.",
  },
  {
    author: "Elbert Hubbard",
    quote: "A friend is someone who knows all about you and still loves you.",
  },
];

function test() {
  var x = Math.floor(Math.random() * qoutArray.length);
  console.log(x);
  document.getElementById("qoute").innerHTML = `"${qoutArray[x].quote}"`;
  document.getElementById("author").innerHTML = `"${qoutArray[x].author}"`;
}
