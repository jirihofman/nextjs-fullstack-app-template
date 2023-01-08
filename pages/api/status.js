const status = (req, res) => {
    res.status(200).json({ status: 'Alive' });
};

export default status;
