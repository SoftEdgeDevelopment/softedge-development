document.addEventListener('DOMContentLoaded', function () {
    const animatedSvg = document.querySelector('#animated-svg circle');
    if (animatedSvg) {
        anime({
            targets: '#animated-svg circle',
            easing: 'easeInOutQuad',
            duration: 1000,
            loop: true,
            direction: 'alternate',
            strokeDasharray: [0, 500],
            strokeDashoffset: [0, 500],
            stroke: ['#FF7E5F', '#FD3A69', '#FDA74E'],
            translateZ: 0,
        });
    }
});

function loadExternalFiles(cssFile, jsFile) {
    // Load CSS
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = cssFile;
    document.head.appendChild(link);

    // Load JS and ensure it's properly executed
    const script = document.createElement("script");
    script.src = jsFile;
    script.async = false; // Make sure it is not executed until it is fully loaded
    script.onload = () => {
        console.log(`${jsFile} has been loaded successfully.`);
    };
    script.onerror = () => {
        console.error(`Failed to load ${jsFile}.`);
    };
    document.body.appendChild(script);
}

// Function to open the modal with specific content
function openModal(contentType) {
    const modal = document.getElementById('modal');
    const modalContent = document.getElementById('modalContent');

    // Clear previous modal content
    modalContent.innerHTML = '';

    // Set modal content based on the content type
    let content = getContent(contentType);
    modalContent.innerHTML = content;

    // Delay to allow the content to load before creating charts if needed
    if (contentType.includes('AI & Automation') || contentType.includes('Cloud Solutions') || contentType.includes('Cybersecurity') || contentType.includes('Who We Are') || contentType.includes('Our Vision')) {
        setTimeout(() => initializeCharts(contentType), 300);
    }

    // Show the modal
    modal.classList.add('modal-open');
}

