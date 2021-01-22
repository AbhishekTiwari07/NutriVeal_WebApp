var request = require('request')
var fs = require('fs')
const image = (path,callback)=>{
    path = '/Users/asus/Downloads/'+path
    var options = {
        'method': 'POST',
        'url': 'http://0.0.0.0:5000/image',
        'headers': {
        },
        formData: {
          'images': {
            'value': fs.createReadStream(path),
            'options': {
              'filename': '/C:'+path,
              'contentType': null
            }
          }
        }
      }
    request(options, function (error, response) {
        if(error) 
            callback(error,undefined);
        callback(undefined,response.body);
    })
}

module.exports = {
    scan: image,
}
