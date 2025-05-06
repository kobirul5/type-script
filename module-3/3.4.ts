{
    // 


    class Animal {
        name: string;
        species: string;
        sound: string;
        constructor(name: string, species: string, sound: string) {
            this.name = name;
            this.species = species;
            this.sound = sound
        }

        makSound() {
            console.log(`${this.name} says ${this.sound}`)
        }
    }

    class Dog extends Animal {
        constructor ( name: string, species: string, sound: string)
    }


    const dog = new Animal("German Shepard bhai", "dog", "ghow ghaow");



    // const cat = new Animal("persian Bhai", "cat", "meaw meaw")

    // cat.makSound();
    // dog.makSound();


    // 
}