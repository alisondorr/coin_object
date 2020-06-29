//object coin has multiple property keys state, flip, toStrings, and toHTML
let num = 0
let coin = {
    state: 0,
    flip: function flip() {
        /* 1. Randomly set your coin object's "state" property to be either 0 or 1: use "this.state" to access the "state" property on this object.*/
        num = Math.round((Math.random()))
        this.state = num
        return (this.state)
        console.log(this.state)
    },
    toString: function toString() {
        //* 2. Return the string "Heads" or "Tails", depending on whether "this.state" is 0 or 1. If this.state is zero it is a heads*/
        //this.flip()
        if (this.state === 0) {
            return ("Heads")
        } else {
            return ("Tails")
        }
        //console.log(this.toString)
    },
    toHTML: function toHTML() {
        /* 3. Set the properties of this image element to show either face-up or face-down, depending on whether this.state is 0 or 1. return an image*/
        //create image element for Heads 
        let imgHeads = document.createElement('img')
        //attach image file to element
        imgHeads.src = "./images/heads.jpg"
        //create a new image element for Tails
        let imgTails = document.createElement('img')
        //attach image file to element
        imgTails.src = "./images/tails.jpg"
        //identify if its a head (state=0) send image to page
        //this.flip()
        if (this.state === 0) {
            return (imgHeads)
        } else {
            // (state=1) send Tails image to 
            return (imgTails)
        }
    }
}
//Test and demonstrate that your coin object is complete by doing the following:
//Write a function called display20Flips that uses a loop to flip the coin 20 times. Each time the coin flips, display the result of each flip as a string on the page (make use of your toString() method)

//n will be the number of times to flip the coin
//let n = 20

function display20Flips() {
    for (i = 0; i < 20; i++) {
        coin.flip()
        let tossStr = coin.toString()
        document.body.append(tossStr + " ")
        //document.body.append(imgTails)
    }
}
//invoke the function to display results
const resultStr = display20Flips()
//Write a function called display20Images, again using a loop to flip the coin 20 times…but this time instead of displaying the result as a string, display the result of each flip as an HTML IMG element on the //page (make use of your toHTML() method).
//function display20Images(n)
//n will be the number of times to flip the coin

function display20Images() {
    for (i = 0; i < 20; i++) {
        coin.flip()
        let tossImg = coin.toHTML()
        document.body.append(tossImg)
    }
}
//invoke the function to display results
const resultImg = display20Images()

