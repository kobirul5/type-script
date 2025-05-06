{
    // Static

    class Counter {
        static count: number = 0; // static deoar jnno class er name dore bolte hobe;
        static increment(){
            return Counter.count = Counter.count +1
        }
        static decrement (){
            return Counter.count = Counter.count - 1;
        }
    }

    // const instance1 = new Counter()
    console.log(Counter.increment())
    console.log(Counter.increment())
    console.log(Counter.increment())

    // const instance2 = new Counter()
    console.log(Counter.increment()) // static korar fole ak memory te save hosse noile alada 2 ta memorie save hoto er fole 


    //
}