/* eslint-disable no-unused-vars */
import React from "react";
import DeletePhoto from "../components/Modals/DeletePhoto/DeletePhoto";
import SuccessMessage from "../components/Modals/SuccessMessage/SuccessMessage";
import Filter from "../components/Filter/Filter";

// Route created for testing new content
export default function TestPage() {
  return (
    <div style={{ marginTop: "100px", padding: "150px" }}>
      {/* <DeletePhoto />
      <SuccessMessage /> */}
      <Filter />
    </div>
  );
}
