import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "sonner";

const CLOUDINARY_UPLOAD_URL = process.env.REACT_APP_CLOUDINARY_UPLOAD_URL;
const CLOUDINARY_UPLOAD_PRESET = process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET;
const MOCKAPI_URL = process.env.REACT_APP_MOCKAPI_URL;

const categories = [
  { id: "social-media", label: "Social Media" },
  { id: "printing", label: "Printing" },
  { id: "web-design", label: "Web Design" },
  { id: "video-editing", label: "Video Editing" },
];

const ProjectManager = () => {
  const [projects, setProjects] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    description: "",
    software: "",
  });
  const [selectedFiles, setSelectedFiles] = useState(null);
  const [editId, setEditId] = useState(null);
  const [isCreating, setIsCreating] = useState(false);
  const [isSubmiting, setIsSubmiting] = useState(false)

  useEffect(() => {
    axios.get(MOCKAPI_URL).then((res) => setProjects(res.data));
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const uploadMedia = async () => {
    if (!selectedFiles.length) return formData.mediaUrls;

    const uploadedUrls = [];
    for (let i = 0; i < selectedFiles.length; i++) {
      const file = selectedFiles[i];
      const fileType = file.type;
      if (!fileType.startsWith("image/") && !fileType.startsWith("video/")) {
        toast.error(`File ${i + 1}: Unsupported format. Only images and videos are allowed.`);
        continue;
      }
      const formDataMedia = new FormData();
      formDataMedia.append("file", file);
      formDataMedia.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);
      try {
        const response = await axios.post(CLOUDINARY_UPLOAD_URL, formDataMedia);
        uploadedUrls.push(response.data.secure_url);
        toast.success(`File ${i + 1}: Uploaded successfully.`);
      } catch (error) {
        toast.error(`File ${i + 1}: Upload failed.`);
      }
    }
    return uploadedUrls;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    toast.loading("Uploading media...");
    setIsSubmiting(true)
    const uploadedMediaUrls = await uploadMedia();
    toast.dismiss();

    if (uploadedMediaUrls.length === 0) {
      toast.error("Media upload failed. Please try again.");
      return;
    }

    try {
      for (let i = 0; i < uploadedMediaUrls.length; i++) {
        try{
          await axios.post(MOCKAPI_URL, { ...formData, mediaUrl: uploadedMediaUrls[i] });
          toast.success(`Project created for media ${i + 1} successfully!`);
        }catch(error){
          console.log(`project created for medila ${i + 1}  failed!`, error)
          toast.error(`Project created for media ${i + 1} failed!`);
        }
      }
      toast.success("Projects created successfully!");
      setFormData({ title: "", category: "", description: "", software: "" });
      setSelectedFiles([]);
      const response = await axios.get(MOCKAPI_URL);
      setProjects(response.data);
      setIsSubmiting(false)
      setIsCreating(false);
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
      console.error("Error:", error);
      setIsSubmiting(false)
    }
  };

  const handleEdit = (project) => {
    setFormData(project);
    setEditId(project.id);
    setIsCreating(true); // Open form in edit mode
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${MOCKAPI_URL}/${id}`);
      toast.success("Project deleted successfully!");
      setProjects(projects.filter((project) => project.id !== id));
    } catch (error) {
      toast.error("Failed to delete project.");
    }
  };

  const handleAddProject = () => {
    setIsCreating(true); // Show the create project form
  };

  const handleCancel = () => {
    setIsCreating(false); // Hide the form and show the project dashboard
    setFormData({ title: "", category: "", description: "", software: "",});
    setSelectedFiles(null);
    setEditId(null);
  };

  return (
    <div className="max-w-[80%] mx-auto p-6 border rounded-lg shadow-md bg-white">
      {/* Conditional rendering based on isCreating state */}
      {isCreating ? (
        <>
          <h2 className="text-2xl font-bold mb-4">{editId ? "Edit Project" : "Create Project"}</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="title"
              placeholder="Title"
              value={formData.title}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded"
            />
            <select name="category" value={formData.category} onChange={handleChange} required className="w-full p-2 border rounded">
              <option value="">Select Category</option>
              {categories.map((cat) => (
                <option key={cat.id} value={cat.id}>{cat.label}</option>
              ))}
            </select>
            <textarea
              name="description"
              placeholder="Description"
              value={formData.description}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded"
            />
            <input
              type="text"
              name="software"
              placeholder="Software"
              value={formData.software}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded"
            />
            <input type="file" multiple className="w-full p-2 border rounded" 
              onChange={(e) => setSelectedFiles(Array.from(e.target.files))}
            />
            <button type="submit" className={`w-full text-white py-2 rounded ${isSubmiting? "bg-blue-400" : "cursor-pointer bg-blue-600 hover:bg-blue-700"}`}
              disabled={isSubmiting}
            >
              {editId ? "Update Project" : "Create Project"}
            </button>
            <button
              type="button"
              onClick={handleCancel}
              disabled={isSubmiting}
              className={`w-full mt-2 text-white py-2 rounded  ${isSubmiting? "bg-gray-400" : "cursor-pointer bg-gray-600 hover:bg-gray-700"}`}
            >
              Cancel
            </button>
          </form>
        </>
      ) : (
        <>
        <div className="flex justify-between">
          <h3 className="text-xl font-semibold mt-6">Projects</h3>
          
          <button
            onClick={handleAddProject}
            className=" bg-green-600 self-center text-white p-2 rounded hover:bg-green-700 mb-4"
          >
            Add Project
          </button>
        </div>
          <ul className="mt-4 flex flex-wrap gap-3">
            {projects.map((project) => (
              <li key={project.id} className="mb-4 p-4 w-[30%] border rounded shadow-sm bg-gray-100">
                <h4 className="text-lg font-bold">{project.title}</h4>
                <p><strong>Category:</strong> {project.category}</p>
                <p>{project.description}</p>
                <p><strong>Software:</strong> {project.software}</p>
                {project.mediaUrl && (project.mediaUrl.endsWith(".mp4") || project.mediaUrl.endsWith(".mov")) ? (
                  <video controls className="w-24 h-24 mt-2">
                    <source src={project.mediaUrl} type="video/mp4" />
                  </video>
                ) : (
                  <img src={project.mediaUrl} alt="Project" className="w-24 h-24 mt-2" />
                )}
                <div className="mt-2">
                  <button onClick={() => handleEdit(project)} className="mr-2 bg-yellow-500 text-white px-3 py-1 rounded">Edit</button>
                  <button onClick={() => handleDelete(project.id)} className="bg-red-600 text-white px-3 py-1 rounded">Delete</button>
                </div>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default ProjectManager;
