"use client";

export default function EditModal({
    editModalRef,
    editingName,
    setEditingName,
    handleSaveEdit,
    text
}) {
    const handleXssInput = (text) => {
        // Sanitize input to prevent XSS
        const sanitizedValue = text
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
        // 注释掉这些中文输入法会触发异常
        // .replace(/&/g, '&amp;')
        // .replace(/"/g, '&quot;')
        // .replace(/'/g, '&#x27;')
        // .replace(/\//g, '&#x2F;');
        setEditingName(sanitizedValue);
    }

    return (
        <dialog ref={editModalRef} className="modal">
            <div className="modal-box">
                <h3 className="font-bold text-lg">{text.title}</h3>
                <div className="py-4">
                    <input
                        type="text"
                        value={editingName}
                        onChange={(e) => handleXssInput(e.target.value)}
                        className="input input-bordered w-full"
                        placeholder="Enter counter name"
                    />
                </div>
                <div className="modal-action">
                    <form method="dialog" className="flex gap-2">
                        <button className="btn">{text.cancel}</button>
                        <button className="btn" onClick={handleSaveEdit}>{text.save}</button>
                    </form>
                </div>
            </div>
        </dialog>
    );
}