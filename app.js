let mainGame = document.getElementById("mainGame");

let case12 = document.getElementById("12");
let case11 = document.getElementById("11");
let case13 = document.getElementById("13");

let case21 = document.getElementById("21");
let case22 = document.getElementById("22");
let case23 = document.getElementById("23");

let case31 = document.getElementById("31");
let case32 = document.getElementById("32");
let case33 = document.getElementById("33");

let turn = true;
let row1 = 0;
let row2 = 0;
let row3 = 0;
let col1 = 0;
let col2 = 0;
let col3 = 0;
let x1 = 0;
let x2 = 0;

let countTab = [];
let didWin = false;


mainGame.addEventListener("click",clickCapture);
function clickCapture(e){
    if(e.target.innerHTML == ""){
        e.target.innerHTML = turn == true ? "O" : "X";
        
        switch(e.target.id){
            //first raw and it cases
            case "11":
                row1 = turn == true ? row1 + 1 : row1 - 1;
                col1 = turn == true ? col1 + 1 : col1 - 1;
                x1 = turn == true ? x1 + 1 : x1 - 1;
            break;
            case "12":
                row1 = turn == true ? row1 + 1 : row1 - 1;
                col2 = turn == true ? col2 + 1 : col2 - 1;
            break;
            case "13":
                row1 = turn == true ? row1 + 1 : row1 - 1;
                col3 = turn == true ? col3 + 1 : col3 - 1;
                x2 = turn == true ? x2 + 1 : x2 - 1;
            break;
            //second raw and it cases
            case "21":
                row2 = turn == true ? row2 + 1 : row2 - 1; 
                col1 = turn == true ? col1 + 1 : col1 - 1;
                
            break;
            case "22":
                row2 = turn == true ? row2 + 1 : row2 - 1; 
                col2 = turn == true ? col2 + 1 : col2 - 1;
                x1 = turn == true ? x1 + 1 : x1 - 1;
                x2 = turn == true ? x2 + 1 : x2 - 1;
            break;
            case "23":
                row2 = turn == true ? row2 + 1 : row2 - 1; 
                col3 = turn == true ? col3 + 1 : col3 - 1;
            break;
            //third raw and it cases
            case "31":
                row3 = turn == true ? row3 + 1 : row3 - 1;
                col1 = turn == true ? col1 + 1 : col1 - 1;
                x2 = turn == true ? x2 + 1 : x2 - 1;
            break;
            case "32":
                row3 = turn == true ? row3 + 1 : row3 - 1;
                col2 = turn == true ? col2 + 1 : col2 - 1;
            break;
            case "33":
                row3 = turn == true ? row3 + 1 : row3 - 1;
                col3 = turn == true ? col3 + 1 : col3 - 1;
                x1 = turn == true ? x1 + 1 : x1 - 1;
            break;
        }
        
        countTab = [row1,row2,row3,col1,col2,col3,x1,x2];
        didWin = countTab.some(elem => Math.abs(elem) == 3);
        // console.log(row1,row2,row3,col1,col2,col3,x1,x2,didWin,countTab);
        if(didWin){
            case12.innerHTML = turn == true ? "<span style='color:blue;'>O</span>" 
            : "<span style='color:red;'>X</span>";
            case21.innerHTML = "W";
            case22.innerHTML = "I";
            case23.innerHTML = "N";
            
            case31.innerHTML = "";
            case32.innerHTML = "";
            case33.innerHTML = "";

            case11.innerHTML = "";
            case13.innerHTML = "";
        }
        turn = !turn;
    }

}