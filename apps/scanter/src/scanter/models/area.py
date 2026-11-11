from pydantic import BaseModel, model_validator


class BoundingBox(BaseModel):
    min_lat: float
    min_lon: float
    max_lat: float
    max_lon: float

    @model_validator(mode="after")
    def validate_corners(self):
        if self.min_lat >= self.max_lat:
            raise ValueError("min_lat must be smaller than max_lat")

        if self.min_lon >= self.max_lon:
            raise ValueError("min_lon must be smaller than max_lon")

        return self

    def contains(self, position: tuple[float, float]) -> bool:
        lat, lon = position

        return (
            self.min_lat <= lat <= self.max_lat and self.min_lon <= lon <= self.max_lon
        )
