/*
console.log("hola desde node");
console.log(process.pid);
console.log(process.versions);
console.log(process.platform);
console.log(process.arch);

process.stdout.write("hola mundo\n");
process.stdout.write(process.arch);
*/


/*
let i = 0;

const loader = setInterval(() => {
  i +=10;
  process.stdout.clearLine();
  process.stdout.cursorTo(0);
  process.stdout.write(`Cargando...${i}%`)
  if (i === 100) { clearInterval(loader) };
}, 420);

process.on('exit', () => {
  process.stdout.write('\nAdios Mundo');
});
*/

/*
process.stdout.write('Cómo te llamas?');
process.stdin.on('data', data => {

  let respuesta = data.toString().trim();
  process.stdout.write(`¡Hola ${respuesta}!`);
});
*/


let person = '';

if (process.argv.length <= 2)
{
  process.stdout.write('corre el comando con un nombre, por favor');
  return process.exit();
}
else
{
  i = 2;
  while (i < process.argv.length)
  {
    if (i === 2)
    {
      person += process.argv[i].toString().trim();
    }
    else
    {
      person += ' ' + process.argv[i].toString().trim();
    }
    i++;
  }
}

process.stdout.write(`¡Hola! ${person}! ¿Cuántos años tienes?`);
process.stdin.on('data', data =>
{
  //process.stdout.write("entering stdin");
  let age = data.toString().trim();
  if (age < 50)
  {
    process.stdout.write(`\nTan solo ${age} ${person}, ¡tienes toda la vida por delante!\n`);
    
  }
  else
  {
    process.stdout.write(`\¡OMG ${person}! Pareces más joven que ${age} años.\n`)
  }
  process.on('exit', () => 
  {
    process.stdout.write('\nAdios Mundo');
  });

  process.exit();
});
