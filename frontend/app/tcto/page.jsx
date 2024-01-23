import React from "react";
import CustomDataGrid from "@/components/DataGrid";

const TechnicalOrders = () => {
  return (
    <div>
      TCTO Management
      <CustomDataGrid />
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
