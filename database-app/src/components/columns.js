import { ColumnFilter } from "./ColumnFilter";

export const COLUMNS = [
  {
    Header: "Id",
    accessor: "id",
    Filter: false,

  },
  {
    Header: "First Name",
    accessor: "firstName",
    Filter: false,

  },
  {
    Header: "Last Name",
    accessor: "lastName",
    Filter: false,

  },
  {
    Header: "Email",
    accessor: "email",
    Filter: false,

  },
  {
    Header: "Phone",
    accessor: "phone",
    Filter: false,

  },
  
  {
    Header: "State",
    accessor: "adress.state",
    Filter: ColumnFilter,
  },
 
];
