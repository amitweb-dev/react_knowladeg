
import React, { useState } from "react";
import listData from "./listData";
const PAGE_SIZE = 10;
export default function List() {
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(listData.length / PAGE_SIZE);
  const paginatedData = listData.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  return (
    <div className="card shadow border-0 mb-7">
      <div className="card-header">
        <h5 className="mb-0">Applications</h5>
      </div>
      <div className="table-responsive">
        <table className="table table-hover table-nowrap">
          <thead className="thead-light">
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Date</th>
              <th scope="col">Company</th>
              <th scope="col">Offer</th>
              <th scope="col">Meeting</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((row, idx) => (
              <tr key={idx}>
                <td>
                  <img alt="..." src={row.avatar} className="avatar avatar-sm rounded-circle me-2" />
                  <a className="text-heading font-semibold" href="#">{row.name}</a>
                </td>
                <td>{row.date}</td>
                <td>
                  <img alt="..." src={row.company.logo} className="avatar avatar-xs rounded-circle me-2" />
                  <a className="text-heading font-semibold" href="#">{row.company.name}</a>
                </td>
                <td>{row.offer}</td>
                <td>
                  <span className="badge badge-lg badge-dot">
                    <i className={`bg-${row.meeting.color}`}></i>{row.meeting.status}
                  </span>
                </td>
                <td className="text-end">
                  <a href="#" className="btn btn-sm btn-neutral mx-2">View</a>
                  <button type="button" className="btn btn-sm btn-square btn-neutral text-danger-hover">
                    <i className="bi bi-trash"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="card-footer border-0 py-5 d-flex flex-column flex-md-row align-items-center justify-content-center justify-content-md-between">
        <span className="text-muted text-sm">
          Showing {paginatedData.length} items out of {listData.length} results found
        </span>
        <div>
          <button disabled={page === 1} onClick={() => setPage(page - 1)}>Prev</button>
          <span> Page {page} of {totalPages} </span>
          <button disabled={page === totalPages} onClick={() => setPage(page + 1)}>Next</button>
        </div>
      </div>
    </div>
  );
}
