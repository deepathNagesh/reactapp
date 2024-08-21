import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import actor from "../../slice/actor";

const columns = [
  {
    field: "id",
    headerName: "ID",
    width: 70,
    backgroundColor: "red"
  },
  { field: "firstName", headerName: "First name", width: 190 ,
    
  },
  { field: "lastName", headerName: "Last name", width: 190 ,
    
  },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 140,
    
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 200,
    valueGetter: (value, row) => `${row.firstName || ""} ${row.lastName || ""}`,
    
  },
];

// const rows = [
//   { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
//   { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
//   { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
//   { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
//   { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
//   { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
//   { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
//   { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
//   { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
// ];

export default function DataTable() {
  const actors = useSelector((state) => state.actorAdd.actors);
  // state.addActor);
  //   console.log(actors);
  //   const dispatch = useDispatch();
  console.log(actors);
  return (
    <Box
      style={{
        height: "300px",
        width: "99%",
        // margintop: "80px !important",
        background: "rgba(31, 30, 36, 0.08)",
        transform: "translate(22px, 19px)",
        maxWidth: "87%",
          }}
    >
      <DataGrid
        rows={actors}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        // checkboxSelection
        sx={{
          boxShadow: 2,
          border: 2,
          borderColor: "primary.light",
          "& .MuiDataGrid-cell:hover": {
            color: "primary.main",
          },
        }}
      />
    </Box>
  );
}
