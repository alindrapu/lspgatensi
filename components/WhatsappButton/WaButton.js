import React from "react";
import FloatingWhatsApp from "react-floating-whatsapp";

function WaButton() {
  return (
    <FloatingWhatsApp
      phoneNumber="6281289389920"
      accountName="LSP GKK"
      allowClickAway
      notification={true}
      notificationDelay={60000}
      chatMessage="Halo, ada yang bisa kami bantu?"
      darkMode={true}
      allowEsc={true}
      avatar="/images/favicon.png"
    />
  );
}

export default WaButton;
