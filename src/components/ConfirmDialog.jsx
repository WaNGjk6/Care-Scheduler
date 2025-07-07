export default function ConfirmDialog({ text, onConfirm, onCancel }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center">
      <div className="bg-white p-6 rounded shadow">
        <p className="mb-4">{text}</p>
        <div className="flex justify-end space-x-2">
          <button onClick={onCancel} className="px-4 py-2">否</button>
          <button onClick={onConfirm} className="px-4 py-2 bg-red-500 text-white rounded">是</button>
        </div>
      </div>
    </div>
  );
}
