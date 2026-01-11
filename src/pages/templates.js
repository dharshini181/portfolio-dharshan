export function Templates() {
  // Reordered: Porsche (top), Fight Club, Shraddha, Farewell 2025 (bottom)
  const posters = [
    { id: 3, src: '/assets/images/poster3.png', title: 'Porsche Motorsport' },
    { id: 4, src: '/assets/images/poster4.png', title: 'Fight Club' },
    { id: 2, src: '/assets/images/poster2.png', title: 'Shraddha Farewell' },
    { id: 1, src: '/assets/images/poster1.png', title: 'Farewell 2025' },
  ];

  return `
    <section class="templates-section">
      <div class="container">
        <h2 class="section-title scroll-reveal">My <span class="text-gradient">Templates</span></h2>
        
        <div class="templates-grid">
          ${posters.map((poster, index) => `
            <div class="template-card scroll-reveal" style="transition-delay: ${index * 100}ms">
              <div class="card-image glass-panel">
                <img src="${poster.src}" alt="${poster.title}" loading="lazy">
                <div class="overlay">
                  <span class="view-btn">View Detail</span>
                </div>
              </div>
              <h3 class="card-title">${poster.title}</h3>
            </div>
          `).join('')}
        </div>

        <div class="featured-video scroll-reveal">
           <h2 class="section-title">Show<span class="text-gradient">reel</span></h2>
           <div class="video-container glass-panel">
             <video controls width="100%" height="100%" style="display: block;">
               <source src="/assets/videos/showreel.mp4" type="video/mp4">
               Your browser does not support the video tag.
             </video> 
           </div>
        </div>
      </div>
    </section>
  `;
}
