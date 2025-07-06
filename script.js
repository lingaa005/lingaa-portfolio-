const content = `
KASILINGAM MARUTHAMUTHU
Aspiring Backend Developer & AI Engineer

SUMMARY:
Motivated developer with strong work ethic, adaptability, and team spirit.

EDUCATION:
B.E. CSE @ Rajalakshmi Engineering College | GPA: 8.17

EXPERIENCE:
- HACKAMEGGDON (Hackathon): TEAM LEAD - Aug 2024
- SIH Internal Hackathon: TECHNICAL LEAD - Sep 2024
- Internship @ Chennai Port Authority: TECHNICAL LEAD - Dec 2024 - Jan 2025

PROJECTS:
- Telemedicine Platform for Maternal Health
- SOCIO-SCRAPE (Smart India Hackathon 2024)
- IoT-based Smart Home Power Management
- Port Charges Calculator

SKILLS:
C, C++, Java, Django, Flask, NodeJs, ExpressJs, Selenium, MySQL, SQLite, MongoDB, PostgreSQL

SOFT SKILLS:
Teamwork | Positive Attitude | Critical Thinking | Leadership | Research

ACHIEVEMENTS:
- Winner: Competitive Coding @ Symposium
- Selected: Smart India Hackathon

CONTACT:
📧 kasilingamtvm@gmail.com
🏠 No. 25, Vada Othavadai Street, Tiruvannamalai
🔗 GitHub: https://github.com/lingaa005

Click [Contact Me] below to reach out!
`;

let i = 0;
const speed = 15;
const typedText = document.getElementById('typedText');

function typeWriter() {
  if (i < content.length) {
    typedText.textContent += content.charAt(i);
    i++;

    // 👇 Automatically scroll down as content grows
    typedText.scrollTop = typedText.scrollHeight;

    setTimeout(typeWriter, speed);
  }
}

window.onload = typeWriter;

const modal = document.getElementById('contactModal');
  const openBtn = document.getElementById('openContact');
  const closeBtn = document.getElementById('closeContact');

  openBtn.addEventListener('click', () => {
    modal.classList.remove('hidden');
  });
  closeBtn.addEventListener('click', () => {
    modal.classList.add('hidden');
  });
  modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.classList.add('hidden');
  });

  // Fake Form Submit
  document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
    document.getElementById('formStatus').classList.remove('d-none');
  });