function onDragStartExample1(event) {
    event.dataTransfer.setData('text', event.target.id);
}

function onDragOverExample1(event) {
    event.preventDefault();
}

function onDropExample1(event) {
    const id = event.dataTransfer.getData('text');
    const draggableElement = document.getElementById(id);

    const dropzone = document.getElementById('dropzone-content-one');

    dropzone.appendChild(draggableElement);

    event.dataTransfer.clearData();
}

function onDragStartExample2(event) {
    event.dataTransfer.setData('text', event.target.id);
}

function onDragOverExample2(event) {
    event.preventDefault();
}

function onDropExample2(event) {
    const id = event.dataTransfer.getData('text');
    const draggableElement = document.getElementById(id);
    const parentContainer = draggableElement.parentNode;
    const targetContainerId = (parentContainer.id === 'dropzone-content-three') ? 'dropzone-content-two' : 'dropzone-content-three';

    const dropzone = document.getElementById(targetContainerId);

    dropzone.appendChild(draggableElement);

    event.dataTransfer.clearData();
}