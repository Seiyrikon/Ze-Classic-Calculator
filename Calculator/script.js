window.addEventListener("DOMContentLoaded", (e) => {
    

    function inputContainer(e){
        document.getElementById("input-container").innerHTML = e;
    }

    let inputCollection = {
                inputs: "",
                operator: "",
                result: ""
            }

    const numberButtons = document.querySelectorAll("button[data-target]");
    const numberOperators = document.querySelectorAll("button[data-operator]");

    numberOperators.forEach((button) => {
        button.addEventListener("click", (e) => {
            
            
            const operator = e.currentTarget;
            operatorValue = operator.getAttribute("data-operator");

            // let temp = operatorValue;
            inputCollection.operator += operatorValue;

            inputCollection.inputs += " "+inputCollection.operator+" ";

            inputCollection.result += " "+operatorValue+" ";

            inputContainer(inputCollection.result);
            console.log(inputCollection.result);
        })
    })

    // numberOperators.forEach((button) => {
    //     button.addEventListener("click", (e) => {

    //         const operator = e.currentTarget;
    //         operatorValue = operator.getAttribute("data-operator");

    //         inputCollection.inputs += operatorValue;

    //         console.log(inputCollection.inputs)

    //         inputContainer(inputCollection.inputs);

    //     })
    // })

    numberButtons.forEach((button) => {
        button.addEventListener("click", (e) => {
            
            const value = e.currentTarget;
            collectionValue = value.getAttribute("data-target");
            

            // let temp = Number.parseInt(collectionValue);
            inputCollection.inputs += collectionValue;

            inputCollection.result += collectionValue;

            // let toInt = Number.parseInt(inputCollection.inputs);
            
            console.log(inputCollection.result);

            inputContainer(inputCollection.result);

        })
    })

    const dataResult = document.querySelectorAll("button[data-result]");
    
    dataResult.forEach((button) => {
        button.addEventListener("click", (e) => {
            let result = inputCollection;
            console.log(result)
            inputContainer(result)
        })
    })
})