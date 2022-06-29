import { Treasure } from '../../models';
import { successResponse, errorResponse, uniqueId } from '../../helpers';

export const retrieve = async (req, res) => {
  try {
    const treasures = await Treasure.findAndCountAll({
      order: [['createdAt', 'DESC']],
    });
    return successResponse(req, res, { treasures });
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};
