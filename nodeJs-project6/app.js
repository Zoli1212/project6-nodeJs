const fs = require('fs')


const countWordOccerences = data =>{

    return (data.toString().split(/[ .:;?!~,`"&|()<>{}\[\]\r\n/\\]+/)).length

    

}

fs.readFile('text.txt', 'utf8' , (err, data) => {
  if (err) {
    console.error(err)
    return
  }
  console.log(countWordOccerences(data))
})