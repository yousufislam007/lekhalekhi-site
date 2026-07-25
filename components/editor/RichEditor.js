"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import { useEffect } from "react";

import Toolbar from "./Toolbar";
import { editorExtensions } from "./extensions";

export default function RichEditor({
  value,
  onChange,
}) {
  const editor = useEditor({
    extensions: editorExtensions,

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
  }, [editor, value]);

  if (!editor) return null;

  return (
    <div className="overflow-hidden rounded-xl border border-gray-300">

      <Toolbar editor={editor} />
      

      <EditorContent
        editor={editor}
        className="min-h-[450px] bg-white p-6"
      />

    </div>
  );
}