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
          // Contact Form Validation
          var firstNameInput = form.querySelector('[name="names[first_name]"]');
          var lastNameInput = form.querySelector('[name="names[last_name]"]');
          var emailInput = form.querySelector('[name="email"]');
          var subjectInput = form.querySelector('[name="subject"]');
          var messageInput = form.querySelector('[name="message"]');

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
          var htmlBody = "";

          if (formId === "1") {
            // Contact Form
            emailSubject = subjectVal
              ? "[Contact Form] " + subjectVal + " - " + fullName
              : "[Contact Form] New Message from " + fullName;

            textBody =
              "New Contact Form Submission - Back to Nature\n\n" +
              "Name: " + fullName + "\n" +
              "Email: " + (emailVal || "N/A") + "\n" +
              "Subject: " + (subjectVal || "N/A") + "\n\n" +
              "Message:\n" + msgVal + "\n\n" +
              "---\n" +
              "Submitted from: " + window.location.href;

            htmlBody =
              '<!DOCTYPE html><html><head><meta charset="utf-8"></head>' +
              '<body style="margin: 0; padding: 20px; font-family: -apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, Arial, sans-serif; background-color: #f5f6f5;">' +
              '<div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.06); border: 1px solid #e1e7e1;">' +
              '<div style="background-color: #274730; padding: 22px 24px; color: #ffffff;">' +
              '<h2 style="margin: 0; font-size: 20px; font-weight: 600; color: #ffffff;">New Contact Form Message</h2>' +
              '<p style="margin: 4px 0 0 0; font-size: 13px; color: #d4e0d5;">Back to Nature Glamping</p>' +
              '</div>' +
              '<div style="padding: 24px;">' +
              '<table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">' +
              '<tr><td style="padding: 8px 0; color: #666; font-size: 14px; width: 110px; border-bottom: 1px solid #f0f0f0;"><strong>Name:</strong></td><td style="padding: 8px 0; color: #222; font-size: 15px; border-bottom: 1px solid #f0f0f0;">' + escapeHtml(fullName) + '</td></tr>' +
              '<tr><td style="padding: 8px 0; color: #666; font-size: 14px; border-bottom: 1px solid #f0f0f0;"><strong>Email:</strong></td><td style="padding: 8px 0; color: #222; font-size: 15px; border-bottom: 1px solid #f0f0f0;"><a href="mailto:' + escapeHtml(emailVal) + '" style="color: #274730; text-decoration: underline;">' + escapeHtml(emailVal) + '</a></td></tr>' +
              '<tr><td style="padding: 8px 0; color: #666; font-size: 14px; border-bottom: 1px solid #f0f0f0;"><strong>Subject:</strong></td><td style="padding: 8px 0; color: #222; font-size: 15px; border-bottom: 1px solid #f0f0f0;">' + escapeHtml(subjectVal || 'N/A') + '</td></tr>' +
              '</table>' +
              '<div style="margin-top: 16px;">' +
              '<strong style="color: #274730; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px;">Message:</strong>' +
              '<div style="margin-top: 8px; padding: 16px; background-color: #f8faf8; border-left: 4px solid #274730; border-radius: 4px; color: #333; line-height: 1.6; font-size: 15px; white-space: pre-wrap;">' + escapeHtml(msgVal) + '</div>' +
              '</div>' +
              '</div>' +
              '<div style="padding: 14px 24px; background-color: #fafbfa; border-top: 1px solid #edf2ed; font-size: 12px; color: #888;">' +
              'Submitted from <a href="' + escapeHtml(window.location.href) + '" style="color: #274730; text-decoration: none;">' + escapeHtml(window.location.href) + '</a>' +
              '</div>' +
              '</div></body></html>';
          } else if (formId === "2") {
            // Subscription Form
            emailSubject = "[Newsletter] New Subscriber: " + emailVal;

            textBody =
              "New Newsletter Subscription - Back to Nature\n\n" +
              "Email: " + emailVal + "\n\n" +
              "---\n" +
              "Submitted from: " + window.location.href;

            htmlBody =
              '<!DOCTYPE html><html><head><meta charset="utf-8"></head>' +
              '<body style="margin: 0; padding: 20px; font-family: -apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, Arial, sans-serif; background-color: #f5f6f5;">' +
              '<div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.06); border: 1px solid #e1e7e1;">' +
              '<div style="background-color: #274730; padding: 20px 24px; color: #ffffff;">' +
              '<h2 style="margin: 0; font-size: 20px; font-weight: 600; color: #ffffff;">New Newsletter Subscription</h2>' +
              '<p style="margin: 4px 0 0 0; font-size: 13px; color: #d4e0d5;">Back to Nature Glamping</p>' +
              '</div>' +
              '<div style="padding: 24px;">' +
              '<p style="font-size: 15px; color: #333; margin: 0 0 12px 0;">A new user has subscribed to the newsletter:</p>' +
              '<p style="font-size: 16px; color: #274730; font-weight: 600; margin: 0;"><a href="mailto:' + escapeHtml(emailVal) + '" style="color: #274730; text-decoration: underline;">' + escapeHtml(emailVal) + '</a></p>' +
              '</div>' +
              '<div style="padding: 14px 24px; background-color: #fafbfa; border-top: 1px solid #edf2ed; font-size: 12px; color: #888;">' +
              'Submitted from <a href="' + escapeHtml(window.location.href) + '" style="color: #274730; text-decoration: none;">' + escapeHtml(window.location.href) + '</a>' +
              '</div>' +
              '</div></body></html>';
          } else {
            // Generic Form
            var formData = new FormData(form);
            var summaryRows = "";
            var textSummary = "";
            formData.forEach(function (val, key) {
              if (key && !key.startsWith("_") && !key.startsWith("item__")) {
                summaryRows += '<tr><td style="padding: 6px 0; color: #666; font-size: 14px; width: 140px;"><strong>' + escapeHtml(key) + ':</strong></td><td style="padding: 6px 0; color: #222; font-size: 14px;">' + escapeHtml(val) + '</td></tr>';
                textSummary += key + ": " + val + "\n";
              }
            });

            emailSubject = "[Website Form #" + formId + "] New Submission";
            textBody = "New Website Form Submission\n\n" + textSummary + "\n---\nPage: " + window.location.href;
            htmlBody =
              '<!DOCTYPE html><html><body><div style="font-family: sans-serif; padding: 20px;">' +
              '<h3 style="color: #274730;">New Form Submission (Form #' + escapeHtml(formId) + ')</h3>' +
              '<table style="width: 100%; border-collapse: collapse;">' + summaryRows + '</table>' +
              '<p style="margin-top: 20px; font-size: 12px; color: #888;">Submitted from ' + escapeHtml(window.location.href) + '</p>' +
              '</div></body></html>';
          }

          var smtpPayload = {
            api_key: SMTP2GO_CONFIG.apiKey,
            to: [SMTP2GO_CONFIG.recipient],
            sender: SMTP2GO_CONFIG.sender,
            subject: emailSubject,
            text_body: textBody,
            html_body: htmlBody,
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
