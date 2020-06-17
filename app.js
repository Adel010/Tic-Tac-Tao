let mainGame = document.getElementById("mainGame");
let turn = true;
let row1 = 0;
let row2 = 0;
let row3 = 0;
let col1 = 0;
let col2 = 0;
let col3 = 0;
let x1 = 0;
let x2 = 0;


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
                col1 = turn == true ? col1 + 1 : col1 - 1;//--------------
                
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
            //third raw and it cases
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
        }
        turn = !turn;
        console.log(row1,col1,x1,col2,col3,x2);
    }

}