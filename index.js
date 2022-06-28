// Render the emojis as <span> tags in the emojisContainer <div>

// Hints: Use either createElement(), textContent, and append()
// or innerHTML and a template string

const myEmojis = ["👨‍💻", "⛷", "🍲","a"]
const emojiContainer = document.getElementById("emoji-container")
const emojiInput = document.querySelector("#emoji-input")
//const msgOut = document.querySelector("#message")
//const pushBtn = document.querySelector("#push-btn")
const pushBtn = document.getElementById("push-btn")
const unshiftBtn = document.querySelector("#unshift-btn")
const popBtn = document.querySelector("#pop-btn")
const shiftBtn = document.querySelector("#shift-btn")

render()

pushBtn.addEventListener("click", pushEmoji)
unshiftBtn.addEventListener("click",unshiftEmoji)
popBtn.addEventListener("click", popEmoji)
shiftBtn.addEventListener("click",shiftEmoji)

function render(){
    emojiContainer.innerHTML =""

    for (let i = 0; i < myEmojis.length; i++) {
      // write your code here
     let spp = document.createElement("span")
     spp.textContent = myEmojis[i]
        emojiContainer.append(spp)  
    }
}



function pushEmoji() {
     
    if (emojiInput.value) {
        myEmojis.push(emojiInput.value)
        render()
        //msgOut.textContent="called"
        emojiInput.value=""
    }

}

function unshiftEmoji() {
     
    if (emojiInput.value) {
        myEmojis.unshift(emojiInput.value)
        render()
        //msgOut.textContent="called"
        emojiInput.value=""
    }

}

function shiftEmoji() {
    
        myEmojis.shift()
        render()
        //msgOut.textContent="called"
    

}

function popEmoji() {
    
    myEmojis.pop()
    render()
    //msgOut.textContent="called"


}