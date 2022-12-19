exports.allAccess = (req, res) => {
    res.status(200).send("ini bisa diakses semua akun.");
};

exports.userBoard = (req, res) => {
    res.status(200).send("Halo user.");
};

exports.adminBoard = (req, res) => {
    res.status(200).send("ini content admin.");
};

exports.moderatorBoard = (req, res) => {
    res.status(200).send("Moderator itu apa?.");
};