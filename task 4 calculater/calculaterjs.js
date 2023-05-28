
/*Creates empty string*/
let string = "";
/*Creates buttons array*/
let buttons=document.querySelectorAll('.button');



/*selecting each element from buttons array and defining the function on click*/
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(e)=>{
        /*if ='s button is pressed*/
        if(e.target.innerHTML=="="){
            /*to evaluate string*/
            string = eval(string);
            document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML=="C"){
            /*to evaluate string*/
            string = "";
            document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML=="X<sup>2</sup>"){
            /*to evaluate string*/
            string = Math.pow(string,2);
            document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML=="√x"){
            /*to evaluate string*/
            string = Math.pow(string,1/2);
            document.querySelector('input').value = string;
        }
        
        else{
        console.log(e.target);
        /* */
        /*Adding in string*/
        string=string+e.target.innerHTML;
        /*to display numbers we change value of input each time we press a button*/
        document.querySelector('input').value = string;}
    })
})