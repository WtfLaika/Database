interface IGlobalFilter {
  filters: string;
  setFilter: any;
}

export const GlobalFilter: React.FC<IGlobalFilter> = ({
  filters,
  setFilter,
}) => {
  return (
    <div className="searcher">
      Search: {""}
      <input
        value={filters || ""}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setFilter(e.target.value)
        }
      />
    </div>
  );
};
