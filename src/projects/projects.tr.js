export const projects = [
    {
        title: 'PresenTly',
        description: '"Automate Your Life" hackathonunda 1. sırayı kazanan projemiz, toplamda 6 geliştirici ve 4 UX tasarımcısının geliştirdiği PresenTly, AI destekli bir doğum günü hediye asistanıdır!',
        technologies: ["React", "React Native", "MongoDB", "Express", "NodeJS", "JavaScript", "TypeScript", "AWS", "Jest", "OpenAI API", "Bing Search API", "Heroku", "CSS3"],
        imgSrc: "screenshots/presently.webp",
        githubLink: [{title: "GitHub (web ön yüzü)", src: "https://github.com/GA-Oct-hackathon-team-3/frontend"}, {title:"GitHub (mobil ön yüzü)", src:"https://github.com/GA-Oct-hackathon-team-3/mobile"}, {title: "GitHub (arka uç)", src:"https://github.com/GA-Oct-hackathon-team-3/backend"}],
        deploymentLinks: [{title: "Canlı Site", src: "https://ga-oct-hackathon-team-3.github.io/"}, {title: "Demo Videosu", src:"https://youtu.be/R8AGdcMoaQY"}]
    },
    {
        title: 'eyeConnect',
        description: 'Medikal profesyonelleri uzmanlarla bağlayan bir tele-tıp web uygulaması. Veri şifreleme ve AI destekli medikal görüntü sınıflandırma özellikleri içerir.',
        technologies: ["MongoDB", "Express", "NodeJS", "JavaScript", "TensorFlow", "OpenCV", "HTML5", "CSS3", "Heroku", "Docker"],
        imgSrc: "screenshots/eyeConnect.webp",
        githubLink: [{ title: 'GitHub', src: "https://github.com/cango91/eye-connect" }],
        deploymentLinks: [{ title: "Canlı Site", src: "https://eye-connect-6befc020749e.herokuapp.com/" }, {title: "Demo Videosu", src: "https://youtu.be/rngKwGVvSX0"}]
    },
    {
        title: 'Convault',
        description: 'Uçtan uca şifrelenmiş, web tabanlı bir sohbet uygulamasıdır. Veri sızıntılarına karşı benzersiz bir veri mimarisi içerir. Çok katmanlı güvenlik ve gerçek zamanlı mesajlaşma özellikleri sunar.',
        technologies: ['React', 'MongoDB', 'Socket.io', 'Express', 'NodeJS', 'JavaScript', 'Heroku', 'CSS3'],
        imgSrc: "screenshots/convault.webp",
        githubLink: [{ title: "GitHub (ön yüz)", src: "https://github.com/cango91/convault-frontend" }, { title: "GitHub (arka uç)", src: "https://github.com/cango91/convault-backend" }],
        deploymentLinks: [{ title: "Canlı Site", src: "https://convault-d603666b3d0b.herokuapp.com/" }]
    },
    {
        title: 'Café Normalé',
        description: 'Görme engelliler için geliştirilmiş, konuşmayı metine dönüştürme özelliği sunan ve sadece klavye ile gezinmeye destek veren bir restoran uygulaması. 3 UX Tasarımcı ve 2 geliştirici ile birlikte bir mini hackathon için geliştirildi.',
        technologies: ['React', 'MongoDB', 'Express', 'NodeJS', 'JavaScript', 'CSS3'],
        imgSrc: "screenshots/cafeNormale.webp",
        githubLink: [{ title: "GitHub", src: "https://github.com/cango91/ga-mini-hackathon" }],
    },
    {
        title: 'email-verify',
        description: 'email-verify, herhangi bir Django projesine entegre edilebilen, kullanıcı kaydı sırasında e-posta doğrulamasını kolaylaştıran hafif, açık kaynaklı bir pakettir.',
        technologies: ['Python', 'Django'],
        imgSrc: "screenshots/emailVerify.webp",
        githubLink: [{ title: "GitHub", src: "https://github.com/cango91/email-verify" }],
        deploymentLinks: [{ title: "PyPI", src: "https://pypi.org/project/email-verify/" }]
    },
    {
        title: 'The Thomas Collective',
        description: 'Grup projesi olarak yapılmış tren seyahatleri üzerine odaklanan bir seyahat uygulamasıdır. Tam CRUD yetenekleri, kullanıcı doğrulaması ve e-posta onayı özelliklerini içerir.',
        technologies: ['Python', 'Django', 'Heroku','HTML5','CSS3','JavaScript'],
        imgSrc: "screenshots/thomas.webp",
        githubLink: [{ title: "GitHub", src: "https://github.com/cango91/thomascollective" }],
        deploymentLinks: [{ title: "Canlı Site", src: "https://thomas-collective-mirror-b5c42af6481f.herokuapp.com/" }]
    },
    {
        title: 'Solitaire (Klondike)',
        description: 'Tarayıcı oyunu olarak klasik sabır oyunu Klondike. Çeşitli grafik ve animasyon ayarları ile oyun modları sunar (Firefox ile uyumlu değildir).',
        technologies: ["HTML5", "CSS3", "JavaScript"],
        imgSrc: "screenshots/solitaire.webp",
        githubLink: [{ title: "GitHub", src: "https://github.com/cango91/solitaire" }],
        deploymentLinks: [{ title: "Şimdi Oyna!", src: "https://cango91.github.io/solitaire/src/index.html" }]
    }
]
