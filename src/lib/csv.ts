import { Participant } from "./type";
export function exportParticipantsAsCSV(
  participants: Participant[],
  eventName: string
) {
  if (!participants || participants.length === 0) return;

  // Convert objects → CSV rows
  const headers = Object.keys(participants[0]);

  const csvRows = [
    headers.join(","), // header row
    ...participants.map((p) =>
      headers.map((h) => JSON.stringify((p as any)[h] ?? "")).join(",")
    ),
  ];

  const blob = new Blob([csvRows.join("\n")], { type: "text/csv" });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = `${eventName.replace(/\s+/g, "_")}_participants.csv`;
  a.click();

  URL.revokeObjectURL(url);
}
