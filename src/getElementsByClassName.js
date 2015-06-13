// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function (className, tag, elm) {
  tag = tag || "*";
  elm = elm || document;
  var classes = className.split(" "),
  classesToCheck = [],
  elements = (tag === "*" && elm.all)? elm.all : elm.getElementsByTagName(tag),
  current,
  returnElements = [],
  match;
  for(var k=0, kl=classes.length; k<kl; k+=1){
    classesToCheck.push(new RegExp("(^|\\s)" + classes[k] + "(\\s|$)")); // RegExp: check for (beginning of line or whitespace) & (whitespace and EOL)
  }
  for(var l=0, ll=elements.length; l<ll; l+=1){
    current = elements[l];
    match = false;
    for(var m=0, ml=classesToCheck.length; m<ml; m+=1){
      match = classesToCheck[m].test(current.className);
      if (!match) {
        break;
      }
    }
    if (match) {
      returnElements.push(current);
    }
  }
  return returnElements;
};
