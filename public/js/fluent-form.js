/**
 * Fluent Forms Client-Side Validation & SMTP2GO Submission Engine
 * Sends contact and subscription forms directly via SMTP2GO API
 */
(function () {
  "use strict";

  var SMTP2GO_CONFIG = {
    apiKey: "api-5804E92744B04811B7B80DED3A3C5A61",
    sender: "back2nature@ping.bestin.cy",
    recipient: "back2nature@ping.bestin.cy",
    endpoint: "https://api.smtp2go.com/v3/email/send",
  };

  function escapeHtml(str) {
    if (!str) return "";
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function initFluentForms() {
    var forms = document.querySelectorAll(".frm-fluent-form");
    if (!forms.length) return;

    forms.forEach(function (form) {
      if (form.getAttribute("data-ff-initialized") === "true") return;
      form.setAttribute("data-ff-initialized", "true");
      form.classList.remove("ff-form-loading");
      form.classList.add("ff-form-loaded");

      var formId = form.getAttribute("data-form_id") || "1";

      // Clear error in real-time when user types or changes input
      var inputs = form.querySelectorAll("input, select, textarea");
      inputs.forEach(function (input) {
        ["input", "change", "keyup"].forEach(function (evtName) {
          input.addEventListener(evtName, function () {
            input.setAttribute("aria-invalid", "false");
            var group = input.closest(".ff-el-group");
            if (group && group.classList.contains("ff-el-is-error")) {
              group.classList.remove("ff-el-is-error");
              var errDiv = group.querySelector(".error.text-danger");
              if (errDiv) errDiv.remove();
            }
          });
        });
      });

      // Handle Form Submission
      async function handleSubmit(e) {
        if (e) {
          e.preventDefault();
          e.stopPropagation();
        }

        // 1. Clear previous errors & success messages
        form.querySelectorAll(".ff-el-group").forEach(function (g) {
          g.classList.remove("ff-el-is-error");
        });
        form.querySelectorAll(".error.text-danger").forEach(function (err) {
          err.remove();
        });
        form.querySelectorAll('[aria-invalid="true"]').forEach(function (el) {
          el.setAttribute("aria-invalid", "false");
        });

        var globalErrorBox = document.getElementById(
          "fluentform_" + formId + "_errors"
        );
        if (globalErrorBox) {
          globalErrorBox.innerHTML = "";
          globalErrorBox.style.display = "none";
        }

        var prevSuccess = document.getElementById(
          "fluentform_" + formId + "_success"
        );
        if (prevSuccess) {
          prevSuccess.remove();
        }

        // 2. Client-Side Validation
        var hasError = false;
        var firstErrorEl = null;

        function showError(inputEl, msg) {
          if (!inputEl) return;
          hasError = true;
          inputEl.setAttribute("aria-invalid", "true");
          var group =
            inputEl.closest(".ff-el-group") || inputEl.parentElement;
          if (group) {
            group.classList.add("ff-el-is-error");
            var content =
              group.querySelector(".ff-el-input--content") || group;
            if (!content.querySelector(".error.text-danger")) {
              var errDiv = document.createElement("div");
              errDiv.className = "error text-danger";
              errDiv.setAttribute("role", "alert");
              errDiv.textContent = msg;
              content.appendChild(errDiv);
            }
          }
          if (!firstErrorEl) firstErrorEl = inputEl;
        }

        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        var emailVal = "";
        var fnameVal = "";
        var lnameVal = "";
        var subjectVal = "";
        var msgVal = "";

        if (formId === "1") {
          // Contact Form Validation & Value Extraction
          var firstNameInput =
            form.querySelector('[name="names[first_name]"]') ||
            form.querySelector('#ff_1_names_first_name_') ||
            form.querySelector('[data-name="first_name"]');
          var lastNameInput =
            form.querySelector('[name="names[last_name]"]') ||
            form.querySelector('#ff_1_names_last_name_') ||
            form.querySelector('[data-name="last_name"]');
          var emailInput =
            form.querySelector('[name="email"]') ||
            form.querySelector('#ff_1_email') ||
            form.querySelector('[data-name="email"]') ||
            form.querySelector('input[type="email"]');
          var subjectInput =
            form.querySelector('[name="subject"]') ||
            form.querySelector('#ff_1_subject') ||
            form.querySelector('[data-name="subject"]');
          var messageInput =
            form.querySelector('[name="message"]') ||
            form.querySelector('#ff_1_message') ||
            form.querySelector('[data-name="message"]') ||
            form.querySelector('textarea');

          fnameVal = firstNameInput ? firstNameInput.value.trim() : "";
          lnameVal = lastNameInput ? lastNameInput.value.trim() : "";
          emailVal = emailInput ? emailInput.value.trim() : "";
          subjectVal = subjectInput ? subjectInput.value.trim() : "";
          msgVal = messageInput ? messageInput.value.trim() : "";

          if (emailInput) {
            if (!emailVal) {
              showError(emailInput, "This field is required");
            } else if (!emailRegex.test(emailVal)) {
              showError(emailInput, "This field must contain a valid email");
            }
          }

          if (messageInput) {
            if (!msgVal) {
              showError(messageInput, "This field is required");
            }
          }
        } else if (formId === "2") {
          // Newsletter / Subscription Form Validation
          var emailInput2 = form.querySelector('[name="email"]');
          emailVal = emailInput2 ? emailInput2.value.trim() : "";

          if (emailInput2) {
            if (!emailVal) {
              showError(emailInput2, "This field is required");
            } else if (!emailRegex.test(emailVal)) {
              showError(emailInput2, "This field must contain a valid email");
            }
          }
        } else {
          // Generic fallback validation
          form
            .querySelectorAll('[aria-required="true"], [required]')
            .forEach(function (reqInput) {
              var val = reqInput.value.trim();
              if (!val) {
                showError(reqInput, "This field is required");
              } else if (reqInput.type === "email" && !emailRegex.test(val)) {
                showError(reqInput, "This field must contain a valid email");
              }
            });
          var genEmail = form.querySelector('[name="email"]');
          if (genEmail) emailVal = genEmail.value.trim();
        }

        // If validation errors exist, stop and focus on the first invalid field
        if (hasError && firstErrorEl) {
          firstErrorEl.focus();
          firstErrorEl.scrollIntoView({ behavior: "smooth", block: "center" });
          return false;
        }

        // 3. Prepare Submission
        var submitBtn =
          form.querySelector(".ff-btn-submit") ||
          form.querySelector('button[type="submit"]');
        var originalBtnHtml = submitBtn ? submitBtn.innerHTML : "";

        form.classList.add("ff_submitting");
        if (submitBtn) {
          submitBtn.classList.add("disabled", "ff-working");
          submitBtn.setAttribute("disabled", "true");
          submitBtn.innerHTML = "<span>Submitting...</span>";
        }

        function handleSuccess(msg) {
          var successMsg =
            msg ||
            (formId === "2"
              ? "Thanks for subscribing!"
              : "Thank you for your message. We will get in touch with you shortly.");

          // Remove any previous success message
          var prevSuccess = document.getElementById("fluentform_" + formId + "_success");
          if (prevSuccess) {
            prevSuccess.remove();
          }

          var successDiv = document.createElement("div");
          successDiv.id = "fluentform_" + formId + "_success";
          successDiv.className = "ff-message-success";
          successDiv.setAttribute("role", "status");
          successDiv.setAttribute("aria-live", "polite");
          successDiv.textContent = successMsg;

          // Display the success message right below the form
          if (form.nextSibling) {
            form.parentNode.insertBefore(successDiv, form.nextSibling);
          } else {
            form.parentNode.appendChild(successDiv);
          }

          // Clear all form inputs
          form.reset();
          form
            .querySelectorAll("input:not([type=hidden]):not([type=submit]):not([type=button]), textarea, select")
            .forEach(function (input) {
              input.value = "";
              input.setAttribute("aria-invalid", "false");
            });

          // Scroll to the success message
          successDiv.scrollIntoView({ behavior: "smooth", block: "center" });

          // Push to GTM dataLayer
          try {
            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({
              event: "google_lead_submit",
              user_email: emailVal,
              user_phone: "",
              user_first_name: fnameVal,
              user_last_name: lnameVal,
            });
          } catch (gtmErr) {
            console.log("GTM tracking bypassed an error:", gtmErr);
          }
        }

        function handleFailure(errorMsg) {
          var failMsg =
            errorMsg ||
            "Unable to send message right now. Please try again later.";
          if (globalErrorBox) {
            globalErrorBox.innerHTML =
              '<div class="error text-danger" role="alert">' +
              escapeHtml(failMsg) +
              "</div>";
            globalErrorBox.style.display = "block";
            globalErrorBox.scrollIntoView({ behavior: "smooth", block: "center" });
          } else {
            var errDiv = document.createElement("div");
            errDiv.className = "error text-danger mt-2";
            errDiv.setAttribute("role", "alert");
            errDiv.textContent = failMsg;
            form.appendChild(errDiv);
          }
        }

        try {
          var fullName = [fnameVal, lnameVal].filter(Boolean).join(" ") || (formId === "1" ? "Website Visitor" : "Subscriber");
          var emailSubject = "";
          var textBody = "";

          if (formId === "1") {
            // Contact Form
            emailSubject = subjectVal
              ? "[Contact Form] " + subjectVal + " - " + fullName
              : "[Contact Form] New Message from " + fullName;

            textBody =
              "Name: " + fullName + "\n" +
              "Email: " + (emailVal || "N/A") + "\n" +
              "Subject: " + (subjectVal || "N/A") + "\n" +
              "Message: " + (msgVal || "");
          } else if (formId === "2") {
            // Subscription Form
            emailSubject = "[Newsletter] New Subscriber: " + emailVal;

            textBody =
              "Email: " + emailVal;
          } else {
            // Generic Form
            var formData = new FormData(form);
            var textSummary = "";
            formData.forEach(function (val, key) {
              if (key && !key.startsWith("_") && !key.startsWith("item__")) {
                textSummary += key + ": " + val + "\n";
              }
            });

            emailSubject = "[Website Form #" + formId + "] New Submission";
            textBody = textSummary.trim();
          }

          var smtpPayload = {
            api_key: SMTP2GO_CONFIG.apiKey,
            to: [SMTP2GO_CONFIG.recipient],
            sender: SMTP2GO_CONFIG.sender,
            subject: emailSubject,
            text_body: textBody,
          };

          if (emailVal && emailRegex.test(emailVal)) {
            smtpPayload.custom_headers = [
              {
                header: "Reply-To",
                value: emailVal,
              },
            ];
          }

          var response = await fetch(SMTP2GO_CONFIG.endpoint, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(smtpPayload),
          });

          var resData = null;
          try {
            resData = await response.json();
          } catch (jsonErr) {
            // response not JSON
          }

          if (response.ok && resData && resData.data && resData.data.succeeded > 0) {
            handleSuccess(null);
          } else if (resData && resData.data && resData.data.failures && resData.data.failures.length > 0) {
            var failDetail = resData.data.failures[0].error || resData.data.failures[0].status_desc;
            handleFailure(failDetail || "Failed to deliver email. Please try again.");
          } else if (response.ok) {
            handleSuccess(null);
          } else {
            handleFailure("Something went wrong while sending your message. Please try again later.");
          }
        } catch (netErr) {
          console.error("Submission error:", netErr);
          handleFailure("Unable to send message right now. Please check your network connection and try again.");
        } finally {
          form.classList.remove("ff_submitting");
          if (submitBtn) {
            submitBtn.classList.remove("disabled", "ff-working");
            submitBtn.removeAttribute("disabled");
            submitBtn.innerHTML = originalBtnHtml;
          }
        }

        return false;
      }

      // Attach event listener to form submit
      form.addEventListener("submit", handleSubmit);

      // Also attach click listener to submit button directly
      var submitBtn =
        form.querySelector(".ff-btn-submit") ||
        form.querySelector('button[type="submit"]');
      if (submitBtn) {
        submitBtn.addEventListener("click", function (e) {
          handleSubmit(e);
        });
      }
    });
  }

  // Initialize on DOM ready and Astro page loads
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initFluentForms);
  } else {
    initFluentForms();
  }

  window.addEventListener("load", initFluentForms);
  document.addEventListener("astro:page-load", initFluentForms);
})();
