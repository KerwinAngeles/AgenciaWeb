import Swal from "sweetalert2";
const phoneNumber = import.meta.env.VITE_PHONE_NUMBER || "8098642427";


document.addEventListener("DOMContentLoaded", () => {
    const sendButton = document.getElementById("sendButton");

    if (sendButton) {
        sendButton.addEventListener("click", (event) => {
            event.preventDefault();

            const name = document.getElementById("name").value.trim();
            const subject = document.getElementById("subject").value.trim();
            const message = document.getElementById("message").value.trim();

            // Función para mostrar una alerta con SweetAlert2
            const showAlert = (text) => {
                Swal.fire({
                    icon: "warning",
                    title: "Campo requerido",
                    text: text,
                    confirmButtonColor: "#3085d6",
                    confirmButtonText: "Entendido",
                });
            };

            if (!name) {
                showAlert("Por favor, ingresa tu nombre.");
                return;
            }
            if (!subject) {
                showAlert("Por favor, ingresa un asunto.");
                return;
            }
            if (!message) {
                showAlert("Por favor, ingresa un mensaje.");
                return;
            }

            // Mostrar confirmación antes de enviar el mensaje
            Swal.fire({
                icon: "success",
                title: "Mensaje listo para enviar",
                text: "Serás redirigido a WhatsApp para enviar tu mensaje.",
                showCancelButton: true,
                confirmButtonColor: "#25D366",
                cancelButtonColor: "#d33",
                confirmButtonText: "Enviar",
                cancelButtonText: "Cancelar",
            }).then((result) => {
                if (result.isConfirmed) {
                    const whatsappMessage = `Hola, soy ${name}. 
                    Asunto: ${subject}. 
                    Mensaje: ${message}`;
                    const whatsappUrl = `https://wa.me/+1${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;
                    window.open(whatsappUrl, "_blank");

                    name.value = "";
                    subject.value = "";
                    message.value = "";
                }
            });
        });
    }
});
