import React from "react";
import DeletePhoto from "../components/Modals/DeletePhoto/DeletePhoto";
import SuccessMessage from "../components/Modals/SuccessMessage/SuccessMessage";
import Filter from "../components/Filter/Filter";

// Route created for testing modals and new content
export default function TestPage() {
  return (
    <div>
      {/* <DeletePhoto />
      <SuccessMessage /> */}
      <Filter />
    </div>
  );
}
