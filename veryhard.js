//peron Constructor with 3 properties
class Person 
{
  constructor(name,job,age)
  {
    this.name = name;
    this.job = job;
    this.age = age;
    }

    exercise() 
    {
        console.log("Their New Years Resolution of exercising more won't last past March....");   
    }

    fetchJob()
    {
        console.log(this.name + " is a " + this.job);
    }
}
// programmer inherits from mainPerson class
//programmer is child class and person is parent class
class Programmer extends Person{
    constructor(name,job,age,languages)
    {
        //calling parents constructor
        super(name, job, age)
        this.languages = languages;
        this.busy = true;
    }
    completeTask()
    {
        //set busy property to false
        this.busy = false;
    }
    acceptNewTask()
    {
        //set busy property to true
        this.busy = true;
    }
    offerNewTask()
    {
        //If the person is busy
        if(this.busy)
        {
            console.log(this.name + " can't accept any new tasks right now.")
        }
        //not busy
        else
        {
            console.log(this.name + " would love to take on a new responsibility.")
        }
    }
    //adds new lanuage in the laguage list
    learnLanguage(language)
    {
        this.languages.push(language);
    }
    //displays all languages in list
    listLanguages()
    {
        console.log(this.languages)
    }
   
}

const P1 = new Programmer("Shawnna Blackwell","Software Engineer", 24,[" C++, JS"]);
P1.fetchJob();
P1.offerNewTask();
P1.listLanguages();
P1.learnLanguage("Java");
P1.listLanguages();



const P2 = new Programmer("Bria McCoy", "Full Stack Developer", "26", ["Javascript","CSS","Html"])
P2.fetchJob();
P2.offerNewTask();
P2.listLanguages();
P2.completeTask();
P2.learnLanguage("Java");
P2.listLanguages();


// Prints each Ps info
console.log(P1)
console.log(P2)


