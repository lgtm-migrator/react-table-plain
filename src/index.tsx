import * as React from "react";

type Fn = (colDef: IColDef, data: any) => React.ReactNode;
type ElementContent = string | Fn;
export type ChangeFilterHandler = (orderBy: string, value: any) => void;

interface ITableElements {
  rootElement?: React.ReactNode;
  rowElement?: React.ReactNode;
  cellElement?: React.ReactNode;
  headerCellElement?: React.ReactNode;
  headerElement?: React.ReactNode;
  bodyElement?: React.ReactNode;
  footerElement?: React.ReactNode;
  renderSortLabel?: (colDef: IColDef, desc: boolean) => React.ReactNode;
  renderSortHint?: (colDef: IColDef) => React.ReactNode;
}

export enum RowSelectionType {
  "single-line",
  "multi-line",
}

export interface IRowSelectionProps {
  selectedRow?: any | any[]; // Welche Zeile wird hervorgehoben. Bei einem Array können mehrere Zeilen hervorgehoben werden (optional)
  onChangeSelectedRow?: (data: any) => void; // Ausgewählte Zeile wurde verändert.
  selectedRowProps?: (data: any) => object; // Wird pro ausgewählter Zeile aufgerufen. Ergebnis wird den Props der <tr> hinzugefügt.
  columnName: string; // Mit welchem Column selectedRow verglichen werden soll
}

export type RowSelectionProps = IRowSelectionProps;
export type SortDirection = "asc" | "desc";

export interface ITablePlainProps {
  data: any[];
  colDef?: IColDef[];
  orderBy?: string;
  sort?: SortDirection;
  onChangeOrderBy?: (orderBy: string) => void;
  onChangeFilter?: ChangeFilterHandler;
  onRowClick?: (data: any) => void;
  renderRoot?: (children: React.ReactNode) => React.ReactNode;
  renderHeaderCell?: (col: IColDef, idx: number) => React.ReactNode;
  renderFooterCell?: (
    col: IColDef,
    data: any[],
    idx: number
  ) => React.ReactNode;
  renderFilter?: (col: IColDef, idx: number) => React.ReactNode;
  renderExpansionIndicator?: (expanded: boolean) => React.ReactNode;
  subComponent?: (data: any) => React.ReactNode;
  rowProps?: (data: any) => object;
  cellProps?: (data: any) => object;
  filter?: object;
  defaultFilter?: object;
  ellipsis?: boolean;
  selectedRow?: any | any[];
  onChangeSelectedRow?: (data: any) => void;
  selectedRowProps?: (data: any) => object;
  rowSelectionColumnName?: string;
  filterBlur?: boolean;
}

export type TableProps = ITablePlainProps & ITableElements;

export interface IColDef {
  prop: string;
  header: string | ElementContent | React.ReactNode;
  accessor?: (data: any) => string;
  width?: number;
  render?: (data: any) => React.ReactNode;
  renderFilter?: (
    value: any,
    handleChange: (v: any) => void
  ) => React.ReactNode;
  props?: (data: any) => object;
  headerProps?: object;
  footerProps?: object;
  sortable?: boolean;
  filterable?: boolean;
  align?: "left" | "center" | "right";
  footer?: string | ElementContent;
}

export * from "./TablePlain";
