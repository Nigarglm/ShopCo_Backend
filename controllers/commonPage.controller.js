import CommonModel from "../models/commonPage.model.js";
export const createCommon = async (req, res) => {
    try {
        const { title, description, content, code } = req.body;
        const newCommon = new CommonModel({ title, description, content, code });
        await newCommon.save();
        res.status(201).json(newCommon);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getAllCommons = async (req, res) => {
    try {
        const commons = await CommonModel.find();
        res.status(200).json(commons);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getCommonById = async (req, res) => {
    try {
        const { id } = req.params;
        const common = await CommonModel.findById(id);
        if (common) {
            res.status(200).json(common);
        } else {
            res.status(404).json({ message: 'Belge bulunamadı' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const updateCommon = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, description, content, code } = req.body;
        const updatedCommon = await CommonModel.findByIdAndUpdate(
            id,
            { title, description, content, code },
            { new: true }
        );
        if (updatedCommon) {
            res.status(200).json(updatedCommon);
        } else {
            res.status(404).json({ message: 'Belge bulunamadı' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const deleteCommon = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedCommon = await CommonModel.findByIdAndDelete(id);
        if (deletedCommon) {
            res.status(200).json({ message: 'Belge başarıyla silindi' });
        } else {
            res.status(404).json({ message: 'Belge bulunamadı' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

