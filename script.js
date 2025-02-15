function previewPhoto() {
    let file = document.getElementById('photoUpload').files[0];
    if (file) {
        let reader = new FileReader();
        reader.onload = function (e) {
            localStorage.setItem('uploadedPhoto', e.target.result);
        };
        reader.readAsDataURL(file);
    }
}

function generateCode() {
    return Math.floor(10000000 + Math.random() * 90000000); // Generates 8-digit random number
}

function login() {
    let phoneNumber = document.getElementById('phoneNumber').value;
    if (phoneNumber && phoneNumber.length === 10) {
        let verificationCode = generateCode();
        document.getElementById('verificationCode').style.display = 'block';
        document.getElementById('code').textContent = verificationCode;
        let photo = localStorage.getItem('uploadedPhoto');
        let whatsappLink = `https://wa.me/${phoneNumber}?text=Please%20set%20this%20photo%20as%20my%20WhatsApp%20DP.%20${photo}`;
        document.getElementById('whatsappLink').href = whatsappLink;
    } else {
        alert('Please enter a valid phone number');
                                                                                                                         }
