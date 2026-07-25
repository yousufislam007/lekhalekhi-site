/*"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";
import Link from "@tiptap/extension-link";
import Image from "@tiptap/extension-image";
import { useEffect } from "react";
import { useRef } from "react";

export default function RichEditor({ value, onChange }) {
  const editor = useEditor({
    extensions: [
      StarterKit,

      Placeholder.configure({
        placeholder: "আপনার লেখা শুরু করুন...",
      }),

      Link.configure({
        openOnClick: false,
      }),

      Image,
    ],

    content: value || "",

    immediatelyRender: false,

    onUpdate({ editor }) {
      onChange(editor.getHTML());
    },
  });

  useEffect(() => {
    if (!editor) return;

    if (editor.getHTML() !== value) {
      editor.commands.setContent(value || "");
    }
  }, [value, editor]);

  const fileInputRef = useRef(null);

async function uploadImage(file) {
  const formData = new FormData();
  formData.append("file", file);

  const res = await fetch("/api/upload", {
    method: "POST",
    body: formData,
  });

  const data = await res.json();

  if (!data.url) {
    alert("Image upload failed");
    return;
  }

  editor.chain().focus().setImage({ src: data.url }).run();
}

  if (!editor) return null;

  return (
    <div className="rounded-xl border border-gray-300 overflow-hidden">
      <div className="flex flex-wrap gap-2 border-b bg-gray-50 p-3">

        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBold().run()}
          className="rounded border px-3 py-1"
        >
          Bold
        </button>

        <button
          type="button"
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className="rounded border px-3 py-1"
        >
          Italic
        </button>

        <button
          type="button"
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 2 }).run()
          }
          className="rounded border px-3 py-1"
        >
          H2
        </button>

        <button
          type="button"
          onClick={() =>
            editor.chain().focus().toggleBulletList().run()
          }
          className="rounded border px-3 py-1"
        >
          • List
        </button>

       <button
  type="button"
  onClick={() => fileInputRef.current?.click()}
  className="rounded border px-3 py-1"
>
  📷 Image
</button>

<input
  ref={fileInputRef}
  type="file"
  accept="image/*"
  hidden
  onChange={(e) => {
    const file = e.target.files?.[0];
    if (file) uploadImage(file);
  }}
/>

      </div>

      <EditorContent
        editor={editor}
        className="min-h-[350px] p-5"
      />
    </div>
  );
}
*/