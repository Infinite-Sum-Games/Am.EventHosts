export function exportTableDataAsCSV<T extends Record<string, any>>(
  rows: T[],
  fileName: string
) {
  if (!rows || rows.length === 0) return;

  const headers = Object.keys(rows[0]);

  const csv = [
    headers.join(","),
    ...rows.map((row) =>
      headers.map((h) => JSON.stringify(row[h] ?? "")).join(",")
    ),
  ].join("\n");

  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = `${fileName}.csv`;
  a.click();

  URL.revokeObjectURL(url);
}
