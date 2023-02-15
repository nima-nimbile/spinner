const movementArr = ["|", "/", "-", "\\", "|", "/", "-", "\\", "|"]
let cunt = 0;
for (const item of movementArr){
  cunt += 100;
  setTimeout(() =>{
    process.stdout.write(`\r${item}   `);
  }, cunt)
};