// Function to get content for the modal based on the content type
function getContent(contentType) {
    switch (contentType) {
        case 'AI & Automation':
            return `
                <h2 class="text-4xl font-bold mb-6 gradient-text">AI & Automation</h2>
                <div class="flex justify-center">
                    <img src="assets/images/automation.png" alt="AI & Automation" class="rounded-lg mb-6" style="width: 200px;">
                </div>
                <p class="text-lg leading-relaxed mb-12">We create intelligent automation systems powered by AI to streamline operations, reduce costs, and optimize efficiency. Our AI-driven solutions revolutionize how businesses operate, enhancing productivity and reducing manual tasks.</p>
                <canvas id="aiAutomationChart" width="400" height="400" class="mx-auto mb-6"></canvas>
            `;

        case 'Cloud Solutions':
            return `
                <h2 class="text-4xl font-bold mb-6 gradient-text">Cloud Solutions</h2>
                <div class="flex justify-center">
                    <img src="assets/images/cloud-solutions.png" alt="Cloud Solutions" class="rounded-lg mb-6" style="width: 200px;">
                </div>
                <p class="text-lg leading-relaxed mb-12">Our cloud solutions help businesses scale globally with secure, reliable, and flexible infrastructure that meets your needs. We offer tailored cloud services to ensure that your data is always accessible and protected.</p>
                <canvas id="cloudBarChart" width="400" height="400" class="mx-auto mb-6"></canvas>
            `;

            case 'Cybersecurity':
                return `
                    <h2 class="text-4xl font-bold mb-6 gradient-text">Data Analytics</h2>
                    <div class="flex justify-center">
                        <img src="assets/images/cybersecurity.png" alt="Data Analytics" class="rounded-lg mb-6" style="width: 200px;">
                    </div>
                    <p class="text-lg leading-relaxed mb-12">We provide state-of-the-art cybersecurity services to protect your data, systems, and networks from threats and vulnerabilities. Our comprehensive security solutions give you peace of mind in a digital world full of risks.</p>
                    <canvas id="cyberPieChart" width="400" height="400" class="mx-auto mb-6"></canvas>
                `;

        case 'Who We Are':
            return `
                <h2 class="text-4xl font-bold mb-6 gradient-text">Who We Are</h2>
                <img src="assets/images/who-we-are.jpg" alt="Who We Are" class="w-full rounded-lg mb-6">
                <p class="text-lg leading-relaxed mt-8 mb-8">We are a tech-driven company focused on innovation, developing cutting-edge solutions that push the boundaries of what's possible. Our mission is to create sustainable, scalable, and impactful technologies for the modern world.</p>
                <canvas id="whoWeAreHorizontalBarChart" width="400" height="400" class="mx-auto mb-6"></canvas>
            `;

        case 'Our Vision':
            return `
                <h2 class="text-4xl font-bold mb-6 gradient-text">Our Vision</h2>
                <img src="assets/images/vision-image.jpg" alt="Our Vision" class="w-full rounded-lg mb-6">
                <p class="text-lg leading-relaxed mt-8 mb-8">Our vision is to shape the future by leveraging the latest advancements in AI, data science, and automation. We aim to provide transformative experiences and breakthrough solutions that redefine industries and improve the way people live and work.</p>
                <canvas id="visionLineChart" width="400" height="400" class="mx-auto mb-6"></canvas>
            `;

            case 'TaskGPT':
                return `
                
                    <div class="modal-content bg-dark-blur rounded-lg p-8 shadow-2xl max-w-md mx-auto animated fadeIn">
                    <h2 class="text-4xl font-bold mb-6 gradient-text">TaskGPT</h2>
                    <img src="assets/images/TaskGPT.png" alt="TaskGPT" class="w-full rounded-lg mb-6 shadow-lg">
                    <p class="text-lg leading-relaxed mt-8 mb-8">
                        TaskGPT is a cutting-edge AI-powered platform designed to streamline your workflows and enhance productivity. Automate repetitive tasks, gain intelligent insights, and optimize operations with ease.
                    </p>
                    <img src="./assets/images/chat-animation.gif" alt="Automate Tasks">
                    <p class="text-lg leading-relaxed mt-8 mb-8">
                        Perfect for businesses aiming to scale efficiently, TaskGPT integrates seamlessly with your existing tools, offering customizable setups to suit your needs. Let TaskGPT handle the mundane so you can focus on what truly matters.
                    </p>
                        
                        <a href="product.html">
                        <button style="width: 100%; background: linear-gradient(to right, #FF7E5F, #FD3A69); color: white; padding: 12px 20px; border-radius: 8px; font-size: 1.125rem; font-weight: 600; transition: box-shadow 0.3s ease, transform 0.3s ease; display: inline-block; text-align: center;" 
                                onmouseover="this.style.boxShadow='0 0 15px 5px rgba(255, 126, 95, 0.6), 0 0 30px 10px rgba(253, 58, 105, 0.4)'; this.style.transform='scale(1.05)';" 
                                onmouseout="this.style.boxShadow='none'; this.style.transform='scale(1)';">
                            Check It Out
                        </button>
                    </a>
                    </div>
                    
                `;

        case 'Data Analytics':
            return `
                <h2 class="text-4xl font-bold mb-6 gradient-text">Data Analytics</h2>
                <img src="assets/images/data-analytics.jpg" alt="Data Analytics" class="w-full rounded-lg mb-6">
                <p class="text-lg leading-relaxed">Content for Data Analytics will go here. You can customize this content later.</p>
            `;

        case 'Panda 1':
            return `
                <h2 class="text-4xl font-bold mb-6 gradient-text">Panda 1</h2>
                <img src="assets/images/1.png" alt="Panda 1" class="w-full rounded-full mb-6">
                <p class="text-lg leading-relaxed">Bio and details about Panda 1 will be here. Customize this content as needed.</p>
            `;

        case 'Panda 2':
            return `
                <h2 class="text-4xl font-bold mb-6 gradient-text">Panda 2</h2>
                <img src="assets/images/2.png" alt="Panda 2" class="w-full rounded-full mb-6">
                <p class="text-lg leading-relaxed">Bio and details about Panda 2 will be here. Customize this content as needed.</p>
            `;

        case 'Panda 3':
            return `
                <h2 class="text-4xl font-bold mb-6 gradient-text">Panda 3</h2>
                <img src="assets/images/3.png" alt="Panda 3" class="w-full rounded-full mb-6">
                <p class="text-lg leading-relaxed">Bio and details about Panda 3 will be here. Customize this content as needed.</p>
            `;

        case 'How AI Is Transforming Businesses':
            return `
                <h2 class="text-4xl font-bold mb-6 gradient-text">How AI Is Transforming Businesses</h2>
                <p class="text-lg leading-relaxed">Detailed content about AI transformation in businesses will go here. Customize this as needed.</p>
            `;

        case 'Securing Your Cloud Infrastructure':
            return `
                <h2 class="text-4xl font-bold mb-6 gradient-text">Securing Your Cloud Infrastructure</h2>
                <p class="text-lg leading-relaxed">Detailed content on cloud security will go here. Customize this as needed.</p>
            `;

        case 'Automation: The Future of Work':
            return `
                <h2 class="text-4xl font-bold mb-6 gradient-text">Automation: The Future of Work</h2>
                <p class="text-lg leading-relaxed">Detailed content about the future of automation in workspaces will go here. Customize this as needed.</p>
            `;

        default:
            return `<p>Content not available.</p>`;
    }
}

