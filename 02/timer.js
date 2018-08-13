//当前队列的最后
setImmediate(() => {
    console.log('setImmediate');
});

process.nextTick(() => {
    console.log('from next tick');
    process.nextTick(() => {
        console.log('from next tick 2');
        process.nextTick(() => {
            console.log('from next tick 3');
        });
    });
});

setTimeout(() => {
    console.log('from time out');
    process.nextTick(() => {
        console.log('from next tick in timeout');
    });
} , 0);

console.log('i am timer');
