url = "https://raw.githubusercontent.com/b-mcavoy/datasets/main/Language%20%26%20Literature/Most%20Spoken%20Languages%20Worldwide.csv"
var language = getColumn (url, 2);
var genre = getColumn (url, 6);
var popularity = getColumn (url, 1);

function getLanguage(){


    var spokenLanguage = document.getElementById("spoken").value;
    var rank = document.getElementById("rank").value;
    var branch = document.getElementById("branch").value;
    console.log(spokenLanguage);
    console.log(rank);
    console.log(branch);
    var matches = [];
    
    for(var i = 0; i < language.length; i++){
        
        if (!spokenLanguage.includes(language[i]) && parseFloat(popularity[i]) > rank && branch == genre[i] ){
            
            matches.push(language[i])
        }
    }
    console.log(matches);
    document.getElementById("match").innerHTML = matches.join("<br><br>");
    
    }
   
