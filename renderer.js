// Inicializar os ícones do Lucide
lucide.createIcons();

// --- Controle da Janela Customizada ---
document.getElementById('btn-minimize').addEventListener('click', () => {
    window.electronAPI.windowMinimize();
});

document.getElementById('btn-maximize').addEventListener('click', () => {
    window.electronAPI.windowMaximize();
});

document.getElementById('btn-close').addEventListener('click', () => {
    window.electronAPI.windowClose();
});

