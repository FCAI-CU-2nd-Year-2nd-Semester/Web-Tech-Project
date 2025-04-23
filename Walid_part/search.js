const books=[ 
   "cleanCoder",
    "clean code","Clean Architecture",
    "Cook What You Have",
    "concepts in programming languages",
    "control your mind",
    "Investing for Kids",
    "Java script the good parts",
    "Juicing for Beginners",
    "Ramen Obsession",
    "Rich Dad Poor Dad",
    "Savor",
    "Speed Reading",
    "The Flavor Bible",
    "The Humanity Factor",
    "The Power of Habit",
    "atomic habits L",
    "i don't love you any more",
    "software engineering",
    "thank you for leaving",
    "the 48 law of power",
    "the c programming language 2nd edition",
    "the power of now",
    "the python workshop",
    "twisted love"
  ];

  function searchbook(keyword){
    keyword = keyword.trim();
    const result=books.filter (title=>(title.toLowerCase()).includes (keyword.toLowerCase()));
    return result;
  }

  const searchInput = document.getElementById("search-input");
  const searchResults = document.getElementById("search-results");

searchInput.addEventListener("input",()=>{

const keyword=searchInput.value.trim();
const result=searchbook(keyword);

searchResults.innerHTML = "";

if (keyword==="") return;

if (result.length === 0){
const li= document.createElement("li");
li.textContent="No books found";
searchResults.appendChild(li);
}
else{
  result.forEach(title => {
    const li =document.createElement("li");
    li.textContent=title;
    searchResults.appendChild(li)
  });
  
}

});
