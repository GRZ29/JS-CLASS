const RenderInfoMoto = () => {
  console.log("moto", arrMotocicleta);
  let htmlInfo = arrMotocicleta
    .map(
      (item, index) =>
        `<div key="${index}" class="user-info">
                <button class="btn-delete" onclick="DeleteMoto(${index})">X</button>
                <label class="info info-id">${item.model}</label>
                <label class="info info-name">${item.year}</label>
                <label class="info info-edad">${item.name}</label>
            </div>`
    )
    .join("");

  let htmlContainer = `<div class="container-users-item">${htmlInfo}</div>`;

  document.getElementById("container-users").innerHTML = htmlContainer;
};

const SaveMoto = () => {
  let modelo = document.getElementById("moto-modelo").value;
  let ano = document.getElementById("moto-ano").value;
  let nombre = document.getElementById("moto-nombre").value;

  SaveMotocicleta(modelo, ano, nombre);

  document.getElementById("moto-modelo").value = "";
  document.getElementById("moto-ano").value = "";
  document.getElementById("moto-nombre").value = "";
};

const SaveMotocicleta = (modelo, ano, nombre) => {
  arrMotocicleta.push(new Motocicleta(modelo, ano, nombre));
  ValidateLocalStorage("moto", arrMotocicleta);
  RenderInfoMoto();
};

const DeleteMoto = (parameter) => {
  arrMotocicleta.splice(parameter, 1);
  ValidateLocalStorage("moto", arrMotocicleta);
  RenderInfoMoto();
};
