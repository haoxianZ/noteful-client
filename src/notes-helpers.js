
export const findFolder = (folders=[], folderid) =>
  folders.find(folder => folder.id === folderid)

export const findNote = (notes=[], noteId) =>
  notes.find(note => note.id === noteId)

export const getNotesForFolder = (notes=[], folderId) => (
  (!folderId)
    ? notes
    : notes.filter(note => note.folderid === folderId)
)

export const countNotesForFolder = (notes=[], folderid) =>
  notes.filter(note => note.folderid === folderid).length
