function deleteNote(noteId) {
    console.log(1234)
    fetch("/delete-note", {
        method: "POST",
        body: JSON.stringify({ noteId: noteId }),
    }) .then ((_res) => {
        window.location.href = "/";

    });
}