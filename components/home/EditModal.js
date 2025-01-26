"use client";

export default function EditModal({
    editModalRef,
    editingName,
    setEditingName,
    handleSaveEdit
}) {
    return (
        <dialog ref={editModalRef} className="modal">
            <div className="modal-box">
                <h3 className="font-bold text-lg">Edit Counter Name</h3>
                <div className="py-4">
                    <input
                        type="text"
                        value={editingName}
                        onChange={(e) => setEditingName(e.target.value)}
                        className="input input-bordered w-full"
                        placeholder="Enter counter name"
                    />
                </div>
                <div className="modal-action">
                    <form method="dialog" className="flex gap-2">
                        <button className="btn">Cancel</button>
                        <button className="btn" onClick={handleSaveEdit}>Save</button>
                    </form>
                </div>
            </div>
        </dialog>
    );
}