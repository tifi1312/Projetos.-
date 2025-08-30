// WhatsAppAnchor.jsx
const AncoraWhatsapp = ({
  message = "",
  children,
  className = "",
  ...props
}) => {
  // Número padrão fixo
  const defaultPhoneNumber = "553498309144"

  // Codifica a mensagem para URL
  const encodeMessage = (msg) => {
    return encodeURIComponent(msg)
  }

  // Constrói a URL do WhatsApp com número fixo
  const whatsappURL = `https://wa.me/${defaultPhoneNumber}${
    message ? `?text=${encodeMessage(message)}` : ""
  }`

  return (
    <a
      href={whatsappURL}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      {...props}
    >
      {children}
    </a>
  )
}

export default AncoraWhatsapp
