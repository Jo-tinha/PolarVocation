// MODAL PAG INDEX

function areFieldsFilled() {
    const name = document.getElementById('name')?.value.trim();
    const age = document.getElementById('age')?.value.trim();
    return name !== '' && age !== '';
}

function handleFormSubmit(event) {
    event.preventDefault();
    const errorMessage = document.getElementById('errorMessage');

    if (areFieldsFilled()) {
        errorMessage.style.display = 'none';
        showNextModal('modal2');
    } else {
        errorMessage.textContent = 'Por favor, preencha todos os campos.';
        errorMessage.style.display = 'block';
    }
}

function showNextModal(modalId) {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => modal.style.display = 'none');

    const nextModal = document.getElementById(modalId);
    if (nextModal) {
        nextModal.style.display = 'flex';
    }
}

const initTutorialOptions = () => {
    document.querySelectorAll('.tutorial-option').forEach(option => {
        option.addEventListener('click', () => {
            const group = option.parentElement;
            group.querySelectorAll('.tutorial-option').forEach(item => item.classList.remove('selected'));
            option.classList.add('selected');
        });
    });
};

// Exibe a primeira modal ao clicar no botão "INICIAR TESTE"
const startButton = document.querySelector('.btnIniciar');
if (startButton) {
    startButton.addEventListener('click', function() {
        showNextModal('modal1');
    });
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'none';
    }

    if (modalId === 'modal3') {
        localStorage.removeItem('pontuacao');
        localStorage.removeItem('polarQuizStep');
        window.location.href = 'quest1.html?novo=1';
    }
}

// TERMINO MODAL PAG INDEX

function showContent(contentId) {
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => tab.style.display = 'none');

    const target = document.getElementById(contentId);
    if (target) {
        target.style.display = 'block';
    }

    const links = document.querySelectorAll('.nav-link');
    links.forEach(link => link.classList.remove('active'));

    const activeLink = document.querySelector(`.nav-link[href="#${contentId}"]`);
    if (activeLink) {
        activeLink.classList.add('active');
    }
}

// AVATARES
let isAvatarSelected = false;
const images = [
    { id: 'selectOrca', name: 'Orca' },
    { id: 'selectRena', name: 'Rena' },
    { id: 'selectLeao', name: 'Leão-marinho' }
];

function clearSelection() {
    images.forEach(image => {
        const imageTarget = document.getElementById(image.id);
        if (imageTarget) imageTarget.classList.remove('selected');
    });
}

function selectImage(imageId) {
    clearSelection();
    const selected = document.getElementById(imageId);
    if (selected) {
        selected.classList.add('selected');
    }
    isAvatarSelected = true;
}

function saveSelection() {
    if (isAvatarSelected) {
        const selectedImageId = document.querySelector('.avatar.selected')?.id;
        if (selectedImageId) {
            localStorage.setItem('selectedImage', selectedImageId);
        }
    }
}

function loadSelectionState() {
    const selectedImageId = localStorage.getItem('selectedImage');
    if (selectedImageId) {
        const selected = document.getElementById(selectedImageId);
        if (selected) selected.classList.add('selected');
        isAvatarSelected = true;
    }
}

images.forEach(image => {
    const imgElement = document.getElementById(image.id);
    if (imgElement) {
        imgElement.addEventListener('click', function() {
            selectImage(image.id);
        });
    }
});

const saveSelectionButton = document.getElementById('saveSelection');
if (saveSelectionButton) {
    saveSelectionButton.addEventListener('click', saveSelection);
}

window.addEventListener('load', () => {
    initTutorialOptions();
    loadSelectionState();
    clearSelection();
    isAvatarSelected = false;
});

window.addEventListener('DOMContentLoaded', () => {
    initTutorialOptions();
});
