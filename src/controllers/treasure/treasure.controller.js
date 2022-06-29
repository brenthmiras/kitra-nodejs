import { Treasure, sequelize } from "../../models";
import { successResponse, errorResponse, uniqueId } from "../../helpers";

export const retrieve = async (req, res) => {
  
  const { latitude, longitude, distance, prize } = req.query;

  try {
    const query = !prize ? `
      SELECT t.* FROM Treasures t
      WHERE ST_DISTANCE_SPHERE(
        POINT(t.longitude, t.latitude),
        POINT(:longitude, :latitude)
      ) / 1000 <= :distance
    `
    :
    `
      SELECT t.*, mv.* FROM Treasures t
      LEFT JOIN MoneyValues mv
      ON mv.treasure_id = t.id
      WHERE ST_DISTANCE_SPHERE(
        POINT(t.longitude, t.latitude),
        POINT(:longitude, :latitude)
      ) / 1000 <= :distance
      AND mv.amt = :amount
    `;

    const queryOptions = {
      model: Treasure,
      mapToModel: true,
      replacements: {
        latitude,
        longitude,
        distance: Number(distance),
        amount: prize,
      },
    };

    const result = await sequelize.query(query, queryOptions);

    return successResponse(req, res, { treasures: result });
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};
