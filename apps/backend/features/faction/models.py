from uuid import UUID, uuid4
from sqlmodel import SQLModel, Field


class FactionBase(SQLModel):
    name: str
    desc: str


class Faction(SQLModel, table=True):
    id: UUID = Field(default_factory=uuid4, primary_key=True)


# ---- API schemas ----


class FactionCreate(FactionBase):
    pass


class FactionUpdate(FactionBase):
    pass
