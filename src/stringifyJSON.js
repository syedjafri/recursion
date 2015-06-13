// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

 var stringifyJSON = function(obj) {
  // your code goes here
  
  var convertString = function (str){
    var newStr = str.replace(/("|')/g, "");
    return ('\"'+newStr+'\"');
  };

  var convertObject = function (object){
      var tmp = [];
      var tmpK, tmpV;

      for (var k in object) {
        if (object.hasOwnProperty(k)){
          tmpK = findType(k);
          tmpV = findType(object[k]);

          if (tmpK !=='"functions"' && tmpK!=='"undefined"'){
            tmp.push(tmpK + ':' + tmpV);
          }  
        }
                
      }
      return '{' + tmp.join(',') + '}';
  };

  var convertArray = function (array){
      var arrayString = '[';
      for (var i = 0; i < array.length; i++)
        arrayString += (i ? ',' : '') + findType(array[i]);     
      return arrayString + ']';
  };

  var findType = function(value){
    switch (Object.prototype.toString.call(value)){
      case "[object Object]": return convertObject(value);
      case "[object Array]": return convertArray(value);
      case "[object String]": return convertString(value);
      case "[object Number]": return value.toString();
      case "[object Function]": return null;
      case "[object Undefined]": return undefined;
      case "[object Null]": return 'null';
      case "[object Boolean]": return value.toString();
    }
  };


  return findType(obj);
  //return myObj;

};



