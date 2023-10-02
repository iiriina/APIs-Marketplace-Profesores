import React, { useState } from "react";
import { Button, Menu, MenuItem } from "@mui/material";
import MUIDataTable from "mui-datatables";

const columns = [
  "Cliente",
  "Clase",
  "Fecha de Clase",
  "Horas",
  "Ganancias",
  {
    name: "Estado",
    options: {
      customBodyRender: (value, tableMeta) => {
        return (
          <button onClick={() => console.log(value, tableMeta) }>
              Edit
          </button>
        )
    
      },
    },
  },
];

const data = [
  ["Luciano Pereyra", "Matemática", "19/04/2023", 2, "$5000", " Finalizado"],
  ["Emiliano Baiter", "Física", "28/06/2023", 1, "$3000", " Cancelado "],
  ["Rocio Eiranova", "Química ", "05/01/2023", 3, "$6000", "Finalizado"],
  ["Julieta Silvio", "Matemática", "23/09/2023", 2, "$5000", "Aceptado"],
  ["Marcos Di Rio", "Inglés", "09/10/2023", 1, "$4000", "Finalizado"],
  ["Lucio Miraje", "Piano", "01/02/2023", 4, "$7000", "Cancelado"],
];



const options = {
  filterType: "checkbox",
};

const ResetPwdComponent = () => {
  return (
    <MUIDataTable
      title={"Ver Estado Servicios Proveedor"}
      data={data}
      columns={columns}
      options={options}
    />
  );
};

export default ResetPwdComponent;