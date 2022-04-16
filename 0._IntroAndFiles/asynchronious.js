// #WHY
// Javascript Is single-threaded 
// We dont want to block our application

// #WHEN
// We wanna use async whenever we do stuff over the internet fx. fetch
// And for all file handling
// And setTimeout() / setInterval()
// Databases too.

// #PROMISE
// 2 appending states:
// pending
// furfilled -> can either be:
    // resolved & rejected
// async and await uses Promises and Promises uses callbacks. 


new Promise((resolve, reject) => {
    try {
        // throw new Error("bomb");
        resolve("everything went well");
    } catch (errorMessage) {
        reject("SOMETHING IS WRONG", errorMessage)
    }
})
.then(message => console.log(message))
.catch(errorMessage => console.log(errorMessage));

/* TODO assignment 
create a function called somethingGoodSomethingBad 
it should return a promise - that is to say that we wrap the function in a promise
BEWARE: you should not handle the promise.. just create a function that returns a promise
 make it take 4 seconds to complete
*/

function somethingGoodSomethingBad() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                throw new Error;
                resolve("Good")
            } catch (error) {
                reject("Bad", error)
            }
            
        }, 4000)
    });
}

//HANDLING PART:
/*
somethingGoodSomethingBad()
.then(message => console.log(message))
*/

//Async and Await
//IIFE
(async function callMyCustomPromise() {
    try {
        const message = await somethingGoodSomethingBad();
        console.log(message);
    } catch (error) {
        console.log(error);
    }
    
    
})()


async function anAsyncFunction() {

}
console.log(anAsyncFunction);