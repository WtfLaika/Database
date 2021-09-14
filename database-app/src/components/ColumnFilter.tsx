import React from "react";
import { useMemo } from "react";

export const ColumnFilter: React.FC = ({ column }: any) => {
  const { filterValue, setFilter, preFilteredRows, id } = column;
  const options = useMemo(() => {
    const options = new Set();
    preFilteredRows.forEach((row: any) => {
      options.add(row.values[id]);
    });
    //@ts-ignore
    return [...options.values()];
  }, [id, preFilteredRows]);

  return (
    <select
      className="column-searcher"
      value={filterValue}
      onChange={(e) => {
        setFilter(e.target.value || "");
      }}
    >
      <option value="">All</option>
      {options.map((option, i) => (
        <option key={i} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};
