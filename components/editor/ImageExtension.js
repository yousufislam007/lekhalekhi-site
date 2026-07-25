import Image from "@tiptap/extension-image";

export default Image.extend({
  addAttributes() {
    return {
      ...this.parent?.(),

      class: {
        default: "mx-auto w-full rounded-xl my-6",
      },

      alt: {
        default: "",
      },
    };
  },
});