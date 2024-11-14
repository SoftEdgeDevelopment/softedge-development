
// Optimized Circle "Open and Close" Animation Starting from Top
anime({
    targets: '#animated-svg circle',
    easing: 'easeInOutQuad',
    duration: 1000, // Shorten duration to reduce lag and improve smoothness
    loop: true,
    direction: 'alternate',
    strokeDasharray: [0, 500],
    strokeDashoffset: [0, 500],
    stroke: ['#FF7E5F', '#FD3A69', '#FDA74E'],
    translateZ: 0, // Force hardware acceleration for better performance
});
