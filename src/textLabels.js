/*
 * Default text labels.
 */
const textLabels = {
  body: {
    noMatch: 'Sorry, no matching records found',
    columnHeaderTooltip: label => {
      return 'Sort by ' + label;
    },
  },
  pagination: {
    next: 'Next Page',
    previous: 'Previous Page',
    rowsPerPage: 'Rows per page:',
    displayRows: 'of',
  },
  toolbar: {
    search: 'Search',
    downloadCsv: 'Download CSV',
    print: 'Print',
    viewColumns: 'View Columns',
    filterTable: 'Filter Table',
  },
  filter: {
    all: 'All',
    title: 'FILTERS',
    reset: 'RESET',
    clear: 'CLEAR',
  },
  viewColumns: {
    title: 'Show Columns',
    titleAria: 'Show/Hide Table Columns',
  },
  selectedRows: {
    text: 'row(s) selected',
    delete: 'Delete',
    deleteAria: 'Delete Selected Rows',
  },
};

export default textLabels;
