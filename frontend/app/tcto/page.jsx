"use client";

import React from "react";
import CustomDataGrid from "@/components/DataGrid";
import { uploadToS3 } from "@/lib/uploadToS3";

const tctos = [
  { id: 1, number: 1, title: "TCTO 1", status: "Open", priority: "High", suspense: new Date(2022, 0, 1) },
  {
    id: 2,
    number: 2,
    title: "TCTO 2",
    status: "Closed",
    priority: "Medium",
    suspense: new Date(2022, 1, 1),
  },
  { id: 3, number: 3, title: "TCTO 3", status: "Open", priority: "Low", suspense: new Date(2022, 2, 1) },
  { id: 4, number: 4, title: "TCTO 4", status: "Open", priority: "High", suspense: new Date(2022, 3, 1) },
  {
    id: 5,
    number: 5,
    title: "TCTO 5",
    status: "Closed",
    priority: "Medium",
    suspense: new Date(2022, 4, 1),
  },
];

const columns = [
  { field: "number", headerName: "TCTO Number", width: 150 },
  { field: "title", headerName: "Title", width: 150 },
  { field: "status", headerName: "Status", width: 150 },
  { field: "priority", headerName: "Priority", width: 150 },
  { field: "suspense", headerName: "Suspense", width: 150 },
];

// TODO: Bake in get

const TechnicalOrders = () => {
  return (
    <div>
      TCTO Management
      <CustomDataGrid customRows={tctos} customColumns={columns} />
      <button onClick={() => uploadToS3()}>Do the thing</button>
    </div>
  );
};

export default TechnicalOrders;

// show a list of tctos that are open by default
// sort them in terms of which ones are due for completion first

// TCTO Number
// Title
// Status
// Priority
// Suspense Date
// Download File
