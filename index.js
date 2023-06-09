const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  let ntuts = tutorials.map(function(element)
  {
    //console.log("OLD    element = " + element);
    
    const elementstr = element.toString();
    //console.log("OLD elementstr = " + elementstr);

    let mystr = "";
    let skipnextchar = false;
    for (let i = 0; i < elementstr.length; i++)
    {
      let addchar = true;
      if (i == 0)
      {
        mystr = elementstr.charAt(0);
        mystr = mystr.toUpperCase();
        addchar = false;
        skipnextchar = false;
      }
      else
      {
        //console.log("OLD skipnextchar = " + skipnextchar);
        
        if (skipnextchar)
        {
          addchar = false;
          skipnextchar = false;
          //console.log("NEW skipnextchar = " + skipnextchar);
        }
        else
        {
          if (elementstr.charAt(i) == ' ')
          {
            //console.log("SPACE FOUND AT i = " + i + "!");

            //the next character needs to be capitalized
            if (i + 1 < elementstr.length)
            {
              //modify two characters
              //it is actually the next one that changes
              if (elementstr.charAt(i + 1) == ' ')
              {
                //console.log("NEXT CHARACTER IS A SPACE!");
                addchar = true;
              }
              else
              {
                //console.log("NEXT CHARACTER IS NOT A SPACE!");
                mystr += " " + (elementstr.charAt(i + 1).toString().toUpperCase());
                addchar = false;
                skipnextchar = true;
              }
              //console.log("NEW skipnextchar = " + skipnextchar);
            }
            else addchar = true;
          }
          else addchar = true;
        }
      }
      //console.log("addchar = " + addchar);

      if (addchar)
      {
        mystr += elementstr.charAt(i);
      }
      //else;//do nothing
      //console.log("NEW mystr = " + mystr);
    }//end of i for loop
    //console.log("FINAL elementstr = " + elementstr);
    //console.log("FINAL      mystr = " + mystr);
    
    if (mystr.length == elementstr.length)
    {
      return mystr;
    }
    else throw "mystr must be the same length as elementstr!";
  });
  return ntuts;
}
