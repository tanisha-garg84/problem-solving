
const checkEnteredHash = (passwordEntered)=>{
    let validRegex = /([A-Za-z]\w+[0-9]\D+[A-Za-z]{0,})/;
    if (!passwordEntered.match(validRegex)) {
      return true;
    }
    return false;
  };
  
  
  const generateHexCode = (length)=>{
  
    
    let lowerChars = "abcdefghijklmnopqrstuvwxyz";
    let upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let numberChars = "1234567890";
  
    let code = "";
    let codeSize = length*4;
  
    for (let i = 0; i < length*2; i++) {
      code += lowerChars.charAt(Math.floor(Math.random() * lowerChars.length));
      codeSize--;
  
      if (!codeSize) {
        break;
      }
  
      code += upperChars.charAt(Math.floor(Math.random() * upperChars.length));
      codeSize--;
  
      if (!codeSize) {
        break;
      }
  
      code += numberChars.charAt(Math.floor(Math.random() * numberChars.length));
      codeSize--;
  
      if (!codeSize) {
        break;
      }
    }

  
    return code;  
  }
  
 
  
  const checkAndGenerateHashCode = (e) =>{
    let previousPasswords = localStorage.getItem("userPasswords")
    let passwords = {};
    if (e.target[1].value.length >= 5) {
      if (checkEnteredHash(e.target[1].value)) {
        passwords = {...passwords,["username"]: e.target[0].value}
        passwords = {...passwords,["password"]:generateHexCode(e.target[1].value.length)};
        previousPasswords = previousPasswords ? JSON.parse(previousPasswords) : [];
        previousPasswords.push(passwords);
        localStorage.setItem("userPasswords",JSON.stringify(previousPasswords));
        
      }else{
        passwords = {...passwords,["username"]: e.target[0].value}
        passwords = {...passwords,["password"]:e.target[1].value};
        previousPasswords = previousPasswords ? JSON.parse(previousPasswords) : [];
        previousPasswords.push(passwords);
        localStorage.setItem("userPasswords",JSON.stringify(previousPasswords));
      
      }
    } 
    else{
       alert("length less than 5")
    }
  };
  
 
  