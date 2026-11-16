from fastapi import APIRouter, HTTPException
from uuid import UUID
from sqlmodel import Session, select

from database.sqlite import engine

from features.faction.models import Faction, FactionCreate
from features.faction.service import FactionService

router = APIRouter(prefix="/factions", tags=["faction"])
service = FactionService(name="NewService")


@router.get("/", response_model=list[Faction])
def faction_list():
    """
    RETRIEVE ALL faction(s)
    """
    service.greet()
    with Session(engine) as session:
        stmt = select(Faction)
        return session.exec(stmt).all()


@router.get("/{id}", response_class=Faction)
def faction_detail(id: UUID):
    """
    RETRIEVE faction
    """
    service.greet()
    with Session(engine) as session:
        faction_db = session.get(Faction, id)
        if not faction_db:
            raise HTTPException(status_code=404, detail="Faction not found")
        return faction_db


@router.post("/", response_model=Faction)
def faction_create(data: FactionCreate):
    """
    CREATE a new faction
    """    
    with Session(engine) as session:
        faction = Faction.model_validate(data)
        session.add(faction)
        session.commit()
        session.refresh(faction)
        return faction

