import { useState } from "react";
import api from "../../api/axios";

export default function UploadResource({ courseId, lectureId, onUploaded }) {
    const [file, setFile] = useState(null);
    const [loading, setLoading] = useState(false);

    const upload = async () => {
        if (!file) return alert("Select a file");
        setLoading(true);

        try {
            const form = new FormData();
            form.append("file", file);

            const uploadRes = await api.post("/trainings/uploads/resources", form, { headers: { "Content-Type": "multipart/form-data" } });
            await api.post(`/trainings/${courseId}/lectures/${lectureId}/resources`,
                {
                    fileName: uploadRes.data.fileName,
                    fileUrl: uploadRes.data.fileUrl,
                    fileType: uploadRes.data.fileType
                }
            );

            setFile(null);
            onUploaded();
        } catch (err) {
            alert("Upload failed");
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="border border-green-100 p-4 rounded-lg space-y-3 mt-6">
            {/* <h3 className="font-semibold">Add Resource</h3> */}

            <input
                type="file"
                accept=".pdf,.ppt,.pptx,.doc,.docx"
                onChange={(e) => setFile(e.target.files[0])}
            />

            <button
                onClick={upload}
                disabled={loading}
                className="bg-green-800 px-4 py-2 rounded"
            >
                {loading ? "Uploading..." : "Upload"}
            </button>
        </div>
    );
}