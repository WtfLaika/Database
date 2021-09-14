import React, { ReactNode } from "react";



/*@ts-ignore*/
export const Pagination:React.FC= ({gotoPage,pageIndex,previousPage,canPreviousPage,pageOptions,canNextPage,nextPage,pageCount})=> {

    return(
        <div className="pages">
        <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {"«"}
        </button>

        <button
          onClick={() => {
            previousPage();
          }}
          disabled={!canPreviousPage}
        >
          Previous
        </button>
        {pageIndex > 0 && (
          <button
            onClick={() => {
              if (pageIndex > 0) gotoPage(pageIndex - 1);
            }}
          >
            {pageIndex}
          </button>
        )}
        <button disabled className="current-page">
          {pageIndex + 1}
        </button>
        {pageIndex + 1 < pageOptions.length && (
          <button
            onClick={() => {
              if (pageIndex < pageOptions.length) gotoPage(pageIndex + 1);
            }}
          >
            {pageIndex + 2}
          </button>
        )}
        <button
          onClick={() => {
            nextPage();
          }}
          disabled={!canNextPage}
        >
          Next
        </button>

        <button
          onClick={() => {
            gotoPage(pageCount - 1);
          }}
          disabled={!canNextPage}
        >
          {" "}
          {"»"}
        </button>
      </div>
    )
}