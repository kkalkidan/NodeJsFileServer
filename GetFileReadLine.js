var ask = "please enter the file name ? "
var readline = require("readline");
var q = readline.createInterface(process.stdout, process.stdin);
q.question(ask, function(answer){
  console.log(`Add ${answer} to the file list`);
  q.setPrompt('More files ? (exit to leave)');
  q.prompt();
  q.on('line', function(answer) {
    if(answer.toLowerCase().trim() === 'exit'){
      q.close();
    }else {
      console.log(`Adding ${answer} to the file list ...`);
      q.setPrompt('More files ? (exit to leave)');
      q.prompt();
    }
  });

});
  q.on('close', function() {
    console.log("Ending >>>");
    process.exit();
  })
