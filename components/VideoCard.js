export default function VideoCard({ video }) {
  return (
    <div className="bg-white rounded-2xl border border-brand-100 overflow-hidden">
      <video
        controls
        preload="metadata"
        className="w-full aspect-video bg-black"
        src={`/uploads/${video.filename}`}
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-brand-900">{video.title}</h3>
        {video.description && (
          <p className="text-brand-900/70 mt-1 text-sm">{video.description}</p>
        )}
      </div>
    </div>
  );
}
