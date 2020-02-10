exports.notFound = (req, res) => {
    res.status(404).json({
        status: false,
        errors: 'Are you lost?'
    })
}

exports.internalServerError = (err, req, res, next) => {
    console.error(err)
    res.status(500).json({
        status: false,
        errors: err.message
    })
}