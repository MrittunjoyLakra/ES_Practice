class student{
 constructor(sId, sName){
     this.id = sId;
     this.name = sName;
     this.school= "Hydrox school"
 }
}

const student1 = new student(12, "Shuvo");
const student2 = new student(22, "Mahya");
const student3 = new student(29, "Bappi");
console.log(student1.name, student2.name);