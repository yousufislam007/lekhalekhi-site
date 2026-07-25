import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import Link from "@tiptap/extension-link";
import ImageExtension from "./ImageExtension";
import Placeholder from "@tiptap/extension-placeholder";
import TextAlign from "@tiptap/extension-text-align";


export const editorExtensions = [
  StarterKit,

  Underline,

 ImageExtension,

  Link.configure({
  openOnClick: false,

  autolink: true,

  linkOnPaste: true,

  defaultProtocol: "https",
}),

  Placeholder.configure({
    placeholder: "আপনার লেখা শুরু করুন...",
  }),

  TextAlign.configure({
    types: ["heading", "paragraph", "image"],
  }),
];