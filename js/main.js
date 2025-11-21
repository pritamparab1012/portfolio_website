<<<<<<< HEAD

// --- 1. Visible Parallax Zoom ---
const bgCanvas = document.getElementById('bg-canvas');

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    // Zoom effect: Scale increases by 0.0005 per px
    // This ensures smooth, visible movement of the background pattern
    const scale = 1 + (scrollY * 0.0005);
    bgCanvas.style.transform = `scale(${scale})`;
});


// --- 2. Typing Animation (Generic Stats) ---
const codeContainer = document.getElementById('typed-code');
const codeLines = [
    { type: 'kwd', text: 'class ' }, { type: 'cls', text: 'DataEngineer' }, { type: '', text: ':\n' },
    { type: 'kwd', text: '    def ' }, { type: 'cls', text: '__init__' }, { type: '', text: '(' }, { type: 'kwd', text: 'self' }, { type: '', text: '):\n' },
    { type: 'cmt', text: '        # Initializing Core Profile\n' },
    { type: '', text: '        ' }, { type: 'kwd', text: 'self' }, { type: '', text: '.name = ' }, { type: 'str', text: '"Pritam Parab"\n' },
    { type: '', text: '        ' }, { type: 'kwd', text: 'self' }, { type: '', text: '.exp = ' }, { type: 'str', text: '"4+ Years"\n' },
    { type: '', text: '        ' }, { type: 'kwd', text: 'self' }, { type: '', text: '.focus = ' }, { type: 'str', text: '"Automation"\n' },
    { type: '', text: '        ' }, { type: 'kwd', text: 'self' }, { type: '', text: '.scale = ' }, { type: 'str', text: '"Enterprise"' }
];

let lineIndex = 0;
let charIndex = 0;
let currentSpan = null;

function typeCode() {
    if (lineIndex < codeLines.length) {
        const lineObj = codeLines[lineIndex];
        if (!currentSpan) {
            currentSpan = document.createElement('span');
            if(lineObj.type) currentSpan.className = lineObj.type;
            codeContainer.insertBefore(currentSpan, document.querySelector('.cursor'));
        }
        if (charIndex < lineObj.text.length) {
            currentSpan.textContent += lineObj.text.charAt(charIndex);
            charIndex++;
            setTimeout(typeCode, Math.random() * 30 + 20);
        } else {
            lineIndex++; charIndex = 0; currentSpan = null;
            setTimeout(typeCode, 50);
        }
    }
}
window.onload = () => { setTimeout(typeCode, 500); };

// --- 3. Scroll Reveal ---
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
});

document.querySelectorAll('.card, .timeline-item, .blog-card').forEach(el => {
    el.style.opacity = '0'; el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(el);
});

const loadBtn = document.getElementById('load-more');
if(loadBtn){
    loadBtn.addEventListener('click', () => {
        document.querySelectorAll('.blog-card.hidden').forEach(el => el.classList.remove('hidden'));
        loadBtn.style.display = 'none';
    });
}
=======

// --- 1. Visible Parallax Zoom ---
const bgCanvas = document.getElementById('bg-canvas');

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    // Zoom effect: Scale increases by 0.0005 per px
    // This ensures smooth, visible movement of the background pattern
    const scale = 1 + (scrollY * 0.0005);
    bgCanvas.style.transform = `scale(${scale})`;
});


// --- 2. Typing Animation (Generic Stats) ---
const codeContainer = document.getElementById('typed-code');
const codeLines = [
    { type: 'kwd', text: 'class ' }, { type: 'cls', text: 'DataEngineer' }, { type: '', text: ':\n' },
    { type: 'kwd', text: '    def ' }, { type: 'cls', text: '__init__' }, { type: '', text: '(' }, { type: 'kwd', text: 'self' }, { type: '', text: '):\n' },
    { type: 'cmt', text: '        # Initializing Core Profile\n' },
    { type: '', text: '        ' }, { type: 'kwd', text: 'self' }, { type: '', text: '.name = ' }, { type: 'str', text: '"Pritam Parab"\n' },
    { type: '', text: '        ' }, { type: 'kwd', text: 'self' }, { type: '', text: '.exp = ' }, { type: 'str', text: '"4+ Years"\n' },
    { type: '', text: '        ' }, { type: 'kwd', text: 'self' }, { type: '', text: '.focus = ' }, { type: 'str', text: '"Automation"\n' },
    { type: '', text: '        ' }, { type: 'kwd', text: 'self' }, { type: '', text: '.scale = ' }, { type: 'str', text: '"Enterprise"' }
];

let lineIndex = 0;
let charIndex = 0;
let currentSpan = null;

function typeCode() {
    if (lineIndex < codeLines.length) {
        const lineObj = codeLines[lineIndex];
        if (!currentSpan) {
            currentSpan = document.createElement('span');
            if(lineObj.type) currentSpan.className = lineObj.type;
            codeContainer.insertBefore(currentSpan, document.querySelector('.cursor'));
        }
        if (charIndex < lineObj.text.length) {
            currentSpan.textContent += lineObj.text.charAt(charIndex);
            charIndex++;
            setTimeout(typeCode, Math.random() * 30 + 20);
        } else {
            lineIndex++; charIndex = 0; currentSpan = null;
            setTimeout(typeCode, 50);
        }
    }
}
window.onload = () => { setTimeout(typeCode, 500); };

// --- 3. Scroll Reveal ---
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
});

document.querySelectorAll('.card, .timeline-item, .blog-card').forEach(el => {
    el.style.opacity = '0'; el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(el);
});

const loadBtn = document.getElementById('load-more');
if(loadBtn){
    loadBtn.addEventListener('click', () => {
        document.querySelectorAll('.blog-card.hidden').forEach(el => el.classList.remove('hidden'));
        loadBtn.style.display = 'none';
    });
}
>>>>>>> ae8bd5a37c88df54d694951660ce30eefb51485b
