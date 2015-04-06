
<script>
var moonWalkers = [
  "Neil Armstrong",
  "Buzz Aldrin",
  "Pete Conrad",
  "Alan Bean",
  "Alan Shepard",
  "Edgar Mitchell",
  "David Scott",
  "James Irwin",
  "John Young",
  "Charles Duke",
  "Eugene Cernan",
  "Harrison Schmitt"
];

function alphabetizer(names) {
    // Your code goes here!
    
    for(i = 0 ; i < names.length ; i++ ){
      
        astronat = names[i];
        name = astronat.slice(0,astronat.search(" "));
        surname = astronat.slice(astronat.search(" ") + 1 , astronat.length);
        names[i] = surname + ", " + name;
        console.log(names[i]);

    };
    names.sort();
    return names;
};

// Try logging your results to test your code!

console.log(alphabetizer(moonWalkers));
</script>