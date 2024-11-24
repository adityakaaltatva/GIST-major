// FileManagement.js

import  { useState } from 'react';

const FileManagement = () => {
  const [files, setFiles] = useState([]);
  const [fileToUpload, setFileToUpload] = useState(null);
  
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFileToUpload(selectedFile);
    }
  };

  const handleFileUpload = () => {
    if (fileToUpload) {
      // Simulate file upload
      setFiles([...files, { name: fileToUpload.name, size: fileToUpload.size }]);
      setFileToUpload(null);
      alert('File uploaded successfully!');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="bg-white shadow-xl rounded-lg p-8">
        <h2 className="text-3xl font-semibold text-gray-700 mb-6">File Management</h2>

        {/* File Upload Section */}
        <div className="mb-6">
          <input
            type="file"
            onChange={handleFileChange}
            className="p-2 border border-gray-300 rounded-md mb-4 w-full"
          />
          <button
            onClick={handleFileUpload}
            className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all"
          >
            Upload File
          </button>
        </div>

        {/* File List */}
        <div className="mt-6">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">Uploaded Files</h3>
          <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-gray-200 text-left">
                <th className="py-3 px-4">File Name</th>
                <th className="py-3 px-4">Size</th>
                <th className="py-3 px-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {files.length > 0 ? (
                files.map((file, index) => (
                  <tr key={index}>
                    <td className="py-2 px-4">{file.name}</td>
                    <td className="py-2 px-4">{(file.size / 1024).toFixed(2)} KB</td>
                    <td className="py-2 px-4">
                      <button
                        className="text-blue-500 hover:underline"
                        onClick={() => alert('File downloaded!')}
                      >
                        Download
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="3" className="py-2 px-4 text-center text-gray-500">
                    No files uploaded.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default FileManagement;
