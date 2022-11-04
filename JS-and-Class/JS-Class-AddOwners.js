const RenderOptions = () => {
  let optionsMotocicleta = arrMotocicleta.map(
    (item, index) =>
      `<option value="${index}">${item.model} / ${item.year} / ${item.name}</option>`
  );
  document.getElementById("owner-motociclista").innerHTML = optionsMotocicleta;

  let optionsPersona = arrPersonas.map(
    (item, index) =>
      `<option value="${index}">${item.id} / ${item.name} / ${item.age} / ${item.profile}</option>`
  );
  document.getElementById("owner-persona").innerHTML = optionsPersona;
};

const SaveClienteMotocicLista = () => {
  let motocicleta = document.getElementById("owner-motociclista").value;
  let cliente = document.getElementById("owner-persona").value;

  let motocicletaSeleccionada = arrMotocicleta.find(
    (item, index) => index == motocicleta
  );
  let clienteSeleccionada = arrPersonas.find((item, index) => index == cliente);

  arrOwner.push(
    new MotocicletaOwner(clienteSeleccionada, motocicletaSeleccionada)
  );

  ValidateLocalStorage("cliente", arrOwner);
  RenderInfoCliente();
};

const RenderInfoCliente = () => {
  console.log(arrOwner);
  let htmlInfo = arrOwner
    .map(
      (item, index) =>
        `<div key="${index}" class="user-info">
                  <button class="btn-delete" onclick="DeleteCliente(${index})">X</button>
                  <label class="info info-nameMotocicleta">${item.owner.name}</label>
                  <label class="info info-namePersona">${item.motocicleta.model}</label>
              </div>`
    )
    .join("");

  let htmlContainer = `<div class="container-users-item">${htmlInfo}</div>`;

  document.getElementById("container-users").innerHTML = htmlContainer;
};

const DeleteCliente = (parameter) => {
  arrOwner.splice(parameter, 1);
  ValidateLocalStorage("cliente", arrOwner);
  RenderInfoCliente();
};
