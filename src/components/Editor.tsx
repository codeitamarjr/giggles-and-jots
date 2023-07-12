import {
  useEditor,
  EditorContent,
  BubbleMenu,
  FloatingMenu,
} from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { initialContent } from "./initialContent";
import { lowlight } from "lowlight";
import { CodeBlockLowlight } from "@tiptap/extension-code-block-lowlight";
import html from "highlight.js/lib/languages/xml";
import {
  RxFontBold,
  RxFontItalic,
  RxStrikethrough,
  RxCode,
  RxChevronDown,
  RxChatBubble,
} from "react-icons/rx";

import "highlight.js/styles/atom-one-dark.css";
import { BubbleButton } from "./BubbleButton";

lowlight.registerLanguage("html", html);

export function Editor() {
  const editor = useEditor({
    extensions: [
      StarterKit,
      CodeBlockLowlight.configure({
        lowlight,
      }),
    ],
    content: initialContent,
    editorProps: {
      attributes: {
        class: "outline-none ",
      },
    },
  });

  return (
    <>
      <EditorContent
        className="max-w-[700px] mx-auto pt-16 prose prose-invert prose-violet"
        editor={editor}
      />
      {editor && (
        <FloatingMenu
          editor={editor}
          className="bg-zinc-700 py-2 px-1 shadow-xl gap-1 border border-zinc-600 rounded-lg shadow-black/20 overflow-hidden flex flex-col"
          shouldShow={({ state }) => {
            const { $from } = state.selection;
            const currentLineText = $from.nodeBefore?.textContent;
            return currentLineText === "/";
          }}
        >
          <button className="flex items-center gap-2 p-1 rounded min-w-[280px] hover:bg-zinc-600 transition-colors">
            <img
              src="http://www.notion.so/images/blocks/text/en-US.png"
              alt="Text"
              className="w-12 border border-zinc-600 rounded"
            />
            <div className="flex flex-col text-left text-zinc-50">
              <span className="text-sm">Text</span>
              <span className="text-xs text-zinc-400">
                Just start writing with plain text.
              </span>
            </div>
          </button>
          <button
            className="flex items-center gap-2 p-1 rounded min-w-[280px] hover:bg-zinc-600 transition-colors"
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 1 }).run()
            }
          >
            <img
              src="http://www.notion.so/images/blocks/header.57a7576a.png"
              alt="Heading"
              className="w-12 border border-zinc-600 rounded"
            />
            <div className="flex flex-col text-left text-zinc-50">
              <span className="text-sm">Heading 1</span>
              <span className="text-xs text-zinc-400">Big section heading</span>
            </div>
          </button>
        </FloatingMenu>
      )}
      {editor && (
        <BubbleMenu
          className="bg-zinc-700 shadow-xl border border-zinc-600 rounded-lg shadow-black/20 overflow-hidden flex divide-x divide-zinc-600"
          editor={editor}
        >
          <BubbleButton>
            Text
            <RxChevronDown class name="w-4 h-4" />
          </BubbleButton>
          <BubbleButton>
            <RxChatBubble class name="w-4 h-4" />
            Comment
          </BubbleButton>
          <div className="flex items-center">
            <BubbleButton
              onClick={() => editor.chain().focus().toggleBold().run()}
              data-active={editor.isActive("bold")}
            >
              <RxFontBold class name="w-4 h-4" />
            </BubbleButton>
            <BubbleButton
              onClick={() => editor.chain().focus().toggleItalic().run()}
              data-active={editor.isActive("italic")}
            >
              <RxFontItalic class name="w-4 h-4" />
            </BubbleButton>
            <BubbleButton
              onClick={() => editor.chain().focus().toggleStrike().run()}
              data-active={editor.isActive("strike")}
            >
              <RxStrikethrough class name="w-4 h-4" />
            </BubbleButton>
            <BubbleButton
              onClick={() => editor.chain().focus().toggleCodeBlock().run()}
              data-active={editor.isActive("codeBlock")}
            >
              <RxCode class name="w-4 h-4" />
            </BubbleButton>
          </div>
        </BubbleMenu>
      )}
    </>
  );
}
