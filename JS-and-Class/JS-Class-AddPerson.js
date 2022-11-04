const RenderInfoPerson = () => {
  let htmlInfo = arrPersonas
    .map(
      (item, index) =>
        `<div key="${index}" class="user-info">
              <button class="btn-delete" onclick="DeletePersona(${index})">X</button>
              <label class="info info-id">${item.id}</label>
              <label class="info info-name">${item.name}</label>
              <label class="info info-edad">${item.age}</label>
              <label class="info info-estatus">${item.profile}</label>
          </div>`
    )
    .join("");

  let htmlContainer = `<div class="container-users-item">${htmlInfo}</div>`;

  document.getElementById("container-users").innerHTML = htmlContainer;
};

const SavePerson = () => {
  let id = document.getElementById("person-id").value;
  let nombre = document.getElementById("person-name").value;
  let edad = document.getElementById("person-edad").value;
  let estado = document.getElementById("person-estado").value;

  SavePersona(nombre, id, edad, estado);

  document.getElementById("person-id").value = '';
  document.getElementById("person-name").value = '';
  document.getElementById("person-edad").value = '';
};

const SavePersona = (nombre, id, edad, profile) => {
  arrPersonas.push(new Personas(nombre, id, edad, profile));
  ValidateLocalStorage("persona", arrPersonas);
  RenderInfoPerson();
};

const DeletePersona = (parameter) => {
  arrPersonas.splice(parameter,1);
  ValidateLocalStorage("persona", arrPersonas);
  RenderInfoPerson();
};
