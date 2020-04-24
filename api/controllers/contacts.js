const { sendContactMail } = require('./mail')

exports.create = async (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: 'Contact content can not be empty'
    })
  }

  try {
    const response = await sendContactMail({
      name: req.body.name,
      firstName: req.body.first_name,
      email: req.body.email,
      phone: req.body.phone,
      message: req.body.message
    })
    return res.status(200).send({
      message: 'Contact email send successfully',
      data: response
    })
  } catch (err) {
    return res.status(err.responseCode || err.statusCode || 400).send({
      message: 'Error while sending email',
      error: err
    })
  }
}
