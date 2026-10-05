
import {
  useEffect,
  useState,
} from "react";

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Preview from "./components/Preview";
import PreviewMode from "./components/PreviewMode";
import PublishModal from "./components/PublishModal";
import CustomizePanel from "./components/CustomizePanel";
import DesignPanel from "./components/DesignPanel";
import SectionPanel from "./components/SectionPanel";

import {
  loadProject,
  saveProject,
  deleteProject,
} from "./utils/projectStorage";

import {
  getPublishedProject,
} from "./utils/publishProject";

function App() {
  const [website, setWebsite] =
    useState(null);

  const [isGenerating, setIsGenerating] =
    useState(false);

  const [generationStep, setGenerationStep] =
    useState(0);

  const [selectedSection, setSelectedSection] =
    useState(null);

  /* =========================================
     PREVIEW MODE
  ========================================= */

  const [
    isPreviewMode,
    setIsPreviewMode,
  ] = useState(false);

  /* =========================================
     PUBLISH SYSTEM
  ========================================= */

  const [
    isPublishModalOpen,
    setIsPublishModalOpen,
  ] = useState(false);

  const [
    publishedProject,
    setPublishedProject,
  ] = useState(null);

  /* =========================================
     HISTORY
  ========================================= */

  const [history, setHistory] =
    useState([]);

  const [historyIndex, setHistoryIndex] =
    useState(-1);

  const [isRestoring, setIsRestoring] =
    useState(false);

  /* =========================================
     LOAD PROJECT
  ========================================= */

  useEffect(() => {
    const savedProject =
      loadProject();

    if (savedProject) {
      setWebsite(
        savedProject,
      );

      setHistory([
        savedProject,
      ]);

      setHistoryIndex(0);
    }

    const published =
      getPublishedProject();

    if (published) {
      setPublishedProject(
        published,
      );
    }
  }, []);

  /* =========================================
     AUTO SAVE
  ========================================= */

  useEffect(() => {
    if (!website) {
      return;
    }

    saveProject(
      website,
    );
  }, [website]);

  /* =========================================
     UPDATE WEBSITE
  ========================================= */

  const updateWebsite = (
    updater,
  ) => {
    setWebsite(
      (currentWebsite) => {
        if (!currentWebsite) {
          return currentWebsite;
        }

        const updatedWebsite =
          typeof updater === "function"
            ? updater(
                currentWebsite,
              )
            : updater;

        if (isRestoring) {
          return updatedWebsite;
        }

        setHistory(
          (currentHistory) => {
            const trimmedHistory =
              currentHistory.slice(
                0,
                historyIndex + 1,
              );

            return [
              ...trimmedHistory,
              updatedWebsite,
            ];
          },
        );

        setHistoryIndex(
          (currentIndex) =>
            currentIndex + 1,
        );

        return updatedWebsite;
      },
    );
  };

  /* =========================================
     UNDO
  ========================================= */

  const undo = () => {
    if (historyIndex <= 0) {
      return;
    }

    const previousIndex =
      historyIndex - 1;

    const previousWebsite =
      history[previousIndex];

    if (!previousWebsite) {
      return;
    }

    setIsRestoring(true);

    setWebsite(
      previousWebsite,
    );

    setHistoryIndex(
      previousIndex,
    );

    setSelectedSection(null);

    setTimeout(() => {
      setIsRestoring(false);
    }, 0);
  };

  /* =========================================
     REDO
  ========================================= */

  const redo = () => {
    if (
      historyIndex >=
      history.length - 1
    ) {
      return;
    }

    const nextIndex =
      historyIndex + 1;

    const nextWebsite =
      history[nextIndex];

    if (!nextWebsite) {
      return;
    }

    setIsRestoring(true);

    setWebsite(
      nextWebsite,
    );

    setHistoryIndex(
      nextIndex,
    );

    setSelectedSection(null);

    setTimeout(() => {
      setIsRestoring(false);
    }, 0);
  };

  /* =========================================
     RESET
  ========================================= */

  const resetProject = () => {
    const confirmed =
      window.confirm(
        "Are you sure you want to reset your project?",
      );

    if (!confirmed) {
      return;
    }

    deleteProject();

    setWebsite(null);

    setHistory([]);

    setHistoryIndex(-1);

    setSelectedSection(null);

    setIsPreviewMode(false);

    setIsPublishModalOpen(
      false,
    );

    setPublishedProject(null);
  };

  /* =========================================
     GENERATE WEBSITE
  ========================================= */

  const handleSetWebsite = (
    newWebsite,
  ) => {
    setWebsite(
      newWebsite,
    );

    setSelectedSection(null);

    setHistory([
      newWebsite,
    ]);

    setHistoryIndex(0);

    setIsPreviewMode(false);
  };

  /* =========================================
     PREVIEW
  ========================================= */

  const openPreview = () => {
    setSelectedSection(null);

    setIsPreviewMode(true);
  };

  const closePreview = () => {
    setIsPreviewMode(false);
  };

  /* =========================================
     PUBLISH
  ========================================= */

  const openPublish = () => {
    setIsPublishModalOpen(
      true,
    );
  };

  const closePublish = () => {
    setIsPublishModalOpen(
      false,
    );
  };

  return (
    <div className="h-screen overflow-hidden bg-[#0a0a0a] text-white">

      <Header
        website={website}

        canUndo={
          historyIndex > 0
        }

        canRedo={
          historyIndex <
          history.length - 1
        }

        onUndo={undo}

        onRedo={redo}

        onReset={
          resetProject
        }

        isPreviewMode={
          isPreviewMode
        }

        onPreview={
          openPreview
        }

        onExitPreview={
          closePreview
        }

        onPublish={
          openPublish
        }

        publishedProject={
          publishedProject
        }
      />

      {/* PUBLISH MODAL */}

      {isPublishModalOpen &&
        website && (
          <PublishModal
            website={website}
            publishedProject={
              publishedProject
            }
            setPublishedProject={
              setPublishedProject
            }
            onClose={
              closePublish
            }
          />
        )}

      {/* PREVIEW MODE */}

      {isPreviewMode ? (
        <main className="h-[calc(100vh-64px)] overflow-hidden">
          <PreviewMode
            website={website}
            onExit={
              closePreview
            }
          />
        </main>
      ) : (
        <div className="flex h-[calc(100vh-64px)]">

          {/* SIDEBAR */}

          <aside className="flex w-80 shrink-0 flex-col overflow-y-auto border-r border-white/10 bg-[#0a0a0a]">

            <Sidebar
              setWebsite={
                handleSetWebsite
              }

              isGenerating={
                isGenerating
              }

              setIsGenerating={
                setIsGenerating
              }

              generationStep={
                generationStep
              }

              setGenerationStep={
                setGenerationStep
              }
            />

            <CustomizePanel
              website={website}
              setWebsite={
                updateWebsite
              }
            />

            <DesignPanel
              website={website}
              setWebsite={
                updateWebsite
              }
            />

            {selectedSection && (
              <SectionPanel
                website={
                  website
                }

                setWebsite={
                  updateWebsite
                }

                selectedSection={
                  selectedSection
                }

                setSelectedSection={
                  setSelectedSection
                }
              />
            )}

          </aside>

          {/* BUILDER */}

          <main className="min-w-0 flex-1 overflow-hidden">
            <Preview
              website={
                website
              }

              isGenerating={
                isGenerating
              }

              generationStep={
                generationStep
              }

              selectedSection={
                selectedSection
              }

              setSelectedSection={
                setSelectedSection
              }
            />
          </main>

        </div>
      )}
    </div>
  );
}

export default App;