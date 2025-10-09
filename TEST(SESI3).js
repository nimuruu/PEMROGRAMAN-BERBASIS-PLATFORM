let password = "123";
let attempt = 0;
let max_attempt = 3;


let userInputs = ["321", "321", "124"]; 

for (let i = 0; i < userInputs.length; i++) {
  let input = userInputs[i];
  
  if (input === password) {
    console.log("Berhasil Login");
    break;
  } else {
    attempt++;
    console.log("Coba Lagi!");

    if (attempt >= max_attempt) {
      console.log("Akun diblokir!");
      break;
    }
  }
}
