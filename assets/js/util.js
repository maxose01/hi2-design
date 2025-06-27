function copyText(id) {
  const text = document.getElementById(id);
  const toastEl = document.getElementById("copyToast");

  navigator.clipboard.writeText(text.textContent);

  const toast = new bootstrap.Toast(toastEl);
  toast.show();
}

function togglePassword(event) {
  const input = $(event.target)
    .closest(".position-relative")
    .find("input.form-control");

  let type = input.prop("type");
  if (type === "password") {
    type = "text";
  } else {
    type = "password";
  }
  input.prop("type", type);
  $(event.target).toggleClass(["bi-eye-fill", "bi-eye-slash-fill"]);
}

function initCountrySelectorDropdown(el) {
  // source
  // https://www.jqueryscript.net/form/Simple-Flexible-jQuery-Country-Select-Box-Plugin-countrySelector.html
  $(el).countrySelector({ value: "IND" });
}
