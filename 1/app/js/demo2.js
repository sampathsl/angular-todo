/**
 * Created by test on 9/12/15.
 */

var doWorker = function(){

    var task1 = function(){
        console.log('task1');
    };

    var task2 = function(){
        console.log('task2');
    };

    return{
        work1 : task1,
        work2 : task2
    };
};

var workers = doWorker();

workers.work1();
workers.work2();