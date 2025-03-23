function Ascender(ar) {
    for (let i = 1; i < ar.length; i++) {
      if (ar[i] < ar[i - 1]) {
        return false;
      }
    }
    return true;
  }
  
  console.log(Ascender([2, 4, 6, 8, 10])); 
  console.log(Ascender([8, 6, 9, 10, 11])); 