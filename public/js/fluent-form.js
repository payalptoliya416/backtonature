/**
 * Fluent Forms Client-Side Validation & AJAX Submission Engine
 * Matches live WordPress Fluent Form behavior for Back to Nature
 */
(function () {
  "use strict";

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

        if (formId === "1") {
          // Contact Form Validation
          var emailInput = form.querySelector('[name="email"]');
          var messageInput = form.querySelector('[name="message"]');

          if (emailInput) {
            var emailVal = emailInput.value.trim();
            if (!emailVal) {
              showError(emailInput, "This field is required");
            } else if (!emailRegex.test(emailVal)) {
              showError(emailInput, "This field must contain a valid email");
            }
          }

          if (messageInput) {
            var msgVal = messageInput.value.trim();
            if (!msgVal) {
              showError(messageInput, "This field is required");
            }
          }
        } else if (formId === "2") {
          // Newsletter / Subscription Form Validation
          var emailInput = form.querySelector('[name="email"]');
          if (emailInput) {
            var emailVal = emailInput.value.trim();
            if (!emailVal) {
              showError(emailInput, "This field is required");
            } else if (!emailRegex.test(emailVal)) {
              showError(emailInput, "This field must contain a valid email");
            }
          }
        } else {
          // Generic fallback validation for any required fields
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
        }

        function handleSuccess(msg, action) {
          var successMsg =
            msg ||
            (formId === "2"
              ? "Thanks for subscribing!"
              : "Thank you for your message. We will get in touch with you shortly");

          var successDiv = document.createElement("div");
          successDiv.id = "fluentform_" + formId + "_success";
          successDiv.className = "ff-message-success";
          successDiv.setAttribute("role", "status");
          successDiv.setAttribute("aria-live", "polite");
          successDiv.textContent = successMsg;

          if (action === "hide_form" || !action) {
            form.style.display = "none";
            form.classList.add("ff_force_hide");
          }

          form.parentNode.insertBefore(successDiv, form.nextSibling);
          successDiv.scrollIntoView({ behavior: "smooth", block: "center" });

          // Push to GTM dataLayer
          try {
            var emailVal = form.querySelector('[name="email"]')?.value || "";
            var fnameVal =
              form.querySelector('[name="names[first_name]"]')?.value || "";
            var lnameVal =
              form.querySelector('[name="names[last_name]"]')?.value || "";
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

          form.reset();
        }

        try {
          var formData = new FormData(form);
          var innerParams = new URLSearchParams();

          formData.forEach(function (val, key) {
            innerParams.append(key, val);
          });

          var postBody = new URLSearchParams();
          postBody.append("action", "fluentform_submit");
          postBody.append("form_id", formId);
          postBody.append("data", innerParams.toString());

          // Use same-origin endpoint if on live domain, otherwise live backend URL
          var isLiveDomain =
            window.location.hostname.includes("backtonature.cy");
          var endpoint = isLiveDomain
            ? "/wp-admin/admin-ajax.php"
            : "https://backtonature.cy/wp-admin/admin-ajax.php";

          var response = null;
          var resData = null;
          var isCorsOpaque = false;

          try {
            response = await fetch(endpoint, {
              method: "POST",
              headers: {
                "Content-Type":
                  "application/x-www-form-urlencoded; charset=UTF-8",
              },
              body: postBody.toString(),
            });

            if (response && response.ok) {
              try {
                resData = await response.json();
              } catch (e) {
                // Non-JSON response
              }
            } else if (response && response.status === 423) {
              try {
                resData = await response.json();
              } catch (e) {}
            }
          } catch (fetchErr) {
            // Fallback for cross-origin environments (e.g. dev/preview)
            try {
              response = await fetch(endpoint, {
                method: "POST",
                mode: "no-cors",
                headers: {
                  "Content-Type": "application/x-www-form-urlencoded",
                },
                body: postBody.toString(),
              });
              if (response && response.type === "opaque") {
                isCorsOpaque = true;
              }
            } catch (noCorsErr) {
              console.error("Submission error:", noCorsErr);
            }
          }

          if (isCorsOpaque) {
            handleSuccess(null, "hide_form");
          } else if (response && response.ok && resData && resData.success) {
            var successMsg =
              (resData.data &&
                resData.data.result &&
                resData.data.result.message) ||
              null;
            var action =
              (resData.data &&
                resData.data.result &&
                resData.data.result.action) ||
              "hide_form";
            handleSuccess(successMsg, action);
          } else if (resData && resData.errors) {
            // Server-side validation errors
            for (var fieldName in resData.errors) {
              if (
                Object.prototype.hasOwnProperty.call(
                  resData.errors,
                  fieldName
                )
              ) {
                var errObj = resData.errors[fieldName];
                var msg =
                  typeof errObj === "string" ? errObj : Object.values(errObj)[0];
                var inputEl = form.querySelector(
                  '[name="' + fieldName + '"], [data-name="' + fieldName + '"]'
                );
                if (inputEl) {
                  showError(inputEl, msg);
                }
              }
            }
            if (firstErrorEl) {
              firstErrorEl.focus();
              firstErrorEl.scrollIntoView({
                behavior: "smooth",
                block: "center",
              });
            }
          } else if (response && response.ok) {
            handleSuccess(null, "hide_form");
          } else {
            var errorMsg =
              (resData && resData.data && resData.data.message) ||
              "Something went wrong. Please try again.";
            if (globalErrorBox) {
              globalErrorBox.innerHTML =
                '<div class="error text-danger" role="alert">' +
                errorMsg +
                "</div>";
              globalErrorBox.style.display = "block";
            } else {
              var errDiv = document.createElement("div");
              errDiv.className = "error text-danger mt-2";
              errDiv.setAttribute("role", "alert");
              errDiv.textContent = errorMsg;
              form.appendChild(errDiv);
            }
          }
        } catch (netErr) {
          console.error("Submission error:", netErr);
          var failMsg =
            "Unable to send message right now. Please try again later.";
          if (globalErrorBox) {
            globalErrorBox.innerHTML =
              '<div class="error text-danger" role="alert">' +
              failMsg +
              "</div>";
            globalErrorBox.style.display = "block";
          } else {
            var errDiv = document.createElement("div");
            errDiv.className = "error text-danger mt-2";
            errDiv.setAttribute("role", "alert");
            errDiv.textContent = failMsg;
            form.appendChild(errDiv);
          }
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
