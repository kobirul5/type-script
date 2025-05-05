{

// spreed operator
// rest operator
// destructure

const bros1: string[] = ["mir", "firoz", "mizan"]

const bros2: string[] = ["tanmoy","nahid", "rahat"]

bros1.push(...bros2)


const mentors = {
    typeScript: "mizan",
    redux: 'mir',
    
}
const mentors2 = {
   cloud: "mizan",
    java: 'mizan',

}

const mentorList = {
    ...mentors,
    ...mentors2
}


}