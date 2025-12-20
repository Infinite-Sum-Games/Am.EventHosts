import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useMemo, useState, useCallback } from "react";
import { EllipsisIcon, Settings2, FunnelX } from "lucide-react";
import {
  type ColumnDef,
  createColumnHelper,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  type PaginationState,
  type SortingState,
  useReactTable,
} from "@tanstack/react-table";
import { DataGrid, DataGridContainer } from "@/components/ui/data-grid";
import { DataGridColumnVisibility } from "@/components/ui/data-grid-column-visibility";
import { DataGridColumnHeader } from "@/components/ui/data-grid-column-header";
import { DataGridTable } from "@/components/ui/data-grid-table";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { DataGridPagination } from "@/components/ui/data-grid-pagination";
import {
  Filters,
  type Filter,
  type FilterFieldConfig,
} from "@/components/ui/filters";
import { Input } from "@/components/ui/input";
import { tableData } from "@/data/draftData";

export interface TableData {
  teamName: string;
  studentName: string;
  email: string;
  college: string;
  city: string;
  amritaCBEStudent: boolean;
}
export default function TableTable() {
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });
  const [sorting, setSorting] = useState<SortingState>([]);
  const [filters, setFilters] = useState<Filter[]>([]);
  const columnHelper = createColumnHelper<TableData>();
  const columns = [
    columnHelper.accessor("teamName", {
      header: ({ column }) => (
        <DataGridColumnHeader title="Team Name" column={column} />
      ),
      cell: ({ getValue }) => (
        <div className="font-medium">{String(getValue() || "")}</div>
      ),
      size: 180,
      enableSorting: true,
      enableHiding: true,
      enableResizing: true,
      enablePinning: true,
    }),
    columnHelper.accessor("studentName", {
      header: ({ column }) => (
        <DataGridColumnHeader title="Student Name" column={column} />
      ),
      cell: ({ getValue }) => (
        <div className="font-medium">{String(getValue() || "")}</div>
      ),
      size: 180,
      enableSorting: true,
      enableHiding: true,
      enableResizing: true,
      enablePinning: true,
    }),
    columnHelper.accessor("email", {
      header: ({ column }) => (
        <DataGridColumnHeader title="Email" column={column} />
      ),
      cell: ({ getValue }) => <div>{String(getValue() || "")}</div>,
      size: 180,
      enableSorting: true,
      enableHiding: true,
      enableResizing: true,
      enablePinning: true,
    }),
    columnHelper.accessor("college", {
      header: ({ column }) => (
        <DataGridColumnHeader title="College" column={column} />
      ),
      cell: ({ getValue }) => (
        <div className="font-medium">{String(getValue() || "")}</div>
      ),
      size: 180,
      enableSorting: true,
      enableHiding: true,
      enableResizing: true,
      enablePinning: true,
    }),
    columnHelper.accessor("city", {
      header: ({ column }) => (
        <DataGridColumnHeader title="City" column={column} />
      ),
      cell: ({ getValue }) => (
        <div className="font-medium">{String(getValue() || "")}</div>
      ),
      size: 180,
      enableSorting: true,
      enableHiding: true,
      enableResizing: true,
      enablePinning: true,
    }),
    columnHelper.accessor("amritaCBEStudent", {
      header: ({ column }) => (
        <DataGridColumnHeader title="Amrita CBE Student" column={column} />
      ),
      cell: ({ getValue }) => <Badge>{getValue() ? "YES" : "NO"}</Badge>,
      size: 180,
      enableSorting: true,
      enableHiding: true,
      enableResizing: true,
      enablePinning: true,
    }),
  ];
  const filterFields = useMemo<FilterFieldConfig[]>(
    () => [
      {
        key: "teamName",
        label: "teamName",
        type: "text",
        placeholder: "Filter by teamname...",
      },
      {
        key: "studentName",
        label: "studentName",
        type: "text",
        placeholder: "Filter by studentname...",
      },
      {
        key: "email",
        label: "email",
        type: "email",
        placeholder: "Filter by email...",
      },
      {
        key: "college",
        label: "college",
        type: "text",
        placeholder: "Filter by college...",
      },
      {
        key: "city",
        label: "city",
        type: "text",
        placeholder: "Filter by city...",
      },
      {
        key: "amritaCBEStudent",
        label: "amritaCBEStudent",
        type: "boolean",
        placeholder: "Filter by amritacbestudent...",
        onLabel: "True",
        offLabel: "False",
      },
    ],
    []
  );
  // Apply filters to data
  const filteredData = useMemo(() => {
    const data = tableData;
    let filtered = [...data];
    // Filter out empty filters before applying
    const activeFilters = filters.filter((filter) => {
      const { operator, values } = filter;
      // Empty and not_empty operators don't require values
      if (operator === "empty" || operator === "not_empty") return true;
      // Check if filter has meaningful values
      if (!values || values.length === 0) return false;
      // For text/string values, check if they're not empty strings
      if (
        values.every(
          (value) => typeof value === "string" && value.trim() === ""
        )
      )
        return false;
      // For number values, check if they're not null/undefined
      if (values.every((value) => value === null || value === undefined))
        return false;
      // For arrays, check if they're not empty
      if (values.every((value) => Array.isArray(value) && value.length === 0))
        return false;
      return true;
    });
    activeFilters.forEach((filter) => {
      const { field, operator, values } = filter;
      filtered = filtered.filter((item) => {
        const fieldValue = item[field as keyof TableData];
        switch (operator) {
          case "is":
            return values.some((value) => String(value) === String(fieldValue));
          case "is_not":
            return !values.some(
              (value) => String(value) === String(fieldValue)
            );
          case "contains":
            return values.some((value) =>
              String(fieldValue)
                .toLowerCase()
                .includes(String(value).toLowerCase())
            );
          case "not_contains":
            return !values.some((value) =>
              String(fieldValue)
                .toLowerCase()
                .includes(String(value).toLowerCase())
            );
          case "starts_with":
            return values.some((value) =>
              String(fieldValue)
                .toLowerCase()
                .startsWith(String(value).toLowerCase())
            );
          case "ends_with":
            return values.some((value) =>
              String(fieldValue)
                .toLowerCase()
                .endsWith(String(value).toLowerCase())
            );
          case "equals":
            return String(fieldValue) === String(values[0]);
          case "not_equals":
            return String(fieldValue) !== String(values[0]);
          case "empty":
            return (
              fieldValue === null ||
              fieldValue === undefined ||
              String(fieldValue).trim() === ""
            );
          case "not_empty":
            return (
              fieldValue !== null &&
              fieldValue !== undefined &&
              String(fieldValue).trim() !== ""
            );
          default:
            return true;
        }
      });
    });
    return filtered;
  }, [filters, tableData]);
  const handleFiltersChange = useCallback((filters: Filter[]) => {
    setFilters(filters);
    setPagination((prev) => ({
      ...prev,
      pageIndex: 0,
    }));
  }, []);
  const table = useReactTable({
    columns,
    data: filteredData,
    pageCount: Math.ceil((filteredData?.length || 0) / pagination.pageSize),
    state: {
      pagination,
      sorting,
    },
    enableSorting: true,
    enableSortingRemoval: false,
    onPaginationChange: setPagination,
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });
  return (
    <DataGrid
      table={table}
      recordCount={filteredData?.length || 0}
      tableLayout={{
        rowBorder: true,
        headerBorder: true,
        width: "fixed",
        columnsResizable: true,
        columnsPinnable: true,
        columnsVisibility: true,
      }}
    >
      <div className="w-full space-y-2.5">
        <div>
          <Input
            className="peer min-w-60 h-8"
            value={(table.getState().globalFilter ?? "") as string}
            onChange={(e) => table.setGlobalFilter(e.target.value)}
            placeholder="Search all columns..."
            type="text"
            aria-label="Search all columns"
          />
        </div>

        <div className="flex items-center gap-3">
          <DataGridColumnVisibility
            table={table}
            trigger={
              <Button variant="outline" size="sm">
                <Settings2 />
                View
              </Button>
            }
          />
        </div>

        <div className="flex-1">
          <Filters
            filters={filters}
            fields={filterFields}
            variant="outline"
            onChange={handleFiltersChange}
          />
        </div>
        {filters.length > 0 && (
          <Button variant="outline" onClick={() => setFilters([])}>
            <FunnelX /> Clear
          </Button>
        )}
        <DataGridContainer>
          <ScrollArea>
            <DataGridTable />
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </DataGridContainer>
        <DataGridPagination />
      </div>
    </DataGrid>
  );
}
