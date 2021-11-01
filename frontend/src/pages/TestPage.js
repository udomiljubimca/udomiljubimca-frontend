import React from 'react';
import DeletePhoto from '../components/Modals/DeletePhoto/DeletePhoto';
import SuccessMessage from '../components/Modals/SuccessMessage/SuccessMessage';

// Route created for testing modals and new content
export default function TestPage() {
  return (
    <div>
      <DeletePhoto />
      <SuccessMessage />
    </div>
  );
}
