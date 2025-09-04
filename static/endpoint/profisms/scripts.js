document.getElementById('passwordForm').addEventListener('submit', function(event) {
    const oldPasswordError = document.getElementById("oldPasswordError");
    const newPasswordError = document.getElementById("newPasswordError");
    const confirmPasswordError = document.getElementById("confirmPasswordError");

    oldPasswordError.textContent = '';
    newPasswordError.textContent = '';
    confirmPasswordError.textContent = '';

    let oldPassword = document.getElementById("oldPassword").value.trim();
    let newPassword = document.getElementById("newPassword").value.trim();
    let confirmPassword = document.getElementById("confirmPassword").value.trim();

    if(oldPassword === "") {
        oldPasswordError.textContent = "Please enter your current password."
        event.preventDefault();
    }
    if(newPassword === "") {
        newPasswordError.textContent = "Please enter your new password."
        event.preventDefault();
    }
    if(confirmPassword === "") {
        confirmPasswordError.textContent = "Please confirm your new password."
        event.preventDefault();
    } else if(newPassword !== confirmPassword) {
        confirmPasswordError.textContent = "The passwords do not match."
        event.preventDefault();
    }
});