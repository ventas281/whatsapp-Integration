export default async function handler(req, res) {
  if (req.method === "POST") {
    return res.status(200).json({
      success: true,
      recibido: req.body
    });
  }

  return res.status(200).json({
    success: true,
    message: "WhatsApp API funcionando"
  });
}
