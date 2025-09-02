function store_en_locale() {
	document.cookie = "locale=en; path=/"
	location.reload()
}

function store_cz_locale() {
	document.cookie = "locale=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
	location.reload()
}

function landing_translate_to_en() {
	document.getElementById("__translate-cz").className = ""
	document.getElementById("__translate-en").className = "active"

	document.getElementById("__translate-current").textContent = "English"

	document.getElementById("__translate-1").textContent = "Log in, please"
	document.getElementById("__translate-2").textContent = "To continue to your benefit system"
	document.getElementById("__translate-3").textContent = "User name"
	document.getElementById("__translate-4").textContent = "Password"
	document.getElementById("__translate-5").textContent = "Forgot your password?"
	document.getElementById("__translate-6").value = "Continue"
	document.getElementById("__translate-7").textContent = "Version"
	document.getElementById("__translate-8").textContent = "Please fill out both of the fields."
}

function forgot_translate_to_en() {
	document.getElementById("__translate-cz").className = ""
	document.getElementById("__translate-en").className = "active"

	document.getElementById("__translate-current").textContent = "English"

	document.getElementById("__translate-1").textContent = "Forgot your password?"
	document.getElementById("__translate-2").textContent = "Fill in your user name and email please, if the combination is correct you will be sent a new password."
	document.getElementById("__translate-3").textContent = "User name"
	document.getElementById("__translate-4").textContent = "Email"
	document.getElementById("__translate-5").textContent = "Send"
	document.getElementById("__translate-6").textContent = "If the data you've entered is correct, you'll soon receive an email."
	document.getElementById("__translate-7").textContent = "Version"
}

function reservation_translate_to_en() {
	document.getElementById("__translate-cz").className = ""
	document.getElementById("__translate-en").className = "active"

	document.getElementById("__translate-current").textContent = "English"

	document.getElementById("__translate-1").textContent = "I want a date!"
	document.getElementById("__translate-2").textContent = "Choose a benefit and your preferred dates in the calendar below."

	document.getElementById("__translate-3").textContent = "Benefit"
	document.getElementById("__translate-4").textContent = "Two-day wellness stay"
	document.getElementById("__translate-5").textContent = "Three-day rental of Tesla Model 3 Performance or Škoda Enyaq"
	document.getElementById("__translate-6").textContent = "Date"
	document.getElementById("__translate-7").textContent = "Version"
	document.getElementById("__translate-8").textContent = "Send"


	var locale = {
  	  days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
	  daysShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
	  daysMin: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
	  months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
	  monthsShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
	  today: 'Today',
	  clear: 'Clear',
	  dateFormat: 'MM/dd/yyyy',
	  timeFormat: 'hh:mm aa',
	  firstDay: 0
	};

	new AirDatepicker("#datepicker", {
		locale: locale,
		range: true,
		multipleDatesSeparator: " - "
	})
}

function thank_translate_to_en() {
	document.getElementById("__translate-cz").className = ""
	document.getElementById("__translate-en").className = "active"

	document.getElementById("__translate-current").textContent = "English"

	document.getElementById("__translate-1").textContent = "Thank you!"
	document.getElementById("__translate-2").textContent = "We'll be in touch by email upon the evaluation of the results."
	document.getElementById("__translate-7").textContent = "Version"
}

function cookie_exists(name) {
    var cookies = document.cookie.split(';');

    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i].trim();

        if (cookie.indexOf(name + '=') === 0) {
            return true;
        }
    }

    return false;
}

function landing_check_and_translate() {
	if (cookie_exists("locale")) {
		landing_translate_to_en()
	}
}

function forgot_check_and_translate() {
	if (cookie_exists("locale")) {
		forgot_translate_to_en()
	}
}

function reservation_check_and_translate() {
	if (cookie_exists("locale")) {
		reservation_translate_to_en()
	}
}

function thank_check_and_translate() {
	if (cookie_exists("locale")) {
		thank_translate_to_en()
	}
}

function datepicker_setup() {
	var localeCs = {
	  days: ['Neděle', 'Pondělí', 'Úterý', 'Středa', 'Čtvrtek', 'Pátek', 'Sobota'],
	  daysShort: ['Ne', 'Po', 'Út', 'St', 'Čt', 'Pá', 'So'],
	  daysMin: ['Ne', 'Po', 'Út', 'St', 'Čt', 'Pá', 'So'],
	  months: ['Leden', 'Únor', 'Březen', 'Duben', 'Květen', 'Červen', 'Červenec', 'Srpen', 'Září', 'Říjen', 'Listopad', 'Prosinec'],
	  monthsShort: ['Led', 'Úno', 'Bře', 'Dub', 'Kvě', 'Čvn', 'Čvc', 'Srp', 'Zář', 'Říj', 'Lis', 'Pro'],
	  today: 'Dnes',
	  clear: 'Vymazat',
	  dateFormat: 'dd.MM.yyyy',
	  timeFormat: 'HH:mm',
	  firstDay: 1
	};

	new AirDatepicker("#datepicker", {
		locale: localeCs,
		range: true,
		multipleDatesSeparator: " - "
	})
}

function forgot_display_msg() {
	document.getElementById("__submit-msg").style.display = ""
}

function landing_toggle_button() {
	var username = document.getElementById("__username")
	var password = document.getElementById("__password")

	var button = document.getElementById("__translate-6")
	var message = document.getElementById("__submit-msg")

	if (username.value.trim() !== "" && password.value.trim() !== "") {
		button.removeAttribute("disabled")
		message.style.display = "none"
	} else {
		button.setAttribute("disabled", "")
		message.style.display = ""
	}
}

