{
    // typeOf---> type guard 
    type Alphanumeric = string | number
    const add = (number1: Alphanumeric, number2: Alphanumeric): Alphanumeric => {

        if (typeof number1 === "number" && typeof number2 === "number") {
            return number1 + number2;
        } else {
            return number1.toString() + number2.toString;
        }
    }

    const result = add(5, "5");
    console.log(result)

    // in type

    type NormalUser = {
        name: string
    }
    type Admin = {
        name: string,
        role: "admin"
    }
    const getUser = (user: NormalUser | Admin) => {
        if ("role" in user) {
            console.log(`My name is ${user.name} and my role is ${user.role}`)
        }
        else (
            console.log(`My name is ${user.name}`)
        )
    }

    const normalUser = {
        name: "mr. normal"
    }
    const admin = {
        name: "mr. admin",
        role: "admin"
    }

    getUser(admin)




    //
}