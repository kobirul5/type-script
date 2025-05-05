// destructure

{
    const user = {
        id: 324,
        name:{
            firstName: "kobirul",
            middleName: "islam",
            lastName: "kabir"
        },
        contactNo: 225552545,
        address: "bangladesh"
    }
    
    const {contactNo, name:{middleName} } = user;

    // array destructing

    const myFriends = ["sumon", "sumon", "sujon"];

    const [,,c] = myFriends;
    
    


}