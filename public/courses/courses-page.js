const course_list = document.getElementById('course-list');

const get_all_courses = async () => {
    try {
        const courses = await axios.get('/courses/all-courses');
        console.log(courses.data);
        const body = courses.data.map((course) => {
            return `<li>
                        <a href=${course.course_url}>${course.course_name} (${course.course_id})</a>
                        <p>${course.course_desc}</p>
                    </li>`
        })
        course_list.innerHTML = "<ul>" + body.join('') + "</ul>";
    } catch (err) {
        console.log(err);
    }
}

get_all_courses();
