url = "https://raw.githubusercontent.com/b-mcavoy/datasets/main/Language%20%26%20Literature/Most%20Spoken%20Languages%20Worldwide.csv"
var language = getColumn (url, 2);
var genre = getColumn (url, 6);
var popularity = getColumn (url, 1);

function getLanguage(){


    var spokenLanguage = document.getElementById("spoken").value;
    var rank = document.getElementById("rank").value;
    var branch = document.getElementById("branch").value;
    
    var matches = [];
    
    for(var i = 0; i < language.length; i++){
        if (!spokenLanguage.includes(language[i]) && popularity[i] > rank && branch == genre[i] ){
            matches.push(matches[i])
        }
    }
    
    document.getElementById("match").innerHTML = output;
    
    }
   
    
