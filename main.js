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


//**    Clase 6    */
//**    Clases en JavaScript    */


//**    Prototipos con la sintaxis de Clases    */

class Student2{
    constructor({
        name,
        cursosAprobados=[],
        age,
        email,
    }){
        this.name = name;
        this.email = email;
        this.age = age;
        this.cursosAprobados = cursosAprobados;
    }
aprobarCurso(nuevoCursito){
    this.cursosAprobados.push(nuevoCursito);
}}
const miguelito = new Student2({
    name:"Miguel",
    age:28,
    email:"miguelito@platzi.com",
    cursosAprobados:[
        "Curso Análisis de Negocios para Ciencia de Datos",
        "Curso Principios de visualización de Datos para BI",
    ],
});