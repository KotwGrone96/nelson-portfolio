export default function form() {
  const inputsAlert = document.querySelectorAll('.input-alert') as NodeListOf<
    HTMLParagraphElement
  >;

  const inputName = document.getElementById('name') as HTMLInputElement;
  const nameRegex: RegExp = /^([a-zñáéíóúA-ZÁÉÍÓÚÑ]+[\s]?)+[A-Za-zñÑáéíóúÁÉÍÓÚ]+$/;
  const inputSubject = document.getElementById('subject') as HTMLInputElement;
  const subjectRagex: RegExp = /^([a-zñáéíóúA-ZÁÉÍÓÚÑ0-9-_]+[\s]?)+[A-Za-zñÑáéíóúÁÉÍÓÚ0-9]+$/;
  const inputEmail = document.getElementById('email') as HTMLInputElement;
  const emailRegex: RegExp = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
  const inputPhone = document.getElementById('phone') as HTMLInputElement;
  const phoneRegex: RegExp = /^([0-9]){9,20}$/;
  const content = document.getElementById('content') as HTMLTextAreaElement;
  const contentRagex: RegExp = /^.{4,256}$/;

  // INPUT NAME
  inputName.addEventListener('keyup', () => {
    let reg = nameRegex.test(inputName.value);
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
  inputSubject.addEventListener('keyup', () => {
    let reg = subjectRagex.test(inputSubject.value);
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
  inputEmail.addEventListener('keyup', () => {
    let reg = emailRegex.test(inputEmail.value);
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
  inputPhone.addEventListener('keyup', () => {
    let reg = phoneRegex.test(inputPhone.value);
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
  content.addEventListener('keyup', () => {
    let reg = contentRagex.test(content.value);
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

  // ?-----FORM SEND SECTION-----

  const modalForm = (msg: string, err: boolean, lang: boolean) => {
    const modalWindow = document.createElement('DIV');
    const closeBtn = document.createElement('BUTTON');
    closeBtn.textContent = lang ? 'Cerrar' : 'Close';
    const body = document.body;
    modalWindow.classList.add('modalForm');
    modalWindow.innerHTML = msg;
    modalWindow.appendChild(closeBtn);
    if (err) {
      body.appendChild(modalWindow);
      modalWindow.style.opacity = '0';
      modalWindow.style.backgroundColor = '#c4302b';
      setTimeout(() => {
        modalWindow.style.transition = 'all .5s';
        modalWindow.style.opacity = '1';
      }, 500);
    } else {
      body.appendChild(modalWindow);
      modalWindow.style.opacity = '0';
      modalWindow.style.backgroundColor = '#60BC7F';
      setTimeout(() => {
        modalWindow.style.transition = 'all .5s';
        modalWindow.style.opacity = '1';
      }, 500);
    }

    closeBtn.addEventListener(
      'click',
      () => (modalWindow.style.display = 'none')
    );
  };

  const form = document.getElementById('form') as HTMLFormElement;
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const res = await fetch(form.action, {
      method: form.method,
      body: data,
      headers: {
        Accept: 'application/json'
      }
    });
    if (res.ok) {
      if (location.pathname === '/') {
        modalForm('Mensaje enviado correctamente', false, true);
        form.reset();
        return;
      }
      modalForm('Message sent successfully', false, false);
      form.reset();
    } else {
      if (location.pathname === '/') {
        modalForm('Ha ocurrido un error', true, true);
        return;
      }
      modalForm('An error has occurred', true, false);
    }
  };

  form.addEventListener('submit', handleSubmit);
}
