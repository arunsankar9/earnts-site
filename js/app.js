// AI/ML Career Transition Platform - JavaScript
// Earn Technologies LLC

// Tab Navigation
function showTab(tabName) {
    // Hide all tabs
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => tab.classList.remove('active'));
    
    // Remove active class from all nav tabs
    const navTabs = document.querySelectorAll('.nav-tab');
    navTabs.forEach(tab => tab.classList.remove('active'));
    
    // Show selected tab
    const selectedTab = document.getElementById(tabName);
    if (selectedTab) {
        selectedTab.classList.add('active');
    }
    
    // Add active class to clicked nav tab
    if (event && event.target) {
        event.target.classList.add('active');
    }
    
    // Scroll to top smoothly
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Accordion Toggle
function toggleAccordion(header) {
    const content = header.nextElementSibling;
    const icon = header.querySelector('.accordion-icon');
    
    // Toggle active class
    content.classList.toggle('active');
    icon.classList.toggle('rotate');
}

// Generate Personalized Learning Path
function generatePath() {
    const currentRole = document.getElementById('currentRole').value;
    const targetRole = document.getElementById('targetRole').value;
    
    if (!currentRole || !targetRole) return;
    
    const recommendation = document.getElementById('recommendation');
    const pathContent = document.getElementById('pathContent');
    
    // Learning path database
    const paths = {
        'frontend-ml-engineer': {
            timeline: '6-9 months',
            leverage: 'Your JavaScript/UI skills transfer well to building ML-powered interfaces',
            focus: ['Python basics', 'ML fundamentals', 'TensorFlow.js', 'Model integration APIs'],
            projects: ['Build a real-time image classifier web app', 'Create an intelligent recommendation UI', 'Deploy ML model with React frontend'],
            difficulty: 'Moderate'
        },
        'frontend-mlops': {
            timeline: '8-12 months',
            leverage: 'Transition requires learning backend and ML operations, but your automation mindset helps',
            focus: ['Backend development basics', 'ML fundamentals', 'DevOps tools', 'MLOps frameworks'],
            projects: ['Build ML dashboard', 'Create automated ML pipeline UI', 'Develop model monitoring interface'],
            difficulty: 'Challenging'
        },
        'backend-ml-engineer': {
            timeline: '6-12 months',
            leverage: 'Your API and system design skills are directly applicable to ML engineering',
            focus: ['ML algorithms', 'PyTorch/TensorFlow', 'Model deployment', 'ML pipelines'],
            projects: ['Build an ML API with FastAPI', 'Create a recommendation system', 'Deploy models with Docker/Kubernetes'],
            difficulty: 'Moderate'
        },
        'backend-mlops': {
            timeline: '5-9 months',
            leverage: 'Your backend and deployment experience translates perfectly to MLOps',
            focus: ['ML basics', 'MLflow', 'Model monitoring', 'CI/CD for ML'],
            projects: ['Set up ML CI/CD pipeline', 'Build model versioning system', 'Create automated retraining pipeline'],
            difficulty: 'Easier'
        },
        'devops-mlops': {
            timeline: '4-8 months',
            leverage: 'Your DevOps expertise is highly valued in MLOps - shortest transition!',
            focus: ['ML basics', 'MLflow', 'Kubeflow', 'Model monitoring', 'Feature stores'],
            projects: ['Set up ML CI/CD pipeline', 'Build model monitoring dashboard', 'Create automated retraining pipeline'],
            difficulty: 'Easiest'
        },
        'devops-ml-engineer': {
            timeline: '8-14 months',
            leverage: 'You have the deployment skills, now add ML algorithm knowledge',
            focus: ['ML algorithms deeply', 'Model training', 'Deep learning', 'ML system design'],
            projects: ['Build scalable ML training pipeline', 'Create end-to-end ML system', 'Develop distributed training setup'],
            difficulty: 'Challenging'
        },
        'data-ml-engineer': {
            timeline: '6-10 months',
            leverage: 'Your data pipeline skills are essential for ML - great starting point!',
            focus: ['ML algorithms', 'Feature engineering', 'Model training at scale', 'ML data quality'],
            projects: ['Build end-to-end ML data pipeline', 'Create feature store', 'Optimize training data pipeline'],
            difficulty: 'Moderate'
        },
        'data-mlops': {
            timeline: '6-10 months',
            leverage: 'Your data infrastructure knowledge helps with ML data operations',
            focus: ['ML fundamentals', 'MLOps tools', 'Feature engineering', 'Model deployment'],
            projects: ['Build data pipeline for ML', 'Create feature store with monitoring', 'Develop ML data quality framework'],
            difficulty: 'Moderate'
        },
        'fullstack-applied-ml': {
            timeline: '8-12 months',
            leverage: 'Your full-stack skills enable you to build complete ML applications',
            focus: ['ML fundamentals', 'Model integration', 'ML APIs', 'Real-time inference'],
            projects: ['Build full-stack ML app', 'Create chatbot with NLP', 'Develop ML-powered SaaS product'],
            difficulty: 'Moderate'
        },
        'fullstack-ml-engineer': {
            timeline: '8-14 months',
            leverage: 'Full-stack background helps you understand the entire ML lifecycle',
            focus: ['ML algorithms deeply', 'Deep learning', 'Model training', 'Production ML'],
            projects: ['End-to-end ML application', 'Build ML platform', 'Create ML-powered product'],
            difficulty: 'Challenging'
        },
        'mobile-ml-mobile': {
            timeline: '6-10 months',
            leverage: 'Your mobile expertise is perfect for on-device ML applications',
            focus: ['ML basics', 'Core ML/ML Kit', 'TensorFlow Lite', 'Model compression'],
            projects: ['Build AR app with ML', 'Create on-device image classifier', 'Develop smart camera app'],
            difficulty: 'Moderate'
        },
        'mobile-applied-ml': {
            timeline: '7-11 months',
            leverage: 'Mobile development skills translate well to building ML-powered apps',
            focus: ['ML fundamentals', 'Mobile ML frameworks', 'Model integration', 'Edge AI'],
            projects: ['ML-powered mobile app', 'Real-time object detection app', 'Voice-enabled smart assistant'],
            difficulty: 'Moderate'
        },
        'qa-ml-test': {
            timeline: '5-9 months',
            leverage: 'Your testing mindset is crucial for ML model validation',
            focus: ['ML fundamentals', 'Model evaluation', 'ML metrics', 'A/B testing for ML'],
            projects: ['Build ML model testing framework', 'Create data validation pipeline', 'Develop ML monitoring system'],
            difficulty: 'Easier'
        },
        'qa-ml-engineer': {
            timeline: '10-16 months',
            leverage: 'Significant shift from QA to engineering, but systematic thinking helps',
            focus: ['Programming deeply', 'ML algorithms', 'Model development', 'Deep learning'],
            projects: ['Build multiple ML models', 'Create ML pipeline', 'Deploy production ML system'],
            difficulty: 'Very Challenging'
        },
        'architect-ml-architect': {
            timeline: '8-15 months',
            leverage: 'Your architecture skills translate well to ML system design',
            focus: ['ML algorithms', 'ML system design', 'Scalable ML', 'Distributed training'],
            projects: ['Design ML platform architecture', 'Build scalable ML inference system', 'Create ML architecture documentation'],
            difficulty: 'Challenging'
        },
        'architect-mlops': {
            timeline: '6-12 months',
            leverage: 'Your system architecture knowledge is valuable for MLOps infrastructure',
            focus: ['ML fundamentals', 'MLOps architecture', 'ML infrastructure', 'Scalable deployment'],
            projects: ['Design MLOps platform', 'Build scalable model serving', 'Create ML infrastructure blueprint'],
            difficulty: 'Moderate'
        }
    };
    
    // Create path key
    const key = `${currentRole}-${targetRole}`;
    
    // Get path or use default
    const path = paths[key] || {
        timeline: '6-12 months',
        leverage: 'Your software engineering background provides a strong foundation for ML',
        focus: ['ML fundamentals', 'Deep learning', 'Model deployment', 'Domain specialization'],
        projects: ['Complete 3 end-to-end ML projects', 'Contribute to open source ML', 'Build portfolio on GitHub'],
        difficulty: 'Moderate'
    };
    
    // Difficulty color coding
    const difficultyColors = {
        'Easiest': '#10b981',
        'Easier': '#34d399',
        'Moderate': '#fbbf24',
        'Challenging': '#f97316',
        'Very Challenging': '#ef4444'
    };
    
    const difficultyColor = difficultyColors[path.difficulty] || '#fbbf24';
    
    // Generate HTML content
    pathContent.innerHTML = `
        <div class="learning-path">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
                <h4 style="margin: 0;">⏱️ Estimated Timeline: ${path.timeline}</h4>
                <span style="background: ${difficultyColor}; padding: 8px 16px; border-radius: 20px; font-weight: 600;">
                    ${path.difficulty}
                </span>
            </div>
            
            <p style="margin: 15px 0; font-size: 1.1em; line-height: 1.6;">${path.leverage}</p>
            
            <h4 style="margin-top: 25px; margin-bottom: 15px;">🎯 Key Focus Areas:</h4>
            ${path.focus.map((item, idx) => `
                <div class="path-step">
                    <strong>Step ${idx + 1}:</strong> ${item}
                </div>
            `).join('')}
            
            <h4 style="margin-top: 25px; margin-bottom: 15px;">🚀 Recommended Projects:</h4>
            ${path.projects.map((project, idx) => `
                <div class="path-step">
                    <strong>Project ${idx + 1}:</strong> ${project}
                </div>
            `).join('')}
            
            <div style="margin-top: 25px; padding: 20px; background: rgba(255,255,255,0.15); border-radius: 10px;">
                <h4 style="margin-bottom: 15px;">📚 Next Steps:</h4>
                <ol style="margin-left: 20px; line-height: 1.8;">
                    <li>Review the Training Model tab for detailed phase-by-phase curriculum</li>
                    <li>Check the Resources tab for courses, books, and platforms</li>
                    <li>Join ML communities and start networking</li>
                    <li>Set up a GitHub account to showcase your projects</li>
                    <li>Begin with foundational courses and build momentum</li>
                </ol>
            </div>
            
            <div style="text-align: center; margin-top: 25px;">
                <button class="cta-button" onclick="showTab('training')" style="margin-right: 10px;">
                    View Full Training Model →
                </button>
                <button class="cta-button" onclick="showTab('resources')">
                    Explore Resources →
                </button>
            </div>
        </div>
    `;
    
    // Show recommendation box
    recommendation.classList.add('show');
    
    // Smooth scroll to recommendation
    recommendation.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// Smooth scroll for anchor links
document.addEventListener('DOMContentLoaded', function() {
    // Add smooth scroll behavior to all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Add animation on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe role cards
    document.querySelectorAll('.role-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
    
    // Observe timeline items
    document.querySelectorAll('.timeline-item').forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateX(-20px)';
        item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(item);
    });
});

