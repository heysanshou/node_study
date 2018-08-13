const {argv , argv0 , execArgv , execPath} = process;

console.log(argv);
console.log(argv0);
console.log(execArgv);
console.log(execPath);

console.log(process.argv);

argv.forEach(item => {
    console.log(item);
});
