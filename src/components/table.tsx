import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useMemo, useState, useCallback } from "react";
import { Settings2, Fuel as FunnelX } from "lucide-react";
import {
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
import { Participant } from "@/services/organizer";
import { exportTableDataAsCSV } from "@/lib/csv";

export interface TableData {
  teamName: string;
  studentName: string;
  email: string;
  college: string;
  city: string;
  amritaCBEStudent: boolean;
}

interface TableTableProps {
  eventId: string | null;
  participants: Participant[];
}

export default function TableTable({ participants }: TableTableProps) {
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });
  const [sorting, setSorting] = useState<SortingState>([]);
  const [filters, setFilters] = useState<Filter[]>([]);
  const columnHelper = createColumnHelper<TableData>();


  const tableData: TableData[] = useMemo(() => {
    return (participants || []).map((p) => ({
      teamName: p.team_name || "",
      studentName: p.student_name,
      email: p.email,
      college: p.college,
      city: p.city,
      amritaCBEStudent: p.is_amrita_student,
    }));
  }, [participants]);


  const columns = [
    columnHelper.accessor("teamName", {
      header: ({ column }) => (
        <DataGridColumnHeader title="Team Name" column={column} />
      ),
      cell: ({ getValue }) => (
        <div className="font-medium text-foreground">
          {String(getValue() || "")}
        </div>
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
        <div className="font-medium text-foreground">
          {String(getValue() || "")}
        </div>
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
      cell: ({ getValue }) => (
        <div className="text-muted-foreground">{String(getValue() || "")}</div>
      ),
      size: 220,
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
        <div className="font-medium text-foreground">
          {String(getValue() || "")}
        </div>
      ),
      size: 200,
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
        <div className="text-foreground">{String(getValue() || "")}</div>
      ),
      size: 150,
      enableSorting: true,
      enableHiding: true,
      enableResizing: true,
      enablePinning: true,
    }),
    columnHelper.accessor("amritaCBEStudent", {
      header: ({ column }) => (
        <DataGridColumnHeader title="Amrita CBE Student" column={column} />
      ),
      cell: ({ getValue }) => (
        <Badge
          variant={getValue() ? "primary" : "secondary"}
          className={
            getValue()
              ? "bg-amber-500/20 text-amber-400 border-amber-500/30"
              : ""
          }
        >
          {getValue() ? "YES" : "NO"}
        </Badge>
      ),
      size: 160,
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
        label: "Team Name",
        type: "text",
        placeholder: "Filter by team name...",
      },
      {
        key: "studentName",
        label: "Student Name",
        type: "text",
        placeholder: "Filter by student name...",
      },
      {
        key: "email",
        label: "Email",
        type: "email",
        placeholder: "Filter by email...",
      },
      {
        key: "college",
        label: "College",
        type: "text",
        placeholder: "Filter by college...",
      },
      {
        key: "city",
        label: "City",
        type: "text",
        placeholder: "Filter by city...",
      },
      {
        key: "amritaCBEStudent",
        label: "Amrita CBE Student",
        type: "boolean",
        placeholder: "Filter by student status...",
        onLabel: "Yes",
        offLabel: "No",
      },
    ],
    []
  );

  // const tableData = participants || [];


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
      <div className="w-full space-y-4">
        <div className="flex items-center gap-3">
          {/* <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              className="pl-9 h-9 bg-card/50 border-border focus:border-amber-500/50 focus:ring-amber-500/20"
              value={(table.getState().globalFilter ?? "") as string}
              onChange={(e) => table.setGlobalFilter(e.target.value)}
              placeholder="Search all columns..."
              type="text"
              aria-label="Search all columns"
            />
          </div> */}

          <div className="flex items-center gap-2">
            <DataGridColumnVisibility
              table={table}
              trigger={
                <Button
                  variant="outline"
                  size="sm"
                  className="h-9 border-border hover:bg-accent/50 hover:border-amber-500/30 bg-transparent"
                >
                  <Settings2 className="h-4 w-4 mr-2" />
                  View
                </Button>
              }
            />
          </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="h-9 border-border hover:bg-amber-500/10 hover:border-amber-500/40"
                      onClick={() =>
                        exportTableDataAsCSV(filteredData, "participants_export")
                      }
                      disabled={filteredData.length === 0}
                    >
                      Export CSV
                    </Button>
          <div className="flex items-center gap-3 flex-wrap">
            <div className="flex-1">
              <Filters
                filters={filters}
                fields={filterFields}
                variant="outline"
                onChange={handleFiltersChange}
              />
            </div>
            {filters.length > 0 && (
              <Button
                variant="outline"
                size="sm"
                onClick={() => setFilters([])}
                className="h-9 border-border hover:bg-destructive/10 hover:text-destructive hover:border-destructive/30"
              >
                <FunnelX className="h-4 w-4 mr-2" />
                Clear Filters
              </Button>
            )}
          </div>
        </div>

        <div className="rounded-lg border border-border bg-card/30 overflow-hidden">
          <DataGridContainer>
            <ScrollArea>
              <DataGridTable />
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
          </DataGridContainer>
        </div>

        <div className="pt-2">
          <DataGridPagination />
        </div>
      </div>
    </DataGrid>
  );
}
