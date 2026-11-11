const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

menuToggle.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
  menuToggle.textContent = isOpen ? "×" : "☰";
});

mainNav.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "☰";
  });
});

// Service cards pre-select the service in the order form.
document.querySelectorAll(".service-order").forEach(link => {
  link.addEventListener("click", () => {
    const service = link.dataset.service;
    document.getElementById("serviceSelect").value = service;
  });
});

// WhatsApp order routing. The primary number is the first contact on the flyer.
document.getElementById("orderForm").addEventListener("submit", event => {
  event.preventDefault();
  const form = event.currentTarget;
  const error = document.getElementById("formError");
  const data = new FormData(form);
  const name = String(data.get("name") || "").trim();
  const phone = String(data.get("phone") || "").trim();
  const service = String(data.get("service") || "").trim();
  const details = String(data.get("details") || "").trim();

  if (!name || !phone || !service || !details) {
    error.textContent = "Please complete all fields before continuing.";
    return;
  }
  error.textContent = "";

  const message = [
    "Hello Emek Services Limited, I would like to make an order/enquiry.",
    "",
    `Name: ${name}`,
    `Phone: ${phone}`,
    `Service: ${service}`,
    `Request details: ${details}`
  ].join("\n");

  const whatsappUrl = `https://wa.me/2348129635552?text=${encodeURIComponent(message)}`;
  window.open(whatsappUrl, "_blank", "noopener,noreferrer");
});

document.getElementById("year").textContent = new Date().getFullYear();