// Add keyboard navigation
document.addEventListener('keydown', function(e) {
    const tabs = ['overview', 'role-mapping', 'training', 'personalized', 'resources'];
    const currentTab = document.querySelector('.tab-content.active');
    const currentIndex = tabs.indexOf(currentTab?.id);
    
    if (e.key === 'ArrowRight' && currentIndex < tabs.length - 1) {
        showTab(tabs[currentIndex + 1]);
        // Update active nav tab
        document.querySelectorAll('.nav-tab')[currentIndex + 1].classList.add('active');
    } else if (e.key === 'ArrowLeft' && currentIndex > 0) {
        showTab(tabs[currentIndex - 1]);
        // Update active nav tab
        document.querySelectorAll('.nav-tab')[currentIndex - 1].classList.add('active');
    }
});

// Track user progress (using localStorage)
function saveProgress(section) {
    try {
        const progress = JSON.parse(localStorage.getItem('ml_platform_progress') || '{}');
        progress[section] = true;
        progress.lastVisit = new Date().toISOString();
        localStorage.setItem('ml_platform_progress', JSON.stringify(progress));
    } catch (e) {
        console.log('Progress tracking not available');
    }
}

// Load user progress
function loadProgress() {
    try {
        const progress = JSON.parse(localStorage.getItem('ml_platform_progress') || '{}');
        return progress;
    } catch (e) {
        return {};
    }
}

// Add event listeners to track section visits
document.querySelectorAll('.nav-tab').forEach((tab, index) => {
    tab.addEventListener('click', function() {
        const sections = ['overview', 'role-mapping', 'training', 'personalized', 'resources'];
        saveProgress(sections[index]);
    });
});

// Print functionality
function printContent() {
    window.print();
}

// Export functionality (simple text export)
function exportPath() {
    const currentRole = document.getElementById('currentRole').value;
    const targetRole = document.getElementById('targetRole').value;
    
    if (!currentRole || !targetRole) {
        alert('Please select both current and target roles first.');
        return;
    }
    
    const pathContent = document.getElementById('pathContent').innerText;
    const blob = new Blob([pathContent], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `ml-learning-path-${currentRole}-to-${targetRole}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
}

// Console message
console.log('%c🚀 AI/ML Career Transition Platform', 'color: #667eea; font-size: 20px; font-weight: bold;');
console.log('%cBy Earn Technologies LLC', 'color: #764ba2; font-size: 14px;');
console.log('%cEmpowering Careers Through AI/ML Innovation', 'color: #666; font-size: 12px; font-style: italic;');