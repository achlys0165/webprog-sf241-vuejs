<template>
<nav class="navbar navbar-expand-lg fixed-top">
    <div class="container-fluid">
        <a class="navbar-brand" href="#home">Jan Sultan</a>

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
                <li><a class="nav-link" href="#home">Home</a></li>
                <li><a class="nav-link" href="#gallery">Gallery</a></li>
                <li><a class="nav-link" href="#projects">Projects</a></li>
                <li><a class="nav-link" href="#contact">Contact</a></li>
            </ul>
        </div>
    </div>
</nav>

<!-- HOME / HERO -->
<section class="name" id="home">
    <div class="name-card">
        <p class="text-secondary fw-bold small text-uppercase">Hello — I'm</p>
        <h1 class="name-title">Jan Sultan</h1>
        <p class="name-text">Curious by nature.<br>Cyber-driven by passion.</p>
        <div class="tags">Cybersecurity • Web Exploit • Musician</div>

        <div class="social-links mt-4">
            <a href="https://github.com/achlys0165" target="_blank">
                <img src="/images/github.png" class="social-img">
            </a>
            <a href="https://linkedin.com/in/jansultan0210" target="_blank">
                <img src="/images/linkedin.png" class="social-img">
            </a>
        </div>
    </div>

    <div class="name-profile">
        <img src="/images/hihi.png" class="name-img">
    </div>
</section>

<!-- PROFILE CAROUSEL -->
<section id="profile-carousel" class="py-5">
    <div class="container">
        <div class="row mb-5">
            <div class="col-12 ">
                <h6 class="text-gold text-uppercase ls-1 mb-2">Profile & Aspirations</h6>
                <h2 class="text-white fw-bold display-5">Who I Am <br>& Where I'm Going</h2>
            </div>
        </div>

        <div id="aspirationCarousel" class="carousel slide profile-card-large" data-bs-ride="false">
            <div class="carousel-inner">
                
                <div class="carousel-item active">
                    <div class="p-5">
                        <div class="d-flex justify-content-between align-items-start mb-4">
                            <h3 class="text-gold mb-4">About Jan Samuel</h3>
                            <div class="card-badge-static">ME</div>
                        </div>
                        
                       <div class="row">
                            <div class="col-lg-8">
                                <p class="text-white opacity-75 fs-5 ms-5 pt-5 pb-5 text-align-justify"> 
                                    A driven CS student passionate about <span class="text-gold">cybersecurity</span>, Python programming, and ethical hacking. 
                                    I thrive on challenging myself through CTFs, solving complex problems, and continuously learning tools to strengthen my technical and analytical skills.
                                </p>
                            </div>
                            <div class="col-lg-4 d-flex justify-content-center align-items-center">
                                <img src="/images/char.png" alt="character" style="width: 250px; height: auto; object-fit: contain;">
                            </div>
                        </div>

                    </div>
                </div>

                <div class="carousel-item">
                    <div class="p-5">
                        <div class="d-flex justify-content-between align-items-start mb-4">  
                            <h3 class="text-gold mb-4">Education / Achievement</h3>
                            <div class="card-badge-static">TECH</div>
                        </div>

                        <div class="row">
                            <div class="col-lg-8">
                                <p class="text-white opacity-75 fs-5 ms-5 pt-5 pb-5 text-align-justify"> 
                                    Bachelor of Science in Computer Science with Specialization in Cybersecurity.<br> 
                                    Active in Capture the Flag (CTF) competitions and Hack The Box.
                                </p>      
                            </div>
                            
                            <div class="col-lg-4 d-flex justify-content-center align-items-center">
                                <img src="/images/laptop.png" alt="tech" style="width: 250px; height: 250px; ">

                            </div>
                        </div>
                    </div>
                </div>

                 <div class="carousel-item">
                    <div class="p-5 ">

                        <div class="d-flex justify-content-between align-items-start mb-4">  
                            <h3 class="text-gold mb-4">Skills</h3>
                            <div class="card-badge-static">TOOLS</div>
                        </div>

                        <div class="row">
                            <div class="col-lg-8">
                                <div class="text-white opacity-75 fs-5">
                                    <p class="text-white opacity-75 fs-5 ms-5 pt-5 pb-5 text-align-justify">
                                        Python, HTML/CSS, and basic knowledge of C and Java. 
                                        Experienced with networking concepts, Linux systems, and cybersecurity tools.
                                    </p>
                                </div>
                            </div>

                            <div class="col-lg-4 d-flex justify-content-center align-items-center">
                                 <img src="/images/skills.png" alt="skills" style="width: 250px; height: 250px; ">
                            </div>

                        </div>
                    </div>
                </div>

                <div class="carousel-item">
                    <div class="p-5">
                        <div class="d-flex justify-content-between align-items-start mb-4">
                            <h3 class="text-gold mb-4">Hobbies & Interests</h3>
                            <div class="card-badge-static">FUN</div>
                        </div>

                        <div class="row">
                            <div class="col-lg-8">
                                <div class="text-white opacity-75 fs-5">
                                    <p class="text-white opacity-75 fs-5 ms-5 pt-5 pb-5 text-align-justify">
                                    Beyond my technical studies, I enjoy playing <span class="text-gold">lead guitar and shaping unique tones. </span>
                                    I frequently spend time performing and jamming with friends, alongside diving deep 
                                    into various cybersecurity challenges. Additionally, I am passionate about exploring 
                                    the intersections of philosophy, ethics, and science.
                                    </p>
                                </div>
                                
                            </div>

                            <div class="col-lg-4 d-flex justify-content-center align-items-center">
                                <img src="/images/hobbies.png" alt="hobbies" style="width: 250px; height: 250px; ">
                            </div>

                        </div>
                    </div>
                </div>

                <div class="carousel-item">
                    <div class="p-5">
                        <div class="d-flex justify-content-between align-items-start mb-4">
                            <h3 class="text-gold mb-4">Goals & Dreams</h3>
                            <div class="card-badge-static">GOAL</div>
                        </div>

                        <div class="row">

                            <div class="col-lg-8">
                                <div class="text-white opacity-75 fs-5">
                                    <p class="text-white opacity-75 fs-5 ms-5 pt-5 pb-5 text-align-justify">
                                    My primary ambition is to become a highly skilled cybersecurity professional  
                                    and build a strong portfolio for a top-tier company. 
                                    Beyond my career, I am committed to achieving long-term financial stability and personal resilience , 
                                    allowing me to grow as a musician and, ultimately, marry the love of my life.
                                    </p>
                                </div>
                            </div>

                            <div class="col-lg-4 d-flex justify-content-center align-items-center">
                                <img src="/images/goals.png" alt="goals" style="width: 250px; height: 250px; ">
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <button class="carousel-control-prev" type="button" data-bs-target="#aspirationCarousel" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#aspirationCarousel" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
            </button>

            <div class="carousel-indicators position-relative mt-4">
                <button type="button" data-bs-target="#aspirationCarousel" data-bs-slide-to="0" class="active"></button>
                <button type="button" data-bs-target="#aspirationCarousel" data-bs-slide-to="1"></button>
                <button type="button" data-bs-target="#aspirationCarousel" data-bs-slide-to="2"></button>
                <button type="button" data-bs-target="#aspirationCarousel" data-bs-slide-to="3"></button>
                <button type="button" data-bs-target="#aspirationCarousel" data-bs-slide-to="4"></button>
            </div>
        </div>
    </div>
