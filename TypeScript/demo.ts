let http = require("http");

interface IBook{
    type : string;
    title : string;
    readonly author:string;
    published? : Date;
    page? : number;
}

function instanceOfIBook(object:any): object is IBook {
    return object.type === 'IBook'
}

class Book implements IBook {
    public type : string
    constructor(public title:string, public author:string, public published:Date, public page:number) {
        this.type = 'IBook'
    }
}

var b = {type: 'IBook', title: 'bob', author:'mr. ross'}

if(instanceOfIBook(b)){
    console.log(b, "is book")
}else{
    console.log(b, "is not book")
}

interface myFunc{
    (a: string, b:string, c:string) : Array<string>
}

var toArr : myFunc = function (a:string, b:string, c:string): Array<string> {
    return [a,b,c]
}

var toArrUpper : myFunc = function (a:string, b:string, c:string): Array<string> {
    return [a.toUpperCase(),b.toUpperCase(),c.toUpperCase()]
}

let f2 = function logger(f1: myFunc){
    //Simulate that we get data from somewhere and uses the provided function
    let [ a, b, c] = ["a", "b", "c"];
    console.log(f1(a,b,c));
}
f2(toArr)
f2(toArrUpper)

class Shape {
    constructor(protected c: string){}  
    getArea():any{
      return undefined;
    }
    getPerimeter():any {
      return undefined;
    }
    get_color(){
        return this.c
    }
    set_color(color : string){
        this.c = color
    }
    toString(){
        return `color: ${this.c} area:${this.getArea()} perimeter${this.getPerimeter()}`
    }
  }

class Circle extends Shape {
    public area : number
    public perimeter : number
    constructor(protected c : string, protected r:number) {
        super(c)
        this.area = this.getArea()
        this.perimeter = this.getPerimeter()
    }
    getRadius(){
        return this.r
    }
    setRadius(r:number){
        this.r = r
    }
    getArea(){
        return Math.PI * Math.pow(this.r, 2)
    }
    getPerimeter() : any{
        return 2 * Math.PI * this.r
    }
    toString(){
        return `color: ${this.c} area:${this.getArea()} perimeter${this.getPerimeter()} radius:${this.r}`
    }
}

class Cylinder extends Circle{
    public area : number
    public volume : number
    constructor(protected c : string, protected r:number, protected h:number) {
        super(c, r)
        this.area = this.getArea()
        this.volume = this.getVolume()
    }
    getArea(){
        return Math.PI * Math.pow(this.r, 2) * this.h
    }
    getPerimeter(){
        return 2 * Math.PI * Math.pow(this.r, 2)
    }
    getVolume(){
        return this.getArea() * this.h
    }
    getHeight(){
        return this.h
    }
    setHeight(h:number){
        this.h = h
    }
    toString(){
        return "am cylinder CBA"
    }
}

let myCircle = new Circle("blue", 5)
console.log(myCircle.area)
console.log(myCircle.perimeter)

let myCylinder = new Cylinder("white", 7, 10)
console.log(myCylinder.area)
console.log(myCylinder.perimeter)
console.log(myCylinder.volume)
