const coding = ["js", "ruby", "java", "python", "cpp"]

coding.forEach(function blabla (val){
    //console.log(val)
})
coding.forEach(function (val){
    //console.log(val)
})
coding.forEach((lang)=>{
    //console.log(`Prog Lang ${lang}`)
})
function printme(item){
    //console.log(item)
}
coding.forEach(printme)

coding.forEach((item,idx,arr)=>{
    //console.log(item,idx,arr)
})

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    //console.log(item.languageName);
} )



