from pydantic import BaseModel, Field
from uuid import UUID, uuid4
from enum import Enum


class Faction(str, Enum):
    PIRATE = "pirate"
    NAVY = "navy"
    MERCHANT = "merchant"
    NEUTRAL = "neutral"


class Vessel(BaseModel):
    """A vessel and its physical properties."""

    id: UUID = Field(default_factory=uuid4)
    name: str
    type: str = "base"
    faction: Faction = Faction.NEUTRAL
    draft: float
    speed: float
    position: tuple[float, float] = (0.0, 0.0)


# ----------- Derived vessel classes -----------


class Cutter(Vessel):
    """A cutter, a type of sailboat."""

    type: str = "cutter"
    draft: float = 2.0
    speed: float = 8.0


class Sloop(Vessel):
    """A sloop, a type of sailboat."""

    type: str = "sloop"
    draft: float = 1.5
    speed: float = 6.0


class Barge(Vessel):
    """A barge, a type of cargo vessel."""

    type: str = "barge"
    draft: float = 3.0
    speed: float = 5.0


class Galleon(Vessel):
    """A galleon, a type of large sailing ship."""

    type: str = "galleon"
    draft: float = 4.0
    speed: float = 7.0


class Frigate(Vessel):
    """A frigate, a type of warship."""

    type: str = "frigate"
    draft: float = 5.0
    speed: float = 9.0