</section>

<!-- GALLERY -->
<section id="gallery" class="container mt-5 pt-5">
    <div class="gallery-root">
        <div class="d-flex justify-content-between align-items-end">
            <div>
                <h2 class="text-white fw-bold display-5">Gallery</h2>
                <p class="text-white-50">A collection of moments.</p>
            </div>
            <div>
                <button @click="scrollGallery('left')" class="btn-nav">←</button>
                <button @click="scrollGallery('right')" class="btn-nav">→</button>
            </div>
        </div>

        <div class="gallery-wrapper" ref="galleryWrapper" @scroll="updateProgress">
            <div class="gallery-scroll-container">
                <div v-for="(img, index) in galleryImages" :key="index" class="gallery-item fade-in">
                    <img :src="'/images/' + img">
                </div>
            </div>
        </div>

        <div class="scroll-progress-container">
            <div class="scroll-progress-bar" :style="{ width: scrollPercent + '%' }"></div>
        </div>
    </div>
</section>

<!-- PROJECTS --> 
<section id="projects" class="container mt-5 pt-5 text-center">
    <div class="profile-card py-5">
        <h2 class="text-gold fw-bold display-4">Projects</h2>
        <p class="text-white opacity-75 fs-5">Coming Soon</p>
    </div>
</section>

<!-- CONTACT -->
<section id="contact" class="container mt-5 pt-5">
    <div class="row justify-content-center">
        <div class="col-md-7">
            <div class="profile-card">
                <h2 class="text-gold mb-4">Send a Message</h2>
                <form action="https://formspree.io/f/your-id" method="POST">
                    <input type="text" name="name" class="form-control mb-3" placeholder="Full Name" required>
                    <input type="email" name="email" class="form-control mb-3" placeholder="Email" required>
                    <textarea name="message" class="form-control mb-3" rows="5" placeholder="Message" required></textarea>
                    <button class="btn btn-warning w-100 fw-bold py-3">Send Message</button>
                </form>
            </div>
        </div>
    </div>
</section>
</template>

<script>
export default {
    data() {
        return {
            scrollPercent: 0,
            galleryImages: [
                'img1.jpg', 'img2.jpg', 'img3.jpg', 'img4.jpg', 'img5.jpg',
                'img6.jpg', 'img7.jpg', 'img8.jpg', 'img9.jpg', 'img10.jpg'
            ]
        }
    },
    methods: {
        scrollGallery(dir) {
            const container = this.$refs.galleryWrapper;
            if (container) {
                const scrollAmount = 430;
                container.scrollBy({
                    left: dir === 'left' ? -scrollAmount : scrollAmount,
                    behavior: 'smooth'
                });
            }
        },
        updateProgress() {
            const container = this.$refs.galleryWrapper;
            if (container) {
                const maxScroll = container.scrollWidth - container.clientWidth;
                this.scrollPercent = maxScroll > 0 ? (container.scrollLeft / maxScroll) * 100 : 0;
            }
        },
        handleHeroScroll() {
            const hero = document.getElementById('home');
            if (hero) {
                hero.style.opacity = Math.max(0, 1 - window.scrollY / 600);
            }
        }
    },
    mounted() {
        // Initialize progress bar
        this.updateProgress();
        // Add the scroll listener when the component loads
        window.addEventListener('scroll', this.handleHeroScroll);
    },
    unmounted() {
        // Clean up the listener when the component is destroyed to prevent memory leaks
        window.removeEventListener('scroll', this.handleHeroScroll);
    }
}
</script>

<style src="./css/personalprofile.css"></style>

