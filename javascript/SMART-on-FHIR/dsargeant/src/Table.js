import React from "react";
import MaterialTable from "material-table";

const loader = [{ condition: "Fetching conditions, one moment...", date: "" }];

export default function Table(props) {
  return (
    <div style={{ width: "75%", float: "right" }}>
      <MaterialTable
        title="Patient's Active Conditions"
        columns={[
          {
            title: "Condition",
            field: "condition"
          },
          {
            title: "Date Observed",
            field: "date"
          }
        ]}
        data={props.loading ? loader : props.data}
        actions={[
          {
            icon: "link",
            tooltip: "Find condition on Pubmed",
            onClick: (e, rowData) => {
              if (rowData.condition === loader ||
                rowData.condition === "Enter a patient ID to search conditions" ||
                rowData.condition === "No conditions associated with this ID.") {
                alert("No conditions to look up.");
              } else {
                window.open(
                  `https://www.ncbi.nlm.nih.gov/pubmed/?term=${rowData.condition}`,
                  "tab"
                );
              }
            }
          }
        ]}
        localization={{
          header: { actions: "Search Pubmed" },
          toolbar: { searchPlaceholder: "Search condition list" }
        }}
        options={{
          actionsColumnIndex: -1,
          pageSize: 10
        }}
      ></MaterialTable>
    </div>
  );
}
