"use strict";
{
    // spreed operator
    // rest operator
    // destructure
    const bros1 = ["mir", "firoz", "mizan"];
    const bros2 = ["tanmoy", "nahid", "rahat"];
    bros1.push(...bros2);
    const mentors = {
        typeScript: "mizan",
        redux: 'mir',
    };
    const mentors2 = {
        cloud: "mizan",
        java: 'mizan',
    };
    const mentorList = Object.assign(Object.assign({}, mentors), mentors2);
}
