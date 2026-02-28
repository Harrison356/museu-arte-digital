const functions = require("firebase-functions")
const nodemailer = require("nodemailer")

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "seuemail@gmail.com",
    pass: "SENHA_DE_APP"
  }
})

exports.enviarEmailConfirmacao = functions.firestore
  .document("agendamentos/{id}")
  .onUpdate(async (change, context) => {
    const novo = change.after.data()

    if (novo.status === "confirmado") {
      await transporter.sendMail({
        from: "Museu",
        to: novo.email,
        subject: "Visita Confirmada",
        text: `Sua visita foi confirmada para ${novo.data} às ${novo.horario}.`
      })
    }
  })