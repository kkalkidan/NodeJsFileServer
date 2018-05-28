function getFileName(flag) {
  var index = process.argv.indexOf(flag);
  return (index == -1) ? null: process.argv[index + 1];
}
var fileName = getFileName("-n");

if(!fileName){ // file name is not given
  console.log("FileName is not given.");
}else {
  console.log(`Serving ${fileName}`);
}
