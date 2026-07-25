"use client";

import ToolbarButton from "./ToolbarButton";
import ImageUploadButton from "./ImageUploadButton";

export default function Toolbar({ editor }) {
  if (!editor) return null;

  return (
    <div className="flex flex-wrap gap-2 border-b bg-gray-50 p-3">

      <ToolbarButton
        title="Bold"
        active={editor.isActive("bold")}
        onClick={() => editor.chain().focus().toggleBold().run()}
      >
        <b>B</b>
      </ToolbarButton>

      <ToolbarButton
        title="Italic"
        active={editor.isActive("italic")}
        onClick={() => editor.chain().focus().toggleItalic().run()}
      >
        <i>I</i>
      </ToolbarButton>

      <ToolbarButton
        title="Underline"
        active={editor.isActive("underline")}
        onClick={() => editor.chain().focus().toggleUnderline().run()}
      >
        U
      </ToolbarButton>

<ToolbarButton
  title="Insert Link"
  onClick={() => {
    const previousUrl = editor.getAttributes("link").href;

    const url = window.prompt(
      "Enter URL",
      previousUrl || "https://"
    );

    if (url === null) return;

    if (url === "") {
      editor
        .chain()
        .focus()
        .unsetLink()
        .run();

      return;
    }

    editor
      .chain()
      .focus()
      .extendMarkRange("link")
      .setLink({
        href: url,
      })
      .run();
  }}
>
  🔗
</ToolbarButton>

      <ToolbarButton
        title="Heading 1"
        active={editor.isActive("heading", { level: 1 })}
        onClick={() =>
          editor.chain().focus().toggleHeading({ level: 1 }).run()
        }
      >
        H1
      </ToolbarButton>

      <ToolbarButton
        title="Heading 2"
        active={editor.isActive("heading", { level: 2 })}
        onClick={() =>
          editor.chain().focus().toggleHeading({ level: 2 }).run()
        }
      >
        H2
      </ToolbarButton>

      <ToolbarButton
        title="Heading 3"
        active={editor.isActive("heading", { level: 3 })}
        onClick={() =>
          editor.chain().focus().toggleHeading({ level: 3 }).run()
        }
      >
        H3
      </ToolbarButton>

      <ToolbarButton
  title="Align Left"
  active={editor.isActive({ textAlign: "left" })}
  onClick={() =>
    editor.chain().focus().setTextAlign("left").run()
  }
>
⬅
</ToolbarButton>

<ToolbarButton
  title="Align Center"
  active={editor.isActive({ textAlign: "center" })}
  onClick={() =>
    editor.chain().focus().setTextAlign("center").run()
  }
>
⬍
</ToolbarButton>

<ToolbarButton
  title="Align Right"
  active={editor.isActive({ textAlign: "right" })}
  onClick={() =>
    editor.chain().focus().setTextAlign("right").run()
  }
>
➡
</ToolbarButton>

<ToolbarButton
  title="Justify"
  active={editor.isActive({ textAlign: "justify" })}
  onClick={() =>
    editor.chain().focus().setTextAlign("justify").run()
  }
>
☰
</ToolbarButton>

      <ToolbarButton
        title="Bullet List"
        active={editor.isActive("bulletList")}
        onClick={() =>
          editor.chain().focus().toggleBulletList().run()
        }
      >
        • List
      </ToolbarButton>

      <ToolbarButton
        title="Number List"
        active={editor.isActive("orderedList")}
        onClick={() =>
          editor.chain().focus().toggleOrderedList().run()
        }
      >
        1. List
      </ToolbarButton>

      <ToolbarButton
        title="Blockquote"
        active={editor.isActive("blockquote")}
        onClick={() =>
          editor.chain().focus().toggleBlockquote().run()
        }
      >
        ❝
      </ToolbarButton>

      <ImageUploadButton editor={editor} />


      <ToolbarButton
        title="Undo"
        onClick={() =>
          editor.chain().focus().undo().run()
        }
      >
        ↶
      </ToolbarButton>

      <ToolbarButton
        title="Redo"
        onClick={() =>
          editor.chain().focus().redo().run()
        }
      >
        ↷
      </ToolbarButton>

    </div>
  );
}