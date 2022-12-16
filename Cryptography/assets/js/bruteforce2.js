  function dictionaryAtk(){
  const fileUrl = 'assets/txt/dictionary.txt';
  var userInput = document.getElementById("setBinput").value;

  fetch(fileUrl)
    .then(response => response.text())
    .then(text => {
      const blob = new Blob([text], { type: 'text/plain' });
      const reader = new FileReader();
      reader.onload = function() {
        const lines = this.result.split('\n');
        
        console.log(userInput)
         
        // Search for a match in the `lines` array
        for (let i = 0; i < lines.length; i++) {
          if (lines[i] === userInput) {
            window.alert('Match found!');
            break;
          }
        }
      };
      reader.readAsText(blob);
    });
  }