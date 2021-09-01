



const form = document.getElementById('form');

const submit = async (e) => {
    const formData = new FormData(form.firstElementChild);
    const formNum = form.firstElementChild.getAttribute('data-formNum');
    formData.append('formNum', formNum);
    
    const jsonObject = Object.fromEntries(formData)
    await axios.post("/apply", jsonObject);
    // console.log(result);
}

const button = document.getElementById('submit-btn');
button.addEventListener('click', (e) => {

    submit();
})



