//shout
function shout(string) {return string.toUpperCase()}
//whisper
function whisper(string) {return string.toLowerCase()}
//logShout
function logShout(string) {console.log(string.toUpperCase())} 
//logWhisper
function logWhisper(string) {console.log(string.toLowerCase())}
//sayHiToGrandma
function sayHiToGrandma(string) {
  if (string.toLowerCase()===string) {return ('I can\'t hear you!')}
  else if (string.toUpperCase()===string) {return ('YES INDEED!')}
  else if (string==="I love you, Grandma.") {return ('I love you, too.')}
  else (console.log("I love you, too."));}