import { useState } from "react";
import api from "../../api/axios";

export default function CreateCourse({ onClose, onCreated }) {
    const [form, setForm] = useState({
        title: "",
        description: "",
        thumbnailUrl: ""
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const submit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            await api.post("/trainings/Create", form);
            onCreated();
            onClose();
        } catch (err) {
            alert("Failed to create course");
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
            <form
                onSubmit={submit}
                className="bg-slate-900 p-6 rounded-xl w-full max-w-md space-y-4"
            >
                <h2 className="text-xl font-bold">Create Course</h2>

                <input
                name="title"
                placeholder="Course title"
                className="w-full p-2 rounded bg-slate-800"
                onChange={handleChange}
                required
                />

                <textarea
                name="description"
                placeholder="Course description"
                className="w-full p-2 rounded bg-slate-800"
                rows={4}
                onChange={handleChange}
                required
                />

                <input
                name="thumbnailUrl"
                placeholder="Thumbnail image URL"
                className="w-full p-2 rounded bg-slate-800"
                onChange={handleChange}
                />

                <div className="flex justify-end gap-3">
                <button
                    type="button"
                    onClick={onClose}
                    className="px-4 py-2 border rounded"
                >
                    Cancel
                </button>

                <button
                    type="submit"
                    disabled={loading}
                    className="px-4 py-2 bg-green-500 rounded text-black"
                >
                    {loading ? "Creating..." : "Create"}
                </button>
                </div>
            </form>
        </div>
    );
}