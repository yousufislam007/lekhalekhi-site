"use client";

import { useRef, useState } from "react";
import ToolbarButton from "./ToolbarButton";

export default function ImageUploadButton({ editor }) {
  const inputRef = useRef(null);
  const [uploading, setUploading] = useState(false);

  async function upload(file) {
    try {
      setUploading(true);

      const formData = new FormData();
      formData.append("file", file);

      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (!data.url) {
        alert(data.error || "Upload failed");
        return;
      }

      editor
        .chain()
        .focus()
        .setImage({
          src: data.url,
        })
        .run();
    } finally {
      setUploading(false);
    }
  }

  return (
    <>
      <ToolbarButton
        title="Insert Image"
        onClick={() => inputRef.current?.click()}
      >
        {uploading ? "Uploading..." : "📷 Image"}
      </ToolbarButton>

      <input
        ref={inputRef}
        hidden
        type="file"
        accept="image/*"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) upload(file);
        }}
      />
    </>
  );
}