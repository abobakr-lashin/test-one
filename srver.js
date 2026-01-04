const button=document.getElementById("btn")
console.log(button)

button.addEventListener("click",() => {
  console.log("done")
}
)

button.addEventListener("click",() => {
  console.log("done")
}
)

button.addEventListener("click",() => {
  console.log("done")
}
)

button.addEventListener("click",() => {
  console.log("done")
}
)

button.addEventListener("click",() => {
  console.log("done")
}
)


function outer() {
  function inner() {
    console.log("Inside inner")
  }
  inner()
}
