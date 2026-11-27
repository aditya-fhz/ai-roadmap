const DAYS = [
    {
        day: 1,
        phase: 1,
        title: "Setup & Python Dasar",
        learn: "Install Python, VS Code, variabel & tipe data",
        practice: "10 program kecil + setup GitHub"
    },
    {
        day: 2,
        phase: 1,
        title: "Control Flow",
        learn: "if-else, loop, list comprehension",
        practice: "Game tebak angka"
    },
    {
        day: 3,
        phase: 1,
        title: "Function & Module",
        learn: "def, lambda, import, virtual env",
        practice: "Refactor kode jadi modul"
    },
    {
        day: 4,
        phase: 1,
        title: "OOP Python",
        learn: "Class, inheritance, dataclass",
        practice: "Buat class Dataset"
    },
    {
        day: 5,
        phase: 1,
        title: "Struktur Data",
        learn: "List, Dict, Set, Tuple",
        practice: "Latihan 3 soal easy di LeetCode"
    },
    {
        day: 6,
        phase: 1,
        title: "File & Error Handling",
        learn: "open, JSON, try-except",
        practice: "Parser CSV ke JSON"
    },
    {
        day: 7,
        phase: 1,
        title: "Mini Project Python",
        learn: "Gabungkan materi Hari 1-6",
        practice: "CLI Expense Tracker"
    },
    {
        day: 8,
        phase: 1,
        title: "Git & GitHub",
        learn: "commit, branch, PR, README",
        practice: "Push 7 hari kode ke GitHub"
    },
    {
        day: 9,
        phase: 1,
        title: "Aljabar Linear",
        learn: "Vektor, matriks, dot product",
        practice: "Operasi matriks dengan NumPy"
    },
    {
        day: 10,
        phase: 1,
        title: "Kalkulus untuk AI",
        learn: "Turunan, gradient descent intuitif",
        practice: "Visualisasi gradient descent"
    },
    {
        day: 11,
        phase: 1,
        title: "Probabilitas & Statistik",
        learn: "Distribusi, Bayes, mean/variance",
        practice: "Analisis dataset dengan statistik deskriptif"
    },
    {
        day: 12,
        phase: 1,
        title: "NumPy Deep Dive",
        learn: "Broadcasting, indexing",
        practice: "Implementasi linear regression dari nol"
    },
    {
        day: 13,
        phase: 1,
        title: "Pandas & EDA",
        learn: "DataFrame, groupby, cleaning",
        practice: "EDA dataset Titanic"
    },
    {
        day: 14,
        phase: 1,
        title: "Visualisasi Data",
        learn: "Matplotlib, Seaborn",
        practice: "Dashboard EDA 5 grafik + upload GitHub"
    },
    {
        day: 15,
        phase: 2,
        title: "Intro Machine Learning",
        learn: "Supervised vs Unsupervised, workflow ML",
        practice: "Buat peta konsep ML"
    },
    {
        day: 16,
        phase: 2,
        title: "Data Cleaning & EDA Lanjut",
        learn: "Missing value, outlier",
        practice: "Cleaning dataset kotor"
    },
    {
        day: 17,
        phase: 2,
        title: "Feature Engineering",
        learn: "Encoding, scaling, feature selection",
        practice: "Pipeline preprocessing"
    },
    {
        day: 18,
        phase: 2,
        title: "Linear Regression",
        learn: "Regresi, MSE, R2",
        practice: "Prediksi harga rumah"
    },
    {
        day: 19,
        phase: 2,
        title: "Logistic Regression",
        learn: "Klasifikasi, sigmoid",
        practice: "Prediksi churn"
    },
    {
        day: 20,
        phase: 2,
        title: "Decision Tree & Random Forest",
        learn: "Tree, ensemble",
        practice: "Bandingkan 2 model"
    },
    {
        day: 21,
        phase: 2,
        title: "KNN & SVM",
        learn: "Distance, margin",
        practice: "Klasifikasi bunga Iris"
    },
    {
        day: 22,
        phase: 2,
        title: "Clustering",
        learn: "K-Means, DBSCAN",
        practice: "Segmentasi pelanggan"
    },
    {
        day: 23,
        phase: 2,
        title: "Evaluasi Model",
        learn: "Accuracy, Precision, Recall, F1, ROC",
        practice: "Buat confusion matrix"
    },
    {
        day: 24,
        phase: 2,
        title: "Cross-Validation & Tuning",
        learn: "K-Fold, GridSearch",
        practice: "Tuning Random Forest"
    },
    {
        day: 25,
        phase: 2,
        title: "XGBoost & LightGBM",
        learn: "Gradient boosting",
        practice: "Mini kompetisi Kaggle"
    },
    {
        day: 26,
        phase: 2,
        title: "Scikit-learn Pipeline",
        learn: "Pipeline, ColumnTransformer",
        practice: "Pipeline end-to-end"
    },
    {
        day: 27,
        phase: 2,
        title: "Proyek ML 1",
        learn: "End-to-end project",
        practice: "Churn Prediction + README"
    },
    {
        day: 28,
        phase: 2,
        title: "Proyek ML 2",
        learn: "Deployment mindset",
        practice: "House Price API sederhana"
    },
    {
        day: 29,
        phase: 2,
        title: "Studi Kasus ML",
        learn: "ML di industri",
        practice: "Bedah case Gojek / Tokopedia"
    },
    {
        day: 30,
        phase: 2,
        title: "Review & Kuis Fase 2",
        learn: "Review semua materi ML",
        practice: "Kuis 20 soal + refleksi"
    },
    {
        day: 31,
        phase: 3,
        title: "Intro Neural Network",
        learn: "Perceptron, activation function",
        practice: "Visualisasi Neural Network"
    },
    {
        day: 32,
        phase: 3,
        title: "PyTorch Setup",
        learn: "Tensor, autograd, GPU",
        practice: "Install PyTorch + tensor ops"
    },
    {
        day: 33,
        phase: 3,
        title: "PyTorch Dasar",
        learn: "Dataset, DataLoader",
        practice: "Buat Custom Dataset"
    },
    {
        day: 34,
        phase: 3,
        title: "MLP & Backprop",
        learn: "Backpropagation",
        practice: "MLP untuk MNIST"
    },
    {
        day: 35,
        phase: 3,
        title: "CNN Dasar",
        learn: "Convolution, pooling",
        practice: "Klasifikasi CIFAR-10"
    },
    {
        day: 36,
        phase: 3,
        title: "CNN Project",
        learn: "Augmentasi data",
        practice: "Klasifikasi gambar kustom"
    },
    {
        day: 37,
        phase: 3,
        title: "Transfer Learning",
        learn: "ResNet, EfficientNet",
        practice: "Fine-tune ResNet"
    },
    {
        day: 38,
        phase: 3,
        title: "Data Augmentation",
        learn: "Augmentasi image",
        practice: "Naikkan akurasi 5 persen"
    },
    {
        day: 39,
        phase: 3,
        title: "RNN & LSTM",
        learn: "Sequence model",
        practice: "Prediksi time-series"
    },
    {
        day: 40,
        phase: 3,
        title: "NLP Dasar",
        learn: "Tokenisasi, stemming",
        practice: "Preprocessing teks Indonesia"
    },
    {
        day: 41,
        phase: 3,
        title: "Embeddings",
        learn: "Word2Vec, TF-IDF",
        practice: "Similarity antar kata"
    },
    {
        day: 42,
        phase: 3,
        title: "Transformers & Attention",
        learn: "Attention mechanism",
        practice: "Visualisasi attention"
    },
    {
        day: 43,
        phase: 3,
        title: "BERT Fine-tuning",
        learn: "Hugging Face Transformers",
        practice: "Klasifikasi teks dengan BERT"
    },
    {
        day: 44,
        phase: 3,
        title: "Proyek NLP",
        learn: "Text classification",
        practice: "Analisis sentimen review"
    },
    {
        day: 45,
        phase: 3,
        title: "Object Detection",
        learn: "YOLO",
        practice: "Deteksi objek di foto"
    },
    {
        day: 46,
        phase: 3,
        title: "Image Segmentation",
        learn: "U-Net",
        practice: "Segmentasi sederhana"
    },
    {
        day: 47,
        phase: 3,
        title: "GAN Intro",
        learn: "Generator vs Discriminator",
        practice: "GAN sederhana"
    },
    {
        day: 48,
        phase: 3,
        title: "Diffusion Model",
        learn: "Konsep Stable Diffusion",
        practice: "Generate gambar via API"
    },
    {
        day: 49,
        phase: 3,
        title: "Proyek Gabungan",
        learn: "Gabungkan CV + NLP",
        practice: "Image captioning mini"
    },
    {
        day: 50,
        phase: 3,
        title: "Review Deep Learning",
        learn: "Review Fase 3",
        practice: "Update portfolio"
    },
    {
        day: 51,
        phase: 4,
        title: "LLM Fundamental",
        learn: "Token, context window, LLM",
        practice: "Hitung token & cost"
    },
    {
        day: 52,
        phase: 4,
        title: "Prompt Engineering",
        learn: "Zero-shot, few-shot, CoT",
        practice: "Buat 20 prompt template"
    },
    {
        day: 53,
        phase: 4,
        title: "API LLM & Hugging Face",
        learn: "OpenAI API, HF Hub",
        practice: "Chatbot sederhana dengan API"
    },
    {
        day: 54,
        phase: 4,
        title: "Fine-tuning LoRA / QLoRA",
        learn: "PEFT, LoRA",
        practice: "Fine-tune model kecil"
    },
    {
        day: 55,
        phase: 4,
        title: "Arsitektur RAG",
        learn: "Retrieval Augmented Generation",
        practice: "Gambar diagram arsitektur RAG"
    },
    {
        day: 56,
        phase: 4,
        title: "Vector Database",
        learn: "Chroma, Pinecone, FAISS",
        practice: "Simpan & cari embedding"
    },
    {
        day: 57,
        phase: 4,
        title: "Bangun RAG Chatbot",
        learn: "RAG end-to-end",
        practice: "Chatbot tanya dokumen PDF"
    },
    {
        day: 58,
        phase: 4,
        title: "LangChain",
        learn: "Chains, memory",
        practice: "App dengan LangChain"
    },
    {
        day: 59,
        phase: 4,
        title: "LangGraph",
        learn: "Graph-based agent",
        practice: "Workflow multi-step"
    },
    {
        day: 60,
        phase: 4,
        title: "AI Agents Intro",
        learn: "Agent, tool use",
        practice: "Agent kalkulator"
    },
    {
        day: 61,
        phase: 4,
        title: "Tool Calling",
        learn: "Function calling",
        practice: "Agent dengan 3 tools"
    },
    {
        day: 62,
        phase: 4,
        title: "Multi-Agent System",
        learn: "CrewAI / AutoGen",
        practice: "2 agent kolaborasi"
    },
    {
        day: 63,
        phase: 4,
        title: "Evaluasi LLM",
        learn: "RAGAS, faithfulness",
        practice: "Evaluasi RAG-mu"
    },
    {
        day: 64,
        phase: 4,
        title: "Optimasi LLM",
        learn: "Caching, streaming",
        practice: "Streaming chatbot"
    },
    {
        day: 65,
        phase: 4,
        title: "Image Generation",
        learn: "Stable Diffusion, ControlNet",
        practice: "App generate gambar"
    },
    {
        day: 66,
        phase: 4,
        title: "Audio AI",
        learn: "Whisper, TTS",
        practice: "Transkripsi + TTS app"
    },
    {
        day: 67,
        phase: 4,
        title: "Multimodal AI",
        learn: "CLIP, GPT-4o Vision",
        practice: "Tanya jawab gambar"
    },
    {
        day: 68,
        phase: 4,
        title: "Proyek Agent 1",
        learn: "Agent customer service",
        practice: "Agent CS dengan tools"
    },
    {
        day: 69,
        phase: 4,
        title: "Proyek GenAI 2",
        learn: "Content generator",
        practice: "AI content tool + UI"
    },
    {
        day: 70,
        phase: 4,
        title: "Review LLM",
        learn: "Review Fase 4",
        practice: "Demo video 2 proyek"
    },
    {
        day: 71,
        phase: 5,
        title: "Docker untuk AI",
        learn: "Dockerfile, image",
        practice: "Dockerize model API"
    },
    {
        day: 72,
        phase: 5,
        title: "FastAPI",
        learn: "REST API untuk model",
        practice: "API prediksi + docs"
    },
    {
        day: 73,
        phase: 5,
        title: "Model Serving",
        learn: "Serving, batch vs realtime",
        practice: "Deploy API lokal"
    },
    {
        day: 74,
        phase: 5,
        title: "MLflow",
        learn: "Experiment tracking",
        practice: "Tracking 5 eksperimen"
    },
    {
        day: 75,
        phase: 5,
        title: "CI/CD untuk ML",
        learn: "GitHub Actions",
        practice: "Auto-test & deploy"
    },
    {
        day: 76,
        phase: 5,
        title: "Cloud & GPU",
        learn: "AWS / GCP, RunPod",
        practice: "Deploy di cloud gratis"
    },
    {
        day: 77,
        phase: 5,
        title: "Scaling Vector DB",
        learn: "Production RAG",
        practice: "Deploy RAG ke cloud"
    },
    {
        day: 78,
        phase: 5,
        title: "Monitoring & Drift",
        learn: "Data drift, monitoring",
        practice: "Dashboard monitoring"
    },
    {
        day: 79,
        phase: 5,
        title: "Keamanan AI",
        learn: "Prompt injection, PII",
        practice: "Guardrails untuk chatbot"
    },
    {
        day: 80,
        phase: 5,
        title: "Optimasi Model",
        learn: "Quantization, ONNX",
        practice: "Quantize model jadi lebih kecil"
    },
    {
        day: 81,
        phase: 5,
        title: "Capstone Planning",
        learn: "Tentukan ide capstone",
        practice: "PRD + arsitektur"
    },
    {
        day: 82,
        phase: 5,
        title: "Capstone Build 1",
        learn: "Backend + RAG / Agent",
        practice: "Coding capstone 50 persen"
    },
    {
        day: 83,
        phase: 5,
        title: "Capstone Build 2",
        learn: "Frontend + integrasi",
        practice: "Coding capstone 100 persen"
    },
    {
        day: 84,
        phase: 5,
        title: "Capstone Deploy",
        learn: "Deploy production",
        practice: "Live demo + domain"
    },
    {
        day: 85,
        phase: 5,
        title: "Dokumentasi Capstone",
        learn: "README, demo video",
        practice: "Video 3 menit + post LinkedIn"
    },
    {
        day: 86,
        phase: 6,
        title: "Portfolio Website",
        learn: "Personal branding",
        practice: "Website portfolio 5 proyek"
    },
    {
        day: 87,
        phase: 6,
        title: "CV & LinkedIn AI Engineer",
        learn: "ATS, storytelling",
        practice: "CV + optimasi LinkedIn"
    },
    {
        day: 88,
        phase: 6,
        title: "System Design AI",
        learn: "Design RAG system",
        practice: "Latihan system design"
    },
    {
        day: 89,
        phase: 6,
        title: "Mock Interview",
        learn: "Coding + ML interview",
        practice: "10 soal interview"
    },
    {
        day: 90,
        phase: 6,
        title: "Apply & Next 6 Bulan",
        learn: "Strategi apply",
        practice: "Apply 10 lowongan + roadmap lanjut"
    }
];
const PHASES = {
    1: {
        title: "Fondasi Python & Matematika",
        range: "Hari 1-14",
        color: "#2563eb",
        desc: "Dasar yang wajib kuat sebelum masuk ML."
    },
    2: {
        title: "Machine Learning",
        range: "Hari 15-30",
        color: "#16a34a",
        desc: "Model klasik, evaluasi, dan proyek end-to-end."
    },
    3: {
        title: "Deep Learning & NLP",
        range: "Hari 31-50",
        color: "#ea580c",
        desc: "PyTorch, CNN, Transformers, dan Computer Vision."
    },
    4: {
        title: "LLM & Generative AI",
        range: "Hari 51-70",
        color: "#9333ea",
        desc: "RAG, Agents, LangChain, dan evaluasi LLM."
    },
    5: {
        title: "MLOps, Deployment & Production",
        range: "Hari 71-85",
        color: "#db2777",
        desc: "Docker, FastAPI, Cloud, dan Capstone."
    },
    6: {
        title: "Portfolio & Karir",
        range: "Hari 86-90",
        color: "#0d9488",
        desc: "Siap kerja: portfolio, CV, dan interview."
    }
};
const KEY = "ai-roadmap-90-v1";
let done = JSON.parse(localStorage.getItem(KEY) || "[]");
let activePhase = "all";
let search = "";
let view = "grid";
let hideDone = false;
const listEl = document.getElementById("roadmapList");
const filterBar = document.getElementById("filterBar");
const searchInput = document.getElementById("searchInput");
const viewSelect = document.getElementById("viewSelect");
const hideDoneEl = document.getElementById("hideDone");
function save() {
    localStorage.setItem(KEY, JSON.stringify(done));
    updateProgress();
}
function updateProgress() {
    const pct = Math.round((done.length / 90) * 100);
    document.getElementById("progressBar").style.width = pct + "%";
    document.getElementById("progressPct").textContent = pct + "%";
    document.getElementById("progressText").textContent =
        done.length +
        " dari 90 hari selesai. " +
        (pct === 100 ? "Kamu lulus!" : "Semangat!");
    const phaseEl = document.getElementById("phaseProgress");
    phaseEl.innerHTML = Object.entries(PHASES)
        .map(function (entry) {
            const id = entry[0];
            const p = entry[1];
            const total = DAYS.filter(function (d) {
                return d.phase == id;
            }).length;
            const c = DAYS.filter(function (d) {
                return d.phase == id && done.includes(d.day);
            }).length;
            return (
                '<div class="mini-row"><span style="color:' +
                p.color +
                '">●</span> Fase ' +
                id +
                " — " +
                p.title +
                " <b>" +
                c +
                "/" +
                total +
                "</b></div>"
            );
        })
        .join("");
}
function renderFilters() {
    let html =
        '<button class="' +
        (activePhase === "all" ? "active" : "") +
        '" data-phase="all">Semua (90)</button>';
    Object.entries(PHASES).forEach(function (entry) {
        const id = entry[0];
        const p = entry[1];
        html +=
            '<button class="' +
            (activePhase == id ? "active" : "") +
            '" data-phase="' +
            id +
            '">Fase ' +
            id +
            " • " +
            p.range +
            "</button>";
    });
    filterBar.innerHTML = html;
    filterBar.querySelectorAll("button").forEach(function (b) {
        b.onclick = function () {
            activePhase = b.dataset.phase;
            renderFilters();
            render();
        };
    });
}
function filtered() {
    return DAYS.filter(function (d) {
        if (activePhase !== "all" && String(d.phase) !== String(activePhase))
            return false;
        if (hideDone && done.includes(d.day)) return false;
        if (search) {
            const q = search.toLowerCase();
            return (
                (d.title + " " + d.learn + " " + d.practice)
                    .toLowerCase()
                    .includes(q) || String(d.day) === q
            );
        }
        return true;
    });
}
function render() {
    const items = filtered();
    document.getElementById("resultCount").textContent =
        "Menampilkan " +
        items.length +
        " hari" +
        (search ? ' untuk "' + search + '"' : "");
    listEl.className = view === "timeline" ? "timeline" : "";
    if (items.length === 0) {
        listEl.innerHTML = "<p>Tidak ada hasil. Coba kata kunci lain.</p>";
        return;
    }
    listEl.innerHTML = items
        .map(function (d) {
            const p = PHASES[d.phase];
            const isDone = done.includes(d.day);
            return (
                '<article class="day-card ' +
                (isDone ? "done" : "") +
                '" data-day="' +
                d.day +
                '">' +
                '<div class="day-top"><div class="day-num">Hari ' +
                d.day +
                "<small>" +
                p.range +
                '</small></div><span class="phase-badge" style="background:' +
                p.color +
                '">FASE ' +
                d.phase +
                "</span></div>" +
                "<h3>" +
                d.title +
                "</h3>" +
                "<p><b>Belajar:</b> " +
                d.learn +
                "</p>" +
                "<p><b>Praktik:</b> " +
                d.practice +
                "</p>" +
                "<p>2-3 jam • " +
                p.title +
                "</p>" +
                '<div class="detail"><p><b>Output hari ini:</b> Selesaikan praktik di atas, tulis 3 hal yang kamu pelajari di catatan, lalu push ke GitHub.</p><p><b>Checklist:</b><br>☐ Baca / tonton materi<br>☐ Kerjakan praktik<br>☐ Push & catat di README</p></div>' +
                '<div class="card-actions"><button class="toggleBtn">Lihat Detail</button><label><input type="checkbox" class="doneCheck" ' +
                (isDone ? "checked" : "") +
                "> Selesai</label></div>" +
                "</article>"
            );
        })
        .join("");
    listEl.querySelectorAll(".day-card").forEach(function (card) {
        const day = Number(card.dataset.day);
        const tBtn = card.querySelector(".toggleBtn");
        tBtn.onclick = function () {
            card.classList.toggle("open");
            tBtn.textContent = card.classList.contains("open")
                ? "Tutup Detail"
                : "Lihat Detail";
        };
        card.querySelector(".doneCheck").onchange = function (e) {
            if (e.target.checked) {
                if (!done.includes(day)) done.push(day);
            } else {
                done = done.filter(function (x) {
                    return x !== day;
                });
            }
            save();
            render();
        };
    });
}
searchInput.oninput = function (e) {
    search = e.target.value.trim();
    render();
};
viewSelect.onchange = function (e) {
    view = e.target.value;
    render();
};
hideDoneEl.onchange = function (e) {
    hideDone = e.target.checked;
    render();
};
document.getElementById("resetBtn").onclick = function () {
    if (confirm("Reset semua progress?")) {
        done = [];
        save();
        render();
    }
};
document.getElementById("exportBtn").onclick = async function () {
    const txt =
        "Progress Roadmap AI Engineer: " +
        done.length +
        "/90 hari selesai. Hari yang selesai: " +
        (done
            .slice()
            .sort(function (a, b) {
                return a - b;
            })
            .join(", ") || "-");
    try {
        await navigator.clipboard.writeText(txt);
        alert("Progress tersalin!");
    } catch (err) {
        prompt("Salin progress ini:", txt);
    }
};
document.getElementById("continueBtn").onclick = function () {
    const nextObj = DAYS.find(function (d) {
        return !done.includes(d.day);
    });
    const next = nextObj ? nextObj.day : 1;
    activePhase = "all";
    search = "";
    hideDone = false;
    searchInput.value = "";
    hideDoneEl.checked = false;
    renderFilters();
    render();
    const el = document.querySelector('[data-day="' + next + '"]');
    if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
};
const themeBtn = document.getElementById("themeBtn");
function setTheme(t) {
    document.documentElement.dataset.theme = t;
    localStorage.setItem("ai-theme", t);
    themeBtn.textContent = t === "dark" ? "☼" : "◐";
}
setTheme(localStorage.getItem("ai-theme") || "light");
themeBtn.onclick = function () {
    setTheme(
        document.documentElement.dataset.theme === "dark" ? "light" : "dark"
    );
};
renderFilters();
updateProgress();
render();
