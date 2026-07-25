/*"use client";

import { BubbleMenu } from "@tiptap/extension-bubble-menu/react";
import ToolbarButton from "./ToolbarButton";

export default function BubbleToolbar({ editor }) {
  if (!editor) return null;

  return (
    <BubbleMenu
      editor={editor}
      tippyOptions={{
        duration: 150,
      }}
    >
      <div className="flex gap-2 rounded-xl border bg-white p-2 shadow-xl">

        <ToolbarButton
          active={editor.isActive("bold")}
          onClick={() => editor.chain().focus().toggleBold().run()}
        >
          <b>B</b>
        </ToolbarButton>

        <ToolbarButton
          active={editor.isActive("italic")}
          onClick={() => editor.chain().focus().toggleItalic().run()}
        >
          <i>I</i>
        </ToolbarButton>

        <ToolbarButton
          active={editor.isActive("underline")}
          onClick={() =>
            editor.chain().focus().toggleUnderline().run()
          }
        >
          U
        </ToolbarButton>

        <ToolbarButton
          active={editor.isActive("blockquote")}
          onClick={() =>
            editor.chain().focus().toggleBlockquote().run()
          }
        >
          ❝
        </ToolbarButton>

      </div>
    </BubbleMenu>
  );
}
*/