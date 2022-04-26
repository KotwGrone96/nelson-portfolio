window.addEventListener('load', form);

export default function form() {
  const inputsAlert = document.querySelectorAll('.input-alert');

  const inputName = document.getElementById('name');
  const nameRegex = /^([a-zñáéíóúA-ZÁÉÍÓÚÑ]+[\s]?)+[A-Za-zñÑáéíóúÁÉÍÓÚ]+$/;
  const inputSubject = document.getElementById('subject');
  const subjectRagex = /^([a-zñáéíóúA-ZÁÉÍÓÚÑ0-9-_]+[\s]?)+[A-Za-zñÑáéíóúÁÉÍÓÚ0-9]+$/;
  const inputEmail = document.getElementById('email');
  const emailRegex = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
  const inputPhone = document.getElementById('phone');
  const phoneRegex = /^([0-9]){9,20}$/;
  const content = document.getElementById('content');
  const contentRagex = /^.{4,256}$/;

  // INPUT NAME
  inputName.addEventListener('keyup', e => {
    let reg = nameRegex.test(e.target.value);
    if (!reg) {
      inputName.style.borderRadius = '15px';
      inputName.style.border = '2px solid red';
      inputsAlert[0].style.display = 'block';
      return;
    }
    inputName.style.borderRadius = '0px';
    inputName.style.border = 'none';
    inputName.style.borderBottom = '1px solid #004a8c';
    inputsAlert[0].style.display = 'none';
  });

  //INPUT SUBJECT
  inputSubject.addEventListener('keyup', e => {
    let reg = subjectRagex.test(e.target.value);
    if (!reg) {
      inputSubject.style.borderRadius = '15px';
      inputSubject.style.border = '2px solid red';
      inputsAlert[1].style.display = 'block';
      return;
    }
    inputSubject.style.borderRadius = '0px';
    inputSubject.style.border = 'none';
    inputSubject.style.borderBottom = '1px solid #004a8c';
    inputsAlert[1].style.display = 'none';
  });

  //INPUT EMAIL
  inputEmail.addEventListener('keyup', e => {
    let reg = emailRegex.test(e.target.value);
    if (!reg) {
      inputEmail.style.borderRadius = '15px';
      inputEmail.style.border = '2px solid red';
      inputsAlert[2].style.display = 'block';
      return;
    }
    inputEmail.style.borderRadius = '0px';
    inputEmail.style.border = 'none';
    inputEmail.style.borderBottom = '1px solid #004a8c';
    inputsAlert[2].style.display = 'none';
  });
  //INPUT PHONE
  inputPhone.addEventListener('keyup', e => {
    let reg = phoneRegex.test(e.target.value);
    if (!reg) {
      inputPhone.style.borderRadius = '15px';
      inputPhone.style.border = '2px solid red';
      inputsAlert[3].style.display = 'block';
      return;
    }
    inputPhone.style.borderRadius = '0px';
    inputPhone.style.border = 'none';
    inputPhone.style.borderBottom = '1px solid #004a8c';
    inputsAlert[3].style.display = 'none';
  });
  //CONTENT TEXT AREA
  content.addEventListener('keyup', e => {
    let reg = contentRagex.test(e.target.value);
    if (!reg) {
      content.style.borderRadius = '15px';
      content.style.border = '2px solid red';
      inputsAlert[4].style.display = 'block';
      return;
    }
    content.style.borderRadius = '0px';
    content.style.border = 'none';
    content.style.borderBottom = '1px solid #004a8c';
    inputsAlert[4].style.display = 'none';
  });
}
