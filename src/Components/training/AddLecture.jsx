import { useState } from "react";
import api from "../../api/axios";

export default function AddLecture({ courseId, onClose, onCreated }) {
    const [form, setForm] = useState({
        title: "",
        videoUrl: "",
        note: "",
        order: 1
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const submit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            await api.post(`/trainings/${courseId}/lectures`, {
                ...form,
                order: Number(form.order)
            });

            onCreated();
            onClose();
        } catch (err) {
            alert("Failed to add lecture")
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
            <form
                onSubmit={submit}
                className="bg-slate-900 p-6 rounded-xl w-full max-w-lg space-y-4"
            >
                <h2 className="text-xl font-bold">Add Lecture</h2>

                <input
                name="title"
                placeholder="Lecture title"
                className="w-full p-2 rounded bg-slate-800"
                onChange={handleChange}
                required
                />

                <input
                name="videoUrl"
                placeholder="YouTube embed URL"
                className="w-full p-2 rounded bg-slate-800"
                onChange={handleChange}
                required
                />

                <textarea
                name="note"
                placeholder="Lecture notes"
                rows={4}
                className="w-full p-2 rounded bg-slate-800"
                onChange={handleChange}
                />

                <input
                name="order"
                type="number"
                min="1"
                placeholder="Lecture order"
                className="w-full p-2 rounded bg-slate-800"
                onChange={handleChange}
                required
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
                    {loading ? "Saving..." : "Add Lecture"}
                </button>
                </div>
            </form>
        </div>

    );
}