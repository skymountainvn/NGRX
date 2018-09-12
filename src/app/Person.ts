export class Person {
    _id: string;
    name: string;
    age: number;
    height: number;

    static people: Person[] = [
        new Person('Teo',10,150),
        new Person('Ty',10,100),
        new Person('Tun',10,200)
    ]

    constructor(name: string, age: number, height: number) {
        this._id=Math.round(Math.random()*10000)+ ''
        this.name = name;
        this.age = age;
        this.height = height;
    }

    static findPersonById(_id: string) {
        return Person.people.find(person => person._id === _id);
    }
}

