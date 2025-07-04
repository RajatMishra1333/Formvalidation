$(document).ready(function () {
  // Toggle Password
  $('#togglePassword').on('click', function () {
    const $pwd = $('#password');
    const type = $pwd.attr('type') === 'password' ? 'text' : 'password';
    $pwd.attr('type', type);
    $(this).text(type === 'password' ? 'Show' : 'Hide');
  });

  // Toggle Confirm Password
  $('#toggleConfirmPassword').on('click', function () {
    const $pwd = $('#confirmPassword');
    const type = $pwd.attr('type') === 'password' ? 'text' : 'password';
    $pwd.attr('type', type);
    $(this).text(type === 'password' ? 'Show' : 'Hide');
  });

  // Allow only digits in phone number and max 10 digits
  $('#phone').on('input', function () {
    this.value = this.value.replace(/\D/g, '').slice(0, 10);
  });

  // Form validation
  $('#validationForm').on('submit', function (e) {
    e.preventDefault();

    $('#messageBox').hide().removeClass('error success');

    const name = $.trim($('#name').val());
    const email = $.trim($('#email').val());
    const phone = $.trim($('#phone').val());
    const password = $.trim($('#password').val());
    const confirmPassword = $.trim($('#confirmPassword').val());

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^\d{10}$/;
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;



    if (name === '') {
      showMessage('Name is required.', 'error');
      return;
    }

    if (!emailPattern.test(email)) {
      showMessage('Enter a valid email address.', 'error');
      return;
    }

    if (!phonePattern.test(phone)) {
      showMessage('Phone number must be exactly 10 digits.', 'error');
      return;
    }

    if (!passwordPattern.test(password)) {
      showMessage('Password must be at least 8 characters and contain uppercase, lowercase, and a number.', 'error');
      return;
    }

    if (password !== confirmPassword) {
      showMessage('Passwords do not match.', 'error');
      return;
    }

    showMessage('Form submitted successfully!', 'success');
    $('#validationForm')[0].reset();
    $('#togglePassword').text('Show');
    $('#toggleConfirmPassword').text('Show');
  });

  function showMessage(msg, type) {
    $('#messageBox').text(msg).removeClass('error success').addClass(type).slideDown();
  }
});
