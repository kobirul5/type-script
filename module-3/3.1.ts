{
    // 
   

    class Animal {
        // public name: string;
        // public species: string;
        // public sound: string;
        constructor(public name: string, public species:  string, public sound: string) {
            // this.name = name;
            // this.species = species;
            // this.sound = sound
        }

        makSound() {
            console.log(`${this.name} says ${this.sound}`)
        }
    }

    const dog = new Animal("German Shepard bhai", "dog", "ghow ghaow");
    const cat = new Animal("persian Bhai", "cat", "meaw meaw")

    cat.makSound();
    dog.makSound();


    // 
}