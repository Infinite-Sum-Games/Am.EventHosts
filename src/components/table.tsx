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
import { draftData } from "@/data/draftData";

export interface DraftData {
  iD: number;
  name: string;
  email: string;
  status: string;
  availability: string;
  location: string;
  joined: string;
  balance: number;
  avatar: string;
  flag: string;
  company: string;
  role: string;
}
export default function DraftTable() {
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });
  const [sorting, setSorting] = useState<SortingState>([]);
  const [filters, setFilters] = useState<Filter[]>([]);
  const columnHelper = createColumnHelper<DraftData>();
  const columns = [
    columnHelper.accessor("iD", {
      header: ({ column }) => (
        <DataGridColumnHeader title="ID" column={column} />
      ),
      cell: ({ getValue }) => <div>{getValue().toLocaleString()}</div>,
      size: 180,
      enableSorting: true,
      enableHiding: true,
      enableResizing: true,
      enablePinning: true,
      filterFn: (row, columnId, filterValue) => {
        if (!filterValue) return true;
        const [min, max] = filterValue;
        const value = Number(row.getValue(columnId));
        return value >= min && value <= max;
      },
    }),
    columnHelper.accessor("name", {
      header: ({ column }) => (
        <DataGridColumnHeader title="Name" column={column} />
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
    columnHelper.accessor("status", {
      header: ({ column }) => (
        <DataGridColumnHeader title="Status" column={column} />
      ),
      cell: ({ getValue }) => <div>{String(getValue() || "")}</div>,
      size: 180,
      enableSorting: true,
      enableHiding: true,
      enableResizing: true,
      enablePinning: true,
    }),
    columnHelper.accessor("availability", {
      header: ({ column }) => (
        <DataGridColumnHeader title="Availability" column={column} />
      ),
      cell: ({ getValue }) => <div>{String(getValue() || "")}</div>,
      size: 180,
      enableSorting: true,
      enableHiding: true,
      enableResizing: true,
      enablePinning: true,
    }),
    columnHelper.accessor("location", {
      header: ({ column }) => (
        <DataGridColumnHeader title="Location" column={column} />
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
    columnHelper.accessor("joined", {
      header: ({ column }) => (
        <DataGridColumnHeader title="Joined" column={column} />
      ),
      cell: ({ getValue }) =>
        getValue() ? (
          <div>{new Date(getValue()).toLocaleDateString()}</div>
        ) : (
          <div></div>
        ),
      size: 180,
      enableSorting: true,
      enableHiding: true,
      enableResizing: true,
      enablePinning: true,
    }),
    columnHelper.accessor("balance", {
      header: ({ column }) => (
        <DataGridColumnHeader title="Balance ($)" column={column} />
      ),
      cell: ({ getValue }) => <div>{getValue().toLocaleString()}</div>,
      size: 180,
      enableSorting: true,
      enableHiding: true,
      enableResizing: true,
      enablePinning: true,
      filterFn: (row, columnId, filterValue) => {
        if (!filterValue) return true;
        const [min, max] = filterValue;
        const value = Number(row.getValue(columnId));
        return value >= min && value <= max;
      },
    }),
    columnHelper.accessor("avatar", {
      header: ({ column }) => (
        <DataGridColumnHeader title="Avatar" column={column} />
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
    columnHelper.accessor("flag", {
      header: ({ column }) => (
        <DataGridColumnHeader title="Flag" column={column} />
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
    columnHelper.accessor("company", {
      header: ({ column }) => (
        <DataGridColumnHeader title="Company" column={column} />
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
    columnHelper.accessor("role", {
      header: ({ column }) => (
        <DataGridColumnHeader title="Role" column={column} />
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
  ];
  const filterFields = useMemo<FilterFieldConfig[]>(
    () => [
      {
        key: "iD",
        label: "iD",
        type: "number",
        placeholder: "Filter by id...",
      },
      {
        key: "name",
        label: "name",
        type: "text",
        placeholder: "Filter by name...",
      },
      {
        key: "email",
        label: "email",
        type: "email",
        placeholder: "Filter by email...",
      },
      {
        key: "status",
        label: "status",
        type: "select",
        placeholder: "Filter by status...",
        options: [
          {
            label: "active",
            value: "active",
          },
          {
            label: "inactive",
            value: "inactive",
          },
        ],
        searchable: true,
        className: "w-[160px]",
      },
      {
        key: "availability",
        label: "availability",
        type: "select",
        placeholder: "Filter by availability...",
        options: [
          {
            label: "online",
            value: "online",
          },
          {
            label: "away",
            value: "away",
          },
          {
            label: "busy",
            value: "busy",
          },
          {
            label: "offline",
            value: "offline",
          },
        ],
        searchable: true,
        className: "w-[160px]",
      },
      {
        key: "location",
        label: "location",
        type: "text",
        placeholder: "Filter by location...",
      },
      {
        key: "joined",
        label: "joined",
        type: "date",
        placeholder: "Filter by joined...",
      },
      {
        key: "balance($)",
        label: "balance($)",
        type: "number",
        placeholder: "Filter by balance($)...",
      },
      {
        key: "avatar",
        label: "avatar",
        type: "text",
        placeholder: "Filter by avatar...",
      },
      {
        key: "flag",
        label: "flag",
        type: "text",
        placeholder: "Filter by flag...",
      },
      {
        key: "company",
        label: "company",
        type: "text",
        placeholder: "Filter by company...",
      },
      {
        key: "role",
        label: "role",
        type: "text",
        placeholder: "Filter by role...",
      },
    ],
    []
  );
  // Apply filters to data
  const filteredData = useMemo(() => {
    const data = draftData;
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
        const fieldValue = item[field as keyof DraftData];
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
          case "greater_than":
            return Number(fieldValue) > Number(values[0]);
          case "less_than":
            return Number(fieldValue) < Number(values[0]);
          case "greater_than_or_equal":
            return Number(fieldValue) >= Number(values[0]);
          case "less_than_or_equal":
            return Number(fieldValue) <= Number(values[0]);
          case "between":
            if (values.length >= 2) {
              const min = Number(values[0]);
              const max = Number(values[1]);
              return Number(fieldValue) >= min && Number(fieldValue) <= max;
            }
            return true;
          case "not_between":
            if (values.length >= 2) {
              const min = Number(values[0]);
              const max = Number(values[1]);
              return Number(fieldValue) < min || Number(fieldValue) > max;
            }
            return true;
          case "before":
            return new Date(String(fieldValue)) < new Date(String(values[0]));
          case "after":
            return new Date(String(fieldValue)) > new Date(String(values[0]));
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
  }, [filters, draftData]);
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
