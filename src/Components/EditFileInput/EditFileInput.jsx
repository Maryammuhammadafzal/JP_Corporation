import React, { useState } from "react";
import { Link } from "react-router-dom";
import Downloads from "../Downloads/Downloads";

export const EditFileInput = ({ label, id, fileRef, onChange, existingFile, name }) => {
  
  return(
  <div className="imageInput text-sm rounded-md w-full h-auto">
    <div className="flex flex-col gap-2">
      {label}
      <label htmlFor={id} className="w-full h-auto flex">
        {/* Custom Button */}
        <button
          type="button"
          className="bg-neutral-300 border-neutral-500 border border-r-0 hover:bg-neutral-400 w-[120px] p-3 rounded-bl-xl rounded-tl-xl shadow-md transition duration-300"
        >
          Upload File
        </button>

        {/* File Input */}
        <input
          type="file"
          name={name}
          id={id}
          onChange={onChange}
          className="border-neutral-500 border rounded-br-xl p-3 rounded-tr-xl w-[90%]"
        />
      </label>
    </div>
    {existingFile && (
      <div className="existingFile w-full h-auto p-2 text-sm">
        <p>
          Existing {label} File:{" "}
          <Link to={`/${existingFile}`} target="_blank" rel="noopener noreferrer">
            View
          </Link>
        </p>
      </div>
    )}
  </div>
)}