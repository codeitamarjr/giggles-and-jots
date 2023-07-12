import { Editor } from "@tiptap/react";
import { ComponentProps, ReactNode } from "react";

export interface FloatingButtonProps extends ComponentProps<"button"> {
  children?: ReactNode;
  command: (editor: Editor) => void;
  image: string;
  title: string;
  description: string;
  editor: Editor;
}

export function FloatingButton(props: FloatingButtonProps) {
  const { editor, command, image, title, description } = props;
  return (
    <button
      className="flex items-center gap-2 p-1 rounded min-w-[280px] hover:bg-zinc-600 transition-colors"
      onClick={() => {
        const { $from } = editor.state.selection;
        const pos = $from.pos;
        editor.view.dispatch(editor.state.tr.insertText("", pos - 1, pos));
        command(editor);
      }}
    >
      <img
        src={image}
        alt="Text"
        className="w-12 border border-zinc-600 rounded"
      />
      <div className="flex flex-col text-left text-zinc-50">
        <span className="text-sm">{title}</span>
        <span className="text-xs text-zinc-400">{description}</span>
      </div>
    </button>
  );
}
