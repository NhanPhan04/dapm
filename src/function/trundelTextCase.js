
const TrundelText=(text)=>{
    var trundedText
    if(text.length>7){
        trundedText=(text.slice(0,9)+"...")
    }
    else{
        trundedText=text
    }
    return trundedText
}
export default TrundelText