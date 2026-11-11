from pydantic import BaseModel, Field
from uuid import UUID


class ConflictReport(BaseModel):
    """A report of a conflict between two vessels."""

    vessel_a_id: UUID = Field(..., description="The ID of the first vessel.")
    vessel_b_id: UUID = Field(..., description="The ID of the second vessel.")
    distance: float = Field(..., description="The distance between the two vessels.")
