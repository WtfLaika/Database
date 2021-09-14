import React from "react";
import { matchSorter } from "match-sorter";

//@ts-ignore
export const fuzzyTextFilterFn: React.FC = (
  rows: any,
  id: string | number,
  filterValue: any
) => {
  //@ts-ignore
  return matchSorter(rows, filterValue, { keys: [(row) => row.values[id]] });
};
