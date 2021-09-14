import React from "react";
import { useMemo } from "react";
import {
  useTable,
  useSortBy,
  useGlobalFilter,
  usePagination,
  useRowSelect,
  useFilters,
  //@ts-ignore
} from "react-table";
import { Radio } from "./Radio";
import { COLUMNS } from "./columns";
import { GlobalFilter } from "./GlobalFilter";
import { fuzzyTextFilterFn } from "./FuzzyTextFilter";
import { Description } from "./Description";
import { Pagination } from "./Pagination";
//@ts-ignore
export const Table: React.FC = ({ data }) => {
  const filterTypes = useMemo(
    () => ({
      // Add a new fuzzyTextFilterFn filter type.
      fuzzyText: fuzzyTextFilterFn,
      // Or, override the default text filter to use
      // "startWith"
      text: (rows: any, id: number | string, filterValue: any) => {
        return rows.filter((row: any) => {
          const rowValue = row.values[id];
          return rowValue !== undefined
            ? String(rowValue)
                .toLowerCase()
                .startsWith(String(filterValue).toLowerCase())
            : true;
        });
      },
    }),
    []
  );
  const defaultColumn = useMemo(
    () => ({
      Filter: GlobalFilter,
    }),
    []
  );
  const columns = useMemo(() => COLUMNS, []);

  const reactTable = useTable(
    {
      columns: columns,
      data: data,
      filter: true,
      defaultColumn,
      filterTypes,
    },
    useFilters,
    useGlobalFilter,
    useSortBy,
    usePagination,
    useRowSelect,
    (hooks: any) => {
      hooks.visibleColumns.push((columns: any) => {
        return [
          {
            id: "selection",
            Header: ({ getToggleAllPageRowsSelectedProps }: any) => (
              <Radio {...getToggleAllPageRowsSelectedProps()} />
            ),
            Cell: ({ row }: any) => (
              <Radio
                {...row.getToggleRowSelectedProps()}
                onClick={() => {
                  toggleAllRowsSelected(false);
                  toggleRowSelected(row.id, true);
                }}
              />
            ),
          },
          ...columns,
        ];
      });
    }
  );
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    toggleAllRowsSelected,
    toggleRowSelected,
    page,
    nextPage,
    pageOptions,
    canNextPage,
    canPreviousPage,
    selectedFlatRows,
    setPageSize,
    gotoPage,
    pageCount,
    previousPage,
    state,
    setGlobalFilter,
  } = reactTable;
  const { globalFilter, pageIndex, pageSize, selectedRowIds } = state;
  return (
    <>
      <GlobalFilter filters={globalFilter} setFilter={setGlobalFilter} />
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup: any) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column: any) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  <span>{column.render("Header")}</span>
                  <span>
                    {column.isSorted ? (column.isSortedDesc ? "▼" : "▲") : ""}
                  </span>
                  <div>{column.canFilter ? column.render("Filter") : null}</div>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row: any) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell: any) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div>
        <select
          value={pageSize}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
            setPageSize(Number(e.target.value))
          }
        >
          {[20, 25, 30].map((pageSize) => (
            <option value={`${pageSize}`} key={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div>
      {/*@ts-ignore*/}
      <Pagination pageCount={pageCount} gotoPage={gotoPage} pageIndex={pageIndex} previousPage={previousPage} canPreviousPage={canPreviousPage} pageOptions={pageOptions} canNextPage = {canNextPage} nextPage={nextPage}/>
     
      {selectedFlatRows.length > 0 && (
        /*@ts-ignore*/
        <Description selectedFlatRows={selectedFlatRows} />
      )}
    </>
  );
};
