import Course from "../../types/courses";


/* eslint-disable @typescript-eslint/no-explicit-any */
const urlCoursesBase = 'https://662d9fcea7dda1fa378af332.mockapi.io/api/PR4/courses';

const getAllCourses = async () => {
    const response = await fetch(urlCoursesBase);
    const result = await response.json();
    return result;
};

const getCourseById = async (id: number) => {
    const response = await fetch(`${urlCoursesBase}/${id}`);
    const result = await response.json();
    return result;
}
const createCourse = async (data : Course) => {
    const response = await fetch(urlCoursesBase, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    if (!response.ok) {
        throw new Error('Error create course');
    }

    const result = await response.json();
    return result;
}

const deleteCourse = async (id: number) => {
    const response = await fetch(`${urlCoursesBase}/${id}`, {
        method: 'DELETE',
    });

    if (!response.ok) {
        throw new Error('Error delete course');
    }

    return response.ok;
}

export {
    getAllCourses,
    getCourseById,
    createCourse,
    deleteCourse
}