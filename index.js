const tutorials = [
    
const titleCased = () => 
  return tutorials
  return tutorials
  function titleCased(){
    const capTutorials = tutorials.map(t => {
      const words = t.split(" ").map(w => {
        return w.charAt(0).toUpperCase() + w.slice(1);
      }).join(" ");
      console.log(words);
      return words; 
    })
    return capTutorials;
  }
];

