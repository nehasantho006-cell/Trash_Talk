// Application Logic - Strict Real-Time Engine

let model = null;

// The judgment data based on EXACTLY your requested list
const JUDGMENT_DATA = {
    'dog': { name: 'Dog', emoji: '🐶', judgment: 'That is a living creature, not trash! You monster!' },
    'mobile': { name: 'Mobile Phone', emoji: '📱', judgment: 'A mobile phone? Packed with precious metals! Don\'t dump it, sell it!' },
    'car': { name: 'Car', emoji: '🚗', judgment: 'Throwing away a car? Either you\'re an oil tycoon or you\'ve lost your mind!' },
    'ball': { name: 'Ball', emoji: '⚽', judgment: 'Throwing away a ball? Seriously? Go find a park, don\'t find a bin.' },
    'laptop': { name: 'Laptop', emoji: '💻', judgment: 'A laptop? Why bin it? It probably just needs a software update, you impatient human!' }
};

// Initialize Model
cocoSsd.load().then(loadedModel => {
    model = loadedModel;
    console.log("AI Model Ready!");
    const btn = document.getElementById('analyzeBtn');
    if (btn) {
        btn.innerText = "JUDGE THIS!";
        btn.classList.remove('bg-slate-500', 'cursor-not-allowed');
        btn.classList.add('bg-emerald-500');
        btn.disabled = false;
    }
});

// Navigation
function showPage(pageId) {
    document.querySelectorAll('.page').forEach(p => p.classList.add('hidden'));
    const target = document.getElementById(pageId);
    if (target) target.classList.remove('hidden');
}

// File Handler
function handleImage(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            document.getElementById('imagePreview').src = e.target.result;
            document.getElementById('preview').classList.remove('hidden');
        };
        reader.readAsDataURL(file);
    }
}

// Analysis Engine
async function runAnalysis() {
    if (!model) { alert("AI is still loading..."); return; }

    const loading = document.getElementById('loadingIndicator');
    if (loading) loading.classList.remove('hidden');
    const analyzeBtn = document.getElementById('analyzeBtn');
    if (analyzeBtn) analyzeBtn.classList.add('hidden');

    const imgElement = document.getElementById('imagePreview');
    try {
        const predictions = await model.detect(imgElement);

        if (predictions.length > 0) {
            // Sort by highest confidence
            const topPrediction = predictions.sort((a,b) => b.score - a.score)[0];
            const detected = topPrediction.class.toLowerCase();

            // Mapping: AI detected class -> YOUR requested items
            const mapping = {
                'dog': 'dog',
                'cell phone': 'mobile',
                'car': 'car',
                'sports ball': 'ball',
                'laptop': 'laptop'
            };

            const userCategory = mapping[detected];

            if (userCategory && JUDGMENT_DATA[userCategory]) {
                const result = JUDGMENT_DATA[userCategory];
                document.getElementById('objectDetected').innerText = result.name;
                document.getElementById('judgmentText').innerText = `"${result.judgment}"`;
                document.getElementById('scoreText').innerText = `Confirmed: ${result.name.toUpperCase()}`;
                document.getElementById('mascot').innerText = result.emoji;
                showPage('result');
            } else {
                // Strict Rejection
                alert(`I am WasteBasket, I only judge Dogs, Mobiles, Cars, Balls, and Laptops. I cannot judge a '${topPrediction.class}'.`);
            }
        } else {
            alert("The AI couldn't see anything clearly. Try a clearer photo!");
        }
    } catch (e) {
        console.error(e);
        alert("Analysis failed.");
    }

    if (loading) loading.classList.add('hidden');
    if (analyzeBtn) analyzeBtn.classList.remove('hidden');
}
