
import {
  downloadReactProject,
} from "../utils/exportReact";

import {
  downloadHTML,
} from "../utils/exportWebsite";

function Header({
  website,
  canUndo,
  canRedo,
  onUndo,
  onRedo,
  onReset,
  isPreviewMode,
  onPreview,
  onExitPreview,
  onPublish,
  publishedProject,
}) {
  const handleHTMLExport = () => {
    downloadHTML(website);
  };

  const handleReactExport =
    async () => {
      await downloadReactProject(
        website,
      );
    };

  return (
    <header className="flex h-16 shrink-0 items-center justify-between border-b border-white/10 bg-[#0d0d0d] px-5">

      {/* BRAND */}

      <div className="flex items-center gap-3">

        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-sm font-bold text-black">
          W
        </div>

        <div>
          <h1 className="text-sm font-semibold">
            WebCraft AI
          </h1>

          <p className="text-[11px] text-gray-500">
            AI Website Builder
          </p>
        </div>

      </div>

      {/* EDITOR CONTROLS */}

      {website &&
        !isPreviewMode && (
          <div className="hidden items-center gap-2 md:flex">

            <button
              onClick={onUndo}
              disabled={!canUndo}
              className="flex h-9 items-center gap-2 rounded-lg border border-white/10 px-3 text-xs text-gray-300 transition hover:bg-white/5 disabled:cursor-not-allowed disabled:opacity-30"
            >
              ↶
              <span>
                Undo
              </span>
            </button>

            <button
              onClick={onRedo}
              disabled={!canRedo}
              className="flex h-9 items-center gap-2 rounded-lg border border-white/10 px-3 text-xs text-gray-300 transition hover:bg-white/5 disabled:cursor-not-allowed disabled:opacity-30"
            >
              ↷
              <span>
                Redo
              </span>
            </button>

            <button
              onClick={onPreview}
              className="flex h-9 items-center gap-2 rounded-lg border border-white/10 px-3 text-xs font-medium text-gray-300 transition hover:bg-white/5 hover:text-white"
            >
              ◉
              <span>
                Preview
              </span>
            </button>

            <button
              onClick={
                handleHTMLExport
              }
              className="flex h-9 items-center gap-2 rounded-lg border border-white/10 px-3 text-xs text-gray-300 transition hover:bg-white/5"
            >
              ↓
              <span>
                HTML
              </span>
            </button>

            <button
              onClick={
                handleReactExport
              }
              className="flex h-9 items-center gap-2 rounded-lg border border-white/10 px-3 text-xs text-gray-300 transition hover:bg-white/5"
            >
              ⚛
              <span>
                React
              </span>
            </button>

            {/* PUBLISH */}

            <button
              onClick={onPublish}
              className="flex h-9 items-center gap-2 rounded-lg bg-white px-4 text-xs font-semibold text-black transition hover:bg-gray-200"
            >
              {publishedProject
                ? "Published"
                : "Publish"}
            </button>

          </div>
        )}

      {/* PREVIEW HEADER */}

      {website &&
        isPreviewMode && (
          <div className="hidden items-center gap-2 md:flex">

            <div className="rounded-lg border border-green-500/10 bg-green-500/5 px-3 py-2 text-xs text-green-400">
              Preview Mode
            </div>

            <button
              onClick={
                onExitPreview
              }
              className="rounded-lg bg-white px-4 py-2 text-xs font-semibold text-black transition hover:bg-gray-200"
            >
              ← Edit Website
            </button>

          </div>
        )}

      {/* RIGHT SIDE */}

      <div className="flex items-center gap-2">

        {website && (
          <>
            <div className="hidden items-center gap-2 rounded-lg border border-green-500/10 bg-green-500/5 px-3 py-2 text-xs text-green-400 sm:flex">
              <span className="h-1.5 w-1.5 rounded-full bg-green-400" />

              Saved
            </div>

            <button
              onClick={onReset}
              className="rounded-lg border border-white/10 px-3 py-2 text-xs text-gray-400 transition hover:border-red-500/20 hover:bg-red-500/5 hover:text-red-400"
            >
              Reset
            </button>
          </>
        )}

      </div>

    </header>
  );
}

export default Header;