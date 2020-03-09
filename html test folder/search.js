const option1 = document.getElementById("option1");
const option2 = document.getElementById("option2");
const searchWord = document.getElementById("search-word");
const enterButton = document.getElementById("begin-search");
const inputText = document.getElementById("input-text");

function wordPosition(input) {
    let re = new RegExp(input)
}

function wordCount(input) {
    let re = new RegExp(input);
    alert(re.test(inputText));
    
}

function options(input) {
    if(input != null) {
        if(option1.checked == true) wordPosition(input);
        else if(option2.checked == true) wordCount(input);
        else alert("No option has been selected");
    }
    else alert("No search word has been given");
}

function main() {
    options(searchWord.value);
}

