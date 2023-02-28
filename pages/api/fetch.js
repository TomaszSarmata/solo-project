async function demo() {
  const data = await fetch(`https://cat-fact.herokuapp.com/facts`);
  const response = await data.json();
  console.log(response);
}

demo();
