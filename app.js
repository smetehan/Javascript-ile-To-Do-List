let userFormDOM = document.querySelector(`#userForm`);
userFormDOM.addEventListener(`submit`, formHandler);
const alertDOM = document.querySelector(`#alert2`);
const alertFunction = (
  title,
  message,
  className = "warning"
) => `<div class="alert alert-${className} alert-dismissible fade show" role="alert">
  <strong>${title}</strong> ${message}
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
`;

function formHandler(event) {
  event.preventDefault();
  const KONU = document.querySelector(`#txtYaz`);
  if (KONU.value) {
    addItem(KONU.value);
    KONU.value = "";
    alertDOM.innerHTML = alertFunction(
      "TEBRİKLER",
      "Planlarınızı takip etmeyi unutmayınız..",
      "success"
    );
  } else {
    alertDOM.innerHTML = alertFunction(
      "LÜTFEN",
      "Bugün ne yapmak istediğinizi giriniz",
      "danger"
    );
  }
}
let userListDOM = document.querySelector(`#userList`);
const addItem = (konu) => {
  let liDOM = document.createElement(`li`);
  liDOM.innerHTML = `${konu}`;
  liDOM.classList.add(`list-group-item`);
  userListDOM.append(liDOM);
  //  <li class="list-group-item">A list item</li>;
};
