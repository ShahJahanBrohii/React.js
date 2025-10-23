function Logo(){
    const userName = "Shah Jahan";
    let n1=10;
    let n2=200;

    const sum = (num1,num2) =>{
        return num1*num2;
    }


    const performOperation = (num1,num2,operation) =>{
        if(operation=="+")
            return num1+num2
        else if(operation=="-")
            return num1-num2
        else if(operation=="*")
            return num1*num2
        else if(operation=="/")
            return num1/num2

        return "Invalid Operation"
    }


    return(
        <div>
        <h1>Logo will be displayed here {userName}...</h1>
        <h2>{`The sum of ${n1} & ${n2} => ${n1+n2}`}</h2>
        {/* {`n1 => ${n1}`} */}

        {/* {`The product  => ${sum(12,10)}`} */}

        {performOperation(12,10,"*")}
        <About/>
        </div>
    )
}


// Component inside a Component
function About(){
    return(
        <h2>The logo is about REACT</h2>
    )
}


export default Logo


export function Home(){
    return(
        <h2>The is HOME</h2>
    )
}

export function Contact(){
    return(
        <h2>You can contact us...</h2>
    )
}
