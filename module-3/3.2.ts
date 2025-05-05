{
    //
    class Parent {
        name: string;
        age: number;
        address: string;
        constructor(name: string, age:number, address: string){
            this.name = name;
            this.age = age;
            this.address = address;
        }
        
        getSleep (numOfHours: number){
            console.log(this.name, "will Sleep for", numOfHours)
        }
     }
    



     class Student extends Parent {

        constructor(name: string, age:number, address: string){
            super(name, age, address)
        }
        
     }

     const student1 = new Student("mr. studen", 4, "4")

    //  teacher
     class Teacher extends Parent {
        designation: string;
        constructor(name: string, age:number, address: string, designation: string){
            super(name, age, address)
            this.designation= designation;
        }

        takeClass(numberOfClass: number){
            console.log(`${this.name} will take ${numberOfClass}`)
        }
     }

     const teacher = new Teacher("mr. teacher", 6, "40", "professor")
     teacher.takeClass(5)
    //
}