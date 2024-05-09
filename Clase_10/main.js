/** @format */

//**    Clase 10    */
//**    Ventajas de la programación orientada a objetos    */

class Course {
    constructor({school, name, teacher, lessons = []}) {
        this.school = school;
        this.name = name;
        this.teacher = teacher;
        this.lessons = lessons;
    }
}

const cursoProgBasica = new Course({
    name: "Curso Gratis de Programación Básica",
});
const cursoDefinitivoHTML = new Course({
    name: "Curso Definitivo de HTML y CSS",
});
const cursoPracticoHTML = new Course({
    name: "Curso Practico de HTML y CSS",
});

class LearningPath {
    constructor({school, name, courses = []}) {
        this.school = school;
        this.name = name;
        this.courses = courses;
    }
    addCourse(course) {
        this.courses.push(course);
    }
    replaceCourse(oldCourse, newCourse) {
        const oldCourseIndex = this.courses.findIndex(
            (course) => course.school === oldCourse.school,
        );
        if (oldCourseIndex !== -1) {
            this.courses[oldCourseIndex] = newCourse;
        }
        return this.courses;
    }
    deleteCourse(oldCourse) {
        const courseIndex = this.courses.findIndex(
            (course) => course.school === oldCourse.school,
        );
        this.courses.splice(courseIndex, 1);
        return this.courses;
    }
}

const webSchoolPath = new LearningPath({
    school: "Desarrollo Web",
    name: "Computación Básica y Pensamiento Lógico",
    courses: [
        cursoProgBasica,
        cursoDefinitivoHTML,
        cursoPracticoHTML,
        new Course({
            school: "Fundamentos de Programación y Desarrollo Web",
            name: "Curso Básico de Computadores e Informática",
            teacher: "Ricardo Celis",
        }),
        new Course({
            school: "Fundamentos de Programación y Desarrollo Web",
            name: "Pensamiento Lógico: Algoritmos y Diagramas de Flujo",
            teacher: "Ana Belisa Martínes",
        }),
        new Course({
            school: "Fundamentos de Programación y Desarrollo Web",
            name: "Pensamiento Lógico: Manejo de Datos, Estructuras y Funciones",
            teacher: "Ana Belisa Martínes",
        }),
    ],
});

const dataSchoolPath = new LearningPath({
    school: "Data Science e Inteligencia Artificial",
    name: "Introducción a Data Science e Inteligencia Artificial",
    courses: [
        cursoProgBasica,
        new Course({
            school: "Fundamentos de data e IA",
            name: "Introducción a Inteligencia Artificial",
            teacher: "Nicole Chapaval",
        }),
        new Course({
            school: "Fundamentos de data e IA",
            name: "Fundamentos de IA para Data y Machine Learning",
            teacher: "Carlos Alarcón",
        }),
        new Course({
            school: "Fundamentos de data e IA",
            name: "Empezar una Carrera en Data Science e Inteligencia Artificial",
            teacher: "Miguel Torres",
        }),
    ],
});

const vgsSchoolPath = new LearningPath({
    school: "Escuela de Videojuegos",
    name: "Introducción a Videojuegos",
    courses: [
        cursoProgBasica,
        new Course({
            school: "Fundamentos de Videojuegos",
            name: "Curso de Unity",
            teacher: "Nicole Chapaval",
        }),
        new Course({
            school: "Fundamentos de Videojuegos",
            name: "Curso de Unreal",
            teacher: "Carlos Alarcón",
        }),
    ],
});

class Student {
    constructor({
        name,
        email,
        username,
        twitter = undefined,
        instagram = undefined,
        facebook = undefined,
        approvedCourses = [],
        learningPaths = [],
    }) {
        this.name = name;
        this.email = email;
        this.username = username;
        this.socialMedia = {
            twitter,
            instagram,
            facebook,
        };
        this.approvedCourses = approvedCourses;
        this.learningPaths = learningPaths;
    }
}

const juan2 = new Student({
    name: "JuanDC",
    username: "juandc",
    email: "juanito@juanito.com",
    twitter: "fjuandc",
    learningPaths: [webSchoolPath, vgsSchoolPath],
});

const miguelito2 = new Student({
    name: "Miguelito",
    username: "migelitofeliz",
    email: "miguelito@juanito.com",
    instagram: "migelito_feliz",
    learningPaths: [webSchoolPath, dataSchoolPath],
});
