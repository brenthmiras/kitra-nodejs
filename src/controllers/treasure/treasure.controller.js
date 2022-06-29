import { Treasure, sequelize } from "../../models";
import { successResponse, errorResponse, uniqueId } from "../../helpers";

export const retrieve = async (req, res) => {
  const { latitude, longitude, distance } = req.query;

  try {
    const query = `
      SELECT t.* FROM Treasures t
      WHERE ST_DISTANCE_SPHERE(
        POINT(t.longitude, t.latitude),
        POINT(:longitude, :latitude)
      ) / 1000 <= :distance
    `;

    const queryOptions = {
      model: Treasure,
      mapToModel: true,
      replacements: {
        latitude,
        longitude,
        distance: Number(distance),
      },
    };

    const result = await sequelize.query(query, queryOptions);

    return successResponse(req, res, { treasures: result });
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};
