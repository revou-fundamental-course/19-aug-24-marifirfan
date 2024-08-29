// ini javascript
let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

// nama pengguna 
function getUserName() {
    return localStorage.getItem('userName');
}

// menyimpan nama pengguna 
function setUserName(name) {
    localStorage.setItem('userName', name);
}

// menampilkan ucapan welcome
function displayGreeting() {
    const greetingMessage = document.getElementById('greetingMessage');
    let name = getUserName();

    if (!name) {
        // minta nama dan simpan
        name = prompt('Masukkan nama Anda:');
        if (name) {
            setUserName(name);
        }
    }

    if (name) {
        greetingMessage.textContent = `Hi Welcome ${capitalizeFirstLetter(name)}!`;
    } else {
        greetingMessage.textContent = 'Hi Welcome';
    }
}

// kapital huruf pertama
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// menampilkan ucapan welcome 
window.onload = displayGreeting;

// agar dapat di slide //

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = (i === index) ? 'flex' : 'none';
    });
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    showSlide(currentIndex);
}

// slide pertama
showSlide(currentIndex);

// slide otomatis
setInterval(nextSlide, 10000); // 10 detik


function submitForm() {
    // form
    const name = document.getElementById('name').value;
    const dob = document.getElementById('dob').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const message = document.getElementById('message').value;

    // Tampilan waktu
    const currentTime = new Date().toString();
    document.getElementById('currentTime').innerText = currentTime;

    // nilai output
    document.getElementById('outputName').innerText = name;
    document.getElementById('outputDob').innerText = dob;
    document.getElementById('outputGender').innerText = gender;
    document.getElementById('outputMessage').innerText = message;
}