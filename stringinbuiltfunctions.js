//to check the length of a string
var str="java script is a scripting language" 
console.log(str.length)

//to check the index(position) of a string inside anothert string...it always starts with zero (first position is zero)
var str="java script is a scripting language"
console.log(str.indexOf('script'))
console.log(str.indexOf('language'))


//to find index of a string inside another string
var str="java script is a scripting language string"
console.log(str.lastIndexOf('string'))

//to get a part of string we use slice(start,end)
var str="java script is a scripting language string"
console.log(str.slice(0,5))
console.log(str.slice(-10))
console.log(str.slice(15))

//to get sub string function-substr(startpos,length)
var str="java script is a scripting language string"
console.log(str.substr(5,9))

//to change to uppercase - toUpperCase()
var str="java script is a scripting language string"
console.log(str.toUpperCase(str))

//to change it into a lower case
var str="JAVA SCRIPT IS A SCRIPTING LANGUAGE"
console.log(str.toLowerCase(str))

//concat -it merges two or more strings
var firstStr='java'
var secondStr='language'
console.log(firstStr.concat(' ',secondStr)) //we can add multiple string seperated by comma

//concat using last name
console.log(firstStr+secondStr)

//trim() - to remove extra spaces
var strExtraSpaces='      hello     '
console.log(strExtraSpaces.trim())


//to get the character at a given position - charAt()
var str="JAVA SCRIPT IS A SCRIPTING LANGUAGE"
console.log(str.charAt(10))

//split() - it tries to split entire on the basis of arguments passed
var str="JAVA SCRIPT IS A SCRIPTING LANGUAGE"
console.log(str.split(','))









