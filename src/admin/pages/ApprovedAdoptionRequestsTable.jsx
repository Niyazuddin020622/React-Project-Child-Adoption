import React from "react";
import { Table, Button } from "react-bootstrap";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

const ApprovedAdoptionRequestsTable = ({ successfulRequests }) => {
  const handleDownloadExcel = () => {
    const formattedData = successfulRequests.map((request, index) => ({
      "S.No": index + 1,
      "User Name": request.fullName,
      "Child Name": request.child?.name || "N/A",
      "Child Location": request.child?.location || "N/A",
      Email: request.email,
      Phone: request.phone,
      "User Address": request.address,
      Occupation: request.occupation,
      "Approved Date": request.adoptionDate
        ? new Date(request.adoptionDate).toLocaleDateString()
        : "N/A",
    }));

    const worksheet = XLSX.utils.json_to_sheet(formattedData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "ApprovedRequests");

    const excelBuffer = XLSX.write(workbook, {
      bookType: "xlsx",
      type: "array",
    });

    const data = new Blob([excelBuffer], {
      type:
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8",
    });
    saveAs(data, "Approved_Adoption_Requests.xlsx");
  };

  return (
    <>
      <div className="d-flex justify-content-between align-items-center m-4">
        <h3>Approved Adoption Requests</h3>
        <Button variant="success" onClick={handleDownloadExcel}>
          Download Excel
        </Button>
      </div>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>User Name</th>
            <th>Child Name</th>
            <th>Child Location</th>
            <th>Email</th>
            <th>Phone</th>
            <th>User Address</th>
            <th>Occupation</th>
            <th>Approved Date</th>
          </tr>
        </thead>
        <tbody>
          {successfulRequests.map((request, index) => (
            <tr key={request._id || index}>
              <td>{index + 1}</td>
              <td>{request.fullName}</td>
              <td>{request.child?.name || "N/A"}</td>
              <td>{request.child?.location || "N/A"}</td>
              <td>{request.email}</td>
              <td>{request.phone}</td>
              <td>{request.address}</td>
              <td>{request.occupation}</td>
              <td>
                {request.adoptionDate
                  ? new Date(request.adoptionDate).toLocaleDateString()
                  : "N/A"}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default ApprovedAdoptionRequestsTable;
