const form = document.getElementById('form');

const submit = async (e) => {
    const formData = new FormData(form.firstElementChild);
    const formNum = form.firstElementChild.getAttribute('data-formNum');
    formData.append('formNum', formNum);

    const jsonObject = Object.fromEntries(formData)
    const res = await axios.post("/apply", jsonObject);

    displayForm(formNum);
}


const displayForm = (num) => {
    switch (parseInt(num)) {
        case 0:
            form.innerHTML = `
            <form id="personality-form" data-formNum=1>
                <label for="chess">Favourite Chess player</label>
                <input id="chess" name="chess">
                <label for="drug">DRUGS?</label>
                <input type="checkbox" name="drug">

                <button type="button" id="submit-btn">Submit Application</button>
                </form>
            `
            console.log('update');
            break;

        default:
            window.location.replace("/");
            break;
    }
    updateBtn();
}

const updateBtn = () => {
    const button = document.getElementById('submit-btn');
    button.addEventListener('click', (e) => {
        submit();
    })
}

updateBtn();
