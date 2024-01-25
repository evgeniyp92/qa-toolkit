"use client";

import React from "react";
import { DataGridPro, LicenseInfo } from "@mui/x-data-grid-pro";

LicenseInfo.setLicenseKey(process.env.NEXT_PUBLIC_MUI_KEY);

const rows = [
  { id: 1, col1: "Hello", col2: "World" },
  { id: 2, col1: "XGrid", col2: "is Awesome" },
  { id: 3, col1: "Material-UI", col2: "is Amazing" },
];

const columns = [
  { field: "col1", headerName: "Column 1", width: 150 },
  { field: "col2", headerName: "Column 2", width: 150 },
];

const CustomDataGrid = ({ customRows, customColumns }) => {
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGridPro rows={customRows || rows} columns={customColumns || columns} />
    </div>
  );
};

export default CustomDataGrid;
