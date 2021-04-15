

const btn__advice = document.querySelector('.btn__advice');
    btn__advice.addEventListener("click", FormValid("advice__form","name","tell","email"))

const btn__modal = document.querySelector('.btn__modal');
    btn__modal.addEventListener("click", FormValid("modal__form","name","tell","email"))

const btn__question = document.querySelector('.btn__question');
    btn__question.addEventListener("click", FormValid("question__form","name","tell","email"))
    // const form = document.forms['advice__form'];
    // const inputEmail = document.forms["advice__form"]["email"];
    // const inputTell = document.forms["advice__form"]["tell"];
    // const inputName = document.forms["advice__form"]["name"];

function FormValid( formChek,name,tell,email) {
    const form = document.forms[formChek];
    const inputEmail = document.forms[formChek][email];
    const inputTell = document.forms[formChek][tell];
    const inputName = document.forms[formChek][name];
    // validate
    const regExpDic = {
        name: /^[a-z0-9_-]{3,16}$/,
        email: /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\}?)$/,
        tell: /^\+?(\d{1,3})?[- .]?\(?(?:\d{2,3})\)?[- .]?\d\d\d[- .]?\d\d\d\d$/,
        
    }
    function validate(el) {
        const regExpName = el.dataset.required;
        if(!regExpDic[regExpName]) return true;
        return regExpDic[regExpName].test(el.value);
    }
    const inputs = [inputEmail, inputTell, inputName ];

    form.addEventListener('submit', e => {
        e.preventDefault();
        onSubmit();
        form.reset();
    });

    function onSubmit() {
        function validateform (el) {
            const isValidInput = validate(el);
            let i = 1;
            if(!isValidInput) {
                removeInputError(el)
                showInputError(el);
            }
            return isValidInput;
        }
        const isValidForm = inputs.every(validateform);
        inputs.forEach(validateform);
        inputs.forEach(el => el.addEventListener("focus",() => removeInputError(el)));
        
        if (isValidForm) {
            thanks.style.display = "block";
            detail.style.display = "none";
            consultation.style.display = "none";
            сalculation.style.display = "none";
            overlay.style.display = "block";
            setTimeout(()=> {
                overlay.style.display = "none";
                thanks.style.display = "none";
            },4000)
        }
    }
    // inputErrorTemolate
    function inputErrorTemolate(msg) {
        return `<div class="invalid">${msg}</div>`
    }
    // showInputError add input error
    function showInputError(el) {
        const parent = el.parentElement;
        const msg = el.dataset.invalidMessage || 'Invalid input';
        const template = inputErrorTemolate(msg);
        el.classList.add('is-valid');
        parent.insertAdjacentHTML('beforeend',template);
    }
    // removeInputError remove input error
    function removeInputError(el) { 
        const parent = el.parentElement;
        const err = parent.querySelector('.invalid');
        if(!err) return;
        else {
        console.log('hi'),
        el.classList.remove('is-valid'),
        parent.removeChild(err)
        }
    }
}