// Function to create charts based on content type
function initializeCharts(contentType) {
    switch (contentType) {
        case 'AI & Automation':
            createDoughnutChart('aiAutomationChart', ['Efficiency', 'Cost Reduction', 'Productivity'], [45, 30, 25], ['#FF7E5F', '#FD3A69', '#FFEDDA']);
            break;

        case 'Cloud Solutions':
            createBarChart('cloudBarChart', ['Scalability', 'Security', 'Flexibility'], [80, 75, 90], '#FD3A69');
            break;

            case 'Cybersecurity':
                createPieChart('cyberPieChart', ['Data Protection', 'Network Security', 'Threat Prevention'], [40, 35, 25], ['#FF7E5F', '#FD3A69', '#FFEDDA']);
                break;

        case 'Who We Are':
            createHorizontalBarChart('whoWeAreHorizontalBarChart', ['Innovation', 'Scalability', 'Impact'], [85, 90, 95], '#FF7E5F');
            break;

        case 'Our Vision':
            createLineChart('visionLineChart', ['2021', '2022', '2023', '2024'], [50, 65, 80, 95], '#FD3A69');
            break;
    }
}

// Function to close the modal
function closeModal() {
    const modal = document.getElementById('modal');
    modal.classList.remove('modal-open');
}

// Create Doughnut Chart
function createDoughnutChart(canvasId, labels, data, colors) {
    const ctx = document.getElementById(canvasId).getContext('2d');
    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: labels,
            datasets: [{
                data: data,
                backgroundColor: colors,
                hoverOffset: 8, // Add space when hovering
                borderWidth: 2, // Subtle border for better distinction
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        padding: 20, // Add padding for better spacing
                        boxWidth: 15, // Smaller boxes for a cleaner look
                        color: '#333', // Darker text color for better readability
                        font: {
                            family: 'Arial, sans-serif',
                            size: 14
                        }
                    }
                },
                tooltip: {
                    backgroundColor: 'rgba(0, 0, 0, 0.7)', // Dark background
                    bodyColor: '#fff', // White text for contrast
                    padding: 10,
                    borderRadius: 8,
                    titleFont: {
                        weight: 'bold'
                    },
                    animation: {
                        duration: 500 // Smooth fade-in for tooltips
                    }
                }
            },
            animation: {
                animateRotate: true, // Smooth rotation effect
                animateScale: true // Smooth scaling effect
            },
        }
    });
}

// Create Bar Chart
function createBarChart(canvasId, labels, data, color) {
    const ctx = document.getElementById(canvasId).getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Performance',
                data: data,
                backgroundColor: color,
                borderRadius: 8, // Rounded bars for a modern look
                barPercentage: 0.6, // Adjust width for better spacing
                hoverBackgroundColor: '#ff8c00' // Highlight color on hover
            }]
        },
        options: {
            responsive: true,
            scales: {
                x: {
                    grid: {
                        display: false // Clean look without grid lines
                    }
                },
                y: {
                    beginAtZero: true,
                    grid: {
                        borderDash: [5, 5], // Dashed lines for a softer look
                        color: '#ddd' // Light color for grid lines
                    },
                    ticks: {
                        font: {
                            family: 'Arial, sans-serif',
                            size: 12
                        }
                    }
                }
            },
            plugins: {
                legend: {
                    display: false // Hides legend for a cleaner appearance
                },
                tooltip: {
                    backgroundColor: 'rgba(0, 0, 0, 0.7)',
                    bodyColor: '#fff',
                    padding: 10,
                    borderRadius: 8,
                    titleFont: {
                        weight: 'bold'
                    }
                }
            },
            animation: {
                duration: 700, // Smooth animations for bar transitions
                easing: 'easeOutBounce'
            }
        }
    });
}

// Create Pie Chart (Styled Similar to Doughnut Chart)
function createPieChart(canvasId, labels, data, colors) {
    const ctx = document.getElementById(canvasId).getContext('2d');
    new Chart(ctx, {
        type: 'pie',
        data: {
            labels: labels,
            datasets: [{
                data: data,
                backgroundColor: colors,
                hoverOffset: 8, // Add space when hovering
                borderWidth: 2, // Subtle border for better distinction
                borderColor: '#fff' // White border for cleaner separation
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        padding: 20, // Add padding for better spacing
                        boxWidth: 15, // Smaller boxes for a cleaner look
                        color: '#333', // Darker text color for better readability
                        font: {
                            family: 'Arial, sans-serif',
                            size: 14
                        }
                    }
                },
                tooltip: {
                    backgroundColor: 'rgba(0, 0, 0, 0.7)', // Dark background
                    bodyColor: '#fff', // White text for contrast
                    padding: 10,
                    borderRadius: 8,
                    titleFont: {
                        weight: 'bold'
                    },
                    animation: {
                        duration: 500 // Smooth fade-in for tooltips
                    }
                }
            },
            animation: {
                animateRotate: true, // Smooth rotation effect
                animateScale: true // Smooth scaling effect
            }
        }
    });
}

// Attach event listeners to buttons for opening modals
document.querySelectorAll('[data-modal]').forEach(button => {
    button.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent default anchor behavior
        const contentType = this.getAttribute('data-modal');
        openModal(contentType);
    });
});
