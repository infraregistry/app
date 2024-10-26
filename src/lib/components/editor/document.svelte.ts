export class Document {
  name = $state("foo");
  value = $state("foo");
}

let documents = $state<Record<string, Document>>({});

export const createDocument = (): Document => {
  // TODO: Make api call get a new and emptydocument from the server.
  const id = crypto.randomUUID();
  documents[id] = new Document();
  return documents[id];
};

export const getDocument = (id: string): Document => {
  // TODO: Make api call get a document from the server.
  return documents[id];
};
