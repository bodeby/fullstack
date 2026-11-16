# | Column | Type | Description |
# |---|---|---|
# | id | UUID | Primary key |
# | name | String | Vessel name |
# | faction_id | UUID | FK → Faction |
# | vessel_type | Enum | Cutter, Sloop, Barge, etc. |
# | max_speed | Float | Maximum movement speed |
# | observe_radius | Float | Radar detection radius |
# | attack_radius | Float | Attack radius |
# | created_at | DateTime | Creation timestamp |


from uuid import UUID, uuid4
from enum import StrEnum, enum
from sqlmodel import SQLModel, Field
from datetime import UTC, datetime


class VesselType(enum, StrEnum):
    Cutter = ("Cutter",)
    Sloop = "Sloop"


class VesselBase(SQLModel):
    name: str
    faction_id: UUID
    vtype: VesselType
    max_speed: float
    observe_radius: float
    attack_radius: float


class Vessel(VesselBase, table=True):
    id: UUID = Field(default_factory=uuid4, primary_key=True)
    created_at: datetime = Field(default_factory=lambda: datetime.now(UTC))
