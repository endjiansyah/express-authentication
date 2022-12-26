function errorHandler(err, req, res, next) {
    if (req.xhr) {
        const errorCode = res.status();
        if (errorCode == 404) {
            res.status(404).send({
                result: false,
                error: 'ada yg error'
            });
        }
        else if (errorCode == 401) {
            res.status(401).send({
                result: false,
                error: 'gk punya permisi / tanpa akses'
            });
        }
        else {
            res.status(errorCode).send({
                result: false,
                error: 'enake opo'
            })
        }
    } else {
        next(err)
    }
};