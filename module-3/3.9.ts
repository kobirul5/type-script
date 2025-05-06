{
    //abstraction: 1. interface 2.abstractor

    interface Vehicle1 {
        startEngine(): void;
        stopEngine(): void;
        move(): void;
    }

    class Car implements Vehicle1 {
        startEngine(): void {
            console.log("i am starting car")
        }
        stopEngine(): void {
            console.log("i am stoping the car engine")
        }
        move(): void {
            console.log("i am moving the car")
        }

        test() {
            console.log("i am just testing")
        }
    }


    const toyotaCar = new Car()
    toyotaCar.startEngine();

    //abstract class

    abstract class Car2 {
        abstract startEngine(): void;
        abstract stopEngine(): void;
        abstract move(): void;
    }

    class ToyotaCar extends Car2 {
        startEngine(): void {
            console.log("i am starting car")
        }
        stopEngine(): void {
            console.log("i am stoping the car engine")
        }
        move(): void {
            console.log("i am moving the car")
        }
    }

 


    //
}