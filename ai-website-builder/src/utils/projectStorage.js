
const STORAGE_KEY = "webcraft-ai-project";

export function saveProject(website) {
  if (!website) {
    return;
  }

  try {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(website),
    );
  } catch (error) {
    console.error(
      "Failed to save project:",
      error,
    );
  }
}

export function loadProject() {
  try {
    const savedProject =
      localStorage.getItem(STORAGE_KEY);

    if (!savedProject) {
      return null;
    }

    return JSON.parse(savedProject);
  } catch (error) {
    console.error(
      "Failed to load project:",
      error,
    );

    return null;
  }
}

export function deleteProject() {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (error) {
    console.error(
      "Failed to delete project:",
      error,
    );
  }
}

export function hasSavedProject() {
  try {
    return Boolean(
      localStorage.getItem(STORAGE_KEY),
    );
  } catch (error) {
    return false;
  }
}
