// how do we right a testcase , we right a function, that func takes 2 arguments , 1 is string and other is callback fn.

import { sum } from "../sum";

test('sum function should calculate the sum of two numbers',()=>{
    const result = sum(4,3);

    //Assertion
    expect(result).toBe(7);
})