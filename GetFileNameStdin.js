
function getFileName(){
  var question = "Please enter the file name >> ";
  process.stdout.write(question);
}

// list of file names
var Files = [];

// get the file name from the user
process.stdin.on('data', function(data) {
  Files.push(data.toString().trim());
  process.stdout.write('Serving : '+ data.toString().trim() + '\n');
  if(Files.length === 2){
    process.exit();
  }
  process.stdout.write("More Files ?");
});


// before exiting it prints all the files it is serving
process.on('exit', function()
{
  process.stdout.write("Files :\n");
  for(var i = 0; i < Files.length; i++){
    process.stdout.write(`\t ${Files[i]}\n`);
  }
});

getFileName();
