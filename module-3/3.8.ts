{
    // polymorphisom

    class Person{
        getSleep(){
            console.log('I am sleeping 7 hour per day')
        }
    }
    class Student{
        getSleep(){
            console.log('I am sleeping 8 hour per day')
        }
    }
    class Developer{
        getSleep(){
            console.log('I am sleeping 6 hour per day')
        }
    }
    
    const getSleepingHour =(param: Person)=>{
        param.getSleep()
    }


    const person = new Person()
    const student = new Student()
    const developer= new Developer()

    getSleepingHour(person)


    // 
    class Shape{
        getArea(){
            return 0;
        }
    }

    class Circle extends Shape{
        radius: number;

        constructor(radius: number){
            super()
            this.radius = radius;
        }

        getArea(): number {
            return Math.PI * this.radius*this.radius;
        }

    }

    //  rectangle
    class Rectangle extends Shape{
        height: number;
        width: number;

        constructor(height: number, width: number){
            super()
            this.height = height;
            this.width = width;
        }

        getArea(): number {
            return this.height*this.width;
        }

    }

    const getShapeArea = (param: Shape) =>{
        console.log(param.getArea())
    }
const shape1 = new Shape()
const shape2 = new Circle(5)
const shape3 = new Rectangle(5,5)
getShapeArea(shape3)



    // //
}