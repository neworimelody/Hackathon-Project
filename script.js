//This links the url dataset to this project
url = "https://raw.githubusercontent.com/b-mcavoy/datasets/main/Language%20%26%20Literature/Most%20Spoken%20Languages%20Worldwide.csv"
//These variables store the different columns of data that we need 
//such as the different languages, which branch they fall under and how popular they are
//We use these to help us rule out the languages that they wouldn't be interested in and add the ones that they would be interested in
//This variable is the different languages we use it to rule out languages that they already speak
var language = getColumn (url, 2);
//This variable shows the different branches. We use it so match together the branches that they want their language to fall under 
var genre = getColumn (url, 6);
//this variable is the list of how popular each language is and we use it to get rid of any options that are too popular
var popularity = getColumn (url, 1);

//This creates the function with different conditions to find which language users should learn 
function getLanguage(){

//these variables link to the html and gather the data when its typed into the preview of the html
    var spokenLanguage = document.getElementById("spoken").value;
    var rank = document.getElementById("rank").value;
    var branch = document.getElementById("branch").value;
    //This console.log's the inputs in the preview but it's not necessary
    console.log(spokenLanguage);
    console.log(rank);
    console.log(branch);
    //this creates an empty variable so that a new list of matches can be made each time
    var matches = [];
    //this is the for loop that loops through the different languages to find which of the inputted data matches
    for(var i = 0; i < language.length; i++){
        //this is the if statement that shows which data should be included when
        //If the spoken language isn't included and the popularity and the branch matches up
        if (!spokenLanguage.includes(language[i]) && parseFloat(popularity[i]) > rank && branch == genre[i] ){
            //then add this to to the list of matches
            matches.push(language[i])
        }
    }
    //this console.log's the matches but it's not necessary
    console.log(matches);
    //this links that matches variable to the HTML so that it prints in the preview
    document.getElementById("match").innerHTML = matches.join("<br><br>");
    
    }
   
