//**    Clase 5    */
//**    Objetos literales y prototipos en JavaScript    */


//**    Objetos literales   */      

const natalia={
    name:"Natalia",
    age:20,
    cursosAprobados:[
        "Curso Definitivo de HTML y CSS",
        "Curso Práctico de HTML y CSS",
    ],
    aprobarCurso(nuevoCursito){
        this.cursosAprobados.push(nuevoCursito);
    },
};

//Hacer que Natalia apruebe otro curso
//natalia.cursosAprobados.push("Curso de Responsive Design");


//**    Prototipos      */

function Student(name,age,cursosAprobados){
    this.name=name;
    this.age=age;
    this.cursosAprobados=cursosAprobados;
    //this.aprobarCurso = function(nuevoCursito){
    //this.cursosAprobados.push(nuevoCursito);
    //}
}
Student.prototype.aprobarCurso=function(nuevoCursito){
    this.cursosAprobados.push(nuevoCursito);
}
const juanita=new Student(
    "Juanita Alejandra",
    15,
    [
        "Curso de Introducción a la Producción de Videojuegos",
        "Curso de Creación de Personajes",
    ],
);
