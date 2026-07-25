export default function VideoCard({ video }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-brand-100 bg-white">
      <video
        controls
        preload="metadata"
        className="w-full aspect-video bg-black"
        src={video.filename}
      />

      <div className="p-4">
        <h3 className="text-lg font-semibold text-brand-900">
          {video.title}
        </h3>

        {video.description && (
          <p className="mt-1 text-sm text-brand-900/70">
            {video.description}
          </p>
        )}
      </div>
    </div>
  );
}