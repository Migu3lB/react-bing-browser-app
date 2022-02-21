/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap-icons/font/bootstrap-icons.css";

export default function ResultCard(dataResult) {
  const { name, url, snippet, displayUrl, dateLastCrawled } =
    dataResult.dataResult;

  const resultDateTime = new Date(dateLastCrawled).toISOString().split("T");

  return (
    <div className="card">
      <a href={url} target="_blank" rel="noopener noreferrer" ><h5 className="card-header">{name}</h5></a>
      <div className="card-body">
        <h5 className="card-title">{displayUrl}</h5>
        <p className="card-text">{snippet.substring(0, 250)}...</p>
      </div>
      <div className="card-footer text-muted">
        DateTime last crawled: {resultDateTime[0]} {resultDateTime[1].slice(0,5)}
      </div>
    </div>
  );
}
